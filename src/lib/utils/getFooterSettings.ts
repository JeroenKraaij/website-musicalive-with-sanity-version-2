
// lib/sanity/getFooterSettings.ts
import { client } from "../sanity/client";
import { footerSettingsQuery } from "../sanity/queries/footer";

export async function getFooterSettings() {
    return await client.fetch(footerSettingsQuery);
}
