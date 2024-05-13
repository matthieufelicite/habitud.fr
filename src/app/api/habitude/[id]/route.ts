import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

type Params = {

    params: {

        id: number
    }
}

// create

// read
export async function GET(request: NextRequest, { params }: Params) {

    const id: number = params.id;

    const habitude = await sql`select * from habitude where id = ${id};`;

    return Response.json(habitude.rows[0]);
}

// update
export async function PUT(request: NextRequest, { params }: Params) {

    const id: number = params.id;

    const data = await request.json();

    const label = data.label;

    const habitude = await sql`update habitude set label = ${label} where id = ${id};`;

    return Response.json(habitude.rows[0]);
}

// delete
export async function DELETE(request: NextRequest, { params }: { params: { id: number } }) {

    const id: number = params.id;

    sql`delete from habitude where id = ${id};`;

    return new NextResponse("");
}