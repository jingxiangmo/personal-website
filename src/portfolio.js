const header = {
  homepage: 'https://jingxiangmo.com', 
  title: 'JXM',
}

const about = {
  name: 'Jingxiang Mo',
  role: 'Student Developer',
  description:
    'I study Computer Science and Finance at McGill University, with a specific interest in robotics and decentralization. I aspire to solve problems with my software engineering, financial engineering, and entrepreneurship skills.',
    resume: 'https://www.linkedin.com/in/jingxiangmo?originalSubdomain=ca',
    social: {
    linkedin: 'https://www.linkedin.com/in/jingxiangmo?originalSubdomain=ca',
    github: 'https://github.com/jingxiangmo',
  },
}

const projects = [
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
      'Led a project to simulate the effectiveness of masks in a physics-based way. The simulation is based on a particle physics model.',
    stack: ['Python, vpython'],
    sourceCode: 'https://github.com',
    livePreview: 'https://devpost.com/software/mcla',
  },
  {
    name: 'McGil Management Undergraduate Society Website',
    description:
      'Created a website for the McGill Management student society. Generated more than 400 views per month.',
    stack: ['Website Builder', 'Java Script', 'HTML', 'CSS'],
    livePreview: 'https://www.musmcgill.com',
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
    'Developed a dynamic personal website using using React to display my resume and projects.',
  stack: ['JavaScript', 'HTML/CSS', 'React', 'Node.js'],
  livePreview: 'https://jingxiangmo.com',
  sourceCode: 'https://github.com/jingxiangmo/personal-website',
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
