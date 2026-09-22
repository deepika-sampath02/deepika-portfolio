import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiPython,
  SiC,
  SiCplusplus,
  SiDjango,
  SiFastapi,
  SiMysql,
  SiMongodb,
  SiGit,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
} from 'react-icons/si';

import { FaCss3Alt, FaJava, FaCloud } from 'react-icons/fa6';
import { TbBrandVscode, TbChartHistogram } from 'react-icons/tb';
import { DiDatabase } from 'react-icons/di';

export const skillsList = [
  // Frontend
  { name: 'HTML5', category: 'Frontend', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', category: 'Frontend', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', category: 'Frontend', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', category: 'Frontend', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', category: 'Frontend', icon: SiReact, color: '#61DAFB' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Bootstrap', category: 'Frontend', icon: SiBootstrap, color: '#7952B3' },

  // Programming & Backend
  { name: 'Python', category: 'Backend & Programming', icon: SiPython, color: '#3776AB' },
  { name: 'Java', category: 'Backend & Programming', icon: FaJava, color: '#ED8B00' },
  { name: 'C', category: 'Backend & Programming', icon: SiC, color: '#A8B9CC' },
  { name: 'C++', category: 'Backend & Programming', icon: SiCplusplus, color: '#00599C' },
  { name: 'Django', category: 'Backend & Programming', icon: SiDjango, color: '#44B78B' },
  { name: 'FastAPI', category: 'Backend & Programming', icon: SiFastapi, color: '#009688' },

  // AI & Data Science
  { name: 'TensorFlow', category: 'AI & Machine Learning', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'Scikit-learn', category: 'AI & Machine Learning', icon: SiScikitlearn, color: '#F7931E' },
  { name: 'NumPy', category: 'AI & Machine Learning', icon: SiNumpy, color: '#4DABCF' },
  { name: 'Pandas', category: 'AI & Machine Learning', icon: SiPandas, color: '#E70488' },
  { name: 'Matplotlib', category: 'AI & Machine Learning', icon: TbChartHistogram, color: '#11557C' },

  // Database
  { name: 'MySQL', category: 'Database', icon: SiMysql, color: '#4479A1' },
  { name: 'MongoDB', category: 'Database', icon: SiMongodb, color: '#47A248' },
  { name: 'Database Design', category: 'Database', icon: DiDatabase, color: '#10B981' },

  // Tools & Automation
  { name: 'Git', category: 'Tools & DevOps', icon: SiGit, color: '#F05032' },
  { name: 'VS Code', category: 'Tools & DevOps', icon: TbBrandVscode, color: '#007ACC' },
  { name: 'Oracle Cloud', category: 'Tools & DevOps', icon: FaCloud, color: '#F80000' },
];
