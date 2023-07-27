import { varStatus } from "@/utils";

/*
  export function varStatus() {
    return Math.random() > 0.5;
  }
*/

export interface Question {
  id: number;
  question: string;
  asker: User;
  time: string;
  date: string;
  isAnswered: boolean;
  contributors: Contributor[];
}

export interface User {
  id: number;
  name: string;
  about: string;
  email: string;
  position: string;
  fileAttachments: string[];
  codingLanguages: Proficiency[];
  isOnline: boolean;
  location: string;
  company: string;
  skills: string[];
  education: string;
}

export interface Proficiency {
  language: string;
  proficiency: number;
}

export interface Contributor {
  user: User;
  contributionTime: string;
}

// Users
export const users: User[] = [
  {
    id: 7094247,
    name: "John Doe",
    about:
      "I am a software engineer with 5 years of experience. I am interested in web development and machine learning.",
    email: "johndoe@example.com",
    position: "Software Engineer",
    fileAttachments: ["resume.pdf"],
    codingLanguages: [
      { language: "JavaScript", proficiency: 80 },
      { language: "Python", proficiency: 95 },
      { language: "Java", proficiency: 65 },
    ],
    isOnline: varStatus(),
    location: "New York",
    company: "ABC Tech",
    skills: ["Web Development", "Machine Learning", "Software Engineering"],
    education: "XYZ University",
  },
  {
    id: 2425855,
    name: "Jane Doe",
    about:
      "I am a student who is learning to code. I am interested in front-end development and web design.",
    email: "janedoe@example.com",
    position: "Student",
    fileAttachments: [],
    codingLanguages: [
      { language: "HTML", proficiency: 70 },
      { language: "CSS", proficiency: 60 },
      { language: "JavaScript", proficiency: 85 },
    ],
    isOnline: varStatus(),
    location: "Los Angeles",
    company: "XYZ University",
    skills: ["Front-end Development", "Web Design"],
    education: "ABC College",
  },
  {
    id: 6436184,
    name: "Peter Smith",
    about:
      "I am a senior software engineer with 10 years of experience. I am interested in distributed systems and cloud computing.",
    email: "petersmith@example.com",
    position: "Senior Software Engineer",
    fileAttachments: ["portfolio.pdf"],
    codingLanguages: [
      { language: "Java", proficiency: 90 },
      { language: "Python", proficiency: 75 },
      { language: "Go", proficiency: 80 },
    ],
    isOnline: varStatus(),
    location: "San Francisco",
    company: "Tech Solutions Inc.",
    skills: ["Distributed Systems", "Cloud Computing", "Java"],
    education: "XYZ University",
  },
  {
    id: 5460166,
    name: "Mary Jones",
    about:
      "I am a junior software engineer with 2 years of experience. I am interested in mobile development and big data.",
    email: "maryjones@example.com",
    position: "Junior Software Engineer",
    fileAttachments: ["cv.pdf"],
    codingLanguages: [
      { language: "Swift", proficiency: 85 },
      { language: "Java", proficiency: 70 },
      { language: "Python", proficiency: 60 },
    ],
    isOnline: varStatus(),
    location: "Chicago",
    company: "Tech Innovators",
    skills: ["Mobile Development", "Big Data", "Swift"],
    education: "ABC College",
  },
  {
    id: 8973098,
    name: "Susan Brown",
    about:
      "I am a self-taught developer who is interested in full-stack development. I am also interested in open source software.",
    email: "susanbrown@example.com",
    position: "Full-Stack Developer",
    fileAttachments: ["projects.pdf"],
    codingLanguages: [
      { language: "JavaScript", proficiency: 70 },
      { language: "Python", proficiency: 85 },
      { language: "Ruby", proficiency: 60 },
    ],
    isOnline: varStatus(),
    location: "Seattle",
    company: "OpenSource Solutions",
    skills: ["Full-Stack Development", "Open Source", "JavaScript"],
    education: "XYZ University",
  },
  {
    id: 8446183,
    name: "David Jones",
    about:
      "I am a recent graduate with a degree in computer science. I am interested in artificial intelligence and machine learning.",
    email: "davidjones@example.com",
    position: "Software Engineer Intern",
    fileAttachments: ["transcript.pdf"],
    codingLanguages: [
      { language: "Python", proficiency: 80 },
      { language: "Java", proficiency: 75 },
      { language: "TensorFlow", proficiency: 70 },
    ],
    isOnline: varStatus(),
    location: "Boston",
    company: "AI Solutions",
    skills: ["Artificial Intelligence", "Machine Learning", "Python"],
    education: "ABC College",
  },
  {
    id: 5681446,
    name: "Elizabeth Smith",
    about:
      "I am a web developer with 3 years of experience. I am interested in front-end development and user experience.",
    email: "elizabethsmith@example.com",
    position: "Web Developer",
    fileAttachments: ["portfolio.pdf"],
    codingLanguages: [
      { language: "HTML", proficiency: 75 },
      { language: "CSS", proficiency: 80 },
      { language: "JavaScript", proficiency: 90 },
      { language: "React", proficiency: 70 },
    ],
    isOnline: varStatus(),
    location: "Miami",
    company: "Web Creators",
    skills: ["Front-end Development", "User Experience", "React"],
    education: "XYZ University",
  },
  {
    id: 7658604,
    name: "Michael Brown",
    about:
      "I am a full-stack developer with 5 years of experience. I am interested in back-end development and cloud computing.",
    email: "michaelbrown@example.com",
    position: "Full-Stack Developer",
    fileAttachments: ["resume.pdf"],
    codingLanguages: [
      { language: "Java", proficiency: 85 },
      { language: "Python", proficiency: 80 },
      { language: "Node.js", proficiency: 70 },
      { language: "AWS", proficiency: 75 },
    ],
    isOnline: varStatus(),
    location: "Denver",
    company: "Cloud Solutions Ltd.",
    skills: ["Full-Stack Development", "Back-end Development", "Java"],
    education: "ABC College",
  },
  {
    id: 1691053,
    name: "Emily Johnson",
    about:
      "I am a front-end developer with a passion for creating beautiful and interactive user interfaces.",
    email: "emilyjohnson@example.com",
    position: "Front-End Developer",
    fileAttachments: ["portfolio.pdf"],
    codingLanguages: [
      { language: "HTML", proficiency: 80 },
      { language: "CSS", proficiency: 70 },
      { language: "JavaScript", proficiency: 85 },
      { language: "React", proficiency: 90 },
    ],
    isOnline: varStatus(),
    location: "Austin",
    company: "UI Designers Inc.",
    skills: ["Front-end Development", "User Interface Design", "React"],
    education: "XYZ University",
  },
  {
    id: 9601998,
    name: "Robert Wilson",
    about:
      "I am a backend developer specializing in building scalable and efficient server-side applications.",
    email: "robertwilson@example.com",
    position: "Backend Developer",
    fileAttachments: ["resume.pdf"],
    codingLanguages: [
      { language: "Python", proficiency: 90 },
      { language: "Java", proficiency: 75 },
      { language: "Node.js", proficiency: 80 },
      { language: "MongoDB", proficiency: 70 },
    ],
    isOnline: varStatus(),
    location: "San Diego",
    company: "Server Solutions",
    skills: ["Back-end Development", "Server-side Applications", "Python"],
    education: "ABC College",
  },
  {
    id: 9100672,
    name: "Jennifer Lee",
    about:
      "I am a UX/UI designer with a focus on creating delightful user experiences and intuitive interfaces.",
    email: "jenniferlee@example.com",
    position: "UX/UI Designer",
    fileAttachments: ["portfolio.pdf"],
    codingLanguages: [
      { language: "HTML", proficiency: 85 },
      { language: "CSS", proficiency: 75 },
      { language: "JavaScript", proficiency: 70 },
      { language: "Figma", proficiency: 80 },
    ],
    isOnline: varStatus(),
    location: "Seattle",
    company: "Design Studios",
    skills: ["UX Design", "UI Design", "Figma"],
    education: "XYZ University",
  },
  {
    id: 3012944,
    name: "Richard Thompson",
    about:
      "I am a data scientist with expertise in analyzing and interpreting complex data sets.",
    email: "richardthompson@example.com",
    position: "Data Scientist",
    fileAttachments: ["resume.pdf"],
    codingLanguages: [
      { language: "Python", proficiency: 90 },
      { language: "R", proficiency: 85 },
      { language: "SQL", proficiency: 70 },
      { language: "TensorFlow", proficiency: 80 },
    ],
    isOnline: varStatus(),
    location: "San Francisco",
    company: "Data Insights",
    skills: ["Data Science", "Data Analysis", "Python"],
    education: "ABC College",
  },
  {
    id: 6081524,
    name: "Lisa Davis",
    about:
      "I am a DevOps engineer experienced in automating and streamlining development processes.",
    email: "lisadavis@example.com",
    position: "DevOps Engineer",
    fileAttachments: ["resume.pdf"],
    codingLanguages: [
      { language: "Python", proficiency: 85 },
      { language: "Bash", proficiency: 75 },
      { language: "Docker", proficiency: 80 },
      { language: "Kubernetes", proficiency: 70 },
    ],
    isOnline: varStatus(),
    location: "Austin",
    company: "DevOps Solutions",
    skills: ["DevOps", "Automation", "Python"],
    education: "XYZ University",
  },
];

// Questions
export const questions: Question[] = [
  {
    id: 4820825,
    question: "How do I create a new thread in a forum?",
    asker: users[0],
    time: "10:30 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [{ user: users[0], contributionTime: "10:35 AM" }],
  },
  {
    id: 9950463,
    question: "How do I format code in a post?",
    asker: users[1],
    time: "10:35 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [{ user: users[4], contributionTime: "10:40 AM" }],
  },
  {
    id: 7687595,
    question: "What is the difference between a class and an object?",
    asker: users[2],
    time: "10:40 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [
      { user: users[2], contributionTime: "10:45 AM" },
      { user: users[0], contributionTime: "10:50 AM" },
    ],
  },
  {
    id: 5068742,
    question: "How do I debug a JavaScript error?",
    asker: users[3],
    time: "10:45 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [{ user: users[2], contributionTime: "10:50 AM" }],
  },
  {
    id: 5387555,
    question: "How do I create a REST API?",
    asker: users[4],
    time: "10:50 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [
      { user: users[4], contributionTime: "10:55 AM" },
      { user: users[0], contributionTime: "11:00 AM" },
      { user: users[1], contributionTime: "11:05 AM" },
    ],
  },
  {
    id: 6100185,
    question: "How do I create a mobile app?",
    asker: users[5],
    time: "11:00 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [
      { user: users[2], contributionTime: "11:05 AM" },
      { user: users[6], contributionTime: "11:10 AM" },
      { user: users[0], contributionTime: "11:15 AM" },
    ],
  },
  {
    id: 7010497,
    question: "How do I deploy a website to the cloud?",
    asker: users[6],
    time: "11:15 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [
      { user: users[5], contributionTime: "11:20 AM" },
      { user: users[3], contributionTime: "11:25 AM" },
    ],
  },
  {
    id: 5368397,
    question: "How do I create a database?",
    asker: users[7],
    time: "11:20 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [
      { user: users[1], contributionTime: "11:25 AM" },
      { user: users[7], contributionTime: "11:30 AM" },
      { user: users[4], contributionTime: "11:35 AM" },
    ],
  },
  {
    id: 8862639,
    question:
      "What are the best practices for optimizing a website's performance?",
    asker: users[8],
    time: "11:30 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [{ user: users[5], contributionTime: "11:35 AM" }],
  },
  {
    id: 4146265,
    question:
      "How can I secure my web application from common vulnerabilities?",
    asker: users[9],
    time: "11:35 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [
      { user: users[4], contributionTime: "11:40 AM" },
      { user: users[9], contributionTime: "11:45 AM" },
    ],
  },
  {
    id: 1299307,
    question: "What are some popular front-end frameworks in 2023?",
    asker: users[10],
    time: "11:40 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [{ user: users[8], contributionTime: "11:45 AM" }],
  },
  {
    id: 2021284,
    question: "How do I handle state management in a React application?",
    asker: users[11],
    time: "11:50 AM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [
      { user: users[10], contributionTime: "11:55 AM" },
      { user: users[2], contributionTime: "12:00 PM" },
    ],
  },
  {
    id: 4253932,
    question: "What are the key features of ES12 (ECMAScript 2021)?",
    asker: users[12],
    time: "12:00 PM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [{ user: users[11], contributionTime: "12:05 PM" }],
  },
  {
    id: 6466743,
    question: "How do I implement lazy loading in a web application?",
    asker: users[3],
    time: "12:05 PM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [
      { user: users[12], contributionTime: "12:10 PM" },
      { user: users[5], contributionTime: "12:15 PM" },
    ],
  },
  {
    id: 4458952,
    question: "What are some best practices for version control with Git?",
    asker: users[9],
    time: "12:10 PM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [
      { user: users[6], contributionTime: "12:15 PM" },
      { user: users[4], contributionTime: "12:20 PM" },
    ],
  },
  {
    id: 6320035,
    question:
      "How do I implement real-time communication in a web application?",
    asker: users[0],
    time: "12:20 PM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [{ user: users[3], contributionTime: "12:25 PM" }],
  },
  {
    id: 2966252,
    question:
      "What are the benefits of using serverless architecture in web development?",
    asker: users[8],
    time: "12:25 PM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [
      { user: users[2], contributionTime: "12:30 PM" },
      { user: users[6], contributionTime: "12:35 PM" },
    ],
  },
  {
    id: 4665325,
    question: "How do I optimize database queries for better performance?",
    asker: users[4],
    time: "12:30 PM",
    date: "July 23, 2023",
    isAnswered: varStatus(),
    contributors: [
      { user: users[5], contributionTime: "12:35 PM" },
      { user: users[1], contributionTime: "12:40 PM" },
    ],
  },
];
