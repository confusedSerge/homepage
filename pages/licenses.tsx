// Next Component
import Head from "next/head";

// Lib
import { getMarkdownFormatted } from "@/lib/util/useMarkdown";


export default function LicensesPage({ pagedata }: { pagedata: string }) {
    return (
        <div className="h-full justify-center my-16 px-8 overflow-hidden sm:overflow-visible">

            <Head>
                <title> Kotchourko: Licenses</title>
            </Head>

            <div className="flex relative">
                <div className="absolute w-fit h-full -left-16 aspect-square rounded-full  bg-accent" />

                <div className="py-8 z-10">
                    <h1 className="text-5xl font-bold">Licenses</h1>

                    <div className="flex">
                        <div className="markdown-page">
                            This website used the following open source libraries for its development:
                        </div>
                    </div>
                </div>
            </div>

            <div className="markdown-legal my-4" dangerouslySetInnerHTML={{ __html: pagedata }} />
        </div>
    );

}


export async function getStaticProps() {
    const pagedata: string = getMarkdownFormatted('', 'LICENSE.DEPENDENCIES.md');
    return {
        props: {
            pagedata: JSON.parse(JSON.stringify(pagedata)),
        },
    };
}