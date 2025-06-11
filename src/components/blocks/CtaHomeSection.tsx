
"use client";

import { useState } from "react";
import TabMenu from "@/components/layout/TabMenu";
import TabContent from "@/components/layout/TabContent";
import { TabDataItem } from "@/types/blocks";
import { getHeading } from "@/lib/utils/headingMap";

interface Props {
    title: string;
    subtitle?: string;
    tabs: TabDataItem[];
}

export default function CtaTabSectionFromSanity({ title, subtitle, tabs }: Props) {
    const [activeTab, setActiveTab] = useState(tabs[0].key);

    // Gebruik H2 als standaard heading
    const Heading = getHeading("h2");

    return (
        <section className="bg-black text-white py-24 px-4 sm:px-6 md:px-8">
            <div className="max-w-5xl mx-auto text-center mb-24">
                <Heading className="mb-6">{title}</Heading>
                {subtitle && <p className="lead mb-12">{subtitle}</p>}
            </div>

            <TabMenu activeTab={activeTab} onChange={setActiveTab} tabs={tabs} />
            <TabContent activeTab={activeTab} tabs={tabs} />
        </section>
    );
}
