# Supabase Setup Instructions

## Running the Migration

To set up the database for the Playful Coding project, you need to run the migration in your Supabase project.

### Option 1: Using Supabase Dashboard

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Copy the contents of `migrations/20250901_create_submissions_table.sql`
4. Paste and run the SQL in the editor

### Option 2: Using Supabase CLI

If you have the Supabase CLI installed:

```bash
# Link your project (if not already linked)
supabase link --project-ref your-project-ref

# Run the migration
supabase db push
```

## Database Schema

The project uses a single `submissions` table with the following structure:

- `id`: UUID (auto-generated)
- `student_name`: Text (required)
- `project_id`: Text (required, must be one of: week-1-2, week-3-4, week-5-6, week-7-9, week-10-12, week-13-14)
- `week`: Text (optional, for specific week within project)
- `submission_url`: Text (required)
- `title`: Text (required)
- `description`: Text (optional)
- `created_at`: Timestamp with timezone
- `updated_at`: Timestamp with timezone

## Row Level Security

The migration sets up RLS policies to:
- Allow anyone to view submissions
- Allow anyone to create submissions

## Environment Variables

Make sure your `.env.local` file contains:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```