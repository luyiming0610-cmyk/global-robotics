
export const siteConfig = {
  // Internal project name
  projectName: "Global Robotics",

  // Public brand name: to be confirmed
  brandName: "Brand Name TBD",

  // Website information
  description:
    "A B2B website concept for industrial robotics and automation solutions.",

  // Language configuration
  defaultLocale: "en",
  supportedLocales: ["en", "zh-CN"],

  // Main navigation
  navigation: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Industries", href: "/industries" },
    { label: "Solutions", href: "/solutions" },
    { label: "About Us", href: "/about" },
  ],

  // Primary call to action
  primaryCta: {
    label: "Request a Quote",
    href: "/contact",
  },
} as const;
