import type { IconType } from "react-icons";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";

export const Socials: { platform: string; link: string; icon: IconType }[] = [
  {
    platform: "LinkedIn",
    link: "https://www.linkedin.com/in/rex-randy-630648239/",
    icon: BiLogoLinkedinSquare,
  },
  {
    platform: "Github",
    link: "https://github.com/Rr-sobusy",
    icon: AiFillGithub,
  },
  {
    platform: "Facebook",
    link: "https://www.facebook.com/rexhernandez29",
    icon: BiLogoFacebookCircle,
  },
];
