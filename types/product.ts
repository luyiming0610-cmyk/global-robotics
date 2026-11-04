
export const PRODUCT_CATEGORIES = [
  {
    slug: "robotic-arms",
    label: "Industrial Robot Arms",
    description: "Precision robotic arms for industrial automation.",
  },
  {
    slug: "collaborative-robots",
    label: "Collaborative Robots",
    description: "Flexible robotic systems designed for human collaboration.",
  },
  {
    slug: "mobile-robots",
    label: "Autonomous Mobile Robots",
    description: "Intelligent mobile platforms for material handling.",
  },
  {
    slug: "machine-vision",
    label: "Machine Vision",
    description: "Vision systems for inspection and automation.",
  },
  {
    slug: "automation-cells",
    label: "Automation Systems",
    description: "Integrated solutions for industrial production.",
  },
] as const;

export type ProductCategorySlug =
  (typeof PRODUCT_CATEGORIES)[number]["slug"];

export type ProductVisual =
  | "robot-arm"
  | "collaborative-robot"
  | "mobile-robot"
  | "machine-vision"
  | "automation-cell";

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  model: string;
  category: ProductCategorySlug;
  shortDescription: string;
  description: string;
  applications: string[];
  highlights: string[];
  specifications: ProductSpecification[];
  featured: boolean;
  visual: ProductVisual;
}
