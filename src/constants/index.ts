import {
  Atom,
  Box,
  Code2,
  Download,
  FastForward,
  FileQuestion,
  Forward,
  Frame,
  LogIn,
  Printer,
  Rocket,
  SquareTerminal,
  Wand,
  Waypoints,
  Workflow,
} from "lucide-react";

export const navItems = [
  {
    name: "UI/UX Design",
    items: [
      {
        title: "Warm up",
        url: "/uiux/warm-up",
        icon: LogIn,
      },
      {
        title: "Introduction",
        url: "/uiux/introduction",
        icon: Frame,
      },
      {
        title: "Frontend",
        url: "/uiux/frontend",
        icon: Code2,
      },
      {
        title: "Quiz",
        url: "/uiux/quiz",
        icon: FileQuestion,
      },
      {
        title: "Projects",
        url: "/uiux/projects",
        icon: Workflow,
      },
    ],
  },
  {
    name: "Front-End",
    items: [
      {
        title: "Introduction",
        url: "/frontend/introduction",
        icon: Frame,
      },
      {
        title: "Syntax",
        url: "/frontend/syntax",
        icon: SquareTerminal,
      },
      {
        title: "Quiz",
        url: "/frontend/quiz",
        icon: FileQuestion,
      },
      {
        title: "Projects",
        url: "/frontend/projects",
        icon: Workflow,
      },
    ],
  },
  {
    name: "Back-End",
    items: [
      {
        title: "Introduction",
        url: "/backend/introduction",
        icon: Frame,
      },
      {
        title: "Syntax",
        url: "/backend/syntax",
        icon: SquareTerminal,
      },
      {
        title: "Implementation",
        url: "/backend/implementation",
        icon: FastForward,
      },
      {
        title: "Quiz",
        url: "/backend/quiz",
        icon: FileQuestion,
      },
      {
        title: "Projects",
        url: "/backend/projects",
        icon: Workflow,
      },
    ],
  },
  {
    name: "Full-Stack",
    items: [
      {
        title: "React.js",
        url: "/fullstack/reactjs",
        icon: Atom,
      },
      {
        title: "Instalasi",
        url: "/fullstack/instalasi",
        icon: Download,
      },
      {
        title: "Hello World",
        url: "/fullstack/hello-world",
        icon: Printer,
      },
      {
        title: "Components",
        url: "/fullstack/components",
        icon: Box,
      },
      {
        title: "Props",
        url: "/fullstack/props",
        icon: Forward,
      },
      {
        title: "Props Quiz",
        url: "/fullstack/quiz-props",
        icon: FileQuestion,
      },
      {
        title: "Hooks",
        url: "/fullstack/hooks",
        icon: Wand,
      },
      {
        title: "Hooks Quiz",
        url: "/fullstack/quiz-hooks",
        icon: FileQuestion,
      },
      {
        title: "API",
        url: "/fullstack/api",
        icon: Waypoints,
      },
      {
        title: "API Quiz",
        url: "/fullstack/quiz-api",
        icon: FileQuestion,
      },
      {
        title: "TVMaze",
        url: "/fullstack/projects",
        icon: Workflow,
      },
      {
        title: "Deploy",
        url: "/fullstack/deploy",
        icon: Rocket,
      },
    ],
  },
];
