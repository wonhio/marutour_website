export type Destination = {
  slug: string;
  name: string;
  region: string;
  description: string;
  image: string;
  url: string;
};

export const regions = [
  "Middle East",
  "Asia Pacific",
  "Europe",
  "Africa",
  "Americas",
] as const;

export const destinations: Destination[] = [
  {
    slug: "dubai",
    name: "Dubai",
    region: "Middle East",
    description:
      "Our home base and the connective center of the network — desert experiences, skyline attractions and premium city tours.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
    url: "https://trateria.com/en/activities/result?city=06fff713-dc14-5417-999e-69cda6ca186b",
  },
  {
    slug: "abu-dhabi",
    name: "Abu Dhabi",
    region: "Middle East",
    description:
      "Cultural landmarks, island resorts and heritage experiences sourced through trusted local operators.",
    image:
      "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=1600&auto=format&fit=crop",
    url: "https://trateria.com/en/activities/result?city=8a7adf4a-91c1-5db4-b6fc-f8889e6b9542",
  },
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    region: "Middle East",
    description:
      "An emerging destination network spanning heritage sites, coastal development and desert adventure.",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1600&auto=format&fit=crop",
    url: "https://trateria.com/en/activities/result?country=36dd124d-2154-45f1-9388-7934cdf47a75",
  },
  {
    slug: "thailand",
    name: "Thailand",
    region: "Asia Pacific",
    description:
      "Island tours, cultural experiences and activity products distributed through longstanding local partnerships.",
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1600&auto=format&fit=crop",
    url: "https://trateria.com/en/activities/result?country=aafb3806-298a-5ec0-92de-535fe5adffc4",
  },
  {
    slug: "japan",
    name: "Japan",
    region: "Asia Pacific",
    description:
      "Precision-run experiences across cities and regions, sourced from operators known for consistency and care.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop",
    url: "https://trateria.com/en/activities/result?country=9f427701-b500-53d5-86b3-b5898db0d40f",
  },
  {
    slug: "korea",
    name: "Korea",
    region: "Asia Pacific",
    description:
      "A strategic sourcing market for MARU Tour, connecting Korean travel demand with our global supplier network.",
    image:
      "https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=1600&auto=format&fit=crop",
    url: "https://trateria.com/en/activities/result?country=0e8b8015-f33c-5b33-8c8f-c36d73240c0e",
  },
  {
    slug: "singapore",
    name: "Singapore",
    region: "Asia Pacific",
    description:
      "A distribution and transit hub for regional travel products, attractions and transfer services.",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1600&auto=format&fit=crop",
    url: "https://trateria.com/en/activities/result?country=885e90a3-a83d-56d3-b5e8-040b4017c825",
  },
  {
    slug: "indonesia",
    name: "Indonesia",
    region: "Asia Pacific",
    description:
      "Island and cultural experiences sourced across a wide network of local activity and transport operators.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop",
    url: "https://trateria.com/en/activities/result?country=6d00a09f-f616-5c08-9007-edd20bfd11cc",
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    region: "Asia Pacific",
    description:
      "Growing local supplier relationships across cities, coastlines and cultural heritage routes.",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1600&auto=format&fit=crop",
    url: "https://trateria.com/en/activities/result?country=93b0ec8f-d8ca-533b-85df-5c5ea918ee50",
  },
  {
    slug: "italy",
    name: "Italy",
    region: "Europe",
    description:
      "Heritage cities and coastal experiences sourced through established European supplier partnerships.",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1600&auto=format&fit=crop",
    url: "https://trateria.com/en/activities/result?country=2bea9058-3aff-45e4-976f-e356f9122394",
  },
  {
    slug: "spain",
    name: "Spain",
    region: "Europe",
    description:
      "Culture, coastline and city experiences distributed through regional supplier partnerships.",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1600&auto=format&fit=crop",
    url: "https://trateria.com/en/activities/result?country=78a385f5-fb19-4ad1-bff3-6ec178175b4a",
  },
];

export type WhatWeDoCard = {
  title: string;
  description: string;
};

export const whatWeDo: WhatWeDoCard[] = [
  {
    title: "Global Product Sourcing",
    description:
      "We identify and partner with reliable local operators and suppliers around the world to build a diverse portfolio of travel experiences.",
  },
  {
    title: "Travel Product Distribution",
    description:
      "We distribute sourced products through direct channels, travel agencies, online platforms and international B2B partners.",
  },
  {
    title: "Destination Partnerships",
    description:
      "We build long-term relationships with DMCs, tour operators, attractions and experience providers in key travel destinations.",
  },
  {
    title: "Travel Technology & Connectivity",
    description:
      "We use technology, digital distribution and API connectivity to make travel inventory easier to access, manage and distribute globally.",
  },
];

export const whyDubaiStats = [
  { label: "Global Hub", detail: "Positioned between major source and destination markets" },
  { label: "International Network", detail: "Supplier and partner relationships across regions" },
  { label: "Multi-Market Distribution", detail: "Channels spanning agencies, OTAs and platforms" },
  { label: "Local Supplier Access", detail: "Direct relationships with operators on the ground" },
];

export const b2bFeatures = [
  "Competitive travel inventory",
  "Local supplier relationships",
  "International destination coverage",
  "Centralized communication",
  "Scalable product distribution",
  "Technology-enabled connectivity",
];

export const sourcingProducts = [
  "Tours",
  "Activities",
  "Attractions",
  "Theme parks",
  "Museums",
  "Tickets",
  "Transfers",
  "Transportation",
  "Day trips",
  "Cruises",
  "Adventure activities",
  "Cultural experiences",
  "Food experiences",
  "Airport services",
  "Destination services",
];

export const distributionChannels = [
  "Direct consumers",
  "Travel agencies",
  "OTAs",
  "Corporate travel partners",
  "Affiliate partners",
  "International resellers",
  "Regional distributors",
];

export const b2bHighlights = [
  "Global supplier network",
  "Competitive pricing",
  "Destination expertise",
  "Product curation",
  "Centralized inventory",
  "Partnership support",
];

export const technologyPoints = [
  "Digital inventory management",
  "API connectivity",
  "Automated distribution",
  "Supplier onboarding",
  "Product data management",
  "Online booking infrastructure",
];

export const supplierTargets = [
  "Tour operators",
  "DMCs",
  "Attractions",
  "Activity operators",
  "Transportation providers",
  "Experience creators",
];

export const supplierBenefits = [
  "Access international customers",
  "Reach new distribution channels",
  "Expand outside your domestic market",
  "Increase product visibility",
  "Work with a Dubai-based global travel company",
  "Long-term partnership opportunities",
];

export const distributionTargets = [
  "Travel agencies",
  "OTAs",
  "Corporate travel companies",
  "Travel platforms",
  "Affiliate partners",
  "Resellers",
];

export const distributionBenefits = [
  "Access global travel inventory",
  "Destination diversity",
  "Competitive products",
  "Local supplier sourcing",
  "Centralized partnership management",
];

export const companyValues = [
  "Partnership",
  "Trust",
  "Global Perspective",
  "Local Expertise",
  "Technology",
  "Sustainable Growth",
];

export const inquiryTypes = [
  "Supplier Partnership",
  "B2B Distribution",
  "Corporate Inquiry",
  "General Inquiry",
];
