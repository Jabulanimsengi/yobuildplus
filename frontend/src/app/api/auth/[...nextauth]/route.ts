import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { authApi } from "@/lib/api"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          const res = await authApi.login({
            email: credentials.email,
            password: credentials.password
          });

          if (res.user && res.token) {
            return {
              id: res.user.id,
              name: res.user.name,
              email: res.user.email,
              role: res.user.role,
              builderId: res.user.builderId,
              accessToken: res.token
            }
          }
          return null
        } catch (error) {
          console.error("Login failed:", error);
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // Initial sign in
      if (user) {
        // Try to get role from cookies for initial Google sign up
        const { cookies } = await import("next/headers")
        const cookieStore = await cookies()
        const pendingRole = cookieStore.get('pendingRole')?.value

        token.role = user.role || pendingRole || 'client' // Default to client if no cookie
        token.builderId = user.builderId
        token.accessToken = user.accessToken
      }

      // For Google OAuth, call backend to get a valid backend JWT
      if (account?.provider === 'google' && user) {
        try {
          const { cookies } = await import("next/headers")
          const cookieStore = await cookies()
          const pendingRole = cookieStore.get('pendingRole')?.value

          const { authApi } = await import("@/lib/api")
          const res = await authApi.oauthLogin({
            email: user.email!,
            name: user.name || 'User',
            role: pendingRole || 'client',
          })

          // Use the backend JWT token
          token.accessToken = res.token
          token.role = res.user.role || pendingRole || 'client'
          token.builderId = res.user.builderId
        } catch (error) {
          console.error('Failed to get backend token for Google OAuth:', error)
          // Fallback - user won't be able to make authenticated API calls
        }
      }

      return token
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role
        session.user.builderId = token.builderId as string | undefined
        session.accessToken = token.accessToken as string
      }
      return session
    }
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || 'yobuildplus-secret-key',
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

