// Central configuration file.
// Update contact details, links and navigation labels here —
// changes propagate across the entire site.

export const siteConfig = {
  name: "MARU Tour",
  domain: "marutour.com",
  tagline: "Global Travel Products. Local Expertise. One Network.",
  description:
    "MARU Tour is a Dubai-based global travel company sourcing tours, activities and travel experiences from local suppliers and distributing them to travelers and travel partners worldwide.",
  location: "Dubai, United Arab Emirates",
  companyName: "MARU EVENT TOURISM LLC",
  address: {
    line1: "Prime Business Centre",
    line2: "Tower B Unit 12B05, JVC",
    city: "Dubai, United Arab Emirates",
  },
  contact: {
    email: "info@marutour.com",
    whatsapp: "+971588455201",
    whatsappDisplay: "+971 58 845 5201",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/marutour",
    instagram: "https://www.instagram.com/marutour",
  },
};

export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Business", href: "/business" },
  { label: "Destinations", href: "/destinations" },
  { label: "Partners", href: "/partners" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Business", href: "/business" },
    { label: "Contact", href: "/contact" },
  ],
  Business: [
    { label: "Product Sourcing", href: "/business#sourcing" },
    { label: "Global Distribution", href: "/business#distribution" },
    { label: "B2B Travel Solutions", href: "/business#b2b" },
  ],
  Partners: [
    { label: "Supplier Partners", href: "/partners/supplier" },
    { label: "Distribution Partners", href: "/partners/distribution" },
  ],
};

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];
