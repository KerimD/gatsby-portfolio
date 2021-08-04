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
    icon: FC<SVGProps<SVGSVGElement>>;
  }

  type Tool = {
    name: string;
    logo: React.FC<React.SVGProps<SVGSVGElement>>;
  }

  type Project = {
    name: string;
    title?: string;
    date: string;
    description: string;
    preview: string;
    softwareTools: Tool[];
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
