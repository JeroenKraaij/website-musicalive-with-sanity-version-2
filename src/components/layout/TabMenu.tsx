
"use client";

import { motion } from "framer-motion";
import { iconMap } from "@/lib/icons/icons"; // 👈 correcte import
import type { TabDataItem } from "@/types/blocks";

interface TabMenuProps {
    activeTab: string;
    onChange: (key: string) => void;
    tabs: TabDataItem[];
}

export default function TabMenu({ activeTab, onChange, tabs }: TabMenuProps) {
    return (
        <div className="max-w-6xl mx-auto bg-gray-200 rounded-full p-2 mb-12">
            <div className="relative flex justify-between gap-4">
                {tabs.map((tab) => {
                    const isActive = tab.key === activeTab;
                    const Icon = iconMap[tab.icon] ?? (() => null); // ✅ type-safe mapping

                    return (
                        <motion.button
                            key={tab.key}
                            onClick={() => onChange(tab.key)}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.98 }}
                            className={`relative flex-1 flex items-center justify-center px-5 py-2 text-sm font-medium rounded-full overflow-hidden ${
                                isActive ? "" : "bg-white"
                            }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-teal-700 rounded-full z-0"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span
                                className={`relative z-10 flex items-center ${
                                    isActive ? "text-white" : "text-zinc-800"
                                }`}
                            >
                <Icon className="w-5 h-5 mr-2" />
                                {tab.label}
              </span>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}
