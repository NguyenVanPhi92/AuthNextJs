import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import DiscordProvider from 'next-auth/providers/discord'
import TwitterProvider from 'next-auth/providers/twitter'

//Server side
export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID as string,
            clientSecret: process.env.FACEBOOK_SECRET as string
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID as string,
            clientSecret: process.env.TWITTER_CLIENT_SECRET as string
        })

        // // OAuth authentication providers...
        // AppleProvider({
        //   clientId: process.env.APPLE_ID,
        //   clientSecret: process.env.APPLE_SECRET
        // }),
        // // Passwordless / email sign in
        // EmailProvider({
        //   server: process.env.MAIL_SERVER,
        //   from: 'NextAuth.js <no-reply@example.com>'
        // }),
    ],

    secret: process.env.NEXTAUTH_URL
})
