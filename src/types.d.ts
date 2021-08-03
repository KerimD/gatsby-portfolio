declare module "*.svg" {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare namespace TypesN {
  type Social = {
    name: string;
    href?: string;
    icon: any;
  }

  type Skills = {
    name: string;
    logo: string;
  }

  type Project = {
    name: string;
    title?: string;
    date: string;
    description: string;
    preview: string;
    softwareTools: Software[];
    github: string;
    liveSite: string;
  }

  type User = {
    name: string;
    who: string;
  }

  type Recommendation = {
    user: User;
    content: string;
  }
}
