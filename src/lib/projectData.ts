export interface ProjectDetails {
  id: string;
  weeks: string;
  dates: string;
  title: string;
  subtitle?: string;
  description: string;
  tools: string[];
  color: string;
  badgeColor: string;
  emoji: string;
  focus: string;
  weeklyContent: {
    week: string;
    date: string;
    title: string;
    activities: {
      demo?: (string | { text: string; url: string })[];
      prompts?: string[];
      lab?: string;
      homework?: string;
    };
    inspiration?: { title: string; url?: string }[];
    resources?: { title: string; url?: string }[];
  }[];
}

export const projectsData: Record<string, ProjectDetails> = {
  'week-1-2': {
    id: 'week-1-2',
    weeks: '1-2',
    dates: 'Sept 3 & Sept 10',
    title: 'Animated Type + Icons',
    subtitle: 'HTML & CSS Motion Basics',
    description: 'Create bouncing, spinning, color-changing icons',
    tools: ['HTML', 'CSS', 'CodePen'],
    color: 'from-purple-400 to-pink-400',
    badgeColor: 'border-purple-300 bg-purple-50 text-purple-700',
    emoji: '✨',
    focus: 'Playful experimentation, conceptual exploration of motion and interactivity',
    weeklyContent: [
      {
        week: 'Week 1',
        date: 'Sept 3',
        title: 'First Animated Type + Icons',
        activities: {
          demo: [
            { text: '👾Intro Slides', url: 'https://docs.google.com/presentation/d/1AHdgQFQDDVJD2IRQ8lMqoN0IHOpjGHBOqS2qe48T0R8/edit?usp=sharing' },
            { text: 'Animate text with a simple keyframe', url: 'https://codepen.io/pen?template=poRqwGL' },
            { text: 'Write your first HTML tags and CSS rules', url: 'https://codepen.io/pen?template=dyNzJYg' }
          ],
          prompts: [
            'Animate a breakfast word + icon (☕ Coffee, 🥯 Bagel, 🍳 Egg)',
            'Animate an animal + word (🐙 Octopus, 🐕 Woof, 🐝 Buzz)',
            'Animate a word you say all the time ("Cool," "Yup," "OMG")'
          ],
          lab: 'Play with font, color, and transform properties (rotate, scale, opacity)',
          homework: 'Create and post 1 playful animated type or icon to the class site'
        },
        inspiration: [
          { title: 'Animista – instant animations to remix', url: 'https://animista.net/' },
          { title: 'Moving Letters – expressive type in motion', url: 'https://tobiasahlin.com/moving-letters/' },
          { title: 'Patatap – playful sounds + visuals', url: 'https://patatap.com/' }
        ],
        resources: [
          { title: '👾Intro Slides', url: 'https://docs.google.com/presentation/d/1AHdgQFQDDVJD2IRQ8lMqoN0IHOpjGHBOqS2qe48T0R8/edit?usp=sharing' },
          { title: 'HTML Basics – MDN', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML' },
          { title: 'CSS First Steps – MDN', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps' },
          { title: 'CSS Keyframes Guide – MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes' },
          { title: 'Best CSS Properties to Animate – CSS-Tricks', url: 'https://css-tricks.com/almanac/properties/a/animation/' }
        ]
      },
      {
        week: 'Week 2',
        date: 'Sept 10',
        title: 'Animated Type + Icons for UX/UI',
        activities: {
          demo: [
            { text: '👾 Week 2 Slides', url: 'https://docs.google.com/presentation/d/1obNsRtT6ChDqXUprZQ0Mb5VowYyBE195aHHtSRTvbkg/edit?usp=sharing' },
            { text: 'Create a loading spinner', url: 'https://codepen.io/marthar/pen/pvjBqrP' },
            { text: 'Create a hover effect on a button', url: 'https://codepen.io/marthar/pen/empobyy' },
            { text: 'Create a logo reveal', url: 'https://codepen.io/marthar/pen/dPYLwdr' }
          ],
          prompts: [
            'Loading Experience: Animate a loader (dots, bar, spinner) that communicates a mood — calm, chaotic, or playful',
            'Success Animation: Design a checkmark, star, or other visual cue that celebrates success',
            'Human Error/Feedback: Animate an error or alert state in a way that feels friendly and approachable'
          ],
          lab: 'Experiment with transitions, easing, and interactivity (hover, focus)',
          homework: 'Create and post 3 polished micro-animations — one for each category (Loading, Success, Error/Feedback)'
        },
        inspiration: [
          { title: 'LottieFiles Animated Icons', url: 'https://lottiefiles.com/free-animations/animated-icons?utm_source=chatgpt.com' },
          { title: 'Dropbox Brand Motion', url: 'https://dropbox.design/' },
          { title: 'Easings.net – try different motion feels', url: 'https://easings.net/' }
        ],
        resources: [
          { title: '👾 Week 2 Slides', url: 'https://docs.google.com/presentation/d/1obNsRtT6ChDqXUprZQ0Mb5VowYyBE195aHHtSRTvbkg/edit?usp=sharing' },
          { title: 'CSS Transitions –MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition' },
          { title: 'CSS Transform –MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform' },
          { title: 'CSS Animations Cheat Sheet ', url: 'https://www.justinaguilar.com/animations/' },
          { title: 'Animista', url: 'https://animista.net/' }
        ]
      }
    ]
  },
  'week-3-4': {
    id: 'week-3-4',
    weeks: '3-4',
    dates: 'Sept 17 & Sept 24',
    title: 'Playful Type Lab',
    subtitle: 'Type Distortion Machine',
    description: 'Make letters stretch, morph, and respond',
    tools: ['HTML', 'CSS', 'p5.js'],
    color: 'from-pink-400 to-red-400',
    badgeColor: 'border-pink-300 bg-pink-50 text-pink-700',
    emoji: '🫧',
    focus: 'Exploring the expressive potential of letterforms through code',
    weeklyContent: [
      {
        week: 'Week 3',
        date: 'Sept 17',
        title: 'Letterform Playground',
        activities: {
          demo: [
            { text: '👾 Week 3 Slides', url: 'https://docs.google.com/presentation/d/1pGxA8plCqmpWzpLOYOs5mSqMvzNK2CF3qkVjK0CtoEc/edit?usp=sharing' },
            { text: 'Introduce text() in p5.js', url: 'https://editor.p5js.org/merettig/sketches/sr6F6x_f3' },
            { text: 'Use transformations (scale, rotate, translate) and effects (sin, noise, random)', url: 'https://editor.p5js.org/merettig/sketches/sr6F6x_f3' },
            { text: 'Apply colors, outlines, or effects to letters', url: 'https://editor.p5js.org/merettig/full/sr6F6x_f3' }
          ],

          prompts: [
            'Make a letter look wavy (sinusoidal distortions)',
            'Make a letter look spikey (sharp points, angles)',
            'Make a letter pixelated (block/grid patterns)',
            'Make a letter multicolored (gradient fills or color cycling)',
            'Create a hybrid letterform — part readable, part abstract'
          ],
          lab: 'Start from provided template (text() + sliders) and explore distortion ideas, use Claude for help this week',
          homework: 'Post 5 unique letterform experiments to the class site'
        },
        inspiration: [
          { title: 'Generative Typography Experiments', url: 'https://www.generativetypography.com/' },
          { title: 'Studio Feixen Playgrounds', url: 'https://www.studiofeixen.ch/' },
          { title: 'RRR GGBBB – Interactive typography', url: 'https://www.rrrgggbbb.com/' }
        ],
        resources: [
          { title: 'p5.js Typography Reference', url: 'https://p5js.org/reference/#group-Typography' },
          { title: 'Using Noise for Organic Shapes', url: 'https://p5js.org/reference/#/p5/noise' },
          { title: 'Transformations in p5.js', url: 'https://p5js.org/learn/transform.html' }
        ]
      },
      {
        week: 'Week 4',
        date: 'Sept 24',
        title: 'Type Export + Reuse',
        activities: {
          demo: [
            { text: '👾 Week 4 Slides', url: 'https://docs.google.com/presentation/d/1BGTV5DfXgg7A05tjh93nNXKCaxDAJnbFt0nQorgUoKQ/edit?usp=sharing' },
            { text: 'Add sliders (createSlider) to control distortion', url: 'https://editor.p5js.org/merettig/sketches/t-10bdgaU' },
            { text: 'Export as PNG', url: 'https://editor.p5js.org/merettig/sketches/dnKnacaha' },
            { text: 'Export as SVG', url: 'https://editor.p5js.org/merettig/sketches/T_BTyTyF4' },
            { text: 'P5.js Reference', url: 'https://p5js.org/reference/' }
            
        
          ],
          prompts: [
            'Build a mini "type machine" where sliders control distortion style',
            'Explore different ways to manipulate the type',
            'Use a new font',
            'Imagine you were creating assets for a brand'
          ],
          lab: 'Start from Letter Playground code and add sliders and export buttons',
          homework: 'Post your final Type Distortion Machine'
        },
        inspiration: [
          { title: 'p5.js SVG Export Library', url: 'https://github.com/zenozeng/p5.js-svg' },
          { title: 'Variable Fonts Playground', url: 'https://v-fonts.com/' },
          { title: 'CreativeApplications.Net typography', url: 'https://www.creativeapplications.net/category/typography/' }
        ],
        resources: [
          { title: 'Save Canvas as Image', url: 'https://p5js.org/reference/#/p5/saveCanvas' },
          { title: 'Save Graphics to SVG', url: 'https://github.com/zenozeng/p5.js-svg' },
          { title: 'Sliders and Input in p5.js', url: 'https://p5js.org/reference/#/p5/createSlider' }
        ]
      }
    ]
  },
  'week-5-6': {
    id: 'week-5-6',
    weeks: '5-6',
    dates: 'Oct 1 & Oct 8',
    title: 'Pattern Party',
    subtitle: 'Generative Patterns',
    description: 'Generate dynamic patterns for branding & textures',
    tools: ['p5.js'],
    color: 'from-orange-400 to-yellow-400',
    badgeColor: 'border-orange-300 bg-orange-50 text-orange-700',
    emoji: '🪩',
    focus: 'Creative exploration, iteration, rhythm, and composition using code',
    weeklyContent: [
      {
        week: 'Week 5',
        date: 'Oct 1',
        title: 'Brand Pattern Explorations',
        activities: {
          demo: [
            { text: '👾 Week 5 Slides', url: 'https://docs.google.com/presentation/d/1kYoY9ZkmoEl9F63gFoOv2cIIxg0QjRSjOqysV0sDBiw/edit?usp=sharing' },
            { text: 'Load a png', url: 'https://editor.p5js.org/merettig/sketches/N2WTNzhRo' },
            { text: 'Load an svg', url: 'https://editor.p5js.org/merettig/sketches/QZsRZbV8g' },
            { text: 'Loops', url: 'https://editor.p5js.org/merettig/sketches/9hzEanWiM' },
            { text: 'Pallettes', url: 'https://editor.p5js.org/merettig/sketches/v9ombfaGp' }
          ],
          prompts: [
            'Make something symmetrical',
            'Make something monotone',
            'Layer a logo with shapes', 
            'Play with drastic sizes'
          ],
          homework: 'Post 4 final pattern exports with short captions explaining the design approach'
        },
        inspiration: [
          { title: 'Patternity', url: 'https://patternity.org' },
          { title: 'Studio Feixen', url: 'https://studiofeixen.ch' },
          { title: 'Supergraphics Archive' }
        ],
        resources: [
          { title: 'p5.js Shapes Reference', url: 'https://p5js.org/reference/#group-Shape' },
          { title: 'p5.js Color Reference', url: 'https://p5js.org/reference/#group-Color' },
          { title: 'Save Canvas', url: 'https://p5js.org/reference/#/p5/saveCanvas' }
        ]
      },
      {
        week: 'Week 6',
        date: 'Oct 8',
        title: 'Build Your Own Pattern Generator',
        activities: {
          demo: [
            { text: '👾 Week 6 Slides', url: 'https://docs.google.com/presentation/d/1nUSwPReAnJfWvpOS93WBM8kjkSL9oJwiMupEA-5vgjY/edit?usp=sharing' },
            { text: '*NEW*Create a tile preview for seamless repeats', url: 'https://editor.p5js.org/merettig/sketches/dnKnacaha' },
            'Reuse these',
            { text: 'Add sliders (createSlider) to control distortion', url: 'https://editor.p5js.org/merettig/sketches/t-10bdgaU' },
            { text: 'Export as PNG', url: 'https://editor.p5js.org/merettig/sketches/dnKnacaha' },
            { text: 'Export as SVG', url: 'https://editor.p5js.org/merettig/sketches/T_BTyTyF4' },
            { text: 'Pallettes', url: 'https://editor.p5js.org/merettig/sketches/v9ombfaGp' }
          ],
          prompts: [
            'Extend one Week 5 exploration into a pattern machine with at least 3 controls',
            'Add a live tile preview that demonstrates repeatability',
            'Export a set of tiles or full patterns as PNGs'
          ],
          lab: 'Build your own generative design tool for patterns',
          homework: 'Post a short video or GIF of your generator in action + 3 exported patterns'
        },
        inspiration: [
          { title: 'Manifold: Generative Pattern Systems', url: 'https://manifold.design' },
          { title: 'Studio Moross', url: 'https://studiomoross.com' }
        ],
        resources: [
          { title: 'Sliders and Input', url: 'https://p5js.org/reference/#/p5/createSlider' },
          { title: 'p5.js SVG Export Library', url: 'https://github.com/zenozeng/p5.js-svg' }
        ]
      }
    ]
  },
  'week-7-9': {
    id: 'week-7-9',
    weeks: '7-9',
    dates: 'Oct 15, 22 & 29',
    title: 'Living Logos',
    subtitle: 'Generative Branding & Animated Identities',
    description: 'Logos that move, evolve, and respond',
    tools: ['p5.js'],
    color: 'from-green-400 to-teal-400',
    badgeColor: 'border-green-300 bg-green-50 text-green-700',
    emoji: '🌱',
    focus: 'Motion, variation, and real-time adaptability by pulling from live data sources',
    weeklyContent: [
      {
        week: 'Week 7',
        date: 'Oct 15',
        title: 'Playful Logo Variations',
        activities: {
          demo: [
            'Import or draw a simple logo (SVG or shapes)',
            'Animate with randomness (random(), noise()) and time (frameCount)',
            'Use motion, color, and transformation to express brand qualities'
          ],
          prompts: [
            'Gradient Shift – Animate between two or more brand colors',
            'Pixelated – Break the logo into a grid or pixel blocks',
            'Scaling Pulse – Have the logo expand and contract rhythmically',
            'Wave Motion – Bend or ripple the logo along a sine wave',
            'Repeating Echo – Duplicate the logo with delay',
            'Pop-in/Pop-out – Animate parts appearing and disappearing',
            'Motion Trail – Leave fading trails as the logo moves',
            'Organic Morph – Curve, stretch, or melt the logo edges',
            'Blur + Sharpen – Transition between clarity and fuzziness'
          ],
          lab: 'Explore at least 3 different variations using chosen prompts',
          homework: 'Post at least 5 animated logo variations with short titles and concepts'
        },
        inspiration: [
          { title: 'DIA Studio Motion Identities', url: 'https://dia.tv/' },
          { title: 'Moving Brands', url: 'https://movingbrands.com/work' },
          { title: 'Animated Logos Collection', url: 'https://www.lottiefiles.com/featured' }
        ],
        resources: [
          { title: 'p5.js Animation Basics', url: 'https://p5js.org/learn/animation.html' },
          { title: 'Random() in p5.js', url: 'https://p5js.org/reference/#/p5/random' },
          { title: 'Frame Count in p5.js', url: 'https://p5js.org/reference/#/p5/frameCount' }
        ]
      },
      {
        week: 'Week 8',
        date: 'Oct 22',
        title: 'Data-Driven Logos',
        activities: {
          demo: [
            'Introduce APIs and JSON',
            'Use fetch() or loadJSON() in p5.js to connect to live dataset',
            'Map simple values (e.g., temperature → color hue)'
          ],
          prompts: [
            'Pick a dataset (weather, time, Pokémon, trivia, art, etc.)',
            'Map a continuous value (e.g., number → size, rotation, hue)',
            'Map a discrete state (e.g., condition → background, icon)',
            'Optional: invent a new logo to better match your dataset'
          ],
          lab: 'Extend one Week 7 motion sketch into a dynamic data-driven logo',
          homework: 'Post your first working Data Logo with explanation'
        },
        inspiration: [
          { title: 'Weather API (wttr.in)', url: 'https://wttr.in/Boston?format=j1' },
          { title: 'ISS Location API', url: 'http://api.open-notify.org/iss-now.json' },
          { title: 'Sunrise/Sunset API', url: 'https://api.sunrise-sunset.org/json' }
        ],
        resources: [
          { title: 'MDN Fetch + JSON', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch' },
          { title: 'p5.js loadJSON', url: 'https://p5js.org/reference/#/p5/loadJSON' },
          { title: 'p5.js map()', url: 'https://p5js.org/reference/#/p5/map' }
        ]
      },
      {
        week: 'Week 9',
        date: 'Oct 29',
        title: 'Dynamic Identity Systems',
        activities: {
          demo: [
            'Show examples of curated identity systems',
            'Demonstrate how to present logos in context',
            'Cover refinement: motion rules, easing, consistency'
          ],
          prompts: [
            'Develop a family of 10+ data-responsive logos that feel connected',
            'Show range: how the logo adapts to multiple data states',
            'Create a landing demo page with key/legend explaining data mappings'
          ],
          lab: 'Refine your dynamic logo into a polished system',
          homework: 'Post final Dynamic Data Identity Kit with landing page, legend, variations, and design note'
        },
        inspiration: [
          { title: 'MIT Media Lab Identity', url: 'https://www.elischiff.com/blog/2014/8/6/the-new-mit-media-lab-identity' },
          { title: 'DIA Studio', url: 'https://dia.tv/' },
          { title: 'Generative Design Book', url: 'https://www.generative-gestaltung.de/2/' }
        ],
        resources: [
          { title: 'p5.js saveFrames', url: 'https://p5js.org/reference/#/p5/saveFrames' },
          { title: 'p5.js Arrays', url: 'https://p5js.org/reference/#/p5/Array' },
          { title: 'p5.js constrain()', url: 'https://p5js.org/reference/#/p5/constrain' }
        ]
      }
    ]
  },
  'week-10-12': {
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
    focus: 'Mapping user interaction (mouse, keyboard, sound, webcam) to type, color, and composition',
    weeklyContent: [
      {
        week: 'Week 10',
        date: 'Nov 5',
        title: 'Interactive Poster Playgrounds',
        activities: {
          demo: [
            'Map mouse position to size, color, or position of poster elements',
            'Introduce basic keyboard events (keyPressed())'
          ],
          prompts: [
            'Poster that changes color as the mouse moves',
            'Type that scales based on mouse distance',
            'Elements that rotate following the cursor',
            'Hidden messages revealed on hover',
            'Keyboard-triggered animations'
          ],
          lab: 'Create interactive poster prototypes',
          homework: 'Post 3 interactive poster experiments'
        }
      },
      {
        week: 'Week 11',
        date: 'Nov 12',
        title: 'Advanced Interactions',
        activities: {
          demo: [
            'Sound-reactive visuals',
            'Webcam integration',
            'Multi-touch interactions'
          ],
          prompts: [
            'Create a poster that responds to sound input',
            'Design elements that react to webcam motion',
            'Build multi-layered interactive compositions'
          ],
          lab: 'Experiment with advanced input methods',
          homework: 'Develop one fully interactive poster system'
        }
      },
      {
        week: 'Week 12',
        date: 'Nov 19',
        title: 'Polish & Present',
        activities: {
          demo: [
            'Optimization techniques',
            'Export and documentation methods',
            'Presentation strategies'
          ],
          prompts: [
            'Refine your best interactive poster',
            'Create documentation showing all states',
            'Prepare presentation materials'
          ],
          lab: 'Final polish and optimization',
          homework: 'Submit final interactive poster with documentation'
        }
      }
    ]
  },
  'week-13-14': {
    id: 'week-13-14',
    weeks: '13-14',
    dates: 'Nov 26 & Dec 3',
    title: 'Final Integration & Showcase',
    description: 'Portfolio + Publishing',
    tools: ['HTML', 'CSS', 'p5.js'],
    color: 'from-indigo-400 to-purple-400',
    badgeColor: 'border-indigo-300 bg-indigo-50 text-indigo-700',
    emoji: '🎉',
    focus: 'Creating a cohesive portfolio showcasing all projects',
    weeklyContent: [
      {
        week: 'Week 13',
        date: 'Nov 26',
        title: 'Portfolio Development',
        activities: {
          demo: [
            'Portfolio structure and navigation',
            'Project documentation best practices',
            'Responsive design considerations'
          ],
          prompts: [
            'Organize all projects into categories',
            'Write project descriptions and process notes',
            'Design a cohesive visual system for your portfolio'
          ],
          lab: 'Build portfolio structure',
          homework: 'Complete portfolio draft with all projects'
        }
      },
      {
        week: 'Week 14',
        date: 'Dec 3',
        title: 'Final Showcase',
        activities: {
          demo: [
            'Presentation techniques',
            'Live demonstration strategies'
          ],
          prompts: [
            'Prepare 5-minute presentation of your work',
            'Select best projects to highlight',
            'Practice live demonstrations'
          ],
          lab: 'Final presentations and critique',
          homework: 'Submit final portfolio and reflection'
        }
      }
    ]
  }
};