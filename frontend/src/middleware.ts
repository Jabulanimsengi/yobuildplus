import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

// export default withAuth(
//   function middleware(req) {
//     const token = req.nextauth.token;
//     const isAuth = !!token;
//     const isAuthPage = req.nextUrl.pathname.startsWith("/login") || req.nextUrl.pathname.startsWith("/register");

//     if (isAuthPage) {
//       if (isAuth) {
//         return NextResponse.redirect(new URL("/dashboard", req.url))
//       }
//       return null
//     }

//     // Admin Route Protection
//     if (req.nextUrl.pathname.startsWith("/admin") && token?.role !== "admin") {
//       return NextResponse.redirect(new URL("/dashboard", req.url)) // Or denied page
//     }
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => !!token,
//     },
//   }
// )

export function middleware() {
  // No-op
}

export const config = { matcher: ["/admin/:path*", "/dashboard/:path*"] }
