const header = {
  homepage: 'https://jingxiangmo.com', 
  title: 'JXM',
}

const about = {
  name: 'Jingxiang Mo',
  role: 'Student Developer',
  description:
    'I\'m a second-year Computer Science & Finance student at McGill University interested in blockchain and machine learning. You can always find me playing chess, working out, or reading novels near campus.',
    resume: 'https://drive.google.com/file/d/1A4qtT_DDsAa6j15Rh7Vg9lQVE9NyKIjH/view?usp=sharing',
    social: {
    linkedin: 'https://www.linkedin.com/in/jingxiangmo?originalSubdomain=ca',
    github: 'https://github.com/jingxiangmo',
  },
}

const projects = [
  {
    name: 'Better.Me AI Mental Health Recommendations',
    description:
        'An AI-powered personal journal that uses NLP analytics and machine learning algorithms to provide appropriate mental health resources and suicide prevention.',
    stack: ['Python', 'Google Cloud', 'NLP', 'Machine Learning', 'JavaScript'],
    livePreview: 'https://share.streamlit.io/better-me-team/better.me/main/app.py',
    sourceCode: 'https://github.com/better-me-team/better.me/tree/de2385cd98051e9b26c3e315a299a20b1a7ed239',
  },
  {
    name: 'Financial Statements Analyzer (In Progress)',
    description:
      'A professional application that analyzes financial statements and market data evaluate company standing.',
    stack: ['Python', 'Django', 'Alpha Vantage API', 'yfinance'],
    sourceCode: 'https://github.com',
  },
  {
    name: 'Mask Effectiveness Physics Particles Simulator',
    description:
      'Led a project to simulate the effectiveness of masks in a physics-based way by simulating particle collisions.',
    stack: ['Python, vpython'],
    sourceCode: 'https://github.com',
    livePreview: 'https://devpost.com/software/mcla',
  },
  {
    name: 'McGill Management Undergraduate Society Website',
    description:
      'A website for the McGill Management Student Society used to communicate with 2500 undergraduate students.',
    stack: ['Website Builder', 'Java Script', 'HTML', 'CSS'],
    livePreview: 'https://www.musmcgill.com',
  },
  {
    name: 'McGil Innovations (MI)',
    description:
      'Created a community dedicated to empowering McGill developers, building innovative academic tools, and supporting students in their career aspirations. Join us! Join Mi!',
    stack: [],
    livePreview: 'https://github.com/McGill-Innovations',
  },

  {
  name: 'Personal Website',
  description:
    'Created my personal website serving as a home page for my presence online. This website was created using React framework with JavaScript and HTML/CSS.',
  stack: ['JavaScript', 'HTML/CSS', 'React', 'Node.js'],
  livePreview: 'https://jingxiangmo.com',
  sourceCode: 'https://github.com/jingxiangmo/personal-website',
  },

  {
    name: 'Hospital Priority Queue',
    description:
        'Designed a sample hospital dynamic queue system using different data structures and algorithms.',
    stack: ['Java'],
    sourceCode: 'https://github.com',
  },

]


const skills = [
  'Python',
  'Java',
  'C',
  'HTML/CSS',
  'JavaScript',
  'Solidity',
  'Bash',
  'Blockchain',
  'Linux',
  'Financial Modeling',
]

const contact = {
  email: 'jingxiangmo@gmail.com',
}

export { header, about, projects, skills, contact }
