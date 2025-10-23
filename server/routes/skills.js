const express = require('express');
const router = express.Router();

// Vedant's actual skills data
const skills = [
  {
    id: 1,
    name: 'Frontend Development',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    proficiency: 92,
    icon: 'code'
  },
  {
    id: 2,
    name: 'Backend Development',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST API', 'Python'],
    proficiency: 88,
    icon: 'server'
  },
  {
    id: 3,
    name: 'Programming Languages',
    technologies: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'Solidity'],
    proficiency: 85,
    icon: 'code'
  },
  {
    id: 4,
    name: 'DevOps & Cloud',
    technologies: ['Git', 'Docker', 'AWS', 'Azure', 'Google Cloud', 'CI/CD'],
    proficiency: 80,
    icon: 'cloud'
  },
  {
    id: 5,
    name: 'UI/UX & Design',
    technologies: ['shadcn-ui', 'Tailwind CSS', 'Responsive Design', 'Vite', 'Modern UI Frameworks'],
    proficiency: 87,
    icon: 'palette'
  },
  {
    id: 6,
    name: 'Database & Blockchain',
    technologies: ['MongoDB', 'PostgreSQL', 'Blockchain', 'Smart Contracts', 'Web3.js'],
    proficiency: 82,
    icon: 'server'
  }
];

// Get all skills
router.get('/', (req, res) => {
  res.json(skills);
});

module.exports = router;