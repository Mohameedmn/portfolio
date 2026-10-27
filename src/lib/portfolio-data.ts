
// All portfolio content lives here so it is easy to update.

export const PROFILE = {
  name: "Mohamed Mansouri",
  email: "mohamed.mansouri0906@gmail.com",
  linkedin: "https://www.linkedin.com/in/mansouri-mohamed-913069318/",
  github: "https://github.com/Mohameedmn",
  portrait: "https://mohameedmn.github.io/images/photo_id.jpg",
  // Place the CV PDF at public/Mohamed_Mansouri_CV.pdf
  cvUrl: `${import.meta.env.BASE_URL}Mohamed_Mansouri_CV.pdf`,
  usthb: "https://www.usthb.dz/",
};

export type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  context?: string;
  role?: { label: string; text: string }[];
  highlights?: string[];
  link?: { label: string; href: string };
  image?: string;
  visual: "web" | "esim" | "route" | "research";
};

const projectImage = (path: string) =>
  `${import.meta.env.BASE_URL}images/projects/${path}`;

export const PROJECTS: Project[] = [
  {
    title: "To The Moon With English",
    category: "Web Platform · Backend Development",
    description:
      "An online English-learning platform featuring courses, learning videos, quizzes, evaluations, student enrollments, feedback, and certificate-related workflows.",
    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
      "React",
      "TypeScript",
      "Bunny Stream",
    ],
    role: [
      {
        label: "My role — Backend",
        text: "Developed the Laravel backend, REST API, database workflows, and Bunny Stream video integration.",
      },
      {
        label: "Frontend",
        text: "React and TypeScript frontend consuming the API.",
      },
    ],
    link: {
      label: "Visit website",
      href: "https://tothemoonwithenglish.com/",
    },
    image: projectImage("to-the-moon/homepage.png"),
    visual: "web",
  },
  {
    title: "eSIM Mobile Application",
    category: "Mobile Development · Internship Project",
    description:
      "An eSIM purchasing application developed during my internship at Djezzy, combining mobile development with facial recognition and NFC-based identity verification.",
    tech: ["Flutter", "Dart", "Laravel", "NFC", "Face Recognition"],
    context: "Internship · Djezzy · Jan–Jun 2025",
    image: projectImage("djezzy/accueil.png"),
    visual: "esim",
  },
  {
    title: "Routimize",
    category: "Software Development · Internship Project",
    description:
      "A route optimization solution designed to support distribution and delivery planning, with a mobile interface for working with routes and stops.",
    tech: ["Flutter", "Dart", "REST APIs", "GetX"],
    context: "Internship · Ittihad Int Incubator · Sep–Nov 2025",
    image: projectImage("routimize/maps_page.png"),
    visual: "route",
  },
  {
    title: "Crop Classification Using Deep Learning",
    category: "Artificial Intelligence · Scientific Research",
    description:
      "Crop classification from multi-source satellite time-series data using CNN and Transformer architectures.",
    tech: [
      "Python",
      "PyTorch",
      "Sentinel-2",
      "Google Earth Engine",
      "Deep Learning",
    ],
    highlights: [
      "Designed MCTNet-TAP, an architecture extension using Temporal Attention Pooling.",
      "91.6% Overall Accuracy · 0.887 Cohen's Kappa · 91.4% F1-score on the test set.",
    ],
    visual: "research",
  },
];

export type MobileApp = {
  name: string;
  description: string;
  status: "Personal project" | "Prototype" | "Published application";
  tech: string[];
  features: string[];
  screenshots: string[];
  links: { label: string; href: string }[];
};

export const MOBILE_APPS: MobileApp[] = [
  {
    name: "Sihaty",
    description:
      "A healthcare mobile application featuring doctor discovery, doctor details, and user account access.",
    status: "Prototype",
    tech: ["Flutter", "Dart"],
    features: [
      "Browse the list of doctors",
      "View doctor details",
      "User login and home screen",
    ],
    screenshots: [
      projectImage("sihaty/Home_page%20(1).png"),
      projectImage("sihaty/Doctors_page.png"),
      projectImage("sihaty/Doctor_details_page.png"),
    ],
    links: [],
  },
  {
    name: "Sakinah",
    description:
      "An Islamic mobile application designed around Quran reading, listening, and daily routines.",
    status: "Personal project",
    tech: ["Flutter", "Dart"],
    features: [
      "Browse the list of surahs",
      "Read Quran content",
      "Listen to Quran content and manage daily routines",
    ],
    screenshots: [
      projectImage("sakinah/Home_Page.png"),
      projectImage("sakinah/Read_Page.png"),
      projectImage("sakinah/Listen_Page.png"),
    ],
    links: [],
  },
];

export const EXPERIENCE = [
  {
    type: "Professional",
    role: "Backend Developer",
    org: "To The Moon With English",
    dates: "2026",
    bullets: [
      "Develop the Laravel backend and REST API for the learning platform.",
      "Implement courses, videos, quizzes, evaluations, enrollments, feedback, and certificate workflows.",
      "Integrate Bunny Stream for video delivery.",
    ],
    tech: ["Laravel", "PHP", "MySQL", "REST API", "Bunny Stream"],
  },
  {
    type: "Internship",
    role: "Practical Internship",
    org: "Ittihad Int Incubator",
    dates: "Sep – Nov 2025",
    bullets: [
      "Worked on Routimize, a route optimization solution for distribution and delivery planning.",
      "Built the mobile client with Flutter and GetX, consuming REST APIs.",
    ],
    tech: ["Flutter", "Dart", "REST APIs", "GetX"],
  },
  {
    type: "Internship",
    role: "Final-Year Internship",
    org: "Djezzy",
    dates: "Jan – Jun 2025",
    bullets: [
      "Developed an eSIM purchasing mobile application.",
      "Combined facial recognition and NFC-based identity verification.",
    ],
    tech: ["Flutter", "Dart", "Laravel"],
  },
];

export const SKILLS: { group: string; items: string[] }[] = [
  { group: "Mobile Development", items: ["Flutter", "Dart"] },
  {
    group: "Backend & Web",
    items: ["Laravel", "PHP", "REST APIs", "React", "TypeScript"],
  },
  {
    group: "AI & Data",
    items: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "NumPy",
      "Pandas",
    ],
  },
  { group: "Databases", items: ["MySQL", "Oracle", "SQLite"] },
  {
    group: "Programming",
    items: ["Python", "Dart", "PHP", "C#", "Java"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Jupyter Notebook", "Anaconda", "VS Code", "Figma"],
  },
];
