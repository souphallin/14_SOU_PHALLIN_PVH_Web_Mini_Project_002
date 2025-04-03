import { NextResponse } from "next/server";
import { auth } from "./auth";

export async function middleware(req) {
  const session = await auth();
  // const token = req.cookies?.token || req.headers?.authorization;

  if (!session?.payload.token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // if (!token){
  //   return new Response("Unauthorized", {status: 401});
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/", "/setting"],
};