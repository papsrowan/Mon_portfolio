// Navigation items
export const NAV_ITEMS = [
  { name: 'home', path: '#home' },
  { name: 'about', path: '#about' },
  { name: 'skills', path: '#skills' },
  { name: 'projects', path: '#projects' },
  { name: 'contact', path: '#contact' },
];

// Skills by category
export const SKILLS = {
  frontend: [
    { name: 'HTML5', icon: 'html5' },
    { name: 'CSS3', icon: 'css3' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'React', icon: 'react' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'Tailwind CSS', icon: 'tailwindcss' },
  ],
  backend: [
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Express', icon: 'express' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'PostgreSQL', icon: 'postgresql' },
  ],
  mobile: [
    { name: 'React Native', icon: 'react' },
    { name: 'Flutter', icon: 'flutter' },
  ],
  tools: [
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'VS Code', icon: 'vscode' },
    { name: 'Docker', icon: 'docker' },
    { name: 'Figma', icon: 'figma' },
  ],
};

// Sample projects
export const PROJECTS = [
  {
    id: 1,
    title: 'E-commerce App',
    description: 'A modern e-commerce platform with seamless user experience.',
    image: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    url: '#',
  },
  {
    id: 2,
    title: 'Healthcare Dashboard',
    description: 'Real-time healthcare analytics dashboard with data visualization.',
    image: '/projects/dashboard.jpg',
    tags: ['React', 'D3.js', 'Node.js'],
    url: '#',
  },
  {
    id: 3,
    title: 'Social Media Platform',
    description: 'A social networking platform focused on privacy and user experience.',
    image: '/projects/social.jpg',
    tags: ['React Native', 'Firebase', 'TypeScript'],
    url: '#',
  },
  {
    id: 4,
    title: 'Delivery Tracking App',
    description: 'Real-time package tracking application with map integration.',
    image: '/projects/delivery.jpg',
    tags: ['Flutter', 'Google Maps API', 'Firebase'],
    url: '#',
  },
];

// Theme options
export const THEME_OPTIONS = [
  { value: 'light', label: 'light' },
  { value: 'dark', label: 'dark' },
  { value: 'system', label: 'system' },
];

// Language options
export const LANGUAGE_OPTIONS = [
  { value: 'fr', label: 'fr' },
  { value: 'en', label: 'en' },
];
