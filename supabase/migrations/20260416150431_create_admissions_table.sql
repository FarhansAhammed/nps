-- Admissions Table
CREATE TABLE IF NOT EXISTS public.admissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_name TEXT NOT NULL,
    dob DATE NOT NULL,
    father_name TEXT NOT NULL,
    father_contact TEXT NOT NULL,
    mother_name TEXT NOT NULL,
    mother_contact TEXT NOT NULL,
    parent_email TEXT,
    permanent_address TEXT NOT NULL,
    residential_address TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security for admissions
ALTER TABLE public.admissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert data (for the public admission form)
CREATE POLICY "Allow anonymous inserts" ON public.admissions
FOR INSERT TO anon
WITH CHECK (true);

-- Allow authenticated users (staff) to read the data
CREATE POLICY "Allow authenticated users to read" ON public.admissions
FOR SELECT TO authenticated
USING (true);


-- Contact Messages Table
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security for contact_messages
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts
CREATE POLICY "Allow anonymous inserts" ON public.contact_messages
FOR INSERT TO anon
WITH CHECK (true);

-- Allow authenticated users to read
CREATE POLICY "Allow authenticated users to read" ON public.contact_messages
FOR SELECT TO authenticated
USING (true);
