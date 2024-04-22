import Logo from "@/components/logo"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function NavBar(){
    return(
        <div className="bg-white w-full h-14 fixed top-0 shadow-md px-4 flex items-center border-b">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <Logo/>
            <div className="flex justify-between md:justify-end w-full space-x-6">
                <Button className="shadow-sm" size="sm" variant="outline" asChild>
                    <Link href="/iniciar-sesion">Iniciar sesión</Link>
                </Button>
                <Button>
                    <Link href="/crear-cuenta">Obtener gratis</Link>
                </Button>
            </div>
            </div>
        </div>
    )
}