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

  type LinkType = ReadonlyArray<{ readonly name: string | null, readonly href: string | null, readonly icon: { readonly svg: { readonly content: string | null } | null } | null }>;

  type LinksProps = {
    links: LinkType;
    // links: ReadonlyArray<Queries.ContentfulSocial | Queries.ContentfulContact>;
  }

  type FooterProps = {
    contacts: LinkType;
    socials: LinkType;
    // contacts: ReadonlyArray<Queries.ContentfulContact>;
    // socials: ReadonlyArray<Queries.ContentfulSocial>;
  }
}
