import { NextRequest, NextResponse } from "next/server";

const PUBLIC_ROUTES = ["/", "/login", "/register"];
const ALWAYS_ALLOWED = [
                        "/_next", 
                        "/favicon.ico", 
                        "/api/auth",
                        "/api/test",
                        "/api/institutions",
                      ];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (ALWAYS_ALLOWED.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  if (/\.[a-z0-9]+$/i.test(pathname)) {
    return NextResponse.next();
  }

  const sessionCookie = req.cookies.get("__session")?.value;
  const isPublicRoute = PUBLIC_ROUTES.some(
    (r) => pathname === r || pathname.startsWith(r + "/")
  );

  if (!sessionCookie && !isPublicRoute) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (sessionCookie && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
