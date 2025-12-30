-- Database schema for insurance website leads
-- This file contains the SQL schema for the leads table

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  insurance_type VARCHAR(100) NOT NULL,
  current_coverage TEXT,
  specific_needs TEXT,
  source_page TEXT NOT NULL,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  ip_address INET,
  user_agent TEXT,
  status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT unique_email UNIQUE (email),
  CONSTRAINT valid_phone CHECK (phone ~ '^[6-9][0-9]{9}$'),
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_phone ON leads(phone);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_insurance_type ON leads(insurance_type);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- RLS (Row Level Security) policies
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Policy to allow inserts (anyone can submit a lead)
CREATE POLICY "Anyone can insert leads" ON leads
  FOR INSERT WITH CHECK (true);

-- Policy to allow reading leads (authenticated users only)
CREATE POLICY "Authenticated users can read leads" ON leads
  FOR SELECT USING (auth.role() = 'authenticated');

-- Policy to allow updating leads (authenticated users only)
CREATE POLICY "Authenticated users can update leads" ON leads
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Comments for documentation
COMMENT ON TABLE leads IS 'Table to store insurance lead generation form submissions';
COMMENT ON COLUMN leads.name IS 'Full name of the lead';
COMMENT ON COLUMN leads.email IS 'Email address (unique)';
COMMENT ON COLUMN leads.phone IS 'Indian mobile number (10 digits, starts with 6-9)';
COMMENT ON COLUMN leads.insurance_type IS 'Type of insurance interested in';
COMMENT ON COLUMN leads.current_coverage IS 'Current insurance coverage details';
COMMENT ON COLUMN leads.specific_needs IS 'Specific questions or concerns';
COMMENT ON COLUMN leads.source_page IS 'Page from which the form was submitted';
COMMENT ON COLUMN leads.utm_source IS 'UTM source parameter';
COMMENT ON COLUMN leads.utm_medium IS 'UTM medium parameter';
COMMENT ON COLUMN leads.utm_campaign IS 'UTM campaign parameter';
COMMENT ON COLUMN leads.ip_address IS 'IP address of the submitter';
COMMENT ON COLUMN leads.user_agent IS 'User agent string of the browser';
COMMENT ON COLUMN leads.status IS 'Current status of the lead';
