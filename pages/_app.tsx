// Next component
import type { AppProps } from 'next/app'
import Head from 'next/head';

// Custom component 
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/navbar/footer';

// CSS 
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="h-full min-h-screen flex justify-center bg-primary font-monserrat">
            <div className="flex flex-col w-full xl:w-4/5">

                <Head>
                    <title>Kotchourko</title>
                    {/* favicon */}
                    <link rel="icon" href="/favicon.svg" />
                    {/* Description */}
                    <meta name="description" content="Kotchourko's personal website/homepage" />

                    {/* TODO: Add embedding information */}
                </Head>

                <div className="top-0 z-50 w-full">
                    <Navbar />
                </div>

                <Component {...pageProps} />


                <div className="bottom-0 z-50 w-full">
                    <Footer />
                </div>
            </div>
        </div>

    );
}
