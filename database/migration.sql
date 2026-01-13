-- Run this in your Supabase SQL Editor

-- 1. Drop the existing policy to remove any incorrect configuration
DROP POLICY IF EXISTS "Anyone can insert leads" ON leads;

-- 2. Re-create the policy to ensure it correctly allows inserts
CREATE POLICY "Anyone can insert leads" ON leads
  FOR INSERT 
  TO public
  WITH CHECK (true);

-- 3. Verify RLS is enabled
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
