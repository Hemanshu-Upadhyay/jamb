import { ProductGrid } from "@/sections/product-grid";
import { Header } from "@/components/header";
import { ContentSection } from "@/sections/content-section";
import HeroSection from "@/sections/hero-section";

import {
  mockChimneyPieces,
  mockLighting,
  mockFurniture,
  stories,
} from "../../mockData/data";

// we can change the text alignment for each section as neededfor now the first one is left aligned and the rest are center aligned
const SECTIONS = {
  fireplaces: {
    textAlign: "left" as const,
    title: "Fireplaces",
    description:
      "Experience the warmth and elegance of our handcrafted fireplaces, designed to enhance your living space, Experience the warmth and elegance of our handcrafted fireplaces, designed to enhance your living space.",
    image: "/assets/3.png",
    imageAlt: "Luxury fireplace in a sage green room",
    primaryCta: "Explore Fireplaces",
    secondaryCta: "Sell Your Chimneypiece",
    imagePosition: "right" as const,
  },
  lighting: {
    textAlign: "center" as const,
    title: "Lighting",
    description:
      "Experience the warmth and elegance of our handcrafted fireplaces, designed to enhance your living space, Experience the warmth and elegance of our handcrafted fireplaces, designed to enhance your living space.",
    image: "/assets/4.png",
    imageAlt: "Luxury lighting fixtures",
    primaryCta: "Explore Lighting",
    imagePosition: "right" as const,
  },
  furniture: {
    textAlign: "center" as const,
    title: "Furniture",
    description:
      "Experience the warmth and elegance of our handcrafted furniture, designed to enhance your living space, Experience the warmth and elegance of our handcrafted furniture, designed to enhance your living space.",
    image: "/assets/7.png",
    imageAlt: "Luxury furniture collection",
    primaryCta: "Explore our Furniture",
    imagePosition: "right" as const,
  },
  journal: {
    textAlign: "center" as const,
    bgColor: "#DFDAD7",
    subtitle: "JOURNAL",
    title: "The Grand Collection",
    description:
      "Experience the warmth and elegance of our handcrafted furniture, designed to enhance your living space, Experience the warmth and elegance of our handcrafted furniture, designed to enhance your living space.",
    image: "/assets/13.png",
    imageAlt: "The Grand Collection feature image",
    primaryCta: "Explore our Furniture",
    imagePosition: "right" as const,
  },
  subscribe: {
    textAlign: "center" as const,
    bgColor: "#DFDAD7",
    title: "Subscribe to the Jamb Journal",
    description:
      "Experience the warmth and elegance of our handcrafted furniture, designed to enhance your living space, Experience the warmth and elegance of our handcrafted furniture, designed to enhance your living space.",
    image: "/assets/15.png",
    imageAlt: "Subscribe to Jamb Journal",
    primaryCta: "Discover more",
    imagePosition: "right" as const,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <section className="">
        <div>
          <ContentSection {...SECTIONS.fireplaces} />
          <div>
            <ContentSection {...SECTIONS.lighting} />
          </div>
          <ProductGrid
            title="Our latest chimneypieces"
            products={mockChimneyPieces}
            aspect="landscape"
            imageFit="cover"
          />
          <ProductGrid
            title="Our latest lighting"
            products={mockLighting}
            aspect="portrait"
            imageFit="cover"
          />
        </div>

        <div>
          <ContentSection {...SECTIONS.furniture} />
          <ProductGrid
            title="Our latest furniture"
            products={mockFurniture}
            imageFit="cover"
          />
        </div>

        <div>
          <ContentSection {...SECTIONS.journal} />
          <ProductGrid
            title="See more of our latest stories"
            products={stories}
            imageFit="cover"
          />
        </div>

        <ContentSection {...SECTIONS.subscribe} />
      </section>
    </main>
  );
}
