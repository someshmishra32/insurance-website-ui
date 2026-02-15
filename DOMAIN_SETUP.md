# Domain Setup Guide: Vercel + GoDaddy

This guide explains how to point your GoDaddy domain (`lifecovernow.in`) to your Vercel project.

## Step 1: Add the Domain in Vercel

1.  Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Select your project (**insurance-website-ui**).
3.  Go to **Settings** > **Domains**.
4.  Type `lifecovernow.in` in the input field and click **Add**.
5.  If prompted, select the option to add the domain without a redirect (or redirect from `www` to non-`www` as per your preference).

## Step 2: Configure DNS in GoDaddy

Vercel will provide you with the necessary DNS records. Usually, these are:

### Option A: Using A Record (Recommended for Apex Domain)
1.  Log in to your [GoDaddy Control Panel](https://dcc.godaddy.com/manage/portfolio).
2.  Find `lifecovernow.in` and click on **DNS**.
3.  **Edit the 'A' record**:
    *   **Name**: `@`
    *   **Value**: `76.76.21.21` (Vercel's Anycast IP)
    *   **TTL**: `Default` or `600`
4.  **Edit the 'CNAME' record** (for `www`):
    *   **Name**: `www`
    *   **Value**: `cname.vercel-dns.com`
    *   **TTL**: `Default` or `600`

### Option B: Using Vercel Nameservers (Easier Management)
If you want Vercel to handle all DNS:
1.  In GoDaddy DNS settings, find the **Nameservers** section.
2.  Click **Change Nameservers**.
3.  Choose **I'll use my own nameservers**.
4.  Enter the nameservers provided by Vercel (e.g., `ns1.vercel-dns.com`, `ns2.vercel-dns.com`).

## Step 3: Wait for Propagation

DNS changes can take anywhere from a few minutes to 48 hours to propagate globally. You can check the status in the Vercel Domains settings. Once verified, Vercel will automatically generate an SSL certificate for your domain.

## Step 4: Verification

Once the "Valid Configuration" message appears in Vercel:
1.  Visit `https://lifecovernow.in` to confirm your site is live.
2.  Ensure any internal links are working as expected.
