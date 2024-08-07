// Next
import Link from "next/link";
import Head from "next/head";

// Import icons
import { GitHub, LinkedIn, Notes } from "iconoir-react";

export default function About() {
    return (
        <div className="flex flex-col my-16 xl:m-auto xl:py-16 justify-center items-center">

            <Head>
                <title>Kotchourko: About</title>
            </Head>

            <div className="flex flex-col-reverse xl:flex-row items-center">

                <div className="mt-4 xl:mt-0 xl:mr-16 p-4 text-2xl">
                    Hello! I&apos;m Serge, a computer science student from Germany working on my master&apos;s degree. <br />
                    I&apos;m passionate about various areas of computer science, but I&apos;m particularly interested in its theoretical aspects. <br />
                    Currently, I&apos;m focusing on information security and artificial intelligence, as I find the complexity and challenges in these fields fascinating. <br />
                </div>

                <div className="flex w-48 h-48 2xl:w-72 2xl:h-72 aspect-square justify-center items-center bg-accent rounded-full">
                    <h1 className="text-ellipsis font-black text-4xl 2xl:text-6xl p-6 text-center">ABOUT ME</h1>
                </div>

            </div>

            <div className="flex flex-col mt-16 xl:flex-row items-center">

                <div className="flex w-48 h-48 2xl:w-72 2xl:h-72 aspect-square justify-center items-center bg-accent rounded-full">
                    <h1 className="text-ellipsis font-black text-4xl 2xl:text-6xl p-6 text-center">BLOG</h1>
                </div>

                <div className="mt-4 xl:mt-0 xl:ml-16 p-4 text-2xl">
                    During my times as an academic tutor, I found joy in making complex concepts and ideas accessible to others. <br />
                    This blog is my attempt to translate this excitement into written form. <br />
                    To this end, I write about topics that I find interesting and that I believe others might enjoy as well. <br />
                </div>

            </div>

            {/* Icon row with links */}
            <div className="flex flex-row space-x-8 my-16">

                <div className="flex flex-grow aspect-square justify-center items-center bg-accent rounded-full min-w-max group hover:scale-110 transition-all duration-500">
                    <Link href="https://github.com/confusedSerge">
                        <GitHub className="text-5xl p-4 2xl:text-7xl 2xl:p-8 text-center" />
                    </Link>
                </div>


                <div className="flex flex-grow aspect-square justify-center items-center bg-accent rounded-full min-w-max hover:scale-110 transition-all duration-500">
                    <Link href="https://www.linkedin.com/in/kotchourko-serge/">
                        <LinkedIn className="text-5xl p-4 2xl:text-7xl 2xl:p-8 text-center" />
                    </Link>
                </div>

                <div className="flex flex-grow aspect-square justify-center items-center bg-accent rounded-full min-w-max hover:scale-110 transition-all duration-500">
                    <a href="/pdf/resume.pdf" target="_blank">
                        <Notes className="text-5xl p-4 2xl:text-7xl 2xl:p-8 text-center" />
                    </a>
                </div>
            </div>
        </div>
    )
}