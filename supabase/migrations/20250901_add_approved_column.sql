-- Add approved column to submissions table
ALTER TABLE submissions 
ADD COLUMN approved BOOLEAN DEFAULT FALSE;

-- Add index for approved submissions queries
CREATE INDEX idx_submissions_approved ON submissions(approved, project_id, created_at);

-- Add comment
COMMENT ON COLUMN submissions.approved IS 'Whether the submission has been approved for public display';

-- Update RLS policy to only show approved submissions publicly
DROP POLICY IF EXISTS "Anyone can view submissions" ON submissions;

CREATE POLICY "Anyone can view approved submissions" ON submissions
  FOR SELECT USING (approved = true);

-- Keep the insert policy as is
-- CREATE POLICY "Anyone can create submissions" already exists