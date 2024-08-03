import { GithubIcon, LinkedInIcon, UserShieldIcon } from "@/components/icons";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Qrcode generator",
  description: "Quick QR code generator",
  contacts: [
    {
      link: "https://portfolio-codevisionevgen.vercel.app",
      icon: UserShieldIcon,
    },
    {
      link: "https://github.com/CodeVisionEvgen",
      icon: GithubIcon,
    },
    {
      link: "https://www.linkedin.com/in/evheniy-homenyuk-611b552b8/",
      icon: LinkedInIcon,
    },
  ],
};
