import Image from "next/image"
import logo from "@/public/logo.svg";
import Link from "next/link";

export default function Logo(){
    return(
        <Link href="/">
            <div className="hidden md:flex hover:opacity-75">
                <Image width={40} height={40} alt="logo" src={logo}/>
                <h2 className="ml-1 text-xl font-bold">TareFlow</h2>
            </div>
        </Link>
    )
}