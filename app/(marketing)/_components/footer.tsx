import Logo from "@/components/logo"
import Link from "next/link"

export function Footer(){
    return(
        <div className="border-t bg-slate-100 w-full fixed bottom-0 px-4 flex items-center p-4">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <Logo/>
            <div className="p-2 flex justify-between md:justify-end w-full space-x-6">
                
                    <Link href="/iniciar-sesion">Política de privacidad</Link>
                    <Link href="/crear-cuenta">Terminos del servicio</Link>
            </div>
            </div>
        </div>
    )
}