import Logo from "@/components/logo"

export function NavBar(){
    return(
        <div className="bg-white w-full h-14 fixed top-0 shadow-md px-4 flex items-center border-b">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <Logo/>
            </div>
        </div>
    )
}