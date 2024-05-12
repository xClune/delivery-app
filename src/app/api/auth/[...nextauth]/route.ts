import NextAuth from "next-auth/next";
import { authOptions } from "../../../../utils/auth";

// NextAuth is a request handler, so we can export it directly
const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}