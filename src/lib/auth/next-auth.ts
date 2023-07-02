import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions: NextAuthOptions = {
  // Secret for Next-auth, without this JWT encryption/decryption won't work
  secret: process.env.NEXTAUTH_SECRET,

  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_APP_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_APP_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // const isAllowedToSignIn = ...
      //   if (isAllowedToSignIn) {
      //     return true
      //   } else {
      //     // Return false to display a default error message
      //     return false
      //     // Or you can return a URL to redirect to:
      //     // return '/unauthorized'
      //   }
      // }
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session, user, token, newSession, trigger }) {
      return session;
    },
    async jwt({ token, user, account, profile, trigger, isNewUser, session }) {
      // Send properties to the client, like an access_token and user id from a provider.
      // session.accessToken = token.accessToken;
      // session.user.id = token.id;
      if (account) {
        token.accessToken = account.access_token;
        // token.id = profile.id;
      }

      return token;
    },
  },
};
