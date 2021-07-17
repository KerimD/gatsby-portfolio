declare module "*.svg" {
  const content: any;
  export default content;
}

declare namespace TypesN {
  type ExperienceItem = {
    title: string;
    company: string;
    date: string;
    bulletPoints: JSX.Element[];
  }
  type ProjectItem = {
    name: string;
    date: string;
    description: JSX.Element;
  }
}
