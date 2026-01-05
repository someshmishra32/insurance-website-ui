# Quick Start: Deploy to Vercel with Supabase

Follow these steps to deploy your InsureWise project:

## Step 1: Set Up Supabase (5 minutes)

1. Go to https://supabase.com and sign up
2. Create a new project named "insurewise-db"
3. Choose region closest to you (e.g., ap-south-1 for India)
4. Save your database password!
5. Wait for provisioning (~2 minutes)

## Step 2: Create Database Tables

1. In Supabase, go to SQL Editor
2. Run this SQL script:

```sql
-- Create leads table
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  insurance_type TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create analytics table
CREATE TABLE analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type TEXT NOT NULL,
  page_path TEXT,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;

-- Allow public insert
CREATE POLICY "Allow public insert" ON leads FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow public insert" ON analytics FOR INSERT TO anon WITH CHECK (true);
```

## Step 3: Get Supabase Credentials

In Supabase Project Settings → API, copy:
- Project URL
- anon/public key
- service_role key (keep secret!)

## Step 4: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/insurance-website-ui.git
git push -u origin main
```

## Step 5: Deploy to Vercel

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your repository
5. Add environment variables (see below)
6. Click "Deploy"

## Environment Variables for Vercel

Add these in Vercel dashboard:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_ENVIRONMENT=production
NEXT_PUBLIC_APP_URL=https://your-project.vercel.app
```

Generate secrets:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Add these too:
```
STRAPI_WEBHOOK_SECRET=generated_secret_1
ISR_REVALIDATE_SECRET=generated_secret_2
```

## Step 6: Test Your Deployment

1. Visit your Vercel URL
2. Submit a test form
3. Check Supabase Table Editor for the entry
4. Test all pages and features

## Done! 🎉

Your site is now live at: https://your-project.vercel.app

For detailed instructions, see VERCEL_DEPLOYMENT_GUIDE.md
