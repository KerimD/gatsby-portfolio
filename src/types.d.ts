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
    works: Array<Work>;
  }

  type Work = {
    name: string;
    title?: string;
    date: string;
    description: string;
    preview: string;
    softwareTools: Array<Tool>;
    github?: string;
    liveSite: string;
  }

  type ModalProps = {
    isOpen: boolean;
    closeModal: () => void;
  }

  type LinkNode = { readonly id: string, readonly href: string | null, readonly name: string | null, readonly isEmail: boolean | null, readonly icon: { readonly svg: { readonly content: string | null } | null } | null };

  type LinkNodes = ReadonlyArray<LinkNode>;

  type Links = { links: LinkNodes; }
}
