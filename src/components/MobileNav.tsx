"use client";

import { useState } from "react";
import Link from "next/link";
import { MdMenu, MdExpandMore } from "react-icons/md";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { navigationItems } from "@/lib/navigation-data";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-700 hover:text-primary"
          aria-label="Menü öffnen"
        >
          <MdMenu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72 p-0">
        <SheetTitle className="px-6 pt-6 pb-4 font-display font-bold text-primary text-lg border-b flex items-center gap-2">
          <Image
            src="/images/logo-sm.webp"
            alt=""
            width={28}
            height={28}
            className="rounded-full object-cover"
          />
          Menü
        </SheetTitle>
        <nav className="flex flex-col py-4">
          {navigationItems.map((item) => {
            if (item.kind === "link") {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 hover:text-primary hover:bg-surface-light transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <item.icon className="text-lg text-primary/80" />
                  {item.label}
                </Link>
              );
            }

            return (
              <Collapsible key={item.label}>
                <CollapsibleTrigger className="flex items-center w-full px-6 py-3 text-sm font-medium text-gray-700 hover:text-primary hover:bg-surface-light transition-colors">
                  <item.icon className="text-lg text-primary/80 mr-2" />
                  {item.label}
                  <MdExpandMore className="h-4 w-4 ml-auto transition-transform duration-200 [[data-state=open]>&]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="block px-10 py-2 text-sm text-gray-600 hover:text-primary hover:bg-surface-light transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
