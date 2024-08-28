import type { ProjectType } from "@/interfaces/ProjectType";

export const projects: ProjectType[] = [
    {
      projectName: "Taskifier",
      projectDescription:
        "Taskifier lets you manage your tasks efficiently and synchronized.",
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
        "Authjs",
        "OAuth2",
      ],
    },
  ];