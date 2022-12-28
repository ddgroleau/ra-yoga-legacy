import '@/styles/global.scss';
import type { AppProps } from 'next/app';
import { Auth0Provider } from "@auth0/auth0-react";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Auth0Provider
            domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string}
            clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string}
            redirectUri={global.origin}
        >
            <Component {...pageProps} />
        </Auth0Provider>
    );
}
