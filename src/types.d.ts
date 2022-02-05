declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.ico' {
  const content: string;
  export default content;
}

declare namespace TypesN {
  import { ContentfulContentType } from '../graphql-types';

  type Social = {
    name: string;
    href: string;
    icon: FC<SVGProps<SVGSVGElement>>;
  }

  type Tool = {
    name: string;
    logo: React.FC<React.SVGProps<SVGSVGElement>>;
    href?: string;
  }

  type WorksProps = {
    category: string;
    works: Work[];
  }

  type Work = {
    name: string;
    title?: string;
    date: string;
    description: string;
    preview: string;
    softwareTools: Tool[];
    github?: string;
    liveSite: string;
  }

  type ModalProps = {
    isOpen: boolean;
    closeModal: () => void;
  }

  type FooterProps = {
    contacts: Array<ContentfulContentType>;
    socials: Array<ContentfulContentType>;
  }
}
