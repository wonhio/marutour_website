import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${siteConfig.domain}`;
  const routes = [
    "",
    "/business",
    "/destinations",
    "/partners",
    "/partners/supplier",
    "/partners/distribution",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-conditions",
    "/cookie-policy",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
