const express = require('express');
const router = express.Router();

// Vedant's actual project data
const projects = [
  {
    id: 1,
    title: 'Store Place',
    description: 'Store Place is a smart, web-based inventory and income management platform built to help businesses track stock, sales, and revenue in an intuitive, streamlined way. Empowers shop owners, small businesses, and side hustlers to manage their inventory and finances from a single dashboard.',
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'shadcn-ui'],
    image: 'https://vedantportfolio-bice.vercel.app/store_place.png',
    github: 'https://github.com/Vedantkhairnar729/Stroreplace.git',
    demo: 'https://vedantportfolio-bice.vercel.app/'
  },
  {
    id: 2,
    title: 'Aura Avenue Studio',
    description: 'Aura Avenue Studio is a web-based fashion showcase and e-commerce concept centered on timeless style. The site presents curated collections, design philosophy, and brand essence — aiming to bridge aesthetics and digital presence for fashion brands.',
    technologies: ['Vite', 'shadcn-ui', 'TypeScript', 'Tailwind CSS', 'React'],
    image: 'https://vedantportfolio-bice.vercel.app/Aura.png',
    github: 'https://github.com/Vedantkhairnar729/aura_avenue_studio.git',
    demo: 'https://vedantportfolio-bice.vercel.app/'
  },
  {
    id: 3,
    title: 'Dental Care',
    description: 'Interactive data visualization platform for analyzing complex datasets with custom charts and dental care management system.',
    technologies: ['shadcn-ui', 'Tailwind CSS', 'TypeScript', 'React', 'Vite'],
    image: 'https://vedantportfolio-bice.vercel.app/dental_care.png',
    github: 'https://github.com/Vedantkhairnar729/dental_care.git',
    demo: 'https://vedantportfolio-bice.vercel.app/'
  },
  {
    id: 4,
    title: 'Blockchain Voting System',
    description: 'Decentralized blockchain voting system with smart contract-based vote recording, secure authentication, and real-time result tracking.',
    technologies: ['Solidity', 'JavaScript', 'Web3.js', 'Ethereum'],
    image: 'https://www.shutterstock.com/image-vector/blockchain-vector-icon-design-element-600nw-715544491.jpg',
    github: 'https://github.com/Vedantkhairnar729/blockchain-voting',
    demo: 'https://github.com/Vedantkhairnar729/blockchain-voting'
  },
  {
    id: 5,
    title: 'Generalcom',
    description: 'Responsive website template featuring modular frontend components, organized backend structure, and scalable architecture.',
    technologies: ['JavaScript', 'PHP', 'Less', 'Hack', 'CSS'],
    image: 'https://t3.ftcdn.net/jpg/01/13/12/60/360_F_113126068_vQTggf0m8T3GojwA8ruO0Ggmo8MpJky5.jpg',
    github: 'https://github.com/Vedantkhairnar729/generalcom',
    demo: 'https://github.com/Vedantkhairnar729/generalcom'
  },
  {
    id: 6,
    title: 'Book Marketing',
    description: 'Book marketing module for an online book-selling platform, designed to enhance visibility and promote book listings effectively.',
    technologies: ['JavaScript', 'PHP', 'CSS', 'HTML'],
    image: 'https://st4.depositphotos.com/12780408/22918/v/450/depositphotos_229184048-stock-illustration-digital-marketing-black-icon-vector.jpg',
    github: 'https://github.com/Vedantkhairnar729/Book-Selling-site/tree/main/Book%20Marketing',
    demo: 'https://github.com/Vedantkhairnar729/Book-Selling-site'
  }
];

// Get all projects
router.get('/', (req, res) => {
  res.json(projects);
});

// Get project by id
router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) return res.status(404).json({ message: 'Project not found' });
  res.json(project);
});

module.exports = router;