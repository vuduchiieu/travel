import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { sql } from "@vercel/postgres";
import axios from "axios";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials: any, req) {
        const response = await sql`
        SELECT * FROM users WHERE email=${credentials?.email}`;
        const user = response.rows[0];
        const comparePassword = await bcrypt.compare(
          credentials?.password,
          user.password
        );
        if (comparePassword) return user as any;
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    // InstagramProvider({
    //   clientId: process.env.INSTAGRAM_CLIENT_ID,
    //   clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    // }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        const userData = {
          email: user.email,
          name: user.name,
          image: user.image,
          provider: account?.provider,
          providerAccountId: account?.providerAccountId,
        };
        await axios.post(
          `${process.env.API_URL}/v1/auth/logingoogle`,
          userData
        );
        return true;
      } catch (error) {
        console.error("Lỗi khi đăng nhập:", (error as Error).message);
        return false;
      }
    },
    async jwt({ token, user, trigger, session }) {
      if (token) {
        const res = await axios.get(
          `${process.env.API_URL}/v1/user/${
            token.sub || token.providerAccountId
          }`
        );

        token = res.data;
      }
      if (trigger === "update" && session?.name) {
        token = session;
      }
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
