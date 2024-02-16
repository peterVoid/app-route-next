import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  //   if (req.nextUrl.pathname.startsWith("/about")) {
  return NextResponse.redirect(new URL("/login", req.url));
  //   }
}

export const config = {
  matcher: [],
};
