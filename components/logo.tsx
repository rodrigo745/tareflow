import Image from "next/image"
import logo from "@/app/logo.png";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Logo(){
    return(
        <Link href="/" className="w-full flex">
            <div className="hidden md:flex hover:opacity-75">
                <Image width={40} height={40} alt="logo" src={logo}/>
                <h2 className="mt-2 text-xl font-bold">TareFlow</h2>
            </div>
            <div className="flex justify-between md:justify-end w-full space-x-6">
                <Button>Iniciar sesión</Button>
                <Button>Obtener gratis</Button>
            </div>
        </Link>
    )
}