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
        'An AI-powered personal journal that uses NLP-based analytics and machine learning algorithms to provide appropriate mental health resources and suicide prevention steps.',
    stack: ['Python', 'Google Cloud', 'NLP', 'Machine Learning', 'JavaScript'],
    livePreview: 'https://share.streamlit.io/better-me-team/better.me/main/app.py',
    sourceCode: 'https://github.com/better-me-team/better.me/tree/de2385cd98051e9b26c3e315a299a20b1a7ed239',
  },
  {
    name: 'Financial Statements Analyzer',
    description:
      'Developing a professional application that analyzes financial statements to generate a report of the company\'s financial performance compared to competitors.',
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
      'Created a website for the McGill Management student society. Generated more than 400 views per month.',
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
  /*
  {
  name: 'Hand Gesture Recognition Robot Car',
  description:
    'Designing and making a robot car that can recognize hand gestures and drive the car accordingly.',
  stack: ['Python', 'PiTop', 'Arduino', 'Raspberry Pi'],
  // livePreview: 'https://www.musmcgill.com',
  },
  */

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
  'Bash',
  'HTML/CSS',
  'JavaScript',
  'Solidity',
  'Blockchain',
  'Linux',
  'Financial Modeling',
]

const contact = {
  email: 'jingxiangmo@gmail.com',
}

export { header, about, projects, skills, contact }
