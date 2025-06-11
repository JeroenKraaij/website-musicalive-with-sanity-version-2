
import { NextResponse } from "next/server";
import { client } from "@/lib/sanity/client";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const limit = Number(searchParams.get("limit")) || 3;

    const query = `
      *[_type == "post" && defined(publishedAt)] | order(publishedAt desc)[0...$limit] {
        title,
        excerpt,
        mainImage { asset->{ url } },
        slug
      }
    `;

    const data = await client.fetch(query, { limit });
    return NextResponse.json(data);
}
