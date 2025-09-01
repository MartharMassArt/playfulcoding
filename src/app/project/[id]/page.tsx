import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData } from '@/lib/projectData';
import ProjectDetailClient, { SubmitButton } from '@/components/ProjectDetailClient';

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectsData[params.id];

  if (!project) {
    notFound();
  }

  return (
    <ProjectDetailClient projectId={params.id}>
      <div className="space-y-12">
        {/* Project Header */}
        <section className="relative overflow-hidden rounded-3xl bg-white/50 backdrop-blur-sm p-12 shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br opacity-20 rounded-full blur-3xl ${project.color}"></div>
          
          <Link 
            href="/" 
            className="inline-flex items-center text-purple-600 hover:text-pink-600 font-medium mb-6 transition-colors group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Schedule
          </Link>

          <div className="relative z-10">
            <div className="flex items-start gap-6 mb-6">
              <span className="text-6xl animate-pulse-scale">{project.emoji}</span>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-sm font-mono px-3 py-1 rounded-full border-2 border-dashed ${project.badgeColor}`}>
                    Weeks {project.weeks}
                  </span>
                  <span className="text-sm font-mono text-gray-600">
                    {project.dates}
                  </span>
                </div>
                <h1 className="text-5xl font-bold mb-2">
                  <span className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                    {project.title}
                  </span>
                </h1>
                {project.subtitle && (
                  <h2 className="text-2xl font-semibold text-gray-700">
                    {project.subtitle}
                  </h2>
                )}
              </div>
            </div>

            <p className="text-xl text-gray-700 mb-4">
              {project.description}
            </p>

            <p className="text-lg text-gray-600 italic mb-6">
              <span className="font-semibold">Focus:</span> {project.focus}
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-semibold text-gray-700">Tools:</span>
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-sm px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full font-mono"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Weekly Content */}
        {project.weeklyContent.map((week, weekIndex) => (
          <section key={weekIndex} className="space-y-8">
            <div className="bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100/30">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-xl border-2 border-dashed ${project.badgeColor} flex items-center justify-center font-bold text-xl`}>
                  {weekIndex + 1}
                </div>
                <div>
                  <h3 className="text-3xl font-bold">
                    <span className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                      {week.title}
                    </span>
                  </h3>
                  <p className="text-gray-600 font-mono text-sm">
                    {week.week} • {week.date}
                  </p>
                </div>
              </div>

              {/* Activities */}
              <div className="space-y-6">
                {week.activities.demo && (
                  <div className="bg-white/60 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-purple-600 mb-3 flex items-center">
                      <span className="mr-2">🎯</span> Demo
                    </h4>
                    <ul className="space-y-2">
                      {week.activities.demo.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-pink-500 mr-2 mt-1">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {week.activities.prompts && (
                  <div className="bg-white/60 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-pink-600 mb-3 flex items-center">
                      <span className="mr-2">✏️</span> Design Prompts
                    </h4>
                    <ul className="space-y-2">
                      {week.activities.prompts.map((prompt, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-orange-500 mr-2 mt-1">{i + 1}.</span>
                          <span className="text-gray-700">{prompt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {week.activities.lab && (
                  <div className="bg-white/60 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-orange-600 mb-3 flex items-center">
                      <span className="mr-2">🧪</span> Lab
                    </h4>
                    <p className="text-gray-700">{week.activities.lab}</p>
                  </div>
                )}

                {week.activities.homework && (
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-purple-700 mb-3 flex items-center">
                          <span className="mr-2">📚</span> Homework
                        </h4>
                        <p className="text-gray-700 font-medium">{week.activities.homework}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <SubmitButton projectId={params.id} week={week.week} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Resources Grid */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {week.inspiration && week.inspiration.length > 0 && (
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <span className="mr-2">💡</span> Inspiration
                    </h4>
                    <ul className="space-y-2">
                      {week.inspiration.map((item, i) => (
                        <li key={i}>
                          {item.url ? (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-600 hover:text-pink-600 underline-offset-2 hover:underline transition-colors"
                            >
                              {item.title} →
                            </a>
                          ) : (
                            <span className="text-gray-700">{item.title}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {week.resources && week.resources.length > 0 && (
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <span className="mr-2">📖</span> Resources
                    </h4>
                    <ul className="space-y-2">
                      {week.resources.map((item, i) => (
                        <li key={i}>
                          {item.url ? (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-600 hover:text-pink-600 underline-offset-2 hover:underline transition-colors"
                            >
                              {item.title} →
                            </a>
                          ) : (
                            <span className="text-gray-700">{item.title}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* Student Gallery Placeholder */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              Student Gallery
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder cards */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover-lift">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <span className="text-4xl opacity-50">🎨</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Student Project {i}</h3>
                  <p className="text-sm text-gray-600">Coming soon...</p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-500 mt-8">
            Student submissions will appear here once the submission system is active.
          </p>
        </section>

        {/* Navigation */}
        <section className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="flex items-center text-purple-600 hover:text-pink-600 font-medium transition-colors group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Projects
          </Link>
          
          <div className="flex gap-4">
            {/* Previous/Next project navigation could go here */}
          </div>
        </section>
      </div>
    </ProjectDetailClient>
  );
}