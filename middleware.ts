import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/", "/api/webhook"],
  afterAuth(auth, req) {
    //if logged in, then redirect to select-org
    if (auth.userId && auth.isPublicRoute) { 
      let path = "/select-org";

      if (auth.orgId) {
        path = `/organization/${auth.orgId}`;
      }

      const orgSelection = new URL(path, req.url);
      return NextResponse.redirect(orgSelection)
    }

    // redirect user back to URL they tried to access upon logging in
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url }) 
    }

    //force user to create organization unless they are on select-org page
    if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org") { 
      const orgSelection = new URL("/select-org", req.url)
      return NextResponse.redirect(orgSelection)
    }
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
