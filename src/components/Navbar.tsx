"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navigationItems } from "@/lib/navigation-data";
import { MobileNav } from "@/components/MobileNav";

const flatNavStyle =
  "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent text-gray-700 hover:text-primary gap-2 flex-row";

export function Navbar() {
  return (
    <nav className="bg-surface-light shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo-sm.webp"
                alt=""
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
              <span className="font-display font-bold text-xl text-primary">
                Ganzheitliche Körpertherapie
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center">
            <NavigationMenu delayDuration={100} viewport={false}>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.kind === "link" ? (
                      <NavigationMenuLink
                        asChild
                        className={cn(navigationMenuTriggerStyle(), flatNavStyle)}
                      >
                        <Link href={item.href}>
                          <item.icon className="text-lg text-primary/80" />
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    ) : (
                      <>
                        <NavigationMenuTrigger
                          className={flatNavStyle}
                          onPointerDown={(e) => e.preventDefault()}
                          onClick={(e) => e.preventDefault()}
                        >
                          <item.icon className="text-lg text-primary/80" />
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-48 gap-1 p-2">
                            {item.items.map((subItem) => (
                              <li key={subItem.href}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className="block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent/20 hover:text-primary focus:bg-accent/20"
                                  >
                                    {subItem.label}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
}
