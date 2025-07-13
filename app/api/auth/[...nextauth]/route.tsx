import NextAuth from "next-auth";
// import AppleProvider from "next-auth/providers/apple";
// import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";
// import EmailProvider from "next-auth/providers/email";
// import Google  Provider from "next-auth/providers/google";


export const authoptions = NextAuth({
    providers:[
       
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET|| "",
        })

    ]
})


export{authoptions as GET , authoptions as POST}