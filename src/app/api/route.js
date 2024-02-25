import { NextResponse } from "next/server";

export async function GET(request) {
  const data = {
    "message":"Hello World"
  }
  return NextResponse.json(data)  
}


