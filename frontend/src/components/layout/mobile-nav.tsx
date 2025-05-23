"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/src/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { WalletConnectModal } from "../wallet/wallet-connect-modal";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80%] sm:w-[350px] pr-0">
        <div className="flex flex-col gap-6 px-2">
          <div className="flex items-center justify-between">
            <Link
              className="flex items-center gap-2 font-bold text-xl"
              href="/"
              onClick={() => setOpen(false)}
            >
              <div className="relative w-8 h-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-violet-600 rounded-md"></div>
                <div className="absolute inset-[2px] bg-white dark:bg-black rounded-[4px] flex items-center justify-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-violet-600 font-bold">
                    S
                  </span>
                </div>
              </div>
              <span>SuiVana</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4">
            <Link
              className="text-lg font-medium hover:text-teal-500 transition-colors py-2"
              href="/"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              className="text-lg font-medium hover:text-teal-500 transition-colors py-2"
              href="/projects"
              onClick={() => setOpen(false)}
            >
              Projects
            </Link>
            <Link
              className="text-lg font-medium hover:text-teal-500 transition-colors py-2"
              href="/for-investors"
              onClick={() => setOpen(false)}
            >
              For Investors
            </Link>
            <Link
              className="text-lg font-medium hover:text-teal-500 transition-colors py-2"
              href="/for-founders"
              onClick={() => setOpen(false)}
            >
              For Founders
            </Link>
            <Link
              className="text-lg font-medium hover:text-teal-500 transition-colors py-2"
              href="/about"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
          </nav>
          <div className="flex flex-col gap-2 mt-4">
            <WalletConnectModal />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
