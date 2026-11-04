
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import {
  PRODUCT_CATEGORIES,
  type ProductCategorySlug,
} from "@/types/product";

type CategoryFilter = "all" | ProductCategorySlug;
type SortOption = "featured" | "name-asc" | "name-desc";

export default function ProductCatalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [sort, setSort] = useState<SortOption>("featured");

  const filteredProducts = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    const result = products.filter((product) => {
      const matchesCategory =
        category === "all" || product.category === category;

      const matchesSearch =
        !keyword ||
        [
          product.name,
          product.model,
          product.shortDescription,
          product.description,
          ...product.applications,
        ]
          .join(" ")
          .toLowerCase()
          .includes(keyword);

      return matchesCategory && matchesSearch;
    });

    return [...result].sort((a, b) => {
      if (sort === "name-asc") {
        return a.name.localeCompare(b.name);
      }

      if (sort === "name-desc") {
        return b.name.localeCompare(a.name);
      }

      return (
        Number(b.featured) - Number(a.featured) ||
        a.name.localeCompare(b.name)
      );
    });
  }, [search, category, sort]);

  return (
    <main>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[#0B2035] text-white">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(96,165,250,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.16)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-400" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Our Product Portfolio
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Robotics & Automation
            <span className="block text-blue-400">
              Engineered for Industry.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Explore our industrial robotics and automation product concepts,
            designed around precision engineering, intelligent systems
            and evolving manufacturing requirements.
          </p>

          <div className="mt-12 flex flex-wrap gap-12 border-t border-white/15 pt-8">
            <div>
              <div className="text-3xl font-bold">
                {String(products.length).padStart(2, "0")}
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-slate-400">
                Demo Products
              </div>
            </div>

            <div>
              <div className="text-3xl font-bold">
                {String(PRODUCT_CATEGORIES.length).padStart(2, "0")}
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-slate-400">
                Categories
              </div>
            </div>

            <div>
              <div className="text-3xl font-bold">B2B</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-slate-400">
                Business Focus
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section
        id="catalog"
        className="mx-auto max-w-7xl px-6 py-16 md:py-24"
      >
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Explore Our Products
          </p>

          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#102A43] md:text-4xl">
                Find the Right Solution
              </h2>

              <p className="mt-3 text-slate-500">
                Browse our robotics and industrial automation portfolio.
              </p>
            </div>

            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-bold text-[#102A43]">
                {filteredProducts.length}
              </span>{" "}
              of {products.length} products
            </p>
          </div>
        </div>

        {/* Search and Sort */}
        <div className="mb-7 grid gap-4 md:grid-cols-[1fr_220px]">
          <div className="relative">
            <label htmlFor="product-search" className="sr-only">
              Search products
            </label>

            <input
              id="product-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by product name, model or application..."
              className="w-full rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label htmlFor="product-sort" className="sr-only">
              Sort products
            </label>

            <select
              id="product-sort"
              value={sort}
              onChange={(event) =>
                setSort(event.target.value as SortOption)
              }
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700 outline-none focus:border-blue-500"
            >
              <option value="featured">Featured First</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-10 flex gap-2 overflow-x-auto pb-3">
          <button
            type="button"
            onClick={() => setCategory("all")}
            aria-pressed={category === "all"}
            className={`shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition ${
              category === "all"
                ? "bg-[#102A43] text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:border-blue-400 hover:text-blue-600"
            }`}
          >
            All Products
          </button>

          {PRODUCT_CATEGORIES.map((item) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => setCategory(item.slug)}
              aria-pressed={category === item.slug}
              className={`shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition ${
                category === item.slug
                  ? "bg-[#102A43] text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => {
              const categoryName = PRODUCT_CATEGORIES.find(
                (item) => item.slug === product.category
              )?.label;

              return (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  {/* Product Visual */}
                  <div className="relative h-56 overflow-hidden bg-[#102A43]">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(96,165,250,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.10)_1px,transparent_1px)] bg-[size:32px_32px]" />

                    <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full border border-blue-300/20" />

                    <div className="absolute right-6 top-6 h-40 w-40 rounded-full border border-blue-300/20" />

                    <div className="absolute right-16 top-16 h-20 w-20 rounded-full border border-blue-400/30 bg-blue-500/10" />

                    <div className="absolute bottom-6 left-6">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
                        Engineering Series
                      </p>

                      <p className="mt-2 text-2xl font-bold text-white">
                        {product.model}
                      </p>

                      <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">
                        {product.visual.replaceAll("-", " ")}
                      </p>
                    </div>

                    {product.featured && (
                      <span className="absolute right-5 top-5 rounded bg-blue-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Product Information */}
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                      {categoryName}
                    </p>

                    <h3 className="mt-3 text-xl font-bold text-[#102A43] transition group-hover:text-blue-600">
                      {product.name}
                    </h3>

                    <p className="mt-3 min-h-16 text-sm leading-7 text-slate-500">
                      {product.shortDescription}
                    </p>

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#102A43] transition hover:text-blue-600"
                      >
                        Explore Product
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 py-20 text-center">
            <h3 className="text-xl font-bold text-[#102A43]">
              No products found
            </h3>

            <p className="mt-3 text-sm text-slate-500">
              Try another keyword or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("all");
                setSort("featured");
              }}
              className="mt-6 rounded-lg bg-[#102A43] px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
