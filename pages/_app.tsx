import React from 'react';

// Next component
import type { AppProps } from 'next/app';
import Link from "next/link";
import Head from 'next/head';

// Icon component
import { Cpu } from "iconoir-react";

// CSS 
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="h-full min-h-screen flex justify-center bg-primary font-space-grotesk text-secondary">
            <div className="flex flex-col w-full xl:w-4/5">

                <Head>
                    <title>Kotchourko</title>
                    {/* favicon */}
                    <link rel="icon" href="/favicon.gif" />
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


const Navbar: React.FC<{}> = () => {

    return (
        <div className="flex flex-col space-y-4 xl:flex-row xl:space-y-0 px-2 items-center justify-between">

            <Link className="flex flex-row py-2 items-center font-bold text-4xl group" href="/">
                <Cpu className="mr-2 stroke-2 text-2xl group-hover:text-accent transition-all duration-700" />
                <span className='smooth-underline group-hover:smooth-underline-active'> KOTCHOURKO </span>
            </Link>

            <div className="flex flex-row font-bold space-x-4">
                <Link className='px-4 py-6 cursor-pointer group hover:bg-accent transition-all duration-700' href="/about">
                    <span className="smooth-underline group-hover:smooth-underline-active" >About</span>
                </Link>
                <Link className='px-4 py-6 cursor-pointer group hover:bg-accent transition-all duration-700' href="/blog">
                    <span className="smooth-underline group-hover:smooth-underline-active" >Blog</span>
                </Link>
            </div>

        </div>
    );

}


const Footer: React.FC<{}> = () => {

    return (
        <div className="flex flex-col sm:flex-row px-4 py-6 space-y-4 sm:space-y-0 sm:space-x-16 items-center justify-center opacity-75">
            <Link className="" href="/privacy-policy">Privacy Policy</Link>
            <span className="hidden sm:flex">
                ·
            </span>
            <Link className="" href="/legal-notice">Legal Notice</Link>
            <span className="hidden sm:flex">
                ·
            </span>
            <Link className="" href="/licenses" prefetch={false}>Licenses</Link>
        </div>
    );

}