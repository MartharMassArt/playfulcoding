-- Create submissions table for student project submissions
CREATE TABLE IF NOT EXISTS submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_name TEXT NOT NULL,
  project_id TEXT NOT NULL CHECK (project_id IN ('week-1-2', 'week-3-4', 'week-5-6', 'week-7-9', 'week-10-12', 'week-13-14')),
  week TEXT CHECK (week IS NULL OR week IN ('Week 1', 'Week 2')),
  submission_url TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_submissions_project_id ON submissions(project_id);
CREATE INDEX idx_submissions_created_at ON submissions(created_at DESC);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_submissions_updated_at 
  BEFORE UPDATE ON submissions 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to view submissions
CREATE POLICY "Anyone can view submissions" ON submissions
  FOR SELECT USING (true);

-- Create policy to allow anyone to insert submissions
CREATE POLICY "Anyone can create submissions" ON submissions
  FOR INSERT WITH CHECK (true);

-- Add comment to table
COMMENT ON TABLE submissions IS 'Stores all student project submissions for the Playful Coding course';
COMMENT ON COLUMN submissions.project_id IS 'Project identifier matching week ranges (e.g., week-1-2, week-3-4)';
COMMENT ON COLUMN submissions.week IS 'Optional specific week within a project period (Week 1 or Week 2)';
COMMENT ON COLUMN submissions.submission_url IS 'External URL to student work (CodePen, p5js.org, GitHub, etc.)';