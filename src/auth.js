import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginService } from "../service/login-service";

export const { signIn, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        console.log("Email, Password", email)
        const res = await LoginService({ email, password });
        console.log("Res", res)
        return res;
      },
    }),
  ],
  callbacks: {
    async jwt(token) {
      return token;
    },
    async session(props) {
      const { token } = props;
      return token.token.user;
    },
  },
  strategy: "jwt",

  pages: {
    signIn: "/login",
  },
});