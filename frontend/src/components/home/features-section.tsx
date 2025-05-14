import {
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Shield,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-teal-500/10 text-teal-600 dark:text-teal-400">
              <span>Why SuiVana</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Revolutionizing Equity Investment
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              SuiVana connects innovative Web3 projects with investors through
              transparent, blockchain-based equity tokens on the Sui network.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 mt-12">
          <Card className="bg-gradient-to-br from-white to-teal-50/50 dark:from-black dark:to-teal-950/10 border-teal-500/20">
            <CardHeader className="pb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30 mb-2">
                <Globe className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <CardTitle>For Investors</CardTitle>
              <CardDescription>
                Access exclusive Web3 opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                  <span>Early access to innovative Web3 projects</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                  <span>Transparent vesting schedules and project metrics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                  <span>Secure, blockchain-verified equity tokens</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                  <span>Low fees and fast transaction settlement</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant="ghost"
                className="w-full justify-between group text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-950/30"
              >
                Learn More
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-gradient-to-br from-white to-violet-50/50 dark:from-black dark:to-violet-950/10 border-violet-500/20">
            <CardHeader className="pb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30 mb-2">
                <Wallet className="h-6 w-6 text-violet-600 dark:text-violet-400" />
              </div>
              <CardTitle>For Founders</CardTitle>
              <CardDescription>
                Raise capital for your Web3 project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-violet-500 mt-0.5" />
                  <span>Access a global network of Web3 investors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-violet-500 mt-0.5" />
                  <span>Streamlined token issuance and distribution</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-violet-500 mt-0.5" />
                  <span>
                    Customizable vesting schedules for team and investors
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-violet-500 mt-0.5" />
                  <span>Built-in compliance and governance tools</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant="ghost"
                className="w-full justify-between group text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-950/30"
              >
                Learn More
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-gradient-to-br from-white to-teal-50/50 dark:from-black dark:to-teal-950/10 border-teal-500/20">
            <CardHeader className="pb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30 mb-2">
                <Shield className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <CardTitle>Sui Blockchain</CardTitle>
              <CardDescription>Built on next-gen technology</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                  <span>High throughput and low latency transactions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                  <span>Advanced security with formal verification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                  <span>Horizontal scalability for growing ecosystems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                  <span>Energy-efficient consensus mechanism</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant="ghost"
                className="w-full justify-between group text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-950/30"
              >
                Learn More
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
