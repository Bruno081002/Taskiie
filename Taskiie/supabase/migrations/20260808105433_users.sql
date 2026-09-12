create table public.users (
	id uuid primary key default gen_random_uuid(),
	email text unique not null,
	passwordHash text not null,
	created_at timestamp not null default now()
);


enable row level security;
