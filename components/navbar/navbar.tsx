// Next
import Link from "next/link";

// Iconoir
import { Cpu } from "iconoir-react";

const Navbar: React.FC<{}> = () => {

    return (
        <div className="flex flex-col space-y-4 xl:flex-row xl:space-y-0 px-2 items-center justify-between">

            <Link className="flex flex-row py-2 items-center font-black text-4xl group" href="/">
                <Cpu className="stroke-2 group-hover:text-accent transition-all duration-500 mr-2" />
                KOTCHOURKO
            </Link>

            <div className="font-bold space-x-4">
                <Link className="px-4 py-6 rounded-md hover:bg-accent transition-all duration-500" href="/about">About</Link>
                <Link className="px-4 py-6 rounded-md hover:bg-accent transition-all duration-500" href="/blog">Blog</Link>
            </div>

        </div>
    );

}

export default Navbar;
