import { NextRequest, NextResponse } from "next/server";
import { neon } from '@neondatabase/serverless';
import { nanoid } from 'nanoid'
import { error } from "console";

export async function POST(Req:NextRequest) { //long_url alias
    if(!process.env.NEONDB_URL) return NextResponse.json({error: "Internal Server Error"},{status: 500}) 
    const { long_url , alias } = await Req.json();
    const short_suffix = alias ? alias : nanoid(10);
    console.log("short_suffix : ",short_suffix);
    const short_url = process.env.URL + short_suffix;
    console.log("SHORT URL : ",short_url);
    //save long_url and short_url in DB
    const sql = neon(process.env.NEONDB_URL);
    await sql``



    return NextResponse.json({short_url});
}