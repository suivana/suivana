import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { ThemeToggle } from "@/src/components/theme-toggle";
import { Menu } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="px-4 lg:px-6 h-20 flex items-center justify-between border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link className="flex items-center gap-2 font-bold text-xl" href="/">
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
      <nav className="hidden md:flex gap-6">
        <Link
          className="text-sm font-medium hover:text-teal-500 transition-colors"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium hover:text-teal-500 transition-colors"
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className="text-sm font-medium hover:text-teal-500 transition-colors"
          href="/for-investors"
        >
          For Investors
        </Link>
        <Link
          className="text-sm font-medium hover:text-teal-500 transition-colors"
          href="/for-founders"
        >
          For Founders
        </Link>
        <Link
          className="text-sm font-medium hover:text-teal-500 transition-colors"
          href="/about"
        >
          About
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Button
          variant="ghost"
          size="sm"
          className="hidden md:flex hover:text-teal-500 hover:bg-teal-50 dark:hover:bg-teal-950/30"
          asChild
        >
          <Link href="/signin">Sign In</Link>
        </Button>
        <Button
          size="sm"
          className="hidden md:flex bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-600 hover:to-violet-700 text-white border-0"
          asChild
        >
          <Link href="/dashboard">Launch App</Link>
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
    </header>
  );
}
