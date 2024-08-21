import { updateSession } from "./lib/supabase/middleware";
import { createClient } from "./lib/supabase/server";

export async function middleware(request) {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  if (!user && request.nextUrl.pathname.startsWith("/dashboard"))
    return Response.redirect(new URL("/login", request.url));

  if (user && request.nextUrl.pathname.startsWith("/login"))
    return Response.redirect(new URL("/dashboard", request.url));

  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
