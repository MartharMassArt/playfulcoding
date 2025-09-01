-- Update RLS policy to allow viewing all submissions
-- The application will handle filtering for approved submissions

DROP POLICY IF EXISTS "Anyone can view approved submissions" ON submissions;

CREATE POLICY "Anyone can view submissions" ON submissions
  FOR SELECT USING (true);

-- Keep existing insert policy
-- "Anyone can create submissions" already exists from first migration