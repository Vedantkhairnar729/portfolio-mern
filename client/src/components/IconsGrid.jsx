import React from 'react';
import { motion } from 'framer-motion';
import './IconsGrid.css';
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiTypescript,
  SiDocker,
  SiAmazonaws,
  SiRedux,
  SiFramer,
  SiGit,
  SiJest,
  SiExpress
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

const icons = [
  { component: SiReact, label: 'React' },
  { component: SiJavascript, label: 'JavaScript' },
  { component: SiTypescript, label: 'TypeScript' },
  { component: SiNodedotjs, label: 'Node.js' },
  { component: SiExpress, label: 'Express' },
  { component: SiMongodb, label: 'MongoDB' },
  { component: FaDatabase, label: 'Databases' },
  { component: SiHtml5, label: 'HTML5' },
  { component: SiCss3, label: 'CSS3' },
  { component: SiTailwindcss, label: 'Tailwind' },
  { component: SiFramer, label: 'Framer Motion' },
  { component: SiRedux, label: 'Redux' },
  { component: SiGit, label: 'Git' },
  { component: SiDocker, label: 'Docker' },
  { component: SiAmazonaws, label: 'AWS' },
  { component: SiJest, label: 'Jest' }
];

const IconsGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="icons-grid" 
      aria-hidden="false"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {icons.map((icon, idx) => {
        const IconComp = icon.component;
        return (
          <motion.div 
            className="icon-item" 
            key={idx} 
            title={icon.label} 
            aria-label={icon.label}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconComp className="tech-icon" />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default IconsGrid;
