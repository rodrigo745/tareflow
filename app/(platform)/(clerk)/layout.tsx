import { ClerkProvider } from "@clerk/nextjs";

export default function Platform({children}:{children: React.ReactNode}){
    return(
        <div>
            <div className="w-screen h-screen flex justify-center items-center">
            {children}
            </div>
        </div>
    )
}