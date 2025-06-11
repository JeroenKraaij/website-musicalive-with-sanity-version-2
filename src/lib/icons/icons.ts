
import {
    Facebook,
    Instagram,
    Youtube,
    Linkedin,
    Music,
    Mic,
    Drumstick,
    Users,
} from "lucide-react";

export const iconMap = {
    facebook: Facebook,
    instagram: Instagram,
    youtube: Youtube,
    linkedin: Linkedin,
    music: Music,
    mic: Mic,
    drumstick: Drumstick,
    users: Users,
} as const;

export type LucideIconName = keyof typeof iconMap;
