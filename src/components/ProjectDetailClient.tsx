'use client';

import { useEffect, useState } from 'react';

interface ProjectDetailClientProps {
  projectId: string;
  children: React.ReactNode;
}

export default function ProjectDetailClient({ projectId, children }: ProjectDetailClientProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

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

    // Handle scroll for back to top button
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    document.addEventListener('click', handleSubmitClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleSubmitClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [projectId]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {children}
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full p-4 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
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