import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import dueImasters from "@/../public/icons/DueImasters.png";
import laterImg from "@/../public/icons/later.png";
import { FaCrown, FaDev, FaRegNewspaper, FaSearch } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import tip from "@/../public/icons/tip.png";
import AGWM from "@/../public/icons/agwm.png";
import virtualstagingart from "@/../public/icons/virtualstagingart.png";
import paraform from "@/../public/icons/paraform.png";
import tradingPlatform from "@/../public/trading_platform.png";

export const DATA = {
  name: "Eric",
  initials: "Eric",
  url: "https://new-portfolio-lake-sigma.vercel.app/",
  location: "Carlton, Victoria",
  locationLink: "",
  description: "Software Engineer",
  summary:
    "I’m a Senior Full Stack Developer with over 8 years of experience specializing in scalable web applications. My expertise lies in TypeScript, React, and Node.js, where I’ve built robust, maintainable applications that prioritize performance, security, and scalability. I'm now actively seeking challenging opportunities to leverage an extensive skill set to drive project success and deliver outstanding value to clients.",
  avatarUrl: "/icons/me.jpg",
  skills: [
    "React",
    "Nuxt.js",
    "Next.js",
    "TailwindCSS",
    "Typescript",
    "Node.js",
    "Express",
    "Redis",
    "Postgres",
    "Docker",
    "Java",
    "C++",
    "Javascript",
    "C",
    "C#",
    "Prisma ORM",
    "TRPC",
    "DB Management",
    "Python",
    "HTML",
    "CSS",
    "Ruby",
    "SQL",
    "Kotlin",
    "Swift",
    "PHP",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "./Resume.pdf", icon: NotebookIcon, label: "Resume" },
  ],
  contact: {
    email: "ericlamwork15@gmail.com",
    tel: "+61 494308654",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/eric-fullstack-javascript/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:ericlamwork15@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Codal",
      href: "https://codal.com/",
      badges: [],
      location: "Chicago, Illinois, United States",
      title: "Senior Full Stack Developer",
      logoUrl: "icons/codal-logo.jpeg",
      start: "Sep 2021",
      end: "Dec 2024",
      description: `Codal is an design and development consultancy that helps enterprise organizations solve complex problems and accelerate growth through cutting-edge, data-driven digital solutions.

      As a Senior Full Stack developer at Codal, I collaborated with key stakeholders to deliver innovative digital solutions for clients across various industries, utilizing React, Next.js, and Node.js to build scalable applications that enhance performance, security, and user experience, while integrating Stripe and PayPal for seamless payment processing.

      Tech Stack: React.js, Node.js, Nuxt.js, Redux, Next.js, Typescript, Postgres, Tailwind, GCP, AWS, CI/CD, Jest, Enzyme, Stripe, PayPal`,
    },
    {
      company: "Busy Human",
      href: "https://busyhuman.com/",
      badges: [],
      location: "Orem, Utah, United States",
      title: "Full Stack Developer",
      logoUrl: "icons/busyhuman-logo.jpeg",
      start: "Jun 2020",
      end: "Sep 2021",
      description: `Busy Human is a custom software development company

      Tech Stack: React.js, Redux, Next.js, Typescript, Jest, Cypress, Node.js, Nest.js, Jenkins, Docker Postgres, Tailwind, GCP`,
    },
    {
      company: "Vention",
      href: "https://ventionteams.com/",
      badges: [],
      location: "New York, United States",
      title: "MERN Stack Developer",
      logoUrl: "icons/vention-logo.jpeg",
      start: "May 2016",
      end: "May 2020",
      description: `​Vention is a prominent software development company with over 20 years of experience, specializing in delivering cutting-edge, scalable solutions for startups and tech-powered enterprises worldwide. 

      Tech Stack: React.js, Redux, Next.js, Typescript, Postgres, Tailwind, Docker, AWS`,
    },
  ],
  education: [
    {
      school: "Victoria University",
      href: "https://www.vu.edu.au",
      degree: "Bachelor's Degree in Computer Science",
      logoUrl: "icons/vu.png",
      start: "2008",
      end: "2012",
    }
  ],
  projects: [
    {
      title: "Later",
      href: "https://www.later.com/",
      dates: "November 2024",
      active: true,
      description:
        "Social media and influencer marketing platform designed to assist brands and creators in enhancing their online presence and engagement.",
      technologies: [
        "Framer",
        "Next js",
        "Postgre DB",
        "TRPC",
        "Tailwind CSS",
        "NextUI CSS framework",
        "Schadcn CSS framework",
      ],
      image: laterImg,
      links: [
        {
          type: "Website",
          href: "https://later.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "High-Performance Game Bettign Platform",
      href: "https://www.duelmasters.io/",
      dates: "March 2024 - June 2024",
      active: true,
      description:
        "Online platform that facilitates competitive gaming tournaments",
      technologies: [
        "Next.js",
        "Prisma ORM",
        "TRPC",
        "Postgre DB",
        "Tailwind CSS",
        "Tremo CSS framework",
      ],
      image: dueImasters,
      links: [
        {
          type: "Website",
          href: "https://www.duelmasters.io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Tipriyo",
      dates: "Nov 2023 – Jan 2024",
      href: "https://www.tipriyo.ai/en",
      active: true,
      image: tip,
      description:
        "Tiprio is a product that easily generates unlimited furnished images of your home in less than a minute",
      technologies: [
        "Next js",
        "Prisma ORM",
        "TRPC",
        "Supabase DB",
        "Tailwind CSS",
        " Next js",
        " Prisma ORM",
        "Postgre DB",
        "TRPC",
        "Tailwind CSS",
        "NextUI CSS framework",
        " Schadcn CSS framework",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.tipriyo.ai/en",
          icon: <Icons.globe className="h-4 w-4" />,
        },
      ],
    },
    {
      title: "AGWM",
      dates: "Nov 2022 – Jan 2023",
      href: "https://agwm.org/en/",
      active: true,
      image: AGWM,
      description:
        "Contributed to the frontend development of the organization's web presence, enhancing UI responsiveness, integrating API endpoints, and implementing complex user interactions with Vue.js.",
      technologies: [
        "Vue.js",
        "Python Django",
        "Next js",
        "Prisma ORM",
        "TRPC",
        "Supabase DB",
        "Tailwind CSS",
        " Next js",
        " Prisma ORM",
        "Postgre DB",
        "TRPC",
        "Tailwind CSS",
        "NextUI CSS framework",
        " Schadcn CSS framework",
      ],
      links: [
        {
          type: "Website",
          href: "https://agwm.org/en/",
          icon: <Icons.globe className="h-4 w-4" />,
        },
      ],
    },
  ]
} as const;
