import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <div className="flex items-center gap-2">
        <div className="relative w-6 h-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-violet-600 rounded-md"></div>
          <div className="absolute inset-[2px] bg-white dark:bg-black rounded-[2px] flex items-center justify-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-violet-600 font-bold text-xs">
              S
            </span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © {year} SuiVana. All rights reserved.
        </p>
      </div>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-xs hover:text-teal-500 transition-colors"
          href="/terms"
        >
          Terms
        </Link>
        <Link
          className="text-xs hover:text-teal-500 transition-colors"
          href="/privacy"
        >
          Privacy
        </Link>
        <Link
          className="text-xs hover:text-teal-500 transition-colors"
          href="/cookies"
        >
          Cookies
        </Link>
        <Link
          className="text-xs hover:text-teal-500 transition-colors"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </footer>
  );
}
