import axios from "axios";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
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
      await axios.post(
        `${process.env.REACT_APP_API}/v1/auth/logingoogle`,
        userData
      );

      return true;
    },
  },
});

export { handler as GET, handler as POST };
