
import type { Metadata } from "next";
import ProductCatalog from "@/components/products/ProductCatalog";

export const metadata: Metadata = {
  title: "Products | Global Robotics",
  description:
    "Explore industrial robotics, collaborative robots, autonomous mobile robots and intelligent automation solutions.",
};

export default function ProductsPage() {
  return <ProductCatalog />;
}
