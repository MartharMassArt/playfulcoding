import Link from 'next/link';

const projects = [
  {
    id: 'week-1-2',
    weeks: '1-2',
    dates: 'Sept 3 & Sept 10',
    title: 'Animated Type + Icons',
    description: 'Create bouncing, spinning, color-changing icons',
    tools: ['HTML', 'CSS'],
    color: 'from-purple-400 to-pink-400',
    badgeColor: 'border-purple-300 bg-purple-50 text-purple-700',
    emoji: '✨',
  },
  {
    id: 'week-3-4',
    weeks: '3-4',
    dates: 'Sept 17 & Sept 24',
    title: 'Playful Type Lab',
    subtitle: 'Type Distortion Machine',
    description: 'Make letters stretch, morph, and respond',
    tools: ['HTML', 'CSS', 'p5.js'],
    color: 'from-pink-400 to-red-400',
    badgeColor: 'border-pink-300 bg-pink-50 text-pink-700',
    emoji: '🎨',
  },
  {
    id: 'week-5-6',
    weeks: '5-6',
    dates: 'Oct 1 & Oct 8',
    title: 'Pattern Party',
    subtitle: 'Generative Patterns',
    description: 'Generate dynamic patterns for branding & textures',
    tools: ['p5.js'],
    color: 'from-orange-400 to-yellow-400',
    badgeColor: 'border-orange-300 bg-orange-50 text-orange-700',
    emoji: '🔷',
  },
  {
    id: 'week-7-9',
    weeks: '7-9',
    dates: 'Oct 15, 22 & 29',
    title: 'Generative Branding & Animated Logos',
    description: 'Logos that move, evolve, and respond',
    tools: ['p5.js'],
    color: 'from-green-400 to-teal-400',
    badgeColor: 'border-green-300 bg-green-50 text-green-700',
    emoji: '🚀',
  },
  {
    id: 'week-10-12',
    weeks: '10-12',
    dates: 'Nov 5, 12 & 19',
    title: 'Playable Posters',
    subtitle: 'Interactive Experiments',
    description: 'Posters that react to mouse/keyboard',
    tools: ['p5.js'],
    color: 'from-blue-400 to-indigo-400',
    badgeColor: 'border-blue-300 bg-blue-50 text-blue-700',
    emoji: '🎮',
  },
  {
    id: 'week-13-14',
    weeks: '13-14',
    dates: 'Nov 26 & Dec 3',
    title: 'Final Integration & Showcase',
    description: 'Combine logos, patterns, and posters into a portfolio',
    tools: ['HTML', 'CSS', 'p5.js'],
    color: 'from-indigo-400 to-purple-400',
    badgeColor: 'border-indigo-300 bg-indigo-50 text-indigo-700',
    emoji: '🎉',
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-white/50 backdrop-blur-sm p-12 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-yellow-300/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-mono text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
              CDGD-222: Fall 2025
            </span>
            <span className="text-sm font-mono text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
              Wednesdays 9am-1pm
            </span>
            <span className="text-sm font-mono text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
              T629
            </span>
          </div>
          
          <h1 className="text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Playful Code
            </span>
          </h1>
          
          <div className="space-y-4 text-lg text-gray-700 max-w-3xl">
            <p className="text-2xl font-semibold text-gray-900">
              This is not a programming class.
            </p>
            <p className="text-xl">
              This is a design playground where code is just another design tool.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-4 rounded-xl">
                <p className="font-mono text-sm text-purple-700 mb-2">Think:</p>
                <p className="text-sm">
                  <span className="font-semibold">Photoshop Filters</span> → <span className="font-semibold">HTML & CSS</span><br/>
                  Make your own effects instead of just clicking &quot;blur&quot;
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-4 rounded-xl">
                <p className="font-mono text-sm text-pink-700 mb-2">Think:</p>
                <p className="text-sm">
                  <span className="font-semibold">Static logos</span> → <span className="font-semibold">Living brands</span><br/>
                  Logos that move, evolve and respond
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-4 rounded-xl">
                <p className="font-mono text-sm text-orange-700 mb-2">Think:</p>
                <p className="text-sm">
                  <span className="font-semibold">Posters on walls</span> → <span className="font-semibold">Interactive art</span><br/>
                  Dynamic compositions you can play with
                </p>
              </div>
            </div>
            
            <p className="mt-6 text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              By the end, you&apos;ll publish interactive websites, animated logos, and generative posters online.
              <br />
              <span className="text-gray-700">No prior coding experience required.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Overview */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Schedule Overview
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Click on any project to view details and submit your work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10 ${project.color}"></div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover-lift border border-gray-100 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`inline-block text-4xl mb-2 group-hover:animate-wiggle`}>
                      {project.emoji}
                    </span>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-mono px-2 py-1 rounded-full border-2 border-dashed ${project.badgeColor}`}>
                        Weeks {project.weeks}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 font-mono">{project.dates}</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-sm font-semibold text-gray-600 mb-2">
                    {project.subtitle}
                  </p>
                )}
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 flex items-center text-sm font-medium text-purple-600 group-hover:text-pink-600 transition-colors">
                  <span>View Project</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Course Info */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Course Objectives
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              Use code as a creative tool to make visuals that move, change, and respond
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              Play and experiment with ideas, shapes, type, and color through coding
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              Explore movement and interaction in your designs
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              Turn ideas into projects by testing, iterating, and refining
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              Build a portfolio of coded projects
            </li>
          </ul>
        </div>
        
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
            Learning Outcomes
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">1.</span>
              Create and style designs with code, including text, shapes, and layouts
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">2.</span>
              Make type, icons, and graphics move and respond to interactions
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">3.</span>
              Build dynamic, generative designs based on rules, randomness, or input
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">4.</span>
              Develop and refine ideas through experimentation
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">5.</span>
              Share your work online using designer-friendly platforms
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}