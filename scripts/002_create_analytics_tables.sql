-- Create page_views table for tracking page visits
create table if not exists public.page_views (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now() not null,
  
  -- Page information
  page_path text not null,
  page_title text,
  referrer text,
  
  -- User information
  session_id text not null,
  user_agent text,
  
  -- UTM parameters
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text,
  
  -- Device info
  device_type text,
  browser text,
  
  -- Time on page (updated on page exit)
  time_on_page_seconds integer
);

-- Create conversion_events table for tracking key actions
create table if not exists public.conversion_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now() not null,
  
  -- Event details
  event_type text not null check (event_type in (
    'form_started',
    'form_step_completed',
    'form_submitted',
    'cta_clicked',
    'comparison_viewed',
    'blog_read',
    'whatsapp_clicked',
    'phone_clicked'
  )),
  event_label text,
  event_value numeric,
  
  -- Page context
  page_path text not null,
  
  -- User identification
  session_id text not null,
  lead_id uuid references public.leads(id),
  
  -- Additional metadata
  metadata jsonb
);

-- Enable Row Level Security
alter table public.page_views enable row level security;
alter table public.conversion_events enable row level security;

-- Public can insert analytics data
create policy "Anyone can track page views"
  on public.page_views for insert
  with check (true);

create policy "Anyone can track conversion events"
  on public.conversion_events for insert
  with check (true);

-- Only authenticated users can read analytics
create policy "Authenticated users can view page views"
  on public.page_views for select
  using (auth.role() = 'authenticated');

create policy "Authenticated users can view conversion events"
  on public.conversion_events for select
  using (auth.role() = 'authenticated');

-- Create indexes for analytics queries
create index page_views_created_at_idx on public.page_views(created_at desc);
create index page_views_session_id_idx on public.page_views(session_id);
create index page_views_page_path_idx on public.page_views(page_path);

create index conversion_events_created_at_idx on public.conversion_events(created_at desc);
create index conversion_events_session_id_idx on public.conversion_events(session_id);
create index conversion_events_event_type_idx on public.conversion_events(event_type);
create index conversion_events_lead_id_idx on public.conversion_events(lead_id);
