declare module "*.svg" {
  const content: any;
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
    description: JSX.Element;
  }
}
