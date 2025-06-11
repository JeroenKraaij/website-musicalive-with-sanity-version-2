
// lib/utils/headingMap.ts
import { H1, H2, H3, H4, H5 } from "@/components/ui/Heading";

export function getHeading(level?: string) {
    switch (level) {
        case "h1":
            return H1;
        case "h2":
            return H2;
        case "h3":
            return H3;
        case "h4":
            return H4;
        case "h5":
            return H5;
        default:
            return H2; // fallback
    }
}
