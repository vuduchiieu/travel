import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
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
        try {
          const res = await axios.post(
            `https://be-travel.vercel.app/v1/auth/login`,
            {
              email: credentials.email,
              password: credentials.password,
            }
          );
          return res.data;
        } catch (error) {
          console.error("Lỗi khi đăng nhập:", (error as Error).message);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        const userData = {
          email: user.email,
          name: user.name,
          image: user.image,
          providerAccountId: user.id,
          provider: account?.provider,
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
      if (token.sub || token.providerAccountId) {
        const res = await axios.get(
          `${process.env.API_URL}/v1/user/${
            token.sub || token.providerAccountId
          }`
        );
        token = res.data;
      }
      if (trigger === "update" && session?.data) {
        token = session.data;
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
