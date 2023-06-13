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
        <div className="h-full min-h-screen flex justify-center bg-primary font-monserrat text-secondary">
            <div className="flex flex-col w-full xl:w-4/5">

                <Head>
                    <title>Kotchourko</title>
                    {/* favicon */}
                    <link rel="icon" href="/favicon.svg" />
                    {/* Encoding */}
                    <meta charSet='UTF-8' />
                    {/* Description */}
                    <meta name="description" content="
                        Hey there! I am Serge Kotchourko, a computer scientist from Germany.
                        I am currently pursuing my master's degree and I am passionate about all aspects of computer science.
                        This blog is my way of sharing my passion with you.
                    " />
                    <meta name="keywords" content="Serge Kotchourko, Kotchourko Serge, Kotchourko, Serge, Computer Science, Computer Scientist, Blog, Quantum Computing, Artificial Intelligence, Information Security, Programming, Teaching, Tutoring" />
                    <meta name="author" content="Serge Kotchourko" />
                    
                    {/* Open Graph */}
                    <meta property="og:title" content="Kotchourko" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://kotchourko-serge.de/" />
                    <meta property="og:image" content="https://kotchourko-serge.de/images/me.webp" />
                    <meta property="og:description" content="
                        Hey there! I am Serge Kotchourko, a computer scientist from Germany.
                        I am currently pursuing my master's degree and I am passionate about all aspects of computer science.
                        This blog is my way of sharing my passion with you.
                    " />
                    <meta property="og:site_name" content="Kotchourko" />
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
