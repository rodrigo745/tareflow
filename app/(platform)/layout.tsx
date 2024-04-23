import { ClerkProvider } from "@clerk/nextjs";

export default function Platform({children}:{children: React.ReactNode}){
    return(
        <ClerkProvider >
            {children}
        </ClerkProvider>
    )
}