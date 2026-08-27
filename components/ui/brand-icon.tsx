import type { IconType } from "react-icons";
import {
  SiBootstrap,
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
  SiGooglecolab,
  SiHtml5,
  SiJavascript,
  SiLaragon,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiStreamlit,
  SiTailwindcss,
  SiVercel,
  SiXampp,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { LuCodeXml, LuDatabase } from "react-icons/lu";
import { VscVscode } from "react-icons/vsc";

const icons: Record<string, IconType> = {
  Antigravity: LuCodeXml,
  "Bootstrap CSS": SiBootstrap,
  CSS: SiCss,
  Figma: SiFigma,
  Git: SiGit,
  GitHub: SiGithub,
  "Google Colab": SiGooglecolab,
  HTML: SiHtml5,
  JavaScript: SiJavascript,
  Laragon: SiLaragon,
  LinkedIn: FaLinkedin,
  MySQL: SiMysql,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  PHP: SiPhp,
  Python: SiPython,
  React: SiReact,
  SQL: LuDatabase,
  Streamlit: SiStreamlit,
  "Tailwind CSS": SiTailwindcss,
  Vercel: SiVercel,
  "VS Code": VscVscode,
  XAMPP: SiXampp,
};

export function getBrandIcon(name: string) {
  return icons[name] ?? LuCodeXml;
}
