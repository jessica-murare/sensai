import React from "react"
import { SignInButton } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
    return (

        <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/">
                    <Image
                    src='/logo.png' alt="sensai Logo" width={200} height={60} className="h-12 py-1 w-auto object-contain"
                    />
                </Link>

                <div>
                    <SignedIn>
                        <Link href="/dashboard">
                        <Button>
                            <LayoutDashboard className="h-4 w-4"/>
                            Industry Insights
                        </Button>
                        </Link>
                    </SignedIn>
                </div>
            </nav>
        

        
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </header>    
        
    );
};

export default Header;