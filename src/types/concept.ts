
export interface ConceptTileData {
    title: string;
    subtitle: string;
    link: string;
    image: {
        asset: {
            url: string;
        };
    };
}

export interface ConceptSectionData {
    title: string;
    headingLevel: "h1" | "h2" | "h3" | "h4" | "h5";
    description: string;
    backgroundImage: {
        asset: {
            url: string;
        };
    };
    concepts: ConceptTileData[];
}
