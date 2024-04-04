import client from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const query = "SELECT * FROM tabledata";
    const result = await client.query(query);
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    return NextResponse.json({ error: "Error executing query" });
  }
};
