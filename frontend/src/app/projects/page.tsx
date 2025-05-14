import { SiteHeader } from "@/src/components/layout/site-header";
import { SiteFooter } from "@/src/components/layout/site-footer";
import { WalletConnectModal } from "@/src/components/wallet/wallet-connect-modal";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { ArrowLeft, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ProjectOverview } from "@/src/components/projects/project-detail/project-overview";
import { ProjectTeam } from "@/src/components/projects/project-detail/project-team";
import { ProjectRoadmap } from "@/src/components/projects/project-detail/project-roadmap";
import { ProjectTokenomics } from "@/src/components/projects/project-detail/project-tokenomics";
import { InvestmentDetails } from "@/src/components/projects/project-detail/investment-details";
import { InvestmentForm } from "@/src/components/projects/project-detail/investment-form";
import { RecentInvestors } from "@/src/components/projects/project-detail/recent-investors";
import { Badge } from "@/src/components/ui/badge";

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
                  <TabsContent value="overview" className="mt-6">
                    <ProjectOverview
                      longDescription={project.longDescription}
                      website={project.website}
                      twitter={project.twitter}
                      github={project.github}
                      whitepaper={project.whitepaper}
                    />
                  </TabsContent>
                  <TabsContent value="team" className="mt-6">
                    <ProjectTeam
                      projectName={project.name}
                      team={project.team}
                    />
                  </TabsContent>
                  <TabsContent value="roadmap" className="mt-6">
                    <ProjectRoadmap roadmap={project.roadmap} />
                  </TabsContent>
                  <TabsContent value="tokenomics" className="mt-6">
                    <ProjectTokenomics
                      distribution={project.tokenomics.distribution}
                      vesting={project.tokenomics.vesting}
                    />
                  </TabsContent>
                </Tabs>
              </div>

              <div className="space-y-6">
                <InvestmentDetails
                  raised={project.raised}
                  goal={project.goal}
                  progress={project.progress}
                  investors={project.investors}
                  tokenPrice={project.tokenPrice}
                  minInvestment={project.minInvestment}
                  totalSupply={project.totalSupply}
                  vestingPeriod={project.vestingPeriod}
                  startDate={project.startDate}
                  endDate={project.endDate}
                />

                <InvestmentForm
                  projectName={project.name}
                  minInvestment={project.minInvestment}
                  tokenPrice={project.tokenPrice}
                />

                <RecentInvestors />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
