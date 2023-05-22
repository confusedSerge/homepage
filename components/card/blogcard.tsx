// Next
import Link from "next/link";

// Lib
import BlogHead from "../../lib/model/blog/BlogHead";

interface IBlogCardProps {
    blog: BlogHead;
    tagOnClickBehavior: (tag: string) => void;
}

const BlogCard: React.FC<IBlogCardProps> = ({ blog, tagOnClickBehavior }) => {

    return (
        <Link href={`/blog/${blog.id}`} passHref>
            <div className="flex flex-row group relative">
                <div className="absolute w-fit h-full -left-16 aspect-square rounded-full  group-hover:bg-accent-light transition-all duration-500" />

                <div className="w-full flex flex-col py-8 cursor-pointer overflow-hidden z-10">
                    <div className="flex flex-row items-center">
                        <div className="flex font-bold text-secondary text-2xl">
                            {blog.title.toUpperCase()}
                        </div>
                    </div>


                    <div className="flex">
                        <div className="markdown-preview" dangerouslySetInnerHTML={{ __html: blog.description }} />
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
                                    <span key={blog.id.toString() + tag} className="cursor-pointer bg-black bg-opacity-5 hover:bg-accent-light transition-all duration-500 rounded-full px-2 mr-2"
                                        onClick={(event: any) => {
                                            event.preventDefault();
                                            tagOnClickBehavior(tag)
                                        }}>
                                        {tag}
                                    </span>
                                )
                            })}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard;
