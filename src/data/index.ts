import type { Project, SectionLink, SkillGroup, SocialLink, ExperienceItem } from '../types'
import trimlyImage from '../assets/trimly.png'
import trimlyShot1 from '../assets/trimly-1.png'
import trimlyShot2 from '../assets/trimly-2.png'
import trimlyShot3 from '../assets/trimly-3.png'
import cancapImage from '../assets/cancapdetect.png'
import cancapShot1 from '../assets/cancapdetect-1.png'
import cancapShot2 from '../assets/cancapdetect-2.png'
import cancapShot3 from '../assets/cancapdetect-3.png'
import eduformImage from '../assets/eduform.png'
import eduformShot1 from '../assets/eduform-1.png'
import eduformShot2 from '../assets/eduform-2.png'
import eduformShot3 from '../assets/eduform-3.png'
import fl2 from '../assets/experience/fl-2.jpeg'
import fl3 from '../assets/experience/fl-3.jpeg'
import fl4 from '../assets/experience/fl-4.jpeg'
import fp1 from '../assets/experience/fp-1.jpeg'
import fp2 from '../assets/experience/fp-2.jpeg'
import pmr1 from '../assets/experience/pmr-1.jpeg'
import pmr2 from '../assets/experience/pmr-2.jpeg'
import po1 from '../assets/experience/po-1.jpeg'

export const cvUrl = `${import.meta.env.BASE_URL}cv/Zefanya-Felicita-Adithya-CV.pdf`

export const sections: SectionLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
export const sectionIds = sections.map((s) => s.id)

export const social: SocialLink[] = [
  { icon: 'github', label: 'GitHub', url: 'https://github.com/zefanyafelicita' },
  { icon: 'linkedin', label: 'LinkedIn', url: 'http://www.linkedin.com/in/zefanyafelicita' },
  { icon: 'mail', label: 'Email', url: 'mailto:zefanyafelicita28@gmail.com' },
]

export const projects: Project[] = [
  {
    title: 'Trimly',
    category: 'Mobile Application',
    description:
      'A mobile salon booking app that helps users discover salons, explore services and hairstylists, and make appointments in one place.',
    tech: ['React Native', 'Expo', 'TypeScript', 'NativeWind', 'Laravel', 'MySQL'],
    contribution: [
      'UI/UX design',
      'Mobile app development',
      'Authentication',
      'Salon & stylist browsing',
      'Booking flow',
      'Favorites',
      'Laravel API integration',
    ],
    bg: '#F6C6D8',
    image: trimlyImage,
    gallery: [trimlyShot1, trimlyShot2, trimlyShot3],
    buttons: [
      { label: 'GitHub', url: 'https://github.com/zefanyafelicita/trimly-app' },
      { label: 'Live Demo', url: 'https://drive.google.com/drive/folders/1hcXIe4BeTVHXf_mQEtqHEHkCvn9dlFVK?usp=sharing' },
    ],
    problem:
      'Many salons still rely on WhatsApp for bookings, while their websites often only provide basic service information without schedules or direct reservations.',
    solution:
      'A single app where users can view services and prices, choose a hairstylist, check available time slots, and book appointments.',
    features: [
      'Salon discovery',
      'Service & stylist browsing',
      'Available time slots',
      'Booking flow',
      'User authentication',
      'Favorites',
    ],
  },
  {
    title: 'CanCap Detect',
    category: 'Artificial Intelligence | Computer Vision | Web Application',
    description:
      'A web-based multi-label defect detection system for cans and bottle caps using YOLO-based computer vision.',
    tech: ['Python', 'YOLO', 'Roboflow', 'OpenCV', 'Flask', 'Laravel', 'SQLite'],
    contribution: [
      'Dataset preparation',
      'Model training', 
      'Front-end development',
    ],
    bg: '#FFF0A8',
    image: cancapImage,
    gallery: [cancapShot1, cancapShot2, cancapShot3],
    buttons: [
      { label: 'GitHub AI Model', url: 'https://github.com/kevinalexanderwu/CanCapDetect---AI ' },
      { label: 'GitHub Web App', url: 'https://github.com/zefanyafelicita/CanCapDetect---Web' },
      { label: 'Live Demo', url: 'https://bit.ly/3Va2zES' },
    ],
    problem: 'Manual defect inspection can be time-consuming and may result in inconsistent identification.',
    solution: 'A web application that uses YOLO models to detect and classify defects from uploaded or captured images.',
    features: ['Multi-label detection', 'Image & camera input', 'Model selection', 'Detection results', 'Detection history'],
  },
  {
    title: 'EduForm',
    category: 'Training Registration Web Application',
    description: 'A web-based training registration platform designed to make technology training information and registration easier and more intuitive.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    contribution: ['UI/UX design', 'Front-end development', 'Form validation', 'User testing & improvements'],
    bg: '#E9E7FF',
    image: eduformImage,
    gallery: [eduformShot1, eduformShot2, eduformShot3],
    buttons: [
      { label: 'GitHub', url: 'https://github.com/zefanyafelicita/Project-HCI' },
      { label: 'Figma', url: 'https://www.figma.com/proto/CerdVUxP5wl2D28x79SxJV/EduForm?node-id=125-679&p=f&t=gx5ODSV2YgUxRT5X-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=125%3A679&show-proto-sidebar=1' },
      { label: 'Live Demo', url: 'https://drive.google.com/drive/folders/1iv4_dO_JCdW_VNz3opPA9ciNPhs-gito?%20usp=sharing' },
    ],
    problem: 'Beginners often need to navigate different information and registration steps when looking for technology training programs.',
    solution: 'A structured website that brings training information and the registration process together in one place.',
    features: ['Training program information', 'Registration form', 'Input validation', 'User feedback', 'Responsive navigation'],
  },
]

export const skills: SkillGroup[] = [
  { name: 'Programming', color: '#F6C6D8', items: ['C', 'C++', 'Java', 'JavaScript', 'Python', 'PHP'] },
  { name: 'Web / Mobile', color: '#FFF0A8', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Laravel', 'React Native', 'REST API'] },
  { name: 'AI / Machine Learning', color: '#E9E7FF', items: ['Python', 'YOLO', 'OpenCV', 'Roboflow'] },
  { name: 'Database', color: '#F6C6D8', items: ['MySQL'] },
  { name: 'Tools', color: '#FFF0A8', items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Google Colab'] },
  { name: 'Cloud', color: '#E9E7FF', items: ['Google Cloud Platform'] },
]

/**
 * Experience & Education items, grouped on the page by `group` (in the order listed here).
 * To add photos: put files in public/images/experience/ and list up to 3 paths in `images`,
 * e.g. images: ['/images/experience/binus-1.jpg']. Items with no images simply hide the gallery.
 */
export const experience: ExperienceItem[] = [
  {
    group: 'Education',
    type: 'Education',
    title: "Bachelor's Degree in Computer Science",
    organization: 'Bina Nusantara University',
    date: '2024 - Present',
    summary: 'Studying Computer Science at BINUS University.',
    description:
      "Currently pursuing a Bachelor's Degree in Computer Science at Bina Nusantara University, with a focus on software development and currently exploring cloud technology.",
    details: ['5th Semester Computer Science Student', 'Focused on web and mobile application development', 'Exploring AI and Cloud Computing through academic projects'],
    gallery: [],
  },
  {
    group: 'Education',
    type: 'Education',
    title: 'High School',
    organization: 'SMAN 2 Purwakarta',
    date: '2021 - 2024',
    summary: 'Studying MIPA at SMAN 2 Purwakarta.',
    description: 'Completed senior high school at SMAN 2 Purwakarta.',
    details: ['Head of Unit 1 – PMR (Health Division), 2022–2023', 'Managed medicine inventory and health-related activities', 'Coordinated a team of 5 PMR members', 'Participated in school orientation (MPLS) committee'],
    gallery: [],
  },
  {
    group: 'Organizational Experiences',
    type: 'Organization',
    title: 'Head of Unit 1 (Health Division)',
    organization: 'Youth Red Cross (PMR)',
    date: '2022 - 2023',
    summary: "Led the health division and looked after the school's health room.",
    description:
      "Led Unit 1 (Health Division) of the Youth Red Cross, responsible for the school's health room and for supporting students' health during school events.",
    details: [
      "Managed and monitored the stock of medicines and ensured the availability of health equipment in the school's health room (UKS).",
      "Coordinated PMR members to regularly maintain the cleanliness and orderliness of the health room (5 members).",
      'Served as a committee member during the student orientation program (MPLS), monitoring the health conditions of new students and providing first aid when necessary.',
    ],
    gallery: [pmr1, pmr2],
    skills: ['Leadership', 'First Aid', 'Inventory Management', 'Team Coordination'],
  },
  {
    group: 'Organizational Experiences',
    type: 'Organization',
    title: 'Freshmen Leader',
    organization: 'First Year Program, BINUS University',
    date: 'August 2025 - September 2025',
    summary: 'Guided and mentored new students during orientation.',
    description:
      'Played a supporting role in helping new students navigate their first experience at university and become familiar with the BINUS environment.',
    details: [
      'Assisted students in adapting to new academic and social environments.',
      'Encouraged participation and interaction through group activities and discussions.',
      'Maintained communication with students throughout the program.'
    ],
    gallery: [fl4, fl2, fl3],
    skills: ['Mentoring', 'Facilitation', 'Leadership', 'Collaboration'],
  },
  {
    group: 'Organizational Experiences',
    type: 'Organization',
    title: 'Freshmen Partner',
    organization: 'First Year Program, BINUS University',
    date: 'September 2025 - January 2026',
    summary: 'Peer mentor supporting freshmen through their first year.',
    description:
      "Supported first-year students as a peer mentor, helping them adjust to academic and social life at BINUS University.",
    details: [
      'Provided guidance and support when students faced questions or challenges during their first semester.',
      'Built a comfortable environment where students could communicate, ask questions, and participate in activities.',
    ],
    gallery: [fp1, fp2],
    skills: ['Peer Mentoring', 'Communication', 'Empathy'],
  },
  {
    group: 'Organizational Experiences',
    type: 'Organization',
    title: 'Activist, Event and Worship Division',
    organization: 'BINUS University',
    date: '2025 - Present',
    summary: 'Planning weekly worship services and annual fellowship events.',
    description:
      'Part of the Event and Worship Division, helping plan and run weekly worship services and annual fellowship events.',
    details: [
      'Developed themes, objectives, and target audiences for weekly worship services and annual fellowship events.',
      'Assisted in preparing event rundowns and coordinating the flow of worship services and events.',
      'Helped identify, contact, and follow up with worship servants and event teams for weekly Friday worship services and annual events.',
      'Contributed creative ideas for worship services and fellowship events to support their planning and implementation.',
    ],
    gallery: [po1],
    skills: ['Event Planning', 'Coordination', 'Creativity', 'Communication'],
  },
  
  {
    group: 'Certifications',
    type: 'Certification',
    title: 'TOEFL ITP Certificate',
    organization: 'Englishvit',
    date: 'Issued Sep 2026 · Expires Sep 2028',
    summary: 'TOEFL ITP English proficiency certificate with a score of 490.',
    description: 'An English proficiency certification demonstrating my TOEFL ITP test result.',
    details: [
      'TOEFL ITP Score: 490',
      'Credential ID: EV/TO9/09/2026/034938361',
      'Valid until September 2028',
    ],
    skills: ['English', 'TOEFL ITP'],
    link: 'https://englishvit.com/certificate/status/EV-TO9-09-2026-034938361',
  },
]