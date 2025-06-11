
// types/footer.ts
export interface FooterData {
    backgroundImage?: {
        asset?: {
            url: string;
        };
        alt?: string;
    };
    ctaTitle?: string;
    ctaButtonLabel?: string;
    ctaButtonHref?: string;
    socialItems?: {
        icon: string;
        href: string;
    }[];
    logo?: {
        asset?: {
            url: string;
        };
    };
    footerLinks?: {
        title: string;
        url: string;
    }[];
    copyrightText?: string;
}
