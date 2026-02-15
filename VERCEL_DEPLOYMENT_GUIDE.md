# Vercel Deployment Guide with Supabase PostgreSQL

This guide will walk you through deploying your Life Cover Now project to Vercel and setting up Supabase PostgreSQL database.

---

## Prerequisites

- [x] GitHub account
- [ ] Vercel account (free tier available)
- [ ] Supabase account (free tier available)
- [ ] Git installed on your machine

---

## Part 1: Set Up Supabase PostgreSQL Database

### Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Click **"Start your project"** or **"Sign In"**
3. Sign in with GitHub (recommended)
4. Click **"New Project"**
5. Fill in the details:
   - **Name**: `insurewise-db` (or your preferred name)
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose closest to your users (e.g., `ap-south-1` for India)
   - **Pricing Plan**: Free (includes 500MB database)
6. Click **"Create new project"**
7. Wait 2-3 minutes for database provisioning

### Step 2: Get Supabase Credentials

Once your project is ready:

1. Go to **Project Settings** (gear icon in sidebar)
2. Click **"API"** in the left menu
3. Copy these values (you'll need them later):
   ```
   Project URL: https://xxxxx.supabase.co
   anon/public key: eyJhbGc...
   service_role key: eyJhbGc... (keep this secret!)
   ```

### Step 3: Create Database Tables

1. Click **"SQL Editor"** in the left sidebar
2. Click **"New query"**
3. Copy and paste the following SQL:

```sql
-- Create leads table for contact form submissions
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  insurance_type TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create analytics table for tracking
CREATE TABLE IF NOT EXISTS analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type TEXT NOT NULL,
  page_path TEXT,
  user_agent TEXT,
  referrer TEXT,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create policy_checks table for policy health check submissions
CREATE TABLE IF NOT EXISTS policy_checks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT,
  policy_type TEXT NOT NULL,
  policy_details JSONB NOT NULL,
  analysis_results JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_analytics_created_at ON analytics(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_analytics_event_type ON analytics(event_type);
CREATE INDEX IF NOT EXISTS idx_policy_checks_created_at ON policy_checks(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE policy_checks ENABLE ROW LEVEL SECURITY;

-- Create policies for public insert (forms can submit)
CREATE POLICY "Allow public insert on leads" ON leads
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public insert on analytics" ON analytics
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public insert on policy_checks" ON policy_checks
  FOR INSERT TO anon
  WITH CHECK (true);

-- Create policies for authenticated read (admin dashboard)
CREATE POLICY "Allow authenticated read on leads" ON leads
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated read on analytics" ON analytics
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated read on policy_checks" ON policy_checks
  FOR SELECT TO authenticated
  USING (true);
```

4. Click **"Run"** to execute the SQL
5. You should see: **"Success. No rows returned"**

### Step 4: Verify Tables Created

1. Click **"Table Editor"** in the left sidebar
2. You should see 3 tables:
   - `leads`
   - `analytics`
   - `policy_checks`

---

## Part 2: Push Code to GitHub

### Step 1: Initialize Git Repository (if not already done)

```bash
# Navigate to your project directory
cd "c:\Users\ADMIN\OneDrive\Documents\Somesh Projects\InsuranceWeb\insurance-website-ui"

# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Life Cover Now production ready"
```

### Step 2: Create GitHub Repository

1. Go to [https://github.com/new](https://github.com/new)
2. Fill in:
   - **Repository name**: `insurance-website-ui`
   - **Description**: "Life Cover Now - Independent Insurance Advisor Platform"
   - **Visibility**: Private (recommended) or Public
3. Click **"Create repository"**
4. **DO NOT** initialize with README (you already have one)

### Step 3: Push to GitHub

```bash
# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/insurance-website-ui.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Part 3: Deploy to Vercel

### Step 1: Create Vercel Account

1. Go to [https://vercel.com/signup](https://vercel.com/signup)
2. Click **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account

### Step 2: Import Project

1. Click **"Add New..."** → **"Project"**
2. Find your `insurance-website-ui` repository
3. Click **"Import"**

### Step 3: Configure Project

1. **Framework Preset**: Next.js (auto-detected)
2. **Root Directory**: `./` (leave as is)
3. **Build Command**: `npm run build` (auto-filled)
4. **Output Directory**: `.next` (auto-filled)
5. **Install Command**: `npm install` (auto-filled)

### Step 4: Add Environment Variables

Click **"Environment Variables"** and add these:

#### Required Variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...

# Application Configuration
NEXT_PUBLIC_ENVIRONMENT=production
NEXT_PUBLIC_APP_URL=https://your-project.vercel.app

# Webhook Secrets (generate these)
STRAPI_WEBHOOK_SECRET=your-webhook-secret-here
ISR_REVALIDATE_SECRET=your-revalidate-secret-here
```

#### How to Generate Secrets:

**Option 1: Using Node.js (in terminal)**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

**Option 2: Using PowerShell**
```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 }))
```

**Option 3: Using OpenSSL (if installed)**
```bash
openssl rand -hex 32
```

### Step 5: Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes for deployment
3. You'll see a success screen with your live URL!

### Step 6: Update App URL

1. Copy your Vercel deployment URL (e.g., `https://insurance-website-ui.vercel.app`)
2. Go back to **"Settings"** → **"Environment Variables"**
3. Update `NEXT_PUBLIC_APP_URL` with your actual Vercel URL
4. Click **"Save"**
5. Go to **"Deployments"** tab
6. Click **"Redeploy"** on the latest deployment

---

## Part 4: Configure Custom Domain (Optional)

### Step 1: Add Domain in Vercel

1. Go to your project **"Settings"** → **"Domains"**
2. Enter your domain (e.g., `insurewise.com`)
3. Click **"Add"**

### Step 2: Update DNS Records

Vercel will show you DNS records to add. Typically:

**For root domain (insurewise.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: Wait for DNS Propagation

- Usually takes 5-60 minutes
- Vercel will automatically issue SSL certificate
- Your site will be live at your custom domain!

---

## Part 5: Update Supabase URL Allowlist

1. Go back to Supabase dashboard
2. Click **"Authentication"** → **"URL Configuration"**
3. Add your Vercel URL to **"Site URL"**:
   ```
   https://your-project.vercel.app
   ```
4. Add to **"Redirect URLs"**:
   ```
   https://your-project.vercel.app/**
   ```
5. Click **"Save"**

---

## Part 6: Test Your Deployment

### Test Checklist:

1. **Homepage loads**: Visit your Vercel URL
2. **Forms work**: Try the lead capture form
3. **Database connection**: Check Supabase table for new lead entry
4. **Navigation**: Test all menu links
5. **Blog pages**: Visit blog articles
6. **Tools work**: Test calculator, comparison, policy check
7. **Mobile responsive**: Test on mobile device
8. **SEO**: Check `/sitemap.xml` and `/robots.txt`

### Verify Database Connection:

1. Submit a test lead through your website
2. Go to Supabase **"Table Editor"** → **"leads"**
3. You should see your test entry!

---

## Part 7: Set Up Continuous Deployment

**Good news!** Vercel automatically sets up continuous deployment:

- Every push to `main` branch → Auto-deploys to production
- Every pull request → Creates preview deployment
- No additional configuration needed!

### Workflow:

```bash
# Make changes locally
git add .
git commit -m "Update: description of changes"
git push origin main

# Vercel automatically deploys in ~2 minutes!
```

---

## Troubleshooting

### Issue: Build fails on Vercel

**Solution**: Check build logs in Vercel dashboard
- Common fix: Ensure all environment variables are set
- Run `npm run build` locally first to catch errors

### Issue: Database connection fails

**Solution**: Verify environment variables
- Check `NEXT_PUBLIC_SUPABASE_URL` is correct
- Ensure `NEXT_PUBLIC_SUPABASE_ANON_KEY` is the anon key (not service role)
- Verify URL allowlist in Supabase includes your Vercel domain

### Issue: Forms not submitting

**Solution**: Check Row Level Security policies
- Ensure RLS policies allow public insert
- Check browser console for errors
- Verify API routes are working

### Issue: 404 on dynamic routes

**Solution**: Check Next.js configuration
- Ensure `output: 'standalone'` is NOT set in `next.config.mjs`
- Verify all pages are in `app` directory

---

## Monitoring & Analytics

### Vercel Analytics (Built-in)

1. Go to your project → **"Analytics"** tab
2. View real-time metrics:
   - Page views
   - Unique visitors
   - Top pages
   - Performance metrics

### Supabase Database Monitoring

1. Go to Supabase → **"Database"** → **"Roles"**
2. Monitor:
   - Active connections
   - Database size
   - Query performance

---

## Cost Breakdown

### Free Tier Limits:

**Vercel Free:**
- 100 GB bandwidth/month
- Unlimited deployments
- Automatic SSL
- **Cost**: $0/month

**Supabase Free:**
- 500 MB database
- 1 GB file storage
- 2 GB bandwidth
- 50,000 monthly active users
- **Cost**: $0/month

### When to Upgrade:

- **Vercel Pro** ($20/month): More bandwidth, team features
- **Supabase Pro** ($25/month): 8 GB database, daily backups

---

## Security Best Practices

1. ✅ Never commit `.env` files to Git
2. ✅ Use environment variables for all secrets
3. ✅ Keep `service_role` key secret (server-side only)
4. ✅ Enable Row Level Security on all tables
5. ✅ Use HTTPS only (Vercel provides this automatically)
6. ✅ Regularly update dependencies
7. ✅ Monitor Supabase logs for suspicious activity

---

## Next Steps After Deployment

1. **Set up monitoring**: Configure error tracking (Sentry)
2. **Add analytics**: Google Analytics or Plausible
3. **Create backups**: Set up Supabase backup schedule
4. **Test thoroughly**: Run through all user flows
5. **Monitor performance**: Check Core Web Vitals
6. **Gather feedback**: Share with test users
7. **Plan updates**: Create roadmap for Phase 2 features

---

## Quick Reference Commands

```bash
# Local development
npm run dev

# Build locally
npm run build

# Deploy to Vercel (after git push)
git push origin main

# View logs
vercel logs

# Pull environment variables from Vercel
vercel env pull
```

---

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Supabase Docs**: https://supabase.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Discord**: https://vercel.com/discord
- **Supabase Discord**: https://discord.supabase.com

---

**Ready to Deploy!** 🚀

Follow the steps above and your Life Cover Now platform will be live in ~30 minutes!
