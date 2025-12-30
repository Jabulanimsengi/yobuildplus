import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's role. */
      role: string
      builderId?: string
    } & DefaultSession["user"]
    accessToken?: string
  }

  interface User {
    role: string
    builderId?: string
    accessToken?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: string
    builderId?: string
    accessToken?: string
  }
}
