import { SiteFooter } from "@/src/components/layout/site-footer";
import { SiteHeader } from "@/src/components/layout/site-header";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { ArrowRight, CheckCircle, Globe, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-teal-50 dark:from-black dark:to-teal-950/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border border-transparent bg-teal-500/10 px-2.5 py-0.5 text-xs font-semibold text-teal-600 dark:text-teal-400">
                  <span>About Us</span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Our Mission
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    SuiVana is revolutionizing equity investment in Web3
                    projects through transparent, blockchain-based equity tokens
                    on the Sui network.
                  </p>
                </div>
                <p className="text-muted-foreground">
                  We believe in democratizing access to early-stage investment
                  opportunities while providing Web3 founders with the tools
                  they need to raise capital efficiently and transparently.
                </p>
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
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] h-[400px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-violet-600/20 rounded-lg blur-xl"></div>
                  <div className="relative h-full rounded-lg border overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=500"
                      alt="SuiLaunch Team"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">
                          Building the Future of Web3 Investment
                        </h3>
                        <p className="text-sm opacity-80">
                          Our team is dedicated to creating a transparent and
                          efficient platform for Web3 fundraising
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-transparent bg-violet-500/10 px-2.5 py-0.5 text-xs font-semibold text-violet-600 dark:text-violet-400">
                  <span>Our Story</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  The SuiLaunch Journey
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  How we&lsquo;re transforming Web3 investment one project at a
                  time
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-white to-teal-50/50 dark:from-black dark:to-teal-950/10 border-teal-500/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                      <span className="text-lg font-bold text-teal-600 dark:text-teal-400">
                        1
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">The Beginning</h3>
                    <p className="text-muted-foreground">
                      Founded in 2024 by a team of Web3 enthusiasts and finance
                      experts who saw the need for a more transparent and
                      efficient way to connect innovative projects with
                      investors.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-white to-violet-50/50 dark:from-black dark:to-violet-950/10 border-violet-500/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30">
                      <span className="text-lg font-bold text-violet-600 dark:text-violet-400">
                        2
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">Platform Development</h3>
                    <p className="text-muted-foreground">
                      Built on the Sui blockchain to leverage its high
                      throughput, low latency, and advanced security features,
                      creating a seamless experience for both founders and
                      investors.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-white to-teal-50/50 dark:from-black dark:to-teal-950/10 border-teal-500/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                      <span className="text-lg font-bold text-teal-600 dark:text-teal-400">
                        3
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">Growing Ecosystem</h3>
                    <p className="text-muted-foreground">
                      Today, SuiLaunch has helped dozens of projects raise
                      millions in funding, building a thriving community of
                      founders and investors passionate about Web3 innovation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-teal-50 to-violet-50 dark:from-teal-950/20 dark:to-violet-950/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-transparent bg-teal-500/10 px-2.5 py-0.5 text-xs font-semibold text-teal-600 dark:text-teal-400">
                  <span>Our Values</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  What We Stand For
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The core principles that guide everything we do
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30 mt-1">
                  <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Transparency</h3>
                  <p className="text-muted-foreground">
                    We believe in complete transparency in all aspects of
                    fundraising. From project details to token distribution,
                    everything is visible and verifiable on the blockchain.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30 mt-1">
                  <Shield className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Security</h3>
                  <p className="text-muted-foreground">
                    Security is paramount. We leverage the advanced security
                    features of the Sui blockchain and implement rigorous
                    project vetting to protect our users.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30 mt-1">
                  <Globe className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                  <p className="text-muted-foreground">
                    We&lsquo;re democratizing access to early-stage investment
                    opportunities, making it possible for anyone to invest in
                    promising Web3 projects regardless of their location or
                    background.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30 mt-1">
                  <CheckCircle className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    We&lsquo;re constantly innovating to improve our platform
                    and provide the best possible experience for both founders
                    and investors in the rapidly evolving Web3 space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-transparent bg-violet-500/10 px-2.5 py-0.5 text-xs font-semibold text-violet-600 dark:text-violet-400">
                  <span>Our Team</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Meet the People Behind SuiVana
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A diverse team of experts passionate about Web3 and
                  decentralized finance
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Alex Chen",
                  role: "Founder & CEO",
                  bio: "Former blockchain developer with 8+ years of experience in DeFi and governance systems.",
                  image: "/placeholder.svg?height=200&width=200",
                },
                {
                  name: "Sarah Johnson",
                  role: "CTO",
                  bio: "Full-stack developer with expertise in Sui Move language and smart contract security.",
                  image: "/placeholder.svg?height=200&width=200",
                },
                {
                  name: "Michael Wong",
                  role: "Head of Product",
                  bio: "Product leader with experience at major Web3 projects and a background in UX design.",
                  image: "/placeholder.svg?height=200&width=200",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Head of Operations",
                  bio: "Operations expert with experience scaling fintech startups and implementing efficient processes.",
                  image: "/placeholder.svg?height=200&width=200",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-teal-600 dark:text-teal-400 mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-teal-500 to-violet-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Join Us in Transforming Web3 Investment
                </h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Whether you&lsquo;re a founder looking to raise capital or an
                  investor seeking opportunities, SuiLaunch is here to help
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-white text-teal-600 hover:bg-white/90"
                  asChild
                >
                  <Link href="/projects">
                    Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/submit-project">Submit Project</Link>
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
