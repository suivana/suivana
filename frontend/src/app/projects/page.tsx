import { SiteHeader } from "@/src/components/layout/site-header";
import { SiteFooter } from "@/src/components/layout/site-footer";
import { WalletConnectModal } from "@/src/components/wallet/wallet-connect-modal";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { ProjectFilter } from "@/src/components/projects/project-filter";
import { ProjectList } from "@/src/components/projects/project-list";
import { ChevronRight, Search } from "lucide-react";

// Mock project data
const PROJECTS = [
  {
    id: "suidao",
    name: "SuiDAO",
    description: "Decentralized Governance Platform built on Sui blockchain",
    category: "Governance",
    raised: "$1.2M",
    goal: "$2M",
    progress: 60,
    investors: 342,
    endDate: "2025-06-15",
    status: "active",
    tags: ["DAO", "Governance", "DeFi"],
  },
  {
    id: "metaverse-realms",
    name: "MetaVerse Realms",
    description:
      "Virtual World Ecosystem with NFT integration and social experiences",
    category: "Metaverse",
    raised: "$800K",
    goal: "$1.5M",
    progress: 53,
    investors: 215,
    endDate: "2025-07-01",
    status: "active",
    tags: ["Metaverse", "NFT", "Gaming"],
  },
  {
    id: "defi-pulse",
    name: "DeFi Pulse",
    description:
      "Financial Analytics Platform for decentralized finance protocols",
    category: "DeFi",
    raised: "$450K",
    goal: "$1M",
    progress: 45,
    investors: 178,
    endDate: "2025-06-30",
    status: "active",
    tags: ["DeFi", "Analytics", "Data"],
  },
  {
    id: "nft-marketplace",
    name: "Sui Collectibles",
    description: "NFT marketplace specialized in digital collectibles on Sui",
    category: "NFT",
    raised: "$650K",
    goal: "$1.2M",
    progress: 54,
    investors: 203,
    endDate: "2025-07-15",
    status: "active",
    tags: ["NFT", "Marketplace", "Art"],
  },
  {
    id: "defi-lending",
    name: "LendSui",
    description: "Decentralized lending protocol with multi-collateral support",
    category: "DeFi",
    raised: "$1.5M",
    goal: "$2.5M",
    progress: 60,
    investors: 412,
    endDate: "2025-06-20",
    status: "active",
    tags: ["DeFi", "Lending", "Yield"],
  },
  {
    id: "gaming-platform",
    name: "GameFi Hub",
    description:
      "Gaming platform with play-to-earn mechanics and NFT integration",
    category: "Gaming",
    raised: "$900K",
    goal: "$1.8M",
    progress: 50,
    investors: 267,
    endDate: "2025-07-10",
    status: "active",
    tags: ["Gaming", "P2E", "NFT"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-teal-50 dark:from-black dark:to-teal-950/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Discover Projects
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Explore innovative Web3 projects raising capital through
                  equity tokens on the Sui blockchain
                </p>
              </div>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Search projects..."
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-center mt-4">
                <WalletConnectModal />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20 bg-white dark:bg-black">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <TabsList className="bg-muted/50">
                  <TabsTrigger value="all">All Projects</TabsTrigger>
                  <TabsTrigger value="defi">DeFi</TabsTrigger>
                  <TabsTrigger value="nft">NFT</TabsTrigger>
                  <TabsTrigger value="gaming">Gaming</TabsTrigger>
                  <TabsTrigger value="dao">DAO</TabsTrigger>
                </TabsList>
                <ProjectFilter />
              </div>

              <TabsContent value="all" className="mt-0">
                <ProjectList projects={PROJECTS} />
              </TabsContent>

              <TabsContent value="defi" className="mt-0">
                <ProjectList
                  projects={PROJECTS.filter((p) => p.category === "DeFi")}
                />
              </TabsContent>

              <TabsContent value="nft" className="mt-0">
                <ProjectList
                  projects={PROJECTS.filter((p) => p.category === "NFT")}
                />
              </TabsContent>

              <TabsContent value="gaming" className="mt-0">
                <ProjectList
                  projects={PROJECTS.filter((p) => p.category === "Gaming")}
                />
              </TabsContent>

              <TabsContent value="dao" className="mt-0">
                <ProjectList
                  projects={PROJECTS.filter((p) => p.category === "Governance")}
                />
              </TabsContent>
            </Tabs>

            <div className="flex justify-center mt-12">
              <Button variant="outline" className="gap-2">
                Load More Projects <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
