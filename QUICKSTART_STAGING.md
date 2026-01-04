# 🚀 Quick Start: Staging Deployment

**Date**: January 4, 2026  
**Status**: Ready for Deployment  
**Duration**: 15-30 minutes to launch  

---

## ⚡ 5-Minute Setup

### Step 1: Configure Environment (5 min)

```bash
# Navigate to project
cd /home/somesh/Codework/insurance-website-ui

# Create staging environment file
cp .env.staging .env.staging.local

# Edit with your values
nano .env.staging.local
```

**Required values to fill in**:
```env
NEXT_PUBLIC_STRAPI_URL=https://your-staging-cms.com
STRAPI_TOKEN=your_strapi_token
STRAPI_WEBHOOK_SECRET=$(openssl rand -hex 32)
ISR_REVALIDATE_SECRET=$(openssl rand -hex 32)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Step 2: Run Deployment Script (10 min)

```bash
cd /home/somesh/Codework/insurance-website-ui

# Make script executable (if not already)
chmod +x deploy-staging.sh

# Run deployment
./deploy-staging.sh
```

**What it does**:
- ✓ Checks prerequisites (Node.js, npm)
- ✓ Validates environment variables
- ✓ Installs dependencies
- ✓ Builds production bundle
- ✓ Generates deployment summary
- ✓ Shows post-deployment instructions

### Step 3: Deploy (10-20 min)

**Option A: Vercel (Easiest)**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel deploy --prod --env-file=.env.staging.local

# Your staging URL will be displayed
```

**Option B: Docker (Most Flexible)**
```bash
# Build image
docker build -t insurance-staging:latest .

# Run container
docker run -d \
  -p 3000:3000 \
  --env-file .env.staging.local \
  --name insurance-staging \
  insurance-staging:latest

# Check if running
curl http://localhost:3000
```

**Option C: Docker Compose (Full Stack)**
```bash
# Start all services
docker-compose -f docker-compose.staging.yml up -d

# Check status
docker-compose -f docker-compose.staging.yml ps

# View logs
docker-compose -f docker-compose.staging.yml logs -f frontend
```

---

## ✅ Verification (5 min)

### Health Checks

```bash
# Frontend health
curl -I https://your-staging-url.com

# Webhook endpoint
curl https://your-staging-url.com/api/webhooks/strapi

# Revalidation endpoint  
curl https://your-staging-url.com/api/revalidate
```

### Expected Responses

```json
// Webhook health
{
  "status": "ok",
  "message": "Webhook receiver is running"
}

// Revalidation health
{
  "status": "ok",
  "message": "ISR revalidation endpoint is running"
}
```

---

## 🔧 Configure Strapi Webhooks (5 min)

1. **Log in to Strapi**
   ```
   https://your-staging-cms.com/admin
   ```

2. **Create Webhook**
   - Settings → Webhooks → Create
   - **Name**: `Next.js ISR`
   - **URL**: `https://your-staging-url.com/api/webhooks/strapi`
   - **Events**: All entry events
   - **Headers**:
     - Key: `x-strapi-webhook-signature`
     - Value: `your_webhook_secret`

3. **Test**
   - Click "Test webhook"
   - Should get 200 OK

---

## 🧪 Quick Test

```bash
# Set your secrets
WEBHOOK_SECRET="your_webhook_secret"
STAGING_URL="your_staging_url.com"

# Create test payload
PAYLOAD='{"event":"entry.publish","model":"blog","entry":{"id":1,"slug":"test"}}'

# Generate signature
SIGNATURE=$(echo -n "$PAYLOAD" | openssl dgst -sha256 -hmac "$WEBHOOK_SECRET" | sed 's/^.* //')

# Send webhook
curl -X POST https://$STAGING_URL/api/webhooks/strapi \
  -H "Content-Type: application/json" \
  -H "x-strapi-webhook-signature: $SIGNATURE" \
  -d "$PAYLOAD"

# Expected: 200 OK
```

---

## 📊 Deployment Options Comparison

| Method | Setup Time | Difficulty | Cost | Scalability |
|--------|-----------|-----------|------|-------------|
| **Vercel** | 5 min | Very Easy | Free-$50/mo | Excellent |
| **Docker** | 10 min | Medium | Variable | Good |
| **Docker Compose** | 15 min | Medium | Variable | Good |
| **AWS** | 30 min | Hard | $20-100/mo | Excellent |

---

## 🐛 Troubleshooting

### Build fails?
```bash
# Check Node version (need 18+)
node -v

# Clean and rebuild
rm -rf node_modules .next
npm install
./deploy-staging.sh
```

### Environment variables not loading?
```bash
# Verify file exists
ls -la .env.staging.local

# Check variables are set
source .env.staging.local
echo $NEXT_PUBLIC_STRAPI_URL
```

### Webhook not triggering?
```bash
# Check URL is accessible from internet
curl -I https://your-staging-url.com/api/webhooks/strapi

# Verify signature matches
# Check STRAPI_WEBHOOK_SECRET in .env.staging.local

# Review logs
docker logs insurance-staging
# or
tail -f /var/log/next-app.log
```

---

## 📋 Post-Deployment Checklist

- [ ] Frontend loads without errors
- [ ] All pages accessible
- [ ] API endpoints responding
- [ ] Webhook endpoint working
- [ ] Strapi webhooks configured
- [ ] Test content sync works
- [ ] Cache revalidation tested
- [ ] Logs show no errors

---

## 🎯 What's Next?

After successful staging deployment:

1. **Test webhook integration** (10 min)
   - Publish content in Strapi
   - Verify it appears on frontend
   - Check cache invalidation

2. **Performance testing** (10 min)
   - Load test the endpoint
   - Monitor response times
   - Check memory/CPU usage

3. **Security review** (15 min)
   - Verify HTTPS enabled
   - Check headers secure
   - Test signature verification

4. **Approval** (as needed)
   - Get stakeholder sign-off
   - Document any issues
   - Plan fixes if needed

5. **Production deployment** (following Phase 5 guide)

---

## 📞 Need Help?

**Documentation**:
- Full guide: [STAGING_DEPLOYMENT_GUIDE.md](STAGING_DEPLOYMENT_GUIDE.md)
- Testing guide: [PHASE_3D_TESTING_GUIDE.md](PHASE_3D_TESTING_GUIDE.md)
- Architecture: [PHASE_3D_ARCHITECTURE.md](PHASE_3D_ARCHITECTURE.md)

**Common Issues**:
- See STAGING_DEPLOYMENT_GUIDE.md section: "Troubleshooting"
- See PHASE_3D_TESTING_GUIDE.md section: "Troubleshooting"

**Support Resources**:
- Next.js Docs: https://nextjs.org/docs
- Strapi Docs: https://docs.strapi.io
- Vercel Docs: https://vercel.com/docs

---

## ⏱️ Timeline

- **Now**: Run `./deploy-staging.sh` (10 min)
- **Then**: Choose deployment method (5 min)
- **Deploy**: Upload to staging (10-20 min depending on method)
- **Configure**: Set up Strapi webhooks (5 min)
- **Test**: Verify integration (10 min)
- **Ready**: All systems go! 🎉

**Total time: ~45 minutes to production-ready staging environment**

---

**Ready to deploy?** Start with Step 1! 🚀

