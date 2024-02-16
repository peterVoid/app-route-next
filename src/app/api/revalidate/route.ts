import { NextResponse, NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(req: NextRequest) {
  const tag = req.nextUrl.searchParams.get("tag");
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== process.env.REVALIDATE_TOKEN) {
    return NextResponse.json({ status: 401, message: "Unauthorized" });
  }

  if (!tag) {
    return NextResponse.json({ status: 400, message: "Tag is required" });
  }

  revalidateTag(tag);
  return NextResponse.json({
    status: 200,
    message: "Success",
    revalidate: true,
  });
}
