import { fallbackLng, languages } from "@/app/i18n/settings";
import acceptLanguage from "accept-language";
import { NextRequest, NextResponse } from "next/server";

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: [
    "/((?!api|_next/static|_next/image|images|tech_icons|favicon.ico|sw.js).*)",
  ],
};

const cookieName = "i18next";

export function middleware(request: NextRequest) {
  let lng: string | undefined;
  if (request.cookies.has(cookieName)) {
    lng = acceptLanguage.get(request.cookies.get(cookieName).value);
  }
  if (!lng) {
    lng = acceptLanguage.get(request.headers.get("Accept-Language"));
  }
  if (!lng) {
    lng = fallbackLng;
  }

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => request.nextUrl.pathname === `/${loc}`) &&
    !request.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(new URL(`/${lng}`, request.url));
  }
}
