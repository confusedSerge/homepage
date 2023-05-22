// Next Component
import Head from "next/head";

// Lib
import Blog from "@/lib/model/blog/Blog";
import { getAllBlogIds, getBlog } from "@/lib/util/useBlog";

export default function BlogPage({ blog }: { blog: Blog }) {
    return (
        <div className="h-full justify-center my-16 px-8 overflow-hidden sm:overflow-visible">

            <Head>
                <title>{"Kotchourko: " + blog.title}</title>
            </Head>

            <div className="flex relative">
                <div className="absolute w-fit h-full -left-16 aspect-square rounded-full  bg-accent-light" />

                <div className="py-8 z-10">
                    <h1 className="text-5xl font-bold">{blog.title}</h1>

                    <div className="flex">
                        <div className="markdown-page" dangerouslySetInnerHTML={{ __html: blog.description }} />
                    </div>
                    <div className="flex flex-row">
                        <span className="opacity-50">
                            {blog.humanDate}
                        </span>
                        <span className="px-2 opacity-50">
                            ·
                        </span>
                        <span className="opacity-50">
                            {blog.readTime} read
                        </span>
                        <span className="px-2 opacity-50 hidden sm:flex">
                            ·
                        </span>
                        <span className="hidden sm:flex">
                            <span className="opacity-50 mr-2">
                                Tags:
                            </span>
                            {blog.tags.map((tag) => {
                                return (
                                    <span key={blog.id.toString() + tag} className="cursor-default bg-black bg-opacity-5 hover:bg-accent-light transition-all duration-500 rounded-full px-2 mr-2">
                                        {tag}
                                    </span>
                                )
                            })}
                        </span>
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
