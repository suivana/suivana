import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export function NewsletterSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full border border-transparent bg-violet-500/10 px-2.5 py-0.5 text-xs font-semibold text-violet-600 dark:text-violet-400">
              <span>Stay Updated</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Subscribe to Our Newsletter
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get the latest updates on new projects, platform features, and
                Web3 investment opportunities
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-600 hover:to-violet-700 text-white border-0"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Terms of Service and Privacy
                Policy.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">For Investors</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/projects"
                    className="text-muted-foreground hover:text-teal-500 transition-colors"
                  >
                    Browse Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-investors"
                    className="text-muted-foreground hover:text-teal-500 transition-colors"
                  >
                    How to Invest
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-investors"
                    className="text-muted-foreground hover:text-teal-500 transition-colors"
                  >
                    Vesting Schedules
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-investors"
                    className="text-muted-foreground hover:text-teal-500 transition-colors"
                  >
                    Investment Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">For Founders</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/submit-project"
                    className="text-muted-foreground hover:text-teal-500 transition-colors"
                  >
                    Submit Project
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-founders"
                    className="text-muted-foreground hover:text-teal-500 transition-colors"
                  >
                    Equity Tokenization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-founders"
                    className="text-muted-foreground hover:text-teal-500 transition-colors"
                  >
                    Founder Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-founders"
                    className="text-muted-foreground hover:text-teal-500 transition-colors"
                  >
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
