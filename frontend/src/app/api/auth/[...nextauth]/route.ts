import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { authApi } from "@/lib/api"

export const authOptions: NextAuthOptions = {
  providers: [
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
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.builderId = user.builderId
        token.accessToken = user.accessToken
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
