export type Product = {
  id: number | string;
  image: string;
  title: string;
  subtitle: string;
  aspect?: "square" | "landscape" | "portrait" | "custom";
};

export interface ContentSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryCta?: string;
  secondaryCta?: string;
  imagePosition?: "left" | "right";
  bgColor?: string;
  textAlign?: "center" | "left" | "right";
}

export type ProductGridProps = {
  title: string;
  products: Product[];
  aspect?: "square" | "landscape" | "portrait" | "custom";
  imageFit?: "contain" | "cover";
  scrollable?: boolean;
  className?: string;
  imageStyle?: { width?: number; height?: number };
};

export type LinkItem = {
  href?: string;
  text: string;
};

export type FooterSectionProps = {
  title: string;
  links: LinkItem[];
  className?: string;
};
