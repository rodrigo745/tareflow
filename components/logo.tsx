import Image from "next/image"
import logo from "@/app/logo.png";
import Link from "next/link";

export default function Logo(){
    return(
        <Link href="/">
            <div className="hidden md:flex hover:opacity-75">
                <Image width={40} height={40} alt="logo" src={logo}/>
                <h2 className="mt-2 text-xl font-bold">TareFlow</h2>
            </div>
        </Link>
    )
}