import type { ProjectType } from "@/interfaces/ProjectType";

export const projects = [
  {
    projectName: "Taskifier",
    projectDescription:
      "Taskifier lets you manage your tasks efficiently and synchronized. Has a minimalistic dashboard that displays your tasks' progress. List down all your tasks and corresponding sub-tasks then set the target deadline and your good to go!",
    snapshotsUrl: [
      "/projects/taskifier/1-min.png",
      "/projects/taskifier/2-min.png",
      "/projects/taskifier/3-min.png",
      "/projects/taskifier/4-min.png",
    ],
    stacksUsed: [
      "Nextjs",
      "Tailwindcss",
      "Zod",
      "Prisma",
      "Postgresql",
      "OAuth2",
    ],
    codeComp: {
      codeRepo: "https://github.com/Rr-sobusy/taskifier-v2",
      liveSite: "https://taskifier-v2.vercel.app/",
    },
  },
  {
    projectName: "my.pokedex",
    projectDescription:
      "my.pokedex is an application use to fetch basic infos of a certain pokemon. This practice-project will leverage the power of Tanstack-Query by performing data fetching strategy and implementing client-side caching. ",
    snapshotsUrl: [
      "/projects/my.pokedex/snapshot-min.png",
      "/projects/my.pokedex/about-min.png",
      "/projects/my.pokedex/stats-min.png",
      "/projects/my.pokedex/evolution-min.png",
    ],
    stacksUsed: ["Nextjs", "Tailwindcss", "Zustand", "Tanstack-Query"],
    codeComp: {
      codeRepo: "https://github.com/Rr-sobusy/pokedex-v2",
      liveSite: "https://pokedex-v2-chi.vercel.app/",
    },
  },
  {
    projectName: "To-do App",
    projectDescription:
      "To-do app is an application inspired by a platform named Frontend Mentor. Built using Web API's localStorage as persistent-state storage coupled with React's Context API for handling global states, business logic and state mutations. And also has a feature for drag and dropping a list in a particular order.",
    snapshotsUrl: [
      "/projects/todo/1-min.png",
      "/projects/todo/3-min.png",

    ],
    stacksUsed: ["Reactjs", "Vite", "Tailwindcss","Hooks", "Context-API","Framer-motion"],
    codeComp: {
      codeRepo: "https://github.com/Rr-sobusy/todo-frontend-mentor",
      liveSite: "https://something-nonsense.netlify.app/",
    },
  },
] as ProjectType[];
