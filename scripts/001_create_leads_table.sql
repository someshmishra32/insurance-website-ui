-- Create leads table for storing lead capture data
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now() not null,
  
  -- Contact information
  name text not null,
  email text not null,
  phone text not null,
  
  -- Insurance preferences
  insurance_type text not null check (insurance_type in ('term_life', 'health', 'not_sure')),
  current_coverage text,
  specific_needs text,
  
  -- Metadata
  source_page text not null,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  
  -- Status tracking
  status text default 'new' check (status in ('new', 'contacted', 'qualified', 'converted', 'lost')),
  notes text,
  
  -- Indexes for common queries
  constraint leads_email_key unique (email)
);

-- Enable Row Level Security
alter table public.leads enable row level security;

-- Public can insert (lead submission)
create policy "Anyone can submit a lead"
  on public.leads for insert
  with check (true);

-- Only authenticated users can read/update (for future admin dashboard)
create policy "Authenticated users can view all leads"
  on public.leads for select
  using (auth.role() = 'authenticated');

create policy "Authenticated users can update leads"
  on public.leads for update
  using (auth.role() = 'authenticated');

-- Create indexes for performance
create index leads_created_at_idx on public.leads(created_at desc);
create index leads_status_idx on public.leads(status);
create index leads_insurance_type_idx on public.leads(insurance_type);
