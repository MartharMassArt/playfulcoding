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
            'Create a new pattern machine with at least 3 controls with clear labels',
            'Add a live tile preview that shows a repeating grid',
            'Add the ability to export a set of tiles or full patterns as PNGs'
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
    dates: 'Oct 22, 29 & Nov 5',
    title: 'BUILD IT!!!',
    description: 'Build + Publish Your Own Site',
    tools: ['HTML', 'CSS', 'Github'],
    color: 'from-emerald-400 to-green-400',
    badgeColor: 'border-green-300 bg-green-50 text-green-700',
    emoji: '🧱',
    focus: 'Creating a cohesive portfolio showcasing all projects',
    weeklyContent: [
      {
        week: 'Week 7',
        date: 'Oct 22',
        title: 'Designing in the Browser',
        activities: {
          demo: [
            { text: '👾 Week 7 Slides', url: 'https://docs.google.com/presentation/d/1QpODayRZuSZkMGfcgXQhLi2knW8nNUVOd_dUcnlEcsM/edit?usp=sharing' },
            'We will Cover: HTML Structure, Linking CSS, Previwing Locally',
            'HELPFUL FROM PREVIOUS CLASS',
            { text: '👾Intro Slides', url: 'https://docs.google.com/presentation/d/1AHdgQFQDDVJD2IRQ8lMqoN0IHOpjGHBOqS2qe48T0R8/edit?usp=sharing' },
            { text: '👾 Week 2 Slides', url: 'https://docs.google.com/presentation/d/1obNsRtT6ChDqXUprZQ0Mb5VowYyBE195aHHtSRTvbkg/edit?usp=sharing' }
          ],
          prompts: [
            'Create your index.html and style.css',
            'Try grid/flexbox layout',
            'Add 1 image + custom colors',
            'Change fonts + background',
            'Preview it live'
          ],
          lab: 'complete the promps above',
          homework: 'This will live on your computer this week, nothing to submit'
        },
         inspiration: [
          { title: 'CSS Zen Garden', url: 'http://www.csszengarden.com/' },
          { title: 'Awwwards Portfolios', url: 'https://www.awwwards.com/websites/portfolio/' },
          { title: 'Designers on the Web – It’s Nice That', url: 'https://www.itsnicethat.com/tags/portfolio' },
          { title: 'Made with Code', url: 'https://madewithcode.com/projects/' },
          { title: 'PangramPangram Studio Portfolio', url: 'https://pangrampangram.com/pages/projects' },
          { title: 'Portfolio Starter Inspiration (Figma Community)', url: 'https://www.figma.com/community/search?resource_type=files&query=portfolio' }
        ],

        resources: [
          { title: 'MDN: HTML Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics' },
          { title: 'MDN: CSS Layout – Grids and Flexbox', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout' },
          { title: 'Flexbox Froggy', url: 'https://flexboxfroggy.com/' },
          { title: 'Grid Garden', url: 'https://cssgridgarden.com/' },
          { title: 'Google Fonts', url: 'https://fonts.google.com/' },
          { title: 'Coolors Palette Generator', url: 'https://coolors.co/' },
          { title: 'Contrast Checker', url: 'https://contrastchecker.com/' },
          { title: 'Netlify Drop (Quick Hosting)', url: 'https://app.netlify.com/drop' },
          { title: 'GitHub Pages Guide', url: 'https://pages.github.com/' },
          { title: 'Canva Color Meanings', url: 'https://www.canva.com/colors/color-meanings/' }
        ]
      },
      {
        week: 'Week 8',
        date: 'Oct 29',
        title: 'GitHub & Responsive Design',
        activities: {
          demo: [
          { text: '👾 Week 8 Slides', url: 'https://docs.google.com/presentation/d/1mtkvQ4aURu_swCStW4qJ1g2uUOPa50QTH3eY5bIxBAk/edit?usp=sharing' },
          { text: 'GitHub Desktop', url: 'https://desktop.github.com/download/' },
          { text: 'Responsive Design', url: 'https://codepen.io/marthar/pen/bNEjZZV' }
          ],
          prompts: [
            'Make your Launch Site responsive using at least one media query',
            'Use relative units to adjust type and spacing (convert px → rem/em)',
            'Stack or simplify your layout for small screens (~700px)',
            'Optional: add a simple navigation bar that changes layout on mobile'
          ],
          lab: 'Redesign your Launch Site for both desktop and mobile views using media queries and flexible units.',
          homework: 'Push your updated responsive site to GitHub Pages and submit your live URL to the class website.'
        },
        inspiration: [
          { title: 'Responsive Web Design Showcase', url: 'https://responsivedesign.is/examples/' },
          { title: 'IDEO.com – Adaptive Layouts', url: 'https://www.ideo.com/' },
          { title: 'Awwwards: Responsive Websites', url: 'https://www.awwwards.com/websites/responsive-design/' },
          { title: 'Media Queries Gallery Archive', url: 'https://mediaqueri.es/' }
        ],
        resources: [
          { title: 'MDN: Responsive Design Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design' },
          { title: 'CSS-Tricks: Complete Guide to Media Queries', url: 'https://css-tricks.com/a-complete-guide-to-css-media-queries/' },
          { title: 'CSS-Tricks: Complete Guide to Flexbox', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' },
          { title: 'CSS-Tricks: Complete Guide to Grid', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/' },
          { title: 'Chrome DevTools Device Toolbar', url: 'https://developer.chrome.com/docs/devtools/device-mode/' },
          { title: 'Flexbox Froggy (practice game)', url: 'https://flexboxfroggy.com/' },
          { title: 'Grid Garden (practice game)', url: 'https://cssgridgarden.com/' }
        ]
},
      {
        week: 'Week 9',
        date: 'Nov 5',
       title: 'Finish & Polish + GitHub Pages',
      activities: {
        demo: [
          { text: '👾 Week 9 Slides', url: 'https://docs.google.com/presentation/d/1A389giY8ePw_G2XZU3hkcCVHzWuiNYWRZlOtLfpj5hA/edit?usp=sharing' },
          { text: 'Metatags', url: 'https://metatags.io/' },
          { text: 'Check Contrast', url: 'https://www.siegemedia.com/contrast-ratio' }
          ],
        prompts: [
          'Add a favicon and update <title> + meta description to match your voice',
          'Create an OG preview image and wire up Open Graph tags',
          'Audit nav and links: clear labels, hover/focus states, no dead links',
          'Optional: add a custom 404.html or a lightweight “About this site” section in README'
        ],
        lab: 'Polish your Launch Site, update metadata (favicon, title, description, OG), then commit, push, and verify everything on GitHub Pages.',
        homework: 'Submit your live URL if it has changed from last week'
      },
      inspiration: [
        { title: 'GitHub Student Portfolios', url: 'https://github.com/collections/student-developer-pack' },
        { title: 'P5.js Showcase on GitHub Pages', url: 'https://p5js.org/community/' },
        { title: 'Netlify Drop — Instant Hosting', url: 'https://app.netlify.com/drop' },
        { title: 'Design Portfolios Hosted on GitHub Pages', url: 'https://github.com/topics/portfolio-website' }
      ],
      resources: [
        { title: 'GitHub Pages Official Guide', url: 'https://pages.github.com/' },
        { title: 'GitHub Desktop Tutorial', url: 'https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/overview' },
        { title: 'Markdown Basics (README)', url: 'https://www.markdownguide.org/basic-syntax/' },
        { title: 'MDN: How to Publish Your Website', url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Publishing_your_website' },
        { title: 'Netlify vs GitHub Pages Overview', url: 'https://www.freecodecamp.org/news/github-pages-vs-netlify/' }
      ]
      }
    ]
  },
  'week-10': {
  id: 'week-10',
  weeks: '10',
  dates: 'Nov 12',
  title: 'Figma → GitHub Launch Site',
  subtitle: 'Design, Code & Publish',
  description: 'Translate a Figma design into a live website and publish it with GitHub Pages.',
  tools: ['Figma', 'HTML', 'CSS', 'GitHub Pages'],
  color: 'from-indigo-400 to-purple-400',
  badgeColor: 'border-indigo-300 bg-indigo-50 text-indigo-700',
  emoji: '🚀',
  focus: 'Move from visual design to browser layout and prep for animated, data-connected projects.',
  weeklyContent: [
    {
      week: 'Week 10',
      date: 'Nov 12',
      title: 'From Figma to Code',
      activities: {
        demo: [
          { text: '👾 Week 10 Slides', url: 'https://docs.google.com/presentation/d/1nxzmU1KVfhNotp9RfbR9IBvPhTGJHUtAMLKRqf7g_os/edit?usp=sharing' },
          { text: 'Figma', url: 'https://www.figma.com' },
          'Make a basic page in Figma',
          'New Repository in Github',
          'Commit & Push'
        ],
        prompts: [
          'Can you launch a site in 30minutes?',
          'Make a one page website for a new company',
          'Push AI to the limit',
          'Have figma help with the design',
          'Make it live'
        ],
        lab: 'Use AI to come up with your company idea - platform of your choice. Have Figma help with the design. What horrors or magic can you create in 30 minutes?',
        homework: 'Submit your live github link below'
      },
      inspiration: [
        { title: 'CSS Zen Garden', url: 'http://www.csszengarden.com/' },
        { title: 'Awwwards Portfolios', url: 'https://www.awwwards.com/websites/portfolio/' },
        { title: 'Designers on the Web – It’s Nice That', url: 'https://www.itsnicethat.com/tags/portfolio' }
      ],
      resources: [
        { title: 'MDN HTML Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML' },
        { title: 'MDN CSS Layout', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout' },
        { title: 'Flexbox Froggy', url: 'https://flexboxfroggy.com/' },
        { title: 'Grid Garden', url: 'https://cssgridgarden.com/' },
        { title: 'Google Fonts', url: 'https://fonts.google.com/' },
        { title: 'Coolors Palette Generator', url: 'https://coolors.co/' }
      ]
    }
  ]
},
  'week-11-12': {
  id: 'week-11-12',
  weeks: '11-12',
  dates: 'Nov 19 & Nov 26',
  title: 'Playable Posters',
  subtitle: 'Interactive Experiments',
  description: 'Create a playful interactive poster.',
  tools: ['p5.js'],
  color: 'from-pink-400 to-red-400',
  badgeColor: 'border-pink-300 bg-pink-50 text-pink-700',
  emoji: '🎮',
  focus: 'Fun to use, clean motion, clear input, simple UI',
  weeklyContent: [
    {
      week: 'Week 11',
      date: 'Nov 19',
      title: 'Playable Poster: Build',
      activities: {
        demo: [
          { text: '👾 Week 11 Slides', url: 'https://docs.google.com/presentation/d/1D2o9cEJITBGD3cfvTuxqDhz_-md455hCyxFbwxLjM3o/edit?usp=sharing' },
          'Chase Me',
          'Catch Me',
          'Shape Pop'
        ],
        prompts: [
          'Start with one of the demo sketches or your own idea',
          'Build the core interaction first',
          'Add basic UI or help text'
        ],
        lab: 'Design your Playable Poster.',
        homework: 'Post a link to your poster and a draft docs page.'
      },
      resources: [
        { title: 'p5.js Reference', url: 'https://p5js.org/reference/' },
        { title: 'p5.js Learn', url: 'https://p5js.org/learn/' }
      ]
    },
    {
      week: 'Week 12',
      date: 'Nov 26',
      title: 'Playable Poster: Polish + Publish',
      activities: {
        demo: [
          'Add small UI details. Labels and states',
          'Prep a docs page with short captions',
          'Quick talk track and live demo tips'
        ],
        prompts: [
          'Fix contrast and type sizes',
          'Tighten easing and rhythm',
          'Link poster and docs from your site'
        ],
        lab: 'Polish, integrate, and rehearse.',
        homework: 'Submit your live portfolio URL and a short reflection.'
      },
      inspiration: [
        { title: 'Awwwards Portfolios', url: 'https://www.awwwards.com/websites/portfolio/' },
        { title: 'Media art docs layout ideas', url: 'https://eyeondesign.aiga.org/' }
      ],
      resources: [
        { title: 'GitHub Pages Guide', url: 'https://pages.github.com/' },
        { title: 'Meta tags preview', url: 'https://metatags.io/' },
        { title: 'Contrast checker', url: 'https://contrastchecker.com/' }
      ]
    }
  ]
},
  'week-13': {
  id: 'week-13',
  weeks: '13',
  dates: 'Dec 3',
  title: 'Living Logos',
  subtitle: 'Generative Branding & Animated Identities',
  description: 'Logos that move, evolve, and respond.',
  tools: ['p5.js'],
  color: 'from-orange-400 to-yellow-400',
  badgeColor: 'border-orange-300 bg-orange-50 text-orange-700',
  emoji: '🌱',
  focus: 'Motion, variation, and real-time adaptability using simple data.',
  weeklyContent: [
    {
      week: 'Week 13',
      date: 'Dec 3',
      title: 'Data-Driven Logos',
      activities: {
        demo: [
          { text: '🌱 Week 13 Slides', url: 'https://docs.google.com/presentation/d/1GrhLHk6zIBUqq3yz-wNH2zlg1fQK0D_rjdorMffIaT8/edit?usp=sharing' },
          'Introduce APIs and JSON',
          'Use fetch() or loadJSON() in p5.js to connect to a live dataset',
          'Map values to color, size, rotation, or layout',
          'Store logo states in an array and switch between them'
        ],
        prompts: [
          'Pick one small dataset. Weather, time of day, or a single game stat.',
          'Design three to five logo states that respond to different data conditions.',
          'Make sure the states feel like one brand with clear shared rules.',
          'Plan a landing page that shows your logo plus a short legend for the data.'
        ],
        lab: 'Make a dynamic data logo.',
        homework: 'Post your first working Data Logo with a short note on the mapping.'
      },
      inspiration: [
        { title: 'Weather API (wttr.in)', url: 'https://wttr.in/Boston?format=j1' },
        { title: 'ISS Location API', url: 'http://api.open-notify.org/iss-now.json' },
        { title: 'Sunrise/Sunset API', url: 'https://api.sunrise-sunset.org/json' },
        { title: 'DIA Studio Motion Identities', url: 'https://dia.tv/' },
        { title: 'MIT Media Lab Identity (overview)', url: 'https://www.elischiff.com/blog/2014/8/6/the-new-mit-media-lab-identity' }
      ],
      resources: [
        { title: 'MDN Fetch + JSON', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch' },
        { title: 'p5.js loadJSON', url: 'https://p5js.org/reference/#/p5/loadJSON' },
        { title: 'p5.js map()', url: 'https://p5js.org/reference/#/p5/map' }
      ]
    },
  ]
},
 'week-14': {
  id: 'week-14',
  weeks: '14',
  dates: 'Dec 10',
  title: 'Gallery Showcase',
  subtitle: 'Refine, Publish, Celebrate',
  description: 'Pick 1–3 favorite projects from the semester. Refine them in class and publish them on your site.',
  tools: ['p5.js', 'HTML', 'CSS', 'GitHub Pages'],
  color: 'from-purple-400 to-pink-400',
  badgeColor: 'border-purple-300 bg-purple-50 text-purple-700',
  emoji: '🖼',
  focus: 'Quiet work time, light support, and a simple gallery launch.',
  weeklyContent: [
    {
      week: 'Week 14',
      date: 'Dec 10',
      title: 'Gallery Showcase',
      activities: {
        demo: [
          'No demo this week',
          'Snacks and open help as needed'
        ],
        prompts: [
          'Choose 1–3 projects you want to feature',
          'Make small fixes or refinements in class',
          'Add each project to the class site'
        ],
        lab: 'Work session with snacks. Ask questions. Get help with any last issues.',
        homework: 'Submit NEW final links to the Gallery page.'
      },
      inspiration: [],
      
    }
  ]
}
};