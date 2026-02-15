import type { MetadataRoute } from "next";

const BASE_URL = "https://polksystems.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        "/",
        "/story",
        "/how-it-works",
        "/why-we-are-different",
        "/process",
        "/process/discover",
        "/process/setup",
        "/process/activate",
        "/process/control",
        "/get-started",
        "/solutions",
        "/system",
        "/technology",
        "/contact",
        "/audit",
        "/privacy",
        "/terms",
        "/license",
        "/warranty",
    ];

    return routes.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "/" ? "weekly" as const : "monthly" as const,
        priority: route === "/" ? 1 : route === "/get-started" ? 0.9 : 0.7,
    }));
}
