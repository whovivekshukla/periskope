import { createClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

export const GET = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("tabledata")
    .select("*");


  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
  return NextResponse.json(data);
};
