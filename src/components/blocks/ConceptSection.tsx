
"use client";

import { useState } from "react";
import { ConceptSectionData } from "@/types/concept";
import ConceptTile from "@/components/layout/ConceptTile";
import PageBackground from "@/components/layout/PageBackground";
import { H1, H2, H3, H4, H5 } from "@/components/ui/Heading";

export default function ConceptSection({ data }: { data: ConceptSectionData }) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { title, description, concepts, backgroundImage, headingLevel } = data;

    const Heading = {
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
    }[headingLevel || "h3"];
    console.log("CONCEPTS DATA", concepts);

    return (
        <PageBackground
            backgroundUrl={backgroundImage?.asset?.url}
            gradientOpacity={0.75}
            overlay="black"
            className="flex flex-col w-full pb-48"
        >
            <div className="text-center max-w-6xl mx-auto px-4 pb-16">
                <Heading className="mb-4">{title}</Heading>
                <p className="lead mb-12">{description}</p>
            </div>

            <div className="flex flex-col md:flex-row w-full h-auto md:h-80 overflow-hidden">
                {concepts.map((concept, index) => (
                    <ConceptTile
                        key={concept.title}
                        {...concept}
                        isHovered={hoveredIndex === index}
                        onHover={() => setHoveredIndex(index)}
                        onLeave={() => setHoveredIndex(null)}
                    />
                ))}
            </div>
        </PageBackground>
    );
}

