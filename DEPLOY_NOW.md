# 🚀 Quick Deploy to Vercel - 5 Minutes

**Status**: Ready to Deploy Now  
**Vercel CLI**: ✅ Installed  
**Environment File**: ✅ Created with secrets  
**Deployment Script**: ✅ Ready to run  

---

## 📋 What You Need

You have two generated secrets ready to use:

```
🔐 Webhook Secret:
569a6110dab40f3de4708e0411a324d0ba3caa2ddd87ed088b78d05de7bb5e13

🔑 ISR Revalidation Secret:
816c791a01c82303cdad8f87920823345af970d924a022003a0260d70c91d374
```

These are already in `.env.staging.local` ✅

---

## 🎯 One Command Deployment

```bash
cd /home/somesh/Codework/insurance-website-ui
./deploy-vercel-staging.sh
```

**That's it!** The script will:
- ✅ Check prerequisites
- ✅ Verify Vercel login
- ✅ Link project to Vercel (if needed)
- ✅ Build locally to verify
- ✅ Deploy to Vercel
- ✅ Show you the staging URL
- ✅ Verify site is accessible

---

## ⚡ What Happens

**Automatic**:
1. ✅ Vercel builds your Next.js app
2. ✅ Uploads to Vercel infrastructure
3. ✅ Generates URL like: `https://insurance-website-staging.vercel.app`
4. ✅ Site goes live immediately

**Takes about**: 3-5 minutes

---

## 🔧 Customization Needed Later

After deployment, you'll need to update:

1. **In `.env.staging.local`** (before re-deploying):
   ```bash
   NEXT_PUBLIC_STRAPI_URL=https://your-actual-strapi-url.com
   STRAPI_TOKEN=your_actual_api_token
   ```

2. **In Strapi Admin** (after deployment):
   - Create webhook pointing to your staging URL
   - Add the webhook secret header
   - Enable all events

---

## 📊 Files Created

- ✅ `.env.staging.local` - Environment with generated secrets
- ✅ `deploy-vercel-staging.sh` - One-command deployment script
- ✅ `vercel.json` - Vercel configuration
- ✅ `VERCEL_STAGING_DEPLOYMENT.md` - Detailed guide

---

## 🚀 Ready to Deploy?

Run this:

```bash
./deploy-vercel-staging.sh
```

**Expected output** (in ~5 minutes):
```
✅ DEPLOYMENT COMPLETE

Staging URL: https://insurance-website-staging.vercel.app

🔐 Webhook Secret: 569a6110dab40f3de4708e0411a324d0ba3caa2ddd87ed088b78d05de7bb5e13
🔑 ISR Revalidation Secret: 816c791a01c82303cdad8f87920823345af970d924a022003a0260d70c91d374

Next Steps:
1. Update .env.staging.local with your actual Strapi details
2. Configure webhook in Strapi (Settings > Webhooks > Create)
3. Run integration tests (STAGING_INTEGRATION_TESTING.md)
```

---

## 💡 If Issues

**Problem**: Vercel not authenticated
```bash
vercel login
```

**Problem**: Build fails
```bash
npm run build
```

**Problem**: Project not linked
```bash
vercel link
```

---

## ✨ Then What?

After deployment:

1. **Quick Test** (2 min):
   ```bash
   curl https://your-staging-url.vercel.app
   ```

2. **Configure Strapi** (5 min):
   - Webhook URL: `https://your-staging-url.vercel.app/api/webhooks/strapi`
   - Secret header: Use value from deployment output

3. **Run Integration Tests** (65 min):
   - [STAGING_INTEGRATION_TESTING.md](STAGING_INTEGRATION_TESTING.md)
   - Full webhook verification
   - Cache invalidation tests
   - E2E content sync testing

---

**Go time!** 🚀

```bash
./deploy-vercel-staging.sh
```
