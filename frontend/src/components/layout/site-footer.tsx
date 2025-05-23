import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <div className="flex items-center gap-2">
        <div className="relative w-6 h-6">
          <Image
            src="/logo.png"
            alt="SuiVana Logo"
            fill
            className="object-contain"
          />
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
