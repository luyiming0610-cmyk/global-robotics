
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[var(--container-width)] items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Brand Logo */}
        <Link
          href="/"
          aria-label={`${siteConfig.brandName} home`}
          className="flex shrink-0 items-center gap-3"
        >
          <span className="flex size-11 items-center justify-center rounded-lg bg-brand-navy text-white shadow-sm">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              className="size-7"
              aria-hidden="true"
            >
              <path
                d="M20 4L34 12V28L20 36L6 28V12L20 4Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M13 27V13H27V27M13 20H27"
                stroke="#60A5FA"
                strokeWidth="2.2"
                strokeLinecap="square"
              />
            </svg>
          </span>

          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-wider text-brand-navy">
              {siteConfig.brandName}
            </span>
            <span className="mt-1 text-[9px] font-semibold tracking-[0.18em] text-slate-500">
              INDUSTRIAL AUTOMATION
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href={siteConfig.primaryCta.href}
          className="hidden items-center gap-2 rounded-md bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 lg:inline-flex"
        >
          {siteConfig.primaryCta.label}
          <span aria-hidden="true">→</span>
        </Link>

        {/* Mobile Navigation */}
        <details className="relative lg:hidden">
          <summary
            aria-label="Toggle navigation menu"
            className="flex size-11 cursor-pointer list-none items-center justify-center rounded-md border border-slate-200 text-brand-navy [&::-webkit-details-marker]:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="size-6"
              aria-hidden="true"
            >
              <path
                d="M4 7H20M4 12H20M4 17H20"
                strokeLinecap="round"
              />
            </svg>
          </summary>

          <div className="absolute right-0 top-[calc(100%+0.75rem)] w-[min(20rem,calc(100vw-2.5rem))] rounded-xl border border-slate-200 bg-white p-4 shadow-xl">
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col"
            >
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-3 border-t border-slate-100 pt-3">
              <Link
                href={siteConfig.primaryCta.href}
                className="flex items-center justify-center gap-2 rounded-md bg-brand-blue px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                {siteConfig.primaryCta.label}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </details>

      </div>
    </header>
  );
}
