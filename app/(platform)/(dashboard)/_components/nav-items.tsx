"use client";

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Activity, CreditCard, Layout, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export type Organization = {
    id: string;
    slug: string;
    imageUrl: string;
    name: string;
};

interface NavItemsProps{
    isExpanded: boolean;
    isActive: boolean;
    organization: Organization;
    onExpand: (id: string)=> void;
}


export function NavItems({
    isExpanded, isActive, organization, onExpand
    }: NavItemsProps) {
    
    const router = useRouter();
    const pathname = usePathname();
    const routes = [
        {
            label: "Panel",
            icon: <Layout className="h4 w-4 mr-2" />,
            href: `/organization/${organization.id}`
        },
        {
            label: "Actividad",
            icon: <Activity className="h4 w-4 mr-2" />,
            href: `/organization/${organization.id}/activity`
        },
        {
            label: "Configuración",
            icon: <Settings className="h4 w-4 mr-2" />,
            href: `/organization/${organization.id}/settings`
        },
        {
            label: "Facturación",
            icon: <CreditCard className="h4 w-4 mr-2" />,
            href: `/organization/${organization.id}/billing`
        }
    ]

    const onClick = (href: string)=>{
        router.push(href);
    }

    return(
        <AccordionItem value={organization.id} className="border-none">
            <AccordionTrigger onClick={()=> onExpand(organization.id)}
                className={cn("flex items-center- gap-x-2 p-1.5 text-neutral-700 hover:bg-neutral-500/10 rounded-md transition text-start no-underline hover:no-underline",
                    isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
                )}>
                    <div className="flex items-center gap-x-2">
                        <div className="w-7 h-7 relative">
                            <Image fill
                                src={organization.imageUrl}
                                alt="Organization"
                                className="rounded-sm object-cover"/>
                        </div>
                        <p>{organization.name}</p>
                    </div>
            </AccordionTrigger>
            <AccordionContent className="pt-1 text-neutral-700">
                {routes.map((route)=> (
                    <Button key={route.href} size="sm"
                        onClick={()=> onClick(route.href)}
                        className={cn("w-full font-normal justify-start pl-10 mb-1", 
                            pathname === route.href && "bg-sky-500/10 text-sky-700"
                        )}
                        variant="ghost">  
                            {route.icon}
                            {route.label}
                    </Button>
                ))}
            </AccordionContent>
        </AccordionItem>
    )
}