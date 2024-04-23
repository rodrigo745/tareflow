import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";

export default function NavBar() {
    return(
        <nav className="fixed px-4 top-0 z-50 bg-white border-b w-full h-14 flex shadow-md items-center">
            
            <div className="flex items-center w-full justify-between gap-x-4">
                
                <div className="hidden md:flex">
                    <Logo/>
                    <Button variant="primary" size="sm" className="hidden md:flex rounded-sm h-auto py-2 px-2 ml-14">Crear</Button>
                </div>
                
                <Button variant="primary" size="sm" className="block md:hidden">
                    <Plus className="h-4 w-4"/>
                </Button>
                <div className="w-full flex justify-end">
                    <OrganizationSwitcher
                        hidePersonal
                        afterCreateOrganizationUrl="/organization/:id"
                        afterLeaveOrganizationUrl="/select-org>"
                        afterSelectOrganizationUrl="/organization/:id"
                        appearance={{
                            elements:{
                                rootBox: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                },
                            },
                        }}/>
                    
                    <UserButton afterSignOutUrl="/" 
                        appearance={{
                            elements: {
                                avatarBox: {
                                    width: 40,
                                    height: 40
                                }
                            }
                        }}/>
                </div>
            </div>
            
        </nav>
    )
}