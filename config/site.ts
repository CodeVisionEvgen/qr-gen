import { GithubIcon, LinkedInIcon, UserShieldIcon } from "@/components/icons";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Qrcode generator",
  description: "Quick QR code generator",
  contacts: [
    {
      link: "https://homeniuk.vercel.app",
      icon: UserShieldIcon,
    },
    {
      link: "https://github.com/CodeVisionEvgen",
      icon: GithubIcon,
    },
    {
      link: "https://www.linkedin.com/in/yevhen-homeniuk-611b552b8",
      icon: LinkedInIcon,
    },
  ],
};
