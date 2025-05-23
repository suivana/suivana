import Link from "next/link";
import { ThemeToggle } from "@/src/components/theme-toggle";
import { WalletConnectModal } from "../wallet/wallet-connect-modal";

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
        <WalletConnectModal />
      </div>
    </header>
  );
}
