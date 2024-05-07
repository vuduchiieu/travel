import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import InstagramProvider from "next-auth/providers/instagram";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID ?? "",
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    // }),
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID ?? "",
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET ?? "",
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
