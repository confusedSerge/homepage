// Next Component
import Head from "next/head";

// Lib
import Blog from "@/lib/model/blog/Blog";
import { getAllBlogIds, getBlog } from "@/lib/util/useBlog";

// Iconoir
import { HexagonDice } from "iconoir-react";

export default function BlogPage({ blog }: { blog: Blog }) {
    return (
        <div className="w-full sm:w-4/5 xl:w-2/3 h-full mx-auto my-16 px-8 overflow-hidden sm:overflow-visible">

            <Head>
                <title>{"Kotchourko: " + blog.title}</title>
            </Head>

            <div className="flex relative">
                <div className="absolute w-fit h-full -left-16 aspect-square rounded-full  bg-accent" />

                <div className="py-8 z-10">
                    <div className="flex flex-row items-center">
                        <span className="flex font-bold text-4xl underline decoration-4">
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

                    <div className="flex text-md mt-2 items-center">
                        <span className="font-medium mr-2"> Tags: </span>
                        <div className="flex flex-wrap items-center">
                            {blog.tags.map((tag) => (
                                <div key={tag} className="flex flex-row items-center cursor-default px-2 m-1 border-2 border-secondary rounded-full group ">
                                    <HexagonDice className="w-2 h-2 mr-1 stroke-2 group-hover:animate-spin" />
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="border-b-2 my-4 border-secondary border-opacity-25 mx-4" /> */}

            <div className="markdown-page my-4" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
    )
}

export async function getStaticPaths() {
    const paths = getAllBlogIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: any) {
    const blog: Blog = await getBlog(params.id);
    return {
        props: {
            blog: JSON.parse(JSON.stringify(blog)),
        },
    };
}  
