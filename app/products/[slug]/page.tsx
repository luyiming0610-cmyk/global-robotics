
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { products } from "@/data/products";
import { PRODUCT_CATEGORIES } from "@/types/product";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return { title: "Product Not Found | Global Robotics" };
  }

  return {
    title: `${product.name} | Global Robotics`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const category = PRODUCT_CATEGORIES.find(
    (item) => item.slug === product.category
  );

  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-blue-600">
          Products
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#102A43]">{product.name}</span>
      </div>

      {/* Product Hero */}
      <section className="bg-[#0B2035] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              {category?.label}
            </p>

            <p className="mt-5 text-sm font-semibold tracking-widest text-slate-400">
              MODEL {product.model}
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              {product.name}
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300">
              {product.description}
            </p>

            <Link
              href="/products"
              className="mt-9 inline-flex items-center gap-3 rounded-lg bg-blue-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
            >
              <span aria-hidden="true">←</span>
              Explore All Products
            </Link>
          </div>

          {/* Product Artwork Placeholder */}
          <div className="relative flex min-h-80 items-center justify-center overflow-hidden rounded-2xl border border-blue-300/20 bg-[#102A43]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(96,165,250,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.10)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="absolute h-64 w-64 rounded-full border border-blue-300/20" />

            <div className="absolute h-44 w-44 rounded-full border border-blue-300/30" />

            <div className="relative text-center">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
                Product Visualization
              </div>

              <div className="mt-5 text-4xl font-bold text-white">
                {product.model}
              </div>

              <div className="mt-3 text-xs uppercase tracking-widest text-slate-400">
                {product.visual.replaceAll("-", " ")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Product Overview
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#102A43]">
              Designed Around Industrial Requirements
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              {product.description}
            </p>

            <h3 className="mt-10 text-xl font-bold text-[#102A43]">
              Key Features
            </h3>

            <ul className="mt-5 space-y-4">
              {product.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                >
                  <span className="mt-1 text-blue-600">✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specifications */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Technical Data
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#102A43]">
              Specifications
            </h2>

            <div className="mt-8 overflow-hidden rounded-xl border border-slate-200">
              {product.specifications.map((specification, index) => (
                <div
                  key={specification.label}
                  className={`grid grid-cols-2 gap-4 px-5 py-5 text-sm ${
                    index % 2 === 0 ? "bg-slate-50" : "bg-white"
                  }`}
                >
                  <span className="font-medium text-slate-500">
                    {specification.label}
                  </span>

                  <span className="font-semibold text-[#102A43]">
                    {specification.value}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs leading-6 text-slate-400">
              Illustrative development data only. All technical specifications
              must be verified against actual manufacturer documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Applications
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#102A43]">
            Designed for Multiple Applications
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {product.applications.map((application, index) => (
              <div
                key={application}
                className="rounded-xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-bold text-blue-600">
                  0{index + 1}
                </span>

                <h3 className="mt-5 font-bold text-[#102A43]">
                  {application}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800"
            >
              ← Back to Product Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
