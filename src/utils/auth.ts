import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
 
// set up the auth provider options for the NextAuth
export const authOptions:NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
    ],
}