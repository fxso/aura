"use client";

import { Menu, Sparkles } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-toggle";
import { MobileSidebar } from "./mobile-sidebar";
import Image from "next/image";
import { useProModal } from "@/hooks/usepromodal";

const font = Poppins({
    weight: "600",
    subsets: ["latin"]
});

interface NavBarProps {
	isPro: boolean;
}

export const Navbar = ({
	isPro
}: NavBarProps) => {

	const proModal = useProModal();

    return (
        <div
            className="
                fixed
                w-full
                flex
                justify-between
                z-50
                items-center
                py-2
                px-4
                border-b
                border-primary/10
                bg-secondary
                h-16
            "
        >
            <div className="flex items-center">
                <MobileSidebar isPro={isPro}/>
                <Link href="/">
                    <div className="flex items-center mr-4">
						<Image
							src={"/aura.png"}
							alt="logo"
							width={30}
							height={30}
						/>

						<h1 className={cn("justify-start hidden md:block text-xl md:text-3xl font-bold text-primary pl-4",
							font.className
						)}>
							aura.ai
						</h1>
					</div>
                </Link>
            </div>
            <div
                className="
                    flex
                    items-center
                    gap-x-3
                "
            >
				{!isPro && (
                <Button onClick={proModal.onOpen} variant="nl" size="sm">
                    Upgrade
                    <Sparkles
                        className="
                            h-4
                            w-4
                            fill-white
                            text-white
                            ml-2
                        "
                    />
                </Button>
				)}
                <ModeToggle />
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
    )
}


