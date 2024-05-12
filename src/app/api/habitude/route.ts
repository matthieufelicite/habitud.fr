import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

// read
export async function GET() {

    const data = await sql`select * from habitude;`;

    return NextResponse.json(data.rows)
}

export async function POST(request: NextRequest) {

    const data = await request.json();

    const label = data.label;

    if (!label) {

        return new NextResponse("pas de label")
    }

    const newHabitude = await sql`insert into habitude (label) values (${label});`;

    return Response.json(newHabitude);
}