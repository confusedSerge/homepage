// React
import { useState } from "react";

// Next
import Head from "next/head";

// Lib
import { getSortedBlogHeaders } from "@/lib/util/useBlog";

// Components
import BlogCard from "@/components/card/blogcard";
import BlogHead from "@/lib/model/blog/BlogHead";

// Iconoir
import { Calendar, EmojiPuzzled, Search } from "iconoir-react";

export default function Blog({ blogHeaders }: { blogHeaders: BlogHead[] }) {

    const [search, setSearch] = useState('');
    const [dateDesc, setDateDesc] = useState(true);

    const sortedBlogHeaders = (blogHeaders: BlogHead[], search: string, dateDesc: boolean) => {
        const sorted = blogHeaders.filter(blogHeader => {
            let and: boolean = true;
            for (const word of search.split(' ')) {
                if (word) {
                    and = and && (blogHeader.title.toLowerCase().includes(word.toLowerCase()) || blogHeader.tags.some(tag => tag.toLowerCase().includes(word.toLowerCase())));
                }
            }
            return and;
        });

        if (!dateDesc) {
            return sorted.reverse();
        }
        return sorted;
    }


    return (
        <div className="flex flex-col h-full mt-8 py-4 px-8 overflow-hidden sm:overflow-visible">

            <Head>
                <title>Kotchourko: Blog</title>
            </Head>

            {/* Search */}
            <div className="flex flex-col sm:flex-row w-full ">

                <div className="flex flex-grow">
                    <div className="flex aspect-square justify-center items-center bg-accent rounded-full min-w-max">
                        <Search className="text-5xl p-4 text-center" />
                    </div>
                    <input className="flex w-full px-4 bg-inherit focus:outline-none font-bold text-secondary text-xl" type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />

                </div>

                <div className="flex mt-4 sm:mt-0 sm:ml-4 space-x-4">
                    <button className="flex aspect-square justify-center items-center bg-accent rounded-full min-w-max" onClick={() => setDateDesc(!dateDesc)}>
                        <Calendar className="text-5xl p-4 text-center hover:rotate-90 transition-transform" />
                    </button>
                </div>

            </div>


            {/* Blog List */}
            <BlogList blogHeaders={sortedBlogHeaders(blogHeaders, search, dateDesc)} search={search} callbackSetSearch={setSearch} />

        </div>
    )
}

export async function getStaticProps() {
    const blogHeaders: BlogHead[] = getSortedBlogHeaders();
    return {
        props: {
            blogHeaders: JSON.parse(JSON.stringify(blogHeaders)),
        },
    };
}

function BlogList({ blogHeaders, search, callbackSetSearch }: { blogHeaders: BlogHead[], search: string, callbackSetSearch: (search: string) => void }) {
    if (blogHeaders.length === 0) {
        return (
            <div className="flex flex-col m-auto justify-center items-center">
                <div className="flex flex-grow aspect-square justify-center items-center bg-accent rounded-full min-w-max">
                    <EmojiPuzzled className="text-7xl p-4 m-4 text-center" />
                </div>
                <div className="flex flex-col mt-4 items-center">
                    <div className="flex font-bold text-2xl">
                        No blog entries found
                    </div>
                    <div className="flex font-medium text-xl">
                        Hit me up if you want me to write about a certain topic
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col justify-center my-8 space-y-8">
            {
                blogHeaders.map((blogHeader) => {
                    return <BlogCard key={blogHeader.id} blog={blogHeader} tagOnClickBehavior={(tag: string) => {
                        callbackSetSearch(search + ' ' + tag);
                    }} />
                })
            }
        </div>
    )
}