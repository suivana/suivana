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
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Rocket,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ForFoundersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-teal-50 dark:from-black dark:to-teal-950/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border border-transparent bg-teal-500/10 px-2.5 py-0.5 text-xs font-semibold text-teal-600 dark:text-teal-400">
                  <span>For Founders</span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Raise Capital for Your Web3 Project
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Connect with investors and raise funds through transparent,
                    blockchain-based equity tokens on the Sui network.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-600 hover:to-violet-700 text-white border-0"
                    asChild
                  >
                    <Link href="/submit-project">
                      Submit Your Project{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-teal-500/20 hover:bg-teal-50 dark:hover:bg-teal-950/30"
                    asChild
                  >
                    <Link href="#benefits">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-violet-600/20 rounded-lg blur-xl"></div>
                  <div className="relative bg-white/80 dark:bg-black/80 backdrop-blur-sm border rounded-lg shadow-lg p-6 h-full flex flex-col justify-center">
                    <div className="absolute -top-4 -right-4 bg-gradient-to-br from-teal-400 to-violet-600 rounded-full p-2 shadow-lg">
                      <Rocket className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">
                          Platform Highlights
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Why raise capital on SuiVana?
                        </p>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">
                              Global Investor Network
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Access a worldwide community of Web3 investors
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">
                              Streamlined Token Issuance
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Simplified equity token creation and distribution
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Customizable Vesting</p>
                            <p className="text-sm text-muted-foreground">
                              Flexible vesting schedules for team and investors
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Compliance Tools</p>
                            <p className="text-sm text-muted-foreground">
                              Built-in compliance and governance features
                            </p>
                          </div>
                        </li>
                      </ul>
                      <Button
                        className="w-full bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-600 hover:to-violet-700 text-white border-0"
                        asChild
                      >
                        <Link href="/submit-project">Submit Your Project</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="benefits"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-transparent bg-violet-500/10 px-2.5 py-0.5 text-xs font-semibold text-violet-600 dark:text-violet-400">
                  <span>Benefits</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Why Choose SuiVana?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers unique advantages for Web3 founders
                  looking to raise capital
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="bg-gradient-to-br from-white to-teal-50/50 dark:from-black dark:to-teal-950/10 border-teal-500/20">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30 mb-2">
                    <Users className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <CardTitle>Access to Investors</CardTitle>
                  <CardDescription>
                    Connect with the right backers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                      <span>Reach a global network of Web3 investors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                      <span>Showcase your project to the right audience</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                      <span>Build relationships with strategic investors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                      <span>Gain visibility in the Sui ecosystem</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-white to-violet-50/50 dark:from-black dark:to-violet-950/10 border-violet-500/20">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30 mb-2">
                    <Rocket className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <CardTitle>Streamlined Fundraising</CardTitle>
                  <CardDescription>
                    Efficient capital raising process
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-violet-500 mt-0.5" />
                      <span>Simple project submission and listing process</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-violet-500 mt-0.5" />
                      <span>Automated token issuance and distribution</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-violet-500 mt-0.5" />
                      <span>Transparent fundraising dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-violet-500 mt-0.5" />
                      <span>
                        Lower costs compared to traditional fundraising
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-white to-teal-50/50 dark:from-black dark:to-teal-950/10 border-teal-500/20">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30 mb-2">
                    <Lightbulb className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <CardTitle>Founder-Friendly Tools</CardTitle>
                  <CardDescription>
                    Built for Web3 project success
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                      <span>Customizable vesting schedules</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                      <span>Investor management dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                      <span>Project updates and communication tools</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-500 mt-0.5" />
                      <span>Compliance and governance features</span>
                    </li>
                  </ul>
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
                  <span>How It Works</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  The Fundraising Process
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A simple, transparent process to raise capital for your Web3
                  project
                </p>
              </div>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-violet-600 -translate-x-1/2"></div>

              <div className="relative grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-12">
                <div className="md:col-start-2 relative pl-8 md:pl-0 pb-12">
                  <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-gradient-to-br from-teal-400 to-violet-600 flex items-center justify-center text-white font-bold md:left-[-20px]">
                    1
                  </div>
                  <div className="bg-white dark:bg-black rounded-lg border p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-2">
                      Submit Your Project
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Complete our comprehensive project submission form with
                      details about your team, project, and fundraising goals.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/submit-project">Start Submission</Link>
                    </Button>
                  </div>
                </div>

                <div className="md:col-start-1 relative pl-8 md:pl-0 pb-12">
                  <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-gradient-to-br from-teal-400 to-violet-600 flex items-center justify-center text-white font-bold md:right-[-20px] md:left-auto">
                    2
                  </div>
                  <div className="bg-white dark:bg-black rounded-lg border p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Project Review</h3>
                    <p className="text-muted-foreground mb-4">
                      Our team reviews your submission for quality, compliance,
                      and alignment with our platform standards.
                    </p>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                        <span>Technical review</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                        <span>Team verification</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                        <span>Business model assessment</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="md:col-start-2 relative pl-8 md:pl-0 pb-12">
                  <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-gradient-to-br from-teal-400 to-violet-600 flex items-center justify-center text-white font-bold md:left-[-20px]">
                    3
                  </div>
                  <div className="bg-white dark:bg-black rounded-lg border p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Project Listing</h3>
                    <p className="text-muted-foreground mb-4">
                      Once approved, your project is listed on our platform,
                      visible to our network of investors.
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-2 py-0.5 rounded text-xs font-medium">
                        Average time: 3-5 business days
                      </span>
                    </div>
                  </div>
                </div>

                <div className="md:col-start-1 relative pl-8 md:pl-0 pb-12">
                  <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-gradient-to-br from-teal-400 to-violet-600 flex items-center justify-center text-white font-bold md:right-[-20px] md:left-auto">
                    4
                  </div>
                  <div className="bg-white dark:bg-black rounded-lg border p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-2">
                      Fundraising Campaign
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Investors can view your project details and invest in your
                      equity tokens during your fundraising period.
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 px-2 py-0.5 rounded text-xs font-medium">
                        Typical duration: 30-60 days
                      </span>
                    </div>
                  </div>
                </div>

                <div className="md:col-start-2 relative pl-8 md:pl-0">
                  <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-gradient-to-br from-teal-400 to-violet-600 flex items-center justify-center text-white font-bold md:left-[-20px]">
                    5
                  </div>
                  <div className="bg-white dark:bg-black rounded-lg border p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-2">
                      Token Distribution
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      After successful fundraising, equity tokens are
                      distributed according to your vesting schedule.
                    </p>
                    <Button variant="outline" size="sm">
                      Token Distribution Guide
                    </Button>
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
                  <span>Success Stories</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Projects That Raised With Us
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn from founders who successfully raised capital on SuiVana
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="SuiDAO"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>SuiDAO: $2M Raised</CardTitle>
                  <CardDescription>
                    Decentralized Governance Platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      &quot;SuiVana provided us with the perfect platform to
                      connect with investors who understood our vision. The
                      streamlined process allowed us to focus on building our
                      product while successfully raising the capital we
                      needed.&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-muted"></div>
                      <div>
                        <p className="font-medium">Alex Chen</p>
                        <p className="text-xs text-muted-foreground">
                          Founder & CEO, SuiDAO
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div className="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-2 py-0.5 rounded text-xs font-medium">
                        30 days to raise
                      </div>
                      <div className="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-2 py-0.5 rounded text-xs font-medium">
                        342 investors
                      </div>
                      <div className="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-2 py-0.5 rounded text-xs font-medium">
                        120% of goal
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="MetaVerse Realms"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>MetaVerse Realms: $1.5M Raised</CardTitle>
                  <CardDescription>Virtual World Ecosystem</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      &quot;The SuiVana team provided invaluable guidance
                      throughout our fundraising journey. Their platform&lsquo;s
                      transparency and ease of use helped us build trust with
                      investors and exceed our fundraising goals.&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-muted"></div>
                      <div>
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-xs text-muted-foreground">
                          Co-Founder, MetaVerse Realms
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div className="bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 px-2 py-0.5 rounded text-xs font-medium">
                        45 days to raise
                      </div>
                      <div className="bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 px-2 py-0.5 rounded text-xs font-medium">
                        215 investors
                      </div>
                      <div className="bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 px-2 py-0.5 rounded text-xs font-medium">
                        100% of goal
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-teal-500 to-violet-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Raise Capital for Your Project?
                </h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join SuiVana today and connect with investors who believe in
                  your vision
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-white text-teal-600 hover:bg-white/90"
                  asChild
                >
                  <Link href="/submit-project">
                    Submit Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Contact Our Team
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
