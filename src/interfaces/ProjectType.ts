export type ProjectType = {
  projectName: string;
  projectDescription: string;
  snapshotsUrl: string[];
  stacksUsed: string[];
  codeComp: { codeRepo: string; liveSite: string };
};
