const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jingxiangmo.com', 
  title: 'JXM',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jingxiang Mo',
  role: 'Finance & CS Student',
  description:
    'I aspire to solve problems with software engineering, financial engineering, and entrepreneurial skills. I am currently a student at McGill University studying Computer Science and Finance.',
  resume: 'https://www.linkedin.com/in/jingxiangmo?originalSubdomain=ca',
  social: {
    linkedin: 'https://www.linkedin.com/in/jingxiangmo?originalSubdomain=ca',
    github: 'https://github.com/jingxiangmo',
  },
}


const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Financial Statements Analyzer',
    description:
      'Working on a financial statement analyzer to support a trading API. providing a report on the company\'s financial performance and relative standing in the market.',
    stack: ['Python', 'React'],
    sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Physics COVID-19 Particles Simulation',
    description:
      'Led a project to simulate the effectiveness of masks in a physics-based way. The simulation is based on a particle physics model.',
    stack: ['Python'],
    sourceCode: 'https://github.com',
    livePreview: 'https://devpost.com/software/mcla',
  },
  {
    name: 'Student Society Website',
    description:
      'Created a website for the McGill Management student society. Generated more than 400 views per month.',
    stack: ['Website Builder', 'Java Script', 'HTML', 'CSS'],
    livePreview: 'https://www.musmcgill.com',
  },
  {
  name: 'Hand Gesture Recognition Robot Car',
  description:
    'Designing and making a robot car that can recognize hand gestures and drive the car accordingly.',
  stack: ['Python', 'PiTop', 'Arduino', 'Raspberry Pi'],
  // livePreview: 'https://www.musmcgill.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'Java',
  'Python',
  'JavaScript',
  'C',
  'Bash',
  'Financial Modeling',
  'UX Design',
  'Linux',
  'Git',
  'React',
  'Financial Accounting',
]

const contact = {
  // email is optional
  email: 'jingxiangmo@gmail.com',
}

export { header, about, projects, skills, contact }
