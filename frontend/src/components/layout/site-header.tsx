import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/src/components/theme-toggle";
import { WalletConnectModal } from "../wallet/wallet-connect-modal";

export function SiteHeader() {
  return (
    <header className="px-4 lg:px-6 h-20 flex items-center justify-between border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link className="flex items-center gap-2" href="/">
        <div className="relative w-8 h-8 overflow-hidden">
          <Image
            src="/logo.png"
            alt="SuiVana Logo"
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-lg">SUIVANA</span>
          <span className="text-[8px] font-normal tracking-wider leading-tight">
            FUTURE OF INVESTMENT
          </span>
        </div>
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
