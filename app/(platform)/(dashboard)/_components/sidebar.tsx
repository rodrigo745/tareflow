"use client";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import { NavItems, Organization } from "./nav-items";


interface SidebarProps{
    storageKey?: string;
}

export default function SideBar({
    storageKey = "t-sidebar-state"}: SidebarProps) {
    
    const [ expanded, setExpanded ] = useLocalStorage<Record<string, any>>(storageKey, {})
    
    const { organization: activeOrganization,
            isLoaded: isLoadedOrg
    } = useOrganization();

    const { userMemberships,
            isLoaded: isLoadedOrgList
     } = useOrganizationList({ userMemberships: {infinite: true} });

    const defaultAccordionValue: string[] = Object.keys(expanded).
        reduce((acc: string[], key: string)=> {
            if(expanded[key]){
                acc.push(key);
            }
            return acc;
        }, []);

    const onExpand = (id: string)=>{
        setExpanded((curr)=>({...curr, [id]: !expanded[id]}));
    };
    
    if(!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading){
        return(
            <>
                <div className="flex items-center justify-between mb-2">
                    <Skeleton className="h-10 w-[50%]"/>
                    <Skeleton className="h-10 w-10"/>
                </div>
                <div className="flex mt-5 items-center justify-between mb-2">
                    <Skeleton className="h-10 w-[20%]"/>
                    <Skeleton className="h-10 w-[75%]"/>
                </div>
                <div className="flex mt-5 items-center justify-between mb-2">
                    <Skeleton className="h-10 w-[20%]"/>
                    <Skeleton className="h-10 w-[75%]"/>
                </div>
                <div className="flex mt-5 items-center justify-between mb-2">
                    <Skeleton className="h-10 w-[20%]"/>
                    <Skeleton className="h-10 w-[75%]"/>
                </div>
            </>
        )
    }
    return(
        <>
           <div className="font-medium text-xs flex items-center mb-1">
                <span className="pl-4">Panel de trabaojo!</span>
                <Button asChild type="button" size="icon" variant="ghost" className="ml-auto">
                    <Link href="/select-org">
                        <Plus className="w-4 h-4"/>
                    </Link>
                </Button>
           </div>
           <Accordion type="multiple"
                defaultValue={defaultAccordionValue} 
                className="space-y-2 text-xs">
                    {
                        userMemberships.data.map(({organization})=> (
                            <NavItems key={organization.id}
                                isActive={activeOrganization?.id === organization.id}
                                isExpanded={expanded[organization.id]}
                                organization={organization as Organization}
                                onExpand={onExpand}
                            />
                        ))
                    }
           </Accordion>
        </>
    )
}