import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Redirect /information to /about-me
  if (request.nextUrl.pathname === "/information") {
    return NextResponse.redirect(new URL("/about-me", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/information"],
}
