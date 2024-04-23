import Link from "next/link";
import { Medal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Marketing(){
    return(
        <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-center flex-col">
                <div className="flex border bg-amber-100 text-amber-800 py-2 px-4 rounded-full shadow-md uppercase text-center">
                    <Medal className="h-6 w-6 mr-4"/> 
                    1° Organizador de tareas
                </div>
                <h1 className="mt-4 text-center text-xl md:text-2xl mb-4 font-bold">Ayuda al equipo de tareas a avanzar</h1>
                <h4 className="bg-gradient-to-r from-fuchsia-800 to-fuchsia-600 py-2 px-4 rounded-md text-white shadow-md">¡Avanza en el trabajo!</h4>
            </div>
            <div className="text-center mt-4 max-w-sm md:max-w-xl text-neutral-500 text-sm md:text-md m-auto">
            Colabora, gestiona proyectos y alcanza nuevos niveles de productividad. Ya sea en una oficina corporativa o desde casa, la forma en que trabaja tu equipo es única. ¡Logra todo esto con Taskify!
            </div>
            <Button className="mt-4" size="lg" asChild>
                <Link href="/sign-up">Obtener una cuenta gratis</Link>
            </Button>
        </div>
    )
}