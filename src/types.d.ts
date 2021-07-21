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

  type Project = {
    name: string;
    title: string;
    date: string;
    imageSrc: string;
    github: string;
    liveSite: string;
    description: JSX.Element;
  }
}
