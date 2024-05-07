import NextAuth from "next-auth";
import InstagramProvider from "next-auth/providers/instagram";

const handler = NextAuth({
  providers: [
    InstagramProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const userData = {
        email: user.email,
        name: user.name,
        image: user.image,
        provider: account?.provider,
        providerAccountId: account?.providerAccountId,
      };

      return true;
    },
  },
});

export { handler as GET, handler as POST };
