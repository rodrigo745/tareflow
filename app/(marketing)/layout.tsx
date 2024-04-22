
import { NavBar } from "./_components/navbar";
import { Footer } from "./_components/footer";

export default function MarketingLayaot({children}: {children: React.ReactNode}){
    return(
        <div className="h-full bg-slate-200">
            <main className="pt-40">
                <NavBar/>
                {/* <Logo/> */}
                {children}
                <Footer/>
            </main>
        </div>
    )
}