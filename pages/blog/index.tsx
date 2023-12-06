// React
import React, { useState } from "react";

// Next
import Head from "next/head";
import Link from "next/link";

// Lib
import { getSortedBlogHeaders } from "@/lib/util/useBlog";

// Model
import BlogHead from "@/lib/model/blog/BlogHead";

// Iconoir
import { Calendar, EmojiPuzzled, Search, HexagonDice } from "iconoir-react";

export default function Blog({ blogHeaders }: { blogHeaders: BlogHead[] }) {

    const [search, setSearch] = useState<string>('');
    const [dateDesc, setDateDesc] = useState<boolean>(true);

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

    const blogHeadersFiltered = sortedBlogHeaders(blogHeaders, search, dateDesc);

    return (
        <div className="flex flex-col h-full mt-8 py-4 px-8 overflow-hidden sm:overflow-visible">

            <Head>
                <title>Kotchourko: Blog</title>
            </Head>

            <SearchBar search={search} searchCallback={setSearch} dateDesc={dateDesc} dateCallback={setDateDesc} />


            {/* Blog List */}
            <BlogList blogHeaders={blogHeadersFiltered} search={search} callbackSetSearch={setSearch} />

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

function SearchBar({ search, searchCallback, dateDesc, dateCallback }: { search: string, searchCallback: (search: string) => void, dateDesc: boolean, dateCallback: (dateOrder: boolean) => void }) {
    return (
        <div className="flex flex-col sm:flex-row w-full">

            <div className="flex flex-grow">
                <div className="flex aspect-square justify-center items-center bg-accent rounded-full min-w-max">
                    <Search className="text-2xl sm:text-4xl p-1 sm:p-2 m-1 sm:m-2 text-center" />
                </div>
                <input className="flex w-full px-4 bg-inherit focus:outline-none font-bold text-secondary text-xl" type="text" placeholder="Search" value={search} onChange={(e) => searchCallback(e.target.value)} />

            </div>

            <div className="hidden sm:flex mt-4 sm:mt-0 sm:ml-4 space-x-4">
                <button className="flex aspect-square justify-center items-center bg-accent rounded-full min-w-max" onClick={() => dateCallback(!dateDesc)}>
                    <Calendar className="text-4xl p-2 m-2 text-center hover:animate-wiggle transition-transform" />
                </button>
            </div>

        </div>
    );
}

function BlogList({ blogHeaders, search, callbackSetSearch }: { blogHeaders: BlogHead[], search: string, callbackSetSearch: (search: string) => void }) {

    const uniqueTags = blogHeaders.map(blogHeader => blogHeader.tags).flat().filter((tag, index, self) => self.indexOf(tag) === index);

    if (blogHeaders.length === 0) {
        return (
            <div className="w-full m-auto flex flex-col justify-center items-center">
                <div className="flex flex-grow aspect-square justify-center items-center bg-accent rounded-full min-w-max">
                    <EmojiPuzzled className="text-4xl p-2 m-2 text-center" />
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
        <div className="w-full flex flex-row mt-16">
            <div className="w-full sm:w-4/5 sm:mr-16 flex flex-col grow justify-center space-y-16">
                {
                    blogHeaders.map((blogHeader) => {
                        return <BlogCard key={blogHeader.id} blog={blogHeader} tagOnClickBehavior={(tag: string) => {
                            callbackSetSearch(search + ' ' + tag);
                        }} />
                    })
                }
            </div>
            <div className="w-1/5 hidden sm:flex shrink">
                <BlogTags tags={uniqueTags} tagOnClickBehavior={(tag: string) => {
                    callbackSetSearch(search + ' ' + tag);
                }} />
            </div>
        </div>
    )
}

function BlogTags({ tags, tagOnClickBehavior }: { tags: string[], tagOnClickBehavior: (tag: string) => void }) {
    return (
        <div className="flex flex-col">
            <div className="flex font-bold text-2xl">
                Tags
            </div>
            <div className="flex flex-wrap">
                {tags.map((tag) => (
                    <div key={tag} className="flex flex-row items-center cursor-pointer px-2 m-1 border-2 border-secondary rounded-full group "
                        onClick={(event: any) => {
                            event.preventDefault();
                            tagOnClickBehavior(tag);
                        }}>
                        <HexagonDice className="w-3 h-3 mr-1 stroke-2 group-hover:animate-spin" />
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    )
}


const BlogCard: React.FC<{ blog: BlogHead; tagOnClickBehavior: (tag: string) => void }> = ({ blog, tagOnClickBehavior }) => {

    return (


        <div className="w-full flex flex-col cursor-pointer overflow-hidden z-10">

            <Link className="group" href={`/blog/${blog.id}`} passHref>

                <div className="flex flex-row items-center">
                    <span className="flex font-bold text-2xl smooth-underline group-hover:smooth-underline-active">
                        {blog.title}
                    </span>
                </div>

                <div className="flex flex-row items-center mt-2">
                    <span className="opacity-50">
                        {blog.humanDate}
                    </span>
                    <span className="px-2 opacity-50">
                        ·
                    </span>
                    <span className="opacity-50">
                        {blog.readTime} read
                    </span>
                </div>


                <div className="flex">
                    <div className="markdown-preview" dangerouslySetInnerHTML={{ __html: blog.description }} />
                </div>
            </Link>

            {/* Tags */}
            <div className="flex text-md mt-4 items-center">
                <span className="font-medium mr-2"> Tags: </span>
                <div className="flex flex-wrap items-center">
                    {blog.tags.map((tag) => (
                        <div key={tag} className="flex flex-row items-center cursor-pointer px-2 m-1 border-2 border-secondary rounded-full group "
                            onClick={(event: any) => {
                                event.preventDefault();
                                tagOnClickBehavior(tag);
                            }}>
                            <HexagonDice className="w-2 h-2 mr-1 stroke-2 group-hover:animate-spin" />
                            {tag}
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}