declare module "*.svg" {
  const content: any;
  export default content;
}

declare namespace TypesN {
  type ProjectData = {
    name: string;
    date: string;
    description: JSX.Element;
  }
}
