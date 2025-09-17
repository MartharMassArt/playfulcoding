'use client';

import { useState } from 'react';
import ProjectEmbed from '@/components/ProjectEmbed';

interface Submission {
  id?: string;
  student_name: string;
  submission_url: string;
  title: string;
  description: string;
  week?: string | null;
  created_at?: string;
}

interface StudentGalleryProps {
  submissions: Submission[];
  weeklyContent: Array<{ week: string }>;
  projectColor: string;
}

export default function StudentGallery({ submissions, weeklyContent, projectColor }: StudentGalleryProps) {
  // Get unique weeks that have submissions
  const weeksWithSubmissions = weeklyContent
    .map(w => w.week)
    .filter(week => submissions.some(s => s.week === week));

  // Set initial active tab to first week with submissions, or first week if none have submissions
  const [activeWeekTab, setActiveWeekTab] = useState<string>(
    weeksWithSubmissions[0] || weeklyContent[0]?.week || ''
  );

  // Filter submissions based on selected week
  const filteredSubmissions = submissions.filter(s => s.week === activeWeekTab);

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">
        <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
          Student Gallery
        </span>
      </h2>

      {/* Week Tabs for Gallery */}
      {weeklyContent.length > 0 && (
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white/60 backdrop-blur-sm rounded-full p-1 shadow-lg">
            {weeklyContent.map((week) => {
              const hasSubmissions = submissions.some(s => s.week === week.week);
              if (!hasSubmissions) return null;

              return (
                <button
                  key={week.week}
                  onClick={() => setActiveWeekTab(week.week)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    activeWeekTab === week.week
                      ? `bg-gradient-to-r ${projectColor} text-white shadow-md`
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
                >
                  {week.week}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {filteredSubmissions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredSubmissions.map((submission) => (
            <ProjectEmbed
              key={submission.id}
              url={submission.submission_url}
              title={submission.title}
              studentName={submission.student_name}
              description={submission.description}
              week={submission.week || undefined}
              createdAt={submission.created_at!}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white/60 backdrop-blur-sm rounded-2xl">
          <span className="text-4xl mb-4 block">🎨</span>
          <p className="text-gray-600 text-lg">
            No submissions for {activeWeekTab} yet.
          </p>
          <p className="text-gray-500 mt-2">Be the first to submit your work!</p>
        </div>
      )}
    </section>
  );
}