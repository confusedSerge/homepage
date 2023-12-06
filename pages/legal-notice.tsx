// React
import { useState } from "react";

// Next
import Head from "next/head";

// Custom Components
import { getMarkdownFormatted } from "@/lib/util/useMarkdown";

// Icons
import { SwitchOff, SwitchOn } from "iconoir-react";

export default function LegalNoticePage({ de, eng }: { de: string, eng: string }) {

    const [isOn, setIsOn] = useState(true);

    return (
        <div className="h-full justify-center my-16 px-8 overflow-hidden sm:overflow-visible">

            <Head>
                {isOn ?
                    <title> Kotchourko: Impressum</title>
                    :
                    <title> Kotchourko: Legal Notice</title>
                }
            </Head>

            <div className="flex relative">
                <div className="absolute w-fit h-full -left-16 aspect-square rounded-full  bg-accent" />

                <div className="py-8 z-10">
                    <h1 className="text-2xl sm:text-5xl font-bold">
                        {
                            isOn ?
                                "Impressum"
                                :
                                "Legal Notice"
                        }
                    </h1>

                    <div className="flex">
                        <div className="markdown-page">
                            {
                                isOn ?
                                    "Im Folgenden finden Sie das Impressum."
                                    :
                                    "Below you will find the legal notice."
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Switch on={isOn} onClick={() => setIsOn(!isOn)} leftText="ENG" rightText="DE" />

            <div className="markdown-legal mb-4" dangerouslySetInnerHTML={{ __html: isOn ? de : eng }} />
        </div>
    );

}


export async function getStaticProps() {
    const legalnoticede: string = getMarkdownFormatted('', 'data/legal-notice/legal-notice-de.md');
    const legalnoticeeng: string = getMarkdownFormatted('', 'data/legal-notice/legal-notice-eng.md');
    return {
        props: {
            de: JSON.parse(JSON.stringify(legalnoticede)),
            eng: JSON.parse(JSON.stringify(legalnoticeeng)),
        },
    };
}

interface ISwitchProps {
    on: boolean;
    onClick: () => void;

    leftText: string;
    rightText: string;
}

const Switch: React.FC<ISwitchProps> = ({ on, onClick, leftText, rightText }) => {

    return (
        <div className="flex flex-row items-center justify-end cursor-pointer" onClick={
            () => {
                onClick();
            }
        }>
            <div className="font-bold cursor-pointer">
                {leftText}
            </div>

            {on ? <SwitchOn className="text-5xl px-4" /> : <SwitchOff className="text-5xl px-4" />}

            <div className="font-bold">
                {rightText}
            </div>
        </div>
    )
}