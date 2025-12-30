-- Enable RLS policies for anonymous lead submissions and analytics tracking
-- These tables need to accept data from unauthenticated website visitors

-- Drop existing policies if any
DROP POLICY IF EXISTS "Allow anonymous lead inserts" ON public.leads;
DROP POLICY IF EXISTS "Allow anonymous page view inserts" ON public.page_views;
DROP POLICY IF EXISTS "Allow anonymous session inserts" ON public.sessions;
DROP POLICY IF EXISTS "Allow anonymous conversion event inserts" ON public.conversion_events;

-- Leads table: Allow anyone to insert (lead capture form)
CREATE POLICY "Allow anonymous lead inserts"
ON public.leads
FOR INSERT
TO anon
WITH CHECK (true);

-- Allow service role to read/update leads (for admin dashboard later)
CREATE POLICY "Allow service role full access to leads"
ON public.leads
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Page views: Allow anyone to insert (analytics tracking)
CREATE POLICY "Allow anonymous page view inserts"
ON public.page_views
FOR INSERT
TO anon
WITH CHECK (true);

-- Sessions: Allow anyone to insert and read their own session
CREATE POLICY "Allow anonymous session inserts"
ON public.sessions
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow users to read their own session"
ON public.sessions
FOR SELECT
TO anon
USING (true);

-- Conversion events: Allow anyone to insert (conversion tracking)
CREATE POLICY "Allow anonymous conversion event inserts"
ON public.conversion_events
FOR INSERT
TO anon
WITH CHECK (true);

-- Allow service role full access to all analytics tables
CREATE POLICY "Allow service role full access to page_views"
ON public.page_views
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow service role full access to sessions"
ON public.sessions
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow service role full access to conversion_events"
ON public.conversion_events
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);
