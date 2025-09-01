# Playful Coding - Project Documentation

## Project Overview
This is a Next.js classroom syllabus website for the course "CDGD-222: Playful Code" - a design course where students learn to use code as a creative tool for making interactive visuals, animated logos, and generative posters.

## Tech Stack
- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (for student submissions and project storage)
- **Development**: Node.js environment

## Development Commands
- **Start/Restart Server**: Run `./restart-server.sh` - This script kills any existing processes on port 3065, cleans up tmux sessions, and starts the dev server in a tmux session with logging
- **Development Server**: `npm run dev` (runs on port 3065)
- **Linting**: `npm run lint` (if configured)
- **Type Checking**: `npm run typecheck` (if configured)

## Core Features

### 1. Homepage
- Lists all course projects from "Playful Coding.md"
- Projects include:
  - Weeks 1-2: Animated Type + Icons (HTML & CSS)
  - Weeks 3-4: Playful Type Lab - Type Distortion Machine
  - Weeks 5-6: Pattern Party - Generative Patterns (p5.js)
  - Weeks 7-9: Generative Branding & Animated Logos
  - Weeks 10-12: Playable Posters - Interactive Experiments
  - Weeks 13-14: Final Integration & Showcase
- Playful, engaging design that reflects the creative nature of the course

### 2. Project Detail Pages
Each project has its own detail page featuring:
- Project description and requirements
- Student submission form for external links (CodePen, p5js.org, etc.)
- Gallery view of all student submissions displayed as embedded iframes
- Interactive showcase allowing visitors to view and interact with student work

### 3. Supabase Integration
- **Student Submissions Table**: Stores student names, project IDs, submission URLs, timestamps
- **Authentication**: Optional student authentication for managing their own submissions
- **Real-time Updates**: Live updates when new submissions are added

## Design Philosophy
The site should embody "playful coding" through:
- Dynamic, animated UI elements
- Bold, experimental typography
- Interactive hover states and transitions
- Vibrant color schemes
- Generative or animated backgrounds
- Fun micro-interactions throughout the interface

## File Structure
```
/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage listing all projects
│   ├── project/[id]/      # Dynamic project detail pages
│   └── api/               # API routes for Supabase interactions
├── components/            # React components
│   ├── ProjectCard.tsx    # Individual project cards for homepage
│   ├── SubmissionForm.tsx # Form for student submissions
│   └── ProjectGallery.tsx # Gallery of student work with iframes
├── lib/                   # Utility functions
│   └── supabase.ts       # Supabase client configuration
├── public/               # Static assets
├── styles/               # Global styles
├── restart-server.sh     # Development server restart script
└── Playful Coding.md     # Course syllabus and project descriptions
```

## Environment Variables
Required in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Database Schema (Supabase)
```sql
-- Submissions table (single table for all student submissions)
submissions (
  id uuid primary key default uuid_generate_v4(),
  student_name text not null,
  project_id text not null, -- e.g., "week-1-2", "week-3-4"
  week text, -- Optional: specific week within project ("Week 1" or "Week 2" only)
  submission_url text not null, -- CodePen, p5js.org, GitHub link
  title text not null,
  description text not null, -- Required description of the project
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
)

-- Index for faster queries
CREATE INDEX idx_submissions_project_id ON submissions(project_id);
CREATE INDEX idx_submissions_created_at ON submissions(created_at DESC);
```

## Security Considerations
- Validate all submission URLs to ensure they're from allowed domains (codepen.io, editor.p5js.org, etc.)
- Implement iframe sandboxing for security
- Rate limit submissions to prevent spam
- Sanitize all user inputs before display

## Styling Guidelines
- Use Tailwind CSS utility classes for styling
- Implement custom animations using Tailwind's animation utilities or CSS keyframes
- Ensure responsive design for mobile, tablet, and desktop
- Use playful fonts (consider Google Fonts or custom web fonts)
- Color palette should be vibrant and energetic

## Accessibility
- Ensure proper semantic HTML
- Include alt text for any images
- Maintain proper color contrast ratios
- Make all interactive elements keyboard accessible
- Include ARIA labels where appropriate

## Future Enhancements
- Student authentication and personal dashboards
- Voting/liking system for student projects
- Comments and feedback on submissions
- Export portfolio feature for students
- Progress tracking through the course
- Integration with learning management systems