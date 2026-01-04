# 🚀 Staging Deployment Guide

**Phase**: 4 - Staging Deployment  
**Status**: Ready to Deploy  
**Date**: January 4, 2026  
**Target**: Staging Environment  

---

## 📋 Pre-Deployment Checklist

Before deploying to staging, ensure:

- ✅ Phase 3d implementation complete (webhook receiver & ISR revalidation)
- ✅ Build verification passed (0 errors, 24 pages compiled)
- ✅ All code committed to git
- ✅ Environment variables template created (`.env.staging`)
- ✅ Staging infrastructure ready (domain, SSL, database)

---

## 🎯 Staging Environment Requirements

### Infrastructure

- **Frontend Hosting**: Vercel, Netlify, AWS, or custom server
- **CMS Hosting**: Strapi instance with PostgreSQL
- **Database**: Supabase PostgreSQL for analytics
- **Domain**: `staging.insurance-website.com` (or equivalent)
- **SSL**: HTTPS enabled
- **Uptime**: SLA not required (development/testing environment)

### Minimum Resources

| Component | Requirement |
|-----------|-------------|
| Frontend CPU | 1 vCPU (shared OK) |
| Frontend RAM | 512 MB |
| Strapi CPU | 1 vCPU |
| Strapi RAM | 1-2 GB |
| Database | 10 GB PostgreSQL |
| Bandwidth | 10-50 GB/month |

### Estimated Monthly Cost

| Service | Staging Cost | Notes |
|---------|-------------|-------|
| Frontend Hosting | $20-50 | Vercel/Netlify free tier OK |
| Strapi Hosting | $30-100 | Self-managed or PaaS |
| PostgreSQL | $15-50 | Supabase or AWS RDS |
| Domain | $10-15 | Annual |
| **Total** | **$75-215** | Estimate only |

---

## 📝 Step 1: Environment Configuration

### 1.1 Create Staging Environment File

Copy the template and fill in actual values:

```bash
cp .env.staging .env.staging.local
```

Then edit `.env.staging.local` with actual values:

```env
# Update these with actual staging values
NEXT_PUBLIC_STRAPI_URL=https://staging-cms.example.com
STRAPI_TOKEN=your_actual_staging_api_token
STRAPI_WEBHOOK_SECRET=your_actual_webhook_secret
ISR_REVALIDATE_SECRET=your_actual_revalidate_secret
NEXT_PUBLIC_SUPABASE_URL=https://your-staging-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_staging_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_staging_service_role_key
```

### 1.2 Generate Secure Secrets

```bash
# Generate webhook secret
WEBHOOK_SECRET=$(openssl rand -hex 32)
echo "STRAPI_WEBHOOK_SECRET=$WEBHOOK_SECRET"

# Generate ISR revalidation secret
REVALIDATE_SECRET=$(openssl rand -hex 32)
echo "ISR_REVALIDATE_SECRET=$REVALIDATE_SECRET"
```

**Save these secrets securely** (password manager, CI/CD secrets, etc.)

### 1.3 Store Secrets in CI/CD

If using GitHub Actions, Vercel, or similar:

```bash
# Example: GitHub Actions
# Settings → Secrets and variables → Actions

NEXT_PUBLIC_STRAPI_URL
STRAPI_TOKEN
STRAPI_WEBHOOK_SECRET
ISR_REVALIDATE_SECRET
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
```

---

## 🔧 Step 2: Strapi Configuration

### 2.1 Set Up Strapi Webhooks

1. **Log in to Strapi Admin Panel**
   ```
   https://staging-cms.example.com/admin
   ```

2. **Navigate to Settings → Webhooks**
   ```
   Left sidebar → Settings → Webhooks
   ```

3. **Create New Webhook**
   - **Name**: `Next.js ISR Revalidation`
   - **URL**: `https://staging.insurance-website.com/api/webhooks/strapi`
   - **Events**: Select all relevant events:
     - Entry publish
     - Entry unpublish
     - Entry create
     - Entry update
     - Entry delete
   - **Headers**: Add signature
     - **Key**: `x-strapi-webhook-signature`
     - **Value**: `${STRAPI_WEBHOOK_SECRET}`

4. **Test Webhook**
   - Click "Test webhook"
   - Should receive 200 OK response
   - Check Next.js logs for webhook receipt

### 2.2 Verify Webhook Configuration

```bash
# Test endpoint exists
curl -X GET https://staging.insurance-website.com/api/webhooks/strapi

# Expected response:
# {"status":"ok","message":"Webhook receiver is running",...}
```

### 2.3 Create API Token

1. **Settings → API Tokens**
2. **Create New Token**
   - **Name**: `Next.js Staging Frontend`
   - **Type**: `Read-only` (or `Full access` if needed)
   - **Expiration**: 90 days
3. **Copy token** → Store in `.env.staging.local`

---

## 📦 Step 3: Database Setup

### 3.1 Supabase Configuration

1. **Create Supabase Project** (if not exists)
   - Visit: https://supabase.com
   - Create project with name `insurance-staging`
   - Wait for initialization (~2 minutes)

2. **Get Connection Credentials**
   - Project Settings → API
   - Copy `NEXT_PUBLIC_SUPABASE_URL`
   - Copy `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Copy `SUPABASE_SERVICE_ROLE_KEY`

3. **Initialize Database Schema**

   ```bash
   # Download & run database schema
   export SUPABASE_URL="your_staging_url"
   export SUPABASE_SERVICE_ROLE_KEY="your_key"
   
   # Run migration scripts (if applicable)
   # psql -h db.supabase.co -U postgres -d postgres < scripts/001_create_leads_table.sql
   # psql -h db.supabase.co -U postgres -d postgres < scripts/002_create_analytics_tables.sql
   # psql -h db.supabase.co -U postgres -d postgres < scripts/003_add_rls_policies.sql
   ```

### 3.2 Verify Database Connection

```bash
# Test connection
NEXT_PUBLIC_SUPABASE_URL=your_url \
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key \
node -e "
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
supabase.from('leads').select('count').then(console.log);
"
```

---

## 🏗️ Step 4: Build & Deployment

### 4.1 Build for Staging

```bash
# Navigate to project
cd /home/somesh/Codework/insurance-website-ui

# Install dependencies
npm install

# Build with staging environment
NEXT_PUBLIC_ENVIRONMENT=staging npm run build

# Verify build
npm run build 2>&1 | grep -E "✓|✗|error"
```

**Expected output**:
```
✓ Compiled successfully
✓ Generated 24 static pages
✓ All API routes ready
✗ 0 errors
```

### 4.2 Deploy to Staging (Vercel Example)

```bash
# Install Vercel CLI
npm install -g vercel

# Log in to Vercel
vercel login

# Deploy to staging
vercel deploy --prod --env-file=.env.staging.local

# Get staging URL
# Example: https://insurance-website-staging.vercel.app
```

### 4.3 Deploy to Staging (Self-Hosted Example)

```bash
# Build Docker image
docker build -t insurance-website-staging:latest .

# Tag image
docker tag insurance-website-staging:latest \
  your-registry/insurance-website-staging:latest

# Push to registry
docker push your-registry/insurance-website-staging:latest

# Deploy (example: Docker Compose)
docker-compose -f docker-compose.staging.yml up -d
```

### 4.4 Verify Deployment

```bash
# Check if frontend is accessible
curl -I https://staging.insurance-website.com

# Expected: 200 OK

# Check if API endpoint is working
curl -X GET https://staging.insurance-website.com/api/webhooks/strapi

# Expected: 200 OK with webhook status
```

---

## 🧪 Step 5: Integration Testing

### 5.1 Test Webhook Integration

```bash
# 1. Check webhook is reachable
curl -X GET https://staging.insurance-website.com/api/webhooks/strapi

# 2. Test with valid signature
PAYLOAD='{"event":"entry.publish","model":"blog","createdAt":"2026-01-04T00:00:00Z","entry":{"id":1,"slug":"test","title":"Test Post","language":"en"}}'
SIGNATURE=$(echo -n "$PAYLOAD" | openssl dgst -sha256 -hmac "$STRAPI_WEBHOOK_SECRET" | sed 's/^.* //')

curl -X POST https://staging.insurance-website.com/api/webhooks/strapi \
  -H "Content-Type: application/json" \
  -H "x-strapi-webhook-signature: $SIGNATURE" \
  -d "$PAYLOAD"

# Expected: 200 OK
```

### 5.2 Test Content Sync

**In Strapi Admin**:

1. Create test blog post
   - Title: "Staging Test Post"
   - Content: "This is a test"
   - Publish: Now

2. Check staging website
   - Visit: https://staging.insurance-website.com/blog
   - Verify new post appears within 30 seconds

3. Edit the post in Strapi
   - Change title to "Updated Test Post"
   - Save and publish

4. Check staging website again
   - Refresh page
   - Verify updated title appears

### 5.3 Test Cache Revalidation

```bash
# Test ISR revalidation endpoint
curl -X POST https://staging.insurance-website.com/api/revalidate \
  -H "Content-Type: application/json" \
  -H "x-revalidate-secret: $ISR_REVALIDATE_SECRET" \
  -d '{
    "paths": ["/blog"],
    "tags": ["blog:list"]
  }'

# Expected: 200 OK with revalidation count
```

### 5.4 Performance Testing

```bash
# Test response time
time curl -s https://staging.insurance-website.com | head -20

# Expected: <500ms response time

# Test with load
ab -n 100 -c 10 https://staging.insurance-website.com/

# Expected: >50 requests/sec
```

---

## 📊 Step 6: Monitoring & Logging

### 6.1 Enable Logging

Check deployment logs for any issues:

**Vercel**:
```bash
vercel logs --follow
```

**Docker**:
```bash
docker logs -f insurance-website-staging
```

**Application Logs**:
```bash
# Access logs from Next.js
tail -f /var/log/next-app.log
```

### 6.2 Monitor Webhook Events

```bash
# Check webhook logs in Strapi
# Admin → Settings → Webhooks → Event Log

# Or query database
SELECT * FROM strapi_webhooks_log 
WHERE created_at > NOW() - INTERVAL '1 hour' 
ORDER BY created_at DESC;
```

### 6.3 Monitor Cache Revalidation

```bash
# Check revalidation logs
grep "ISR-REVALIDATE" /var/log/next-app.log

# Expected entries:
# [ISR-REVALIDATE] Revalidation requested
# [ISR-REVALIDATE] Revalidated path: /blog
# [ISR-REVALIDATE] Completed
```

---

## ✅ Step 7: Verification Checklist

Before moving to production, verify:

### Frontend Accessibility
- ✅ All pages load without errors
- ✅ Navigation works correctly
- ✅ Forms submit successfully
- ✅ API endpoints respond

### Webhook Integration
- ✅ Webhook URL is accessible
- ✅ Signature verification works
- ✅ Events are processed correctly
- ✅ Cache revalidation occurs
- ✅ Logs show no errors

### Content Sync
- ✅ Published content appears on frontend
- ✅ Updated content reflects within 30 seconds
- ✅ Deleted content is removed
- ✅ All languages display correctly

### Performance
- ✅ Page load time <1 second
- ✅ API response time <200ms
- ✅ No console errors
- ✅ No memory leaks

### Security
- ✅ HTTPS enabled
- ✅ Webhook signature verified
- ✅ API tokens configured
- ✅ No secrets in logs

---

## 🚨 Troubleshooting

### Issue: Webhook Not Triggering

**Symptoms**: Content published in Strapi doesn't appear on frontend

**Solutions**:
1. Verify webhook URL is accessible from internet
2. Check Strapi webhook logs: `Settings → Webhooks → Event Log`
3. Verify signature matches: Check `STRAPI_WEBHOOK_SECRET` in both places
4. Check Next.js logs for errors
5. Verify environment variables are loaded

### Issue: Cache Not Revalidating

**Symptoms**: Changes don't appear on frontend even after refresh

**Solutions**:
1. Check ISR is enabled in `next.config.mjs`
2. Verify cache tags are correct in webhook handler
3. Check for TypeScript errors in build
4. Test revalidation endpoint manually
5. Check server logs for revalidation errors

### Issue: Database Connection Failed

**Symptoms**: "Unable to connect to database" errors

**Solutions**:
1. Verify Supabase URL and keys
2. Check firewall allows connection
3. Verify database exists in Supabase
4. Test connection manually
5. Check for network connectivity

### Issue: 502 Bad Gateway

**Symptoms**: Frontend returns 502 error

**Solutions**:
1. Check if server is running: `docker ps` or `pm2 list`
2. Restart service: `docker restart` or `pm2 restart`
3. Check disk space: `df -h`
4. Check memory: `free -m`
5. Review error logs

---

## 🔐 Security Considerations

### Before Going Live

1. **Rotate Secrets**
   - Generate new webhook secret before production
   - Generate new API tokens
   - Do NOT reuse staging secrets

2. **Enable HTTPS**
   - Verify SSL certificate is valid
   - Check certificate expiration
   - Enable HSTS if applicable

3. **Restrict Access**
   - Limit Strapi API token permissions
   - Use IP whitelisting if available
   - Enable rate limiting on webhook endpoint

4. **Backup Data**
   - Backup Strapi database before deployment
   - Backup Next.js configuration
   - Test restore procedure

---

## 📞 Support & Documentation

**Useful Resources**:
- [Next.js ISR Documentation](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration)
- [Strapi Webhooks Documentation](https://docs.strapi.io/dev-docs/configurations/webhooks)
- [Supabase Documentation](https://supabase.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)

**Contact Information**:
- Technical Issues: Check logs in `/var/log/next-app.log`
- Strapi Issues: Check Strapi admin panel
- Database Issues: Check Supabase dashboard

---

## 🎯 Next Steps

After staging deployment verification:

1. ✅ Document any issues found
2. ✅ Fix bugs or compatibility issues
3. ✅ Run full integration test suite
4. ✅ Get stakeholder approval
5. ✅ Proceed to Phase 5: Production Deployment

---

## 📋 Deployment Checklist

```
Pre-Deployment:
  ☐ All code committed to git
  ☐ Build passes locally (0 errors)
  ☐ Environment variables configured
  ☐ Strapi webhooks configured
  ☐ Database schema initialized

During Deployment:
  ☐ Build created successfully
  ☐ Assets uploaded
  ☐ Services started
  ☐ Health checks passing
  ☐ Logs show no errors

Post-Deployment:
  ☐ Frontend accessible
  ☐ All pages load
  ☐ API endpoints working
  ☐ Webhook integration verified
  ☐ Content sync tested
  ☐ Performance acceptable

Verification Complete:
  ☐ All tests passed
  ☐ No critical issues
  ☐ Documentation complete
  ☐ Ready for production
```

---

**Estimated Time**: 2-4 hours (depending on infrastructure)  
**Next Phase**: Phase 5 - Production Deployment  
**Expected Completion**: January 5, 2026  

