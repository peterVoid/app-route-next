import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (id) {
    const datam = await retrieveDataById("cars", id);
    return NextResponse.json({
      status: 200,
      message: "Success",
      data: datam,
    });
  }
  const datas = await retrieveData("cars");
  return NextResponse.json({ status: 200, message: "Success", data: datas });
}
