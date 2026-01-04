#!/bin/bash

# ============================================
# Vercel Staging Deployment Script
# ============================================
# One-command deployment to Vercel
# Usage: ./deploy-vercel-staging.sh

set -e

echo "╔════════════════════════════════════════════╗"
echo "║   🚀 Vercel Staging Deployment            ║"
echo "╚════════════════════════════════════════════╝"
echo ""

# Check prerequisites
echo "📋 Checking prerequisites..."

if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found"
    echo "   Install with: npm install -g vercel"
    exit 1
fi

if ! command -v git &> /dev/null; then
    echo "❌ Git not found"
    exit 1
fi

if [ ! -f .env.staging.local ]; then
    echo "❌ .env.staging.local not found"
    echo "   Run: cp .env.staging .env.staging.local"
    exit 1
fi

echo "✅ Prerequisites check passed"
echo ""

# Step 1: Verify authentication
echo "🔐 Verifying Vercel authentication..."
if ! vercel whoami > /dev/null 2>&1; then
    echo "❌ Not authenticated with Vercel"
    echo "   Run: vercel login"
    exit 1
fi
echo "✅ Authenticated"
echo ""

# Step 2: Check project link
echo "🔗 Checking project link..."
if [ ! -d .vercel ]; then
    echo "⚠️  Project not linked to Vercel"
    echo "   Running: vercel link"
    vercel link
fi
echo "✅ Project linked"
echo ""

# Step 3: Build check (local)
echo "🏗️  Checking build locally..."
if ! npm run build > /dev/null 2>&1; then
    echo "❌ Build failed locally"
    echo "   Run: npm run build"
    exit 1
fi
echo "✅ Build successful"
echo ""

# Step 4: Deploy
echo "📤 Deploying to Vercel..."
echo "   Using environment: .env.staging.local"
echo ""

DEPLOY_OUTPUT=$(vercel deploy --env-file=.env.staging.local 2>&1)
STAGING_URL=$(echo "$DEPLOY_OUTPUT" | grep "✅  Production:" | sed 's/.*https:/https:/' | awk '{print $1}')

if [ -z "$STAGING_URL" ]; then
    # Try alternative grep pattern
    STAGING_URL=$(echo "$DEPLOY_OUTPUT" | grep "https://" | head -n 1 | awk '{print $NF}')
fi

if [ -z "$STAGING_URL" ]; then
    echo "⚠️  Could not parse staging URL from output"
    echo "$DEPLOY_OUTPUT"
    exit 1
fi

echo ""
echo "✅ Deployment successful!"
echo ""

# Step 5: Verify deployment
echo "🧪 Verifying staging deployment..."
sleep 5  # Wait for deployment to be ready

if curl -s -I "$STAGING_URL" | grep -q "200\|404"; then
    echo "✅ Staging site is accessible"
else
    echo "⚠️  Could not verify staging site"
fi

# Step 6: Summary
echo ""
echo "╔════════════════════════════════════════════╗"
echo "║   ✅ DEPLOYMENT COMPLETE                   ║"
echo "╚════════════════════════════════════════════╝"
echo ""
echo "📊 Deployment Summary"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Staging URL: $STAGING_URL"
echo ""
echo "🔐 Webhook Secret:"
echo "   $(grep STRAPI_WEBHOOK_SECRET .env.staging.local | cut -d'=' -f2)"
echo ""
echo "🔑 ISR Revalidation Secret:"
echo "   $(grep ISR_REVALIDATE_SECRET .env.staging.local | cut -d'=' -f2)"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📋 Next Steps:"
echo ""
echo "1. Update .env.staging.local with your actual values:"
echo "   - NEXT_PUBLIC_STRAPI_URL → Your staging Strapi URL"
echo "   - STRAPI_TOKEN → Your Strapi API token"
echo ""
echo "2. Configure webhook in Strapi:"
echo "   - Go to Settings > Webhooks > Create"
echo "   - URL: $STAGING_URL/api/webhooks/strapi"
echo "   - Add header: X-Strapi-Webhook-Secret: $(grep STRAPI_WEBHOOK_SECRET .env.staging.local | cut -d'=' -f2)"
echo "   - Enable all events"
echo ""
echo "3. Run integration tests:"
echo "   - See: STAGING_INTEGRATION_TESTING.md"
echo "   - Time: 65 minutes"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🎉 Ready for testing!"
echo ""
