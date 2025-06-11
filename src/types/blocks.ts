
import type { LucideIconName } from "@/lib/icons/icons";

export interface TabDataItem {
    key: string;
    label: string;
    title: string;
    description: string;
    href: string;
    image: {
        asset: {
            url: string;
        };
    };
    icon: LucideIconName;
}

export interface SocialLink {
    icon: LucideIconName;
    href: string;
}
