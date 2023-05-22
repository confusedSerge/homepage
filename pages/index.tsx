import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col xl:flex-row my-16 xl:m-auto justify-center items-center">

            {/* Image growing evenly */}
            <div className="flex flex-grow xl:mr-16 ">
                <Image
                    src="/images/me.webp"
                    alt="Profile Picture"
                    width={500}
                    height={500}
                    className="rounded-full bg-accent-light"
                />
            </div>


            <div className="mt-4 xl:mt-0 font-black text-secondary text-5xl sm:text-6xl 2xl:text-8xl text-center xl:text-left">
                <h1 className="">KOTCHOURKO SERGE</h1>
                <h1 className="">COMPUTER SCIENTIST</h1>
            </div>
        </div>
    )
}
