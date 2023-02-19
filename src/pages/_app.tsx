import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

/***
 * Component
 * pageProps
 */
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        // bao bộc app bằng auth
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}
