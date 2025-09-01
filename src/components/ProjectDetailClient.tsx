'use client';

import { useEffect } from 'react';

interface ProjectDetailClientProps {
  projectId: string;
  children: React.ReactNode;
}

export default function ProjectDetailClient({ projectId, children }: ProjectDetailClientProps) {
  useEffect(() => {
    // Add click handlers for submit buttons
    const handleSubmitClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-submit-button]')) {
        e.preventDefault();
        const button = target.closest('[data-submit-button]') as HTMLElement;
        const week = button.dataset.week || '';
        
        // Dispatch event to open modal
        const event = new CustomEvent('openSubmitModal', { 
          detail: { projectId, week } 
        });
        window.dispatchEvent(event);
      }
    };

    document.addEventListener('click', handleSubmitClick);
    return () => document.removeEventListener('click', handleSubmitClick);
  }, [projectId]);

  return <>{children}</>;
}

export function SubmitButton({ projectId, week }: { projectId: string; week?: string }) {
  return (
    <button
      data-submit-button
      data-week={week}
      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all mt-3"
    >
      Submit Your Work
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </button>
  );
}