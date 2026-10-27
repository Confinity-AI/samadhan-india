import { type NextRequest, NextResponse } from "next/server";
import { GATE_COOKIE, isValidGateToken } from "@/lib/gate";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/unlock" || pathname.startsWith("/unlock/")) {
    return NextResponse.next();
  }

  if (await isValidGateToken(request.cookies.get(GATE_COOKIE)?.value)) {
    return NextResponse.next();
  }

  const unlock = request.nextUrl.clone();
  unlock.pathname = "/unlock";
  unlock.search = "";
  if (pathname !== "/") {
    unlock.searchParams.set("next", pathname);
  }
  return NextResponse.redirect(unlock);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|og.png|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?)$).*)"],
};
