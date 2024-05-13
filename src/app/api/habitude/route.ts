import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

// create
export async function POST(request: NextRequest) {

    const data = await request.json();

    const label = data.label;

    const newHabitude = await sql`insert into habitude (label) values (${label});`;

    return Response.json(newHabitude);
}

// read
export async function GET() {

    const data = await sql`select * from habitude;`;

    return NextResponse.json(data.rows)
}

// update

// delete