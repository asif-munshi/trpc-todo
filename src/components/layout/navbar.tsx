"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky flex h-12 w-full items-center justify-center">
      <NavigationMenu className="h-full w-full" style={{ width: "1200px" }}>
        <NavigationMenuList>
          {/* Home Route */}
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                  {
                    "bg-blue-600 text-white hover:bg-blue-600 focus:bg-blue-600 focus:text-white":
                      pathname.match(/^[/]$/),
                  },
                )}
              >
                Todo
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* Add Todo Route */}
          <NavigationMenuItem>
            <Link href="/add" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                  {
                    "bg-blue-600 text-white hover:bg-blue-600 focus:bg-blue-600 focus:text-white":
                      pathname.match("/add"),
                  },
                )}
              >
                Add
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* Mode Toggle Button */}
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
          {/* Get Started */}
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-800 hover:text-white focus:bg-blue-800 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                Get Started
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
