import { SiteHeader } from "@/src/components/layout/site-header";
import { SiteFooter } from "@/src/components/layout/site-footer";
import { WalletConnectModal } from "@/src/components/wallet/wallet-connect-modal";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { Progress } from "@/src/components/ui/progress";
import { Separator } from "@/src/components/ui/separator";
import {
  ArrowLeft,
  Calendar,
  Clock,
  ExternalLink,
  FileText,
  Github,
  Globe,
  Info,
  Lock,
  Share2,
  Twitter,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock project data - in a real app, this would come from an API or database
const PROJECT = {
  id: "suidao",
  name: "SuiDAO",
  description: "Decentralized Governance Platform built on Sui blockchain",
  longDescription:
    "SuiDAO is a revolutionary decentralized governance platform built on the Sui blockchain. It enables communities to create, manage, and govern their own decentralized autonomous organizations with unprecedented ease and flexibility. The platform features proposal creation and voting, treasury management, and integration with other Sui ecosystem projects.",
  category: "Governance",
  raised: "$1.2M",
  goal: "$2M",
  progress: 60,
  investors: 342,
  minInvestment: "$100",
  tokenPrice: "$0.05",
  totalSupply: "100,000,000",
  vestingPeriod: "12 months",
  startDate: "2025-05-01",
  endDate: "2025-06-15",
  status: "active",
  tags: ["DAO", "Governance", "DeFi"],
  website: "https://suidao.example.com",
  twitter: "https://twitter.com/suidao",
  github: "https://github.com/suidao",
  whitepaper: "https://suidao.example.com/whitepaper.pdf",
  team: [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former blockchain developer at Ethereum Foundation with 8+ years of experience in DeFi and governance systems.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      bio: "Full-stack developer with expertise in Sui Move language and smart contract security.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Michael Wong",
      role: "Head of Product",
      bio: "Product leader with experience at major Web3 projects and a background in UX design.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
  roadmap: [
    {
      title: "Q2 2025",
      description: "Launch of SuiDAO platform with basic governance features",
      status: "completed",
    },
    {
      title: "Q3 2025",
      description: "Integration with major DeFi protocols on Sui blockchain",
      status: "in-progress",
    },
    {
      title: "Q4 2025",
      description: "Advanced treasury management and multi-sig wallet features",
      status: "planned",
    },
    {
      title: "Q1 2026",
      description: "Cross-chain governance capabilities and expanded ecosystem",
      status: "planned",
    },
  ],
  tokenomics: {
    distribution: [
      { category: "Public Sale", percentage: 30 },
      { category: "Team", percentage: 20 },
      { category: "Treasury", percentage: 25 },
      { category: "Ecosystem", percentage: 15 },
      { category: "Advisors", percentage: 10 },
    ],
    vesting: {
      public: "25% at TGE, then 25% every 3 months",
      team: "12-month cliff, then 25% every 6 months",
      advisors: "6-month cliff, then 25% every 3 months",
    },
  },
};

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // In a real app, you would fetch the project data based on the ID
  const project = PROJECT;

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-6 md:py-12 bg-gradient-to-br from-white to-teal-50 dark:from-black dark:to-teal-950/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-2 mb-8">
              <Link
                href="/projects"
                className="flex items-center text-sm text-muted-foreground hover:text-teal-500 transition-colors"
              >
                <ArrowLeft className="mr-1 h-4 w-4" /> Back to Projects
              </Link>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    {project.name}
                  </h1>
                  <Badge
                    variant="outline"
                    className="bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300"
                  >
                    {project.category}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <WalletConnectModal />
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <Card>
                  <CardContent className="p-0 overflow-hidden">
                    <div className="relative h-[300px] w-full">
                      <Image
                        src="/placeholder.svg?height=600&width=1200"
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="team">Team</TabsTrigger>
                    <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
                    <TabsTrigger value="tokenomics">Tokenomics</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="mt-6 space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold">Project Overview</h2>
                      <p className="text-muted-foreground">
                        {project.longDescription}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">
                            Key Features
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                                <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
                              </div>
                              <span>Decentralized governance system</span>
                            </li>
                            <li className="flex items-start">
                              <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                                <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
                              </div>
                              <span>Proposal creation and voting</span>
                            </li>
                            <li className="flex items-start">
                              <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                                <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
                              </div>
                              <span>Treasury management</span>
                            </li>
                            <li className="flex items-start">
                              <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                                <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
                              </div>
                              <span>Integration with Sui ecosystem</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">
                            Project Links
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <Link
                              href={project.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-muted-foreground hover:text-teal-500 transition-colors"
                            >
                              <Globe className="mr-2 h-4 w-4" />
                              <span>Website</span>
                              <ExternalLink className="ml-auto h-3 w-3" />
                            </Link>
                            <Link
                              href={project.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-muted-foreground hover:text-teal-500 transition-colors"
                            >
                              <Twitter className="mr-2 h-4 w-4" />
                              <span>Twitter</span>
                              <ExternalLink className="ml-auto h-3 w-3" />
                            </Link>
                            <Link
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-muted-foreground hover:text-teal-500 transition-colors"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              <span>GitHub</span>
                              <ExternalLink className="ml-auto h-3 w-3" />
                            </Link>
                            <Link
                              href={project.whitepaper}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-muted-foreground hover:text-teal-500 transition-colors"
                            >
                              <FileText className="mr-2 h-4 w-4" />
                              <span>Whitepaper</span>
                              <ExternalLink className="ml-auto h-3 w-3" />
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="team" className="mt-6 space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold">Team</h2>
                      <p className="text-muted-foreground">
                        Meet the talented team behind {project.name}.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {project.team.map((member, index) => (
                        <Card key={index}>
                          <CardContent className="pt-6">
                            <div className="flex flex-col items-center text-center">
                              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                                <Image
                                  src={member.image || "/placeholder.svg"}
                                  alt={member.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <h3 className="font-bold text-lg">
                                {member.name}
                              </h3>
                              <p className="text-sm text-teal-600 dark:text-teal-400 mb-2">
                                {member.role}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {member.bio}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="roadmap" className="mt-6 space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold">Roadmap</h2>
                      <p className="text-muted-foreground">
                        Our development plan and milestones.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="absolute left-[22px] top-0 bottom-0 w-[2px] bg-muted"></div>
                      <div className="space-y-8">
                        {project.roadmap.map((milestone, index) => (
                          <div key={index} className="relative pl-12">
                            <div
                              className={`absolute left-0 top-0 h-6 w-6 rounded-full flex items-center justify-center ${
                                milestone.status === "completed"
                                  ? "bg-teal-100 dark:bg-teal-900/30"
                                  : milestone.status === "in-progress"
                                  ? "bg-violet-100 dark:bg-violet-900/30"
                                  : "bg-muted"
                              }`}
                            >
                              <div
                                className={`h-3 w-3 rounded-full ${
                                  milestone.status === "completed"
                                    ? "bg-teal-600 dark:bg-teal-400"
                                    : milestone.status === "in-progress"
                                    ? "bg-violet-600 dark:bg-violet-400"
                                    : "bg-muted-foreground"
                                }`}
                              ></div>
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center">
                                <h3 className="font-bold">{milestone.title}</h3>
                                <Badge
                                  variant="outline"
                                  className={`ml-2 ${
                                    milestone.status === "completed"
                                      ? "bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300"
                                      : milestone.status === "in-progress"
                                      ? "bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-300"
                                      : "bg-muted text-muted-foreground"
                                  }`}
                                >
                                  {milestone.status === "completed"
                                    ? "Completed"
                                    : milestone.status === "in-progress"
                                    ? "In Progress"
                                    : "Planned"}
                                </Badge>
                              </div>
                              <p className="text-muted-foreground">
                                {milestone.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="tokenomics" className="mt-6 space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold">Tokenomics</h2>
                      <p className="text-muted-foreground">
                        Token distribution and vesting schedule.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">
                            Token Distribution
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {project.tokenomics.distribution.map(
                              (item, index) => (
                                <div key={index}>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span>{item.category}</span>
                                    <span>{item.percentage}%</span>
                                  </div>
                                  <Progress
                                    value={item.percentage}
                                    className="h-2"
                                  />
                                </div>
                              )
                            )}
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">
                            Vesting Schedule
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <div className="h-3 w-3 rounded-full bg-teal-500 mr-2"></div>
                                <span className="font-medium">Public Sale</span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {project.tokenomics.vesting.public}
                              </p>
                            </div>
                            <Separator />
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <div className="h-3 w-3 rounded-full bg-violet-500 mr-2"></div>
                                <span className="font-medium">Team</span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {project.tokenomics.vesting.team}
                              </p>
                            </div>
                            <Separator />
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                                <span className="font-medium">Advisors</span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {project.tokenomics.vesting.advisors}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Investment Details</CardTitle>
                    <CardDescription>Token sale information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Raised</span>
                        <span className="font-medium">{project.raised}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Goal</span>
                        <span className="font-medium">{project.goal}</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{project.progress}% Complete</span>
                        <span>{project.investors} Investors</span>
                      </div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">
                          Token Price
                        </p>
                        <p className="font-medium">{project.tokenPrice}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">
                          Min. Investment
                        </p>
                        <p className="font-medium">{project.minInvestment}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">
                          Total Supply
                        </p>
                        <p className="font-medium">{project.totalSupply}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">
                          Vesting Period
                        </p>
                        <p className="font-medium">{project.vestingPeriod}</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          Start Date:
                        </span>
                        <span className="ml-auto">
                          {new Date(project.startDate).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">End Date:</span>
                        <span className="ml-auto">
                          {new Date(project.endDate).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          Time Left:
                        </span>
                        <span className="ml-auto">15 days</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Invest in {project.name}</CardTitle>
                    <CardDescription>Purchase equity tokens</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">
                          Amount to Invest
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Balance: 0 SUI
                        </span>
                      </div>
                      <div className="flex items-center border rounded-md overflow-hidden">
                        <input
                          type="text"
                          placeholder="0.00"
                          className="flex-1 px-3 py-2 bg-transparent focus:outline-none text-right"
                        />
                        <div className="px-3 py-2 bg-muted font-medium">
                          SUI
                        </div>
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                        <span>Min: {project.minInvestment}</span>
                        <span>≈ 2,000 Tokens</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Token Price
                        </span>
                        <span>{project.tokenPrice}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Platform Fee (2%)
                        </span>
                        <span>$2.00</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>$102.00</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <WalletConnectModal />
                      <Button variant="outline" className="w-full gap-2">
                        <Info className="h-4 w-4" /> How It Works
                      </Button>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Lock className="h-3 w-3" />
                      <span>
                        Your investment is secured by smart contracts on the Sui
                        blockchain
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Recent Investors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((_, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                            <Users className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">
                              0x7a3b...f92e
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Invested $500
                            </p>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            2h ago
                          </div>
                        </div>
                      ))}
                      <Button variant="ghost" className="w-full text-xs">
                        View All Investors
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
