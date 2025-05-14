import { SiteHeader } from "@/src/components/layout/site-header";
import { SiteFooter } from "@/src/components/layout/site-footer";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { ArrowRight, CheckCircle, HelpCircle, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ForInvestorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-teal-50 dark:from-black dark:to-teal-950/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border border-transparent bg-violet-500/10 px-2.5 py-0.5 text-xs font-semibold text-violet-600 dark:text-violet-400">
                  <span>For Investors</span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Invest in the Future of Web3
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Access exclusive investment opportunities in innovative Web3
                    projects through transparent, blockchain-based equity tokens
                    on the Sui network.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-600 hover:to-violet-700 text-white border-0"
                    asChild
                  >
                    <Link href="/projects">
                      Browse Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-teal-500/20 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                    asChild
                  >
                    <Link href="#how-it-works">Learn More</Link>
                  </Button>
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
                        <h3 className="text-xl font-bold">
                          Investment Highlights
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Why invest through SuiVana?
                        </p>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Early Access</p>
                            <p className="text-sm text-muted-foreground">
                              Get in early on promising Web3 projects
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Transparent Vesting</p>
                            <p className="text-sm text-muted-foreground">
                              Clear token release schedules and project metrics
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Blockchain Verified</p>
                            <p className="text-sm text-muted-foreground">
                              Equity tokens secured by Sui blockchain
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Low Fees</p>
                            <p className="text-sm text-muted-foreground">
                              Minimal platform fees and fast settlement
                            </p>
                          </div>
                        </li>
                      </ul>
                      <Button
                        className="w-full bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-600 hover:to-violet-700 text-white border-0"
                        asChild
                      >
                        <Link href="/projects">View Available Projects</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-transparent bg-teal-500/10 px-2.5 py-0.5 text-xs font-semibold text-teal-600 dark:text-teal-400">
                  <span>How It Works</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Investing Made Simple
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform makes equity investment in Web3 projects
                  accessible to everyone
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-400/20 to-violet-600/20">
                  <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                    1
                  </span>
                </div>
                <h3 className="text-xl font-bold">Browse Projects</h3>
                <p className="text-muted-foreground">
                  Explore our curated selection of innovative Web3 projects
                  across various categories
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-400/20 to-violet-600/20">
                  <span className="text-2xl font-bold text-violet-600 dark:text-violet-400">
                    2
                  </span>
                </div>
                <h3 className="text-xl font-bold">Connect Wallet</h3>
                <p className="text-muted-foreground">
                  Connect your Sui wallet to the platform to enable secure
                  transactions
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-400/20 to-violet-600/20">
                  <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                    3
                  </span>
                </div>
                <h3 className="text-xl font-bold">Invest & Track</h3>
                <p className="text-muted-foreground">
                  Purchase equity tokens and monitor your investments through
                  your dashboard
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-600 hover:to-violet-700 text-white border-0"
                asChild
              >
                <Link href="/projects">Start Investing Now</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-teal-50 to-violet-50 dark:from-teal-950/20 dark:to-violet-950/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-transparent bg-violet-500/10 px-2.5 py-0.5 text-xs font-semibold text-violet-600 dark:text-violet-400">
                  <span>Investment Guide</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Your Investment Journey
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to know about investing in Web3 projects
                  through SuiVana
                </p>
              </div>
            </div>

            <Tabs
              defaultValue="getting-started"
              className="w-full max-w-4xl mx-auto"
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="getting-started">
                  Getting Started
                </TabsTrigger>
                <TabsTrigger value="due-diligence">Due Diligence</TabsTrigger>
                <TabsTrigger value="after-investing">
                  After Investing
                </TabsTrigger>
              </TabsList>
              <TabsContent value="getting-started" className="mt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Setting Up Your Wallet</CardTitle>
                      <CardDescription>
                        Prepare your Sui wallet for investing
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        To invest on SuiVana, you&lsquo;ll need a compatible Sui
                        wallet. We recommend using Sui Wallet or other supported
                        wallets.
                      </p>
                      <ol className="space-y-2 text-sm pl-5 list-decimal">
                        <li>Download a Sui-compatible wallet</li>
                        <li>Create a new wallet or import an existing one</li>
                        <li>
                          Secure your wallet with a strong password and backup
                          your seed phrase
                        </li>
                        <li>Fund your wallet with SUI tokens</li>
                      </ol>
                      <Button variant="outline" className="w-full mt-2">
                        Wallet Setup Guide
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Understanding Equity Tokens</CardTitle>
                      <CardDescription>
                        Learn about blockchain-based equity
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Equity tokens represent ownership in a project, similar
                        to traditional equity but with the benefits of
                        blockchain technology.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                          <span>
                            Transparent ownership recorded on the blockchain
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                          <span>Programmable vesting schedules</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                          <span>
                            Potential for liquidity through secondary markets
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                          <span>Governance rights in some projects</span>
                        </li>
                      </ul>
                      <Button variant="outline" className="w-full mt-2">
                        Equity Token Guide
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="due-diligence" className="mt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Evaluating Projects</CardTitle>
                      <CardDescription>
                        How to assess investment opportunities
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Before investing, it&lsquo;s important to thoroughly
                        evaluate each project. Here are key factors to consider:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                          <span>Team experience and track record</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                          <span>Project roadmap and milestones</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                          <span>Tokenomics and distribution</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                          <span>Market opportunity and competition</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                          <span>Technical feasibility and innovation</span>
                        </li>
                      </ul>
                      <Button variant="outline" className="w-full mt-2">
                        Due Diligence Checklist
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Understanding Risks</CardTitle>
                      <CardDescription>
                        Be aware of potential investment risks
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        All investments carry risks, especially in the Web3
                        space. Be aware of these common risks:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <HelpCircle className="mr-2 h-4 w-4 text-amber-500 mt-0.5" />
                          <span>Market volatility and price fluctuations</span>
                        </li>
                        <li className="flex items-start">
                          <HelpCircle className="mr-2 h-4 w-4 text-amber-500 mt-0.5" />
                          <span>
                            Regulatory uncertainty in different jurisdictions
                          </span>
                        </li>
                        <li className="flex items-start">
                          <HelpCircle className="mr-2 h-4 w-4 text-amber-500 mt-0.5" />
                          <span>
                            Technical risks and smart contract vulnerabilities
                          </span>
                        </li>
                        <li className="flex items-start">
                          <HelpCircle className="mr-2 h-4 w-4 text-amber-500 mt-0.5" />
                          <span>Project execution and team risks</span>
                        </li>
                        <li className="flex items-start">
                          <HelpCircle className="mr-2 h-4 w-4 text-amber-500 mt-0.5" />
                          <span>Liquidity risks during vesting periods</span>
                        </li>
                      </ul>
                      <Button variant="outline" className="w-full mt-2">
                        Risk Management Guide
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="after-investing" className="mt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Managing Your Portfolio</CardTitle>
                      <CardDescription>
                        Track and optimize your investments
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        After investing, use our dashboard to monitor your
                        portfolio:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                          <span>
                            Track current value and ROI of investments
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                          <span>
                            Monitor vesting schedules and upcoming unlocks
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                          <span>View transaction history and claims</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                          <span>Stay updated on project developments</span>
                        </li>
                      </ul>
                      <Button variant="outline" className="w-full mt-2" asChild>
                        <Link href="/dashboard">Go to Dashboard</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Token Claiming</CardTitle>
                      <CardDescription>
                        Understanding the vesting process
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Most projects have vesting schedules for token
                        distribution:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                          <span>
                            Initial token generation event (TGE) release
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                          <span>
                            Scheduled unlocks over time (e.g., quarterly)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                          <span>Claim tokens through your dashboard</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                          <span>Automatic notifications for unlock events</span>
                        </li>
                      </ul>
                      <Button variant="outline" className="w-full mt-2">
                        Vesting Guide
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-transparent bg-teal-500/10 px-2.5 py-0.5 text-xs font-semibold text-teal-600 dark:text-teal-400">
                  <span>Featured Projects</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Current Investment Opportunities
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore some of our highlighted projects currently raising
                  capital
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "SuiDAO",
                  category: "Governance",
                  description:
                    "Decentralized Governance Platform built on Sui blockchain",
                  raised: "$1.2M",
                  goal: "$2M",
                  progress: 60,
                  image: "/placeholder.svg?height=200&width=400",
                },
                {
                  name: "MetaVerse Realms",
                  category: "Metaverse",
                  description:
                    "Virtual World Ecosystem with NFT integration and social experiences",
                  raised: "$800K",
                  goal: "$1.5M",
                  progress: 53,
                  image: "/placeholder.svg?height=200&width=400",
                },
                {
                  name: "DeFi Pulse",
                  category: "DeFi",
                  description:
                    "Financial Analytics Platform for decentralized finance protocols",
                  raised: "$450K",
                  goal: "$1M",
                  progress: 45,
                  image: "/placeholder.svg?height=200&width=400",
                },
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white dark:bg-black rounded-full px-2 py-1 text-xs font-medium">
                      {project.category}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Raised: {project.raised}</span>
                        <span>Goal: {project.goal}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-teal-500 to-violet-600 h-2 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-end text-xs text-muted-foreground">
                        <span>{project.progress}% Complete</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-600 hover:to-violet-700 text-white border-0"
                asChild
              >
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-teal-500 to-violet-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Start Your Investment Journey?
                </h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join SuiVana today and gain access to exclusive Web3
                  investment opportunities
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-white text-teal-600 hover:bg-white/90"
                  asChild
                >
                  <Link href="/projects">
                    Browse Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/dashboard">View Dashboard</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
