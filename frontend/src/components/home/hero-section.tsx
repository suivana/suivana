import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-white to-teal-50 dark:from-black dark:to-teal-950/20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-violet-500/10 text-violet-600 dark:text-violet-400">
              <span>Now Live on Sui Blockchain</span>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Invest in the Future of Web3
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                SuiVana is the first DAO Equity Launchpad on Sui Blockchain,
                connecting investors with innovative Web3 projects through
                transparent, blockchain-based equity tokens.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-600 hover:to-violet-700 text-white border-0"
                asChild
              >
                <Link href="/projects">
                  Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-500/20 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle2 className="mr-1 h-3 w-3 text-teal-500" />
                <span>Secure</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="mr-1 h-3 w-3 text-teal-500" />
                <span>Transparent</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="mr-1 h-3 w-3 text-teal-500" />
                <span>Decentralized</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-violet-600/20 rounded-lg blur-xl"></div>
              <div className="relative bg-white/80 dark:bg-black/80 backdrop-blur-sm border rounded-lg shadow-lg p-6 h-full flex flex-col justify-center">
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-teal-400 to-violet-600 rounded-full p-2 shadow-lg">
                  <Wallet className="h-6 w-6 text-white" />
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Featured Projects</h3>
                    <p className="text-sm text-muted-foreground">
                      Discover the latest opportunities
                    </p>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        name: "SuiDAO",
                        description: "Decentralized Governance Platform",
                        raised: "$1.2M",
                        goal: "$2M",
                        progress: 60,
                        investors: 342,
                      },
                      {
                        name: "MetaVerse Realms",
                        description: "Virtual World Ecosystem",
                        raised: "$800K",
                        goal: "$1.5M",
                        progress: 53,
                        investors: 215,
                      },
                      {
                        name: "DeFi Pulse",
                        description: "Financial Analytics Platform",
                        raised: "$450K",
                        goal: "$1M",
                        progress: 45,
                        investors: 178,
                      },
                    ].map((project, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors cursor-pointer"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{project.name}</h4>
                            <p className="text-xs text-muted-foreground">
                              {project.description}
                            </p>
                          </div>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="mt-2 space-y-2">
                          <div className="flex justify-between text-xs">
                            <span>Raised: {project.raised}</span>
                            <span>Goal: {project.goal}</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-1.5">
                            <div
                              className="bg-gradient-to-r from-teal-500 to-violet-600 h-1.5 rounded-full"
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {project.investors} investors
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-600 hover:to-violet-700 text-white border-0">
                    View All Projects
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
