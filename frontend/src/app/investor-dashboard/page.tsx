import { SiteHeader } from "@/src/components/layout/site-header";
import { SiteFooter } from "@/src/components/layout/site-footer";
import { WalletConnectModal } from "@/src/components/wallet/wallet-connect-modal";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { Button } from "@/src/components/ui/button";
import { StatsCard } from "@/src/components/investor-dashboard/stats-card";
import { InvestmentCard } from "@/src/components/investor-dashboard/investment-card";
import { TransactionItem } from "@/src/components/investor-dashboard/transaction-item";
import { Download } from "lucide-react";

// Mock user investments data
const USER_INVESTMENTS = [
  {
    id: "suidao",
    projectName: "SuiDAO",
    category: "Governance",
    invested: "$500",
    tokenAmount: "10,000",
    currentValue: "$550",
    roi: "+10%",
    vestingProgress: 25,
    nextUnlock: "2025-09-15",
    status: "active",
  },
  {
    id: "metaverse-realms",
    projectName: "MetaVerse Realms",
    category: "Metaverse",
    invested: "$300",
    tokenAmount: "6,000",
    currentValue: "$315",
    roi: "+5%",
    vestingProgress: 0,
    nextUnlock: "2025-10-01",
    status: "active",
  },
];

// Mock transaction history
const TRANSACTIONS = [
  {
    id: "tx1",
    type: "Investment",
    project: "SuiDAO",
    amount: "$500",
    date: "2025-06-01",
    status: "completed",
  },
  {
    id: "tx2",
    type: "Investment",
    project: "MetaVerse Realms",
    amount: "$300",
    date: "2025-06-05",
    status: "completed",
  },
  {
    id: "tx3",
    type: "Token Claim",
    project: "SuiDAO",
    amount: "2,500 Tokens",
    date: "2025-06-15",
    status: "completed",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-teal-50 dark:from-black dark:to-teal-950/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2">
                  Investor Dashboard
                </h1>
                <p className="text-muted-foreground">
                  Manage your investments and track your portfolio
                </p>
              </div>
              <WalletConnectModal />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatsCard
                title="Total Invested"
                description="Across all projects"
                value="$800"
                subValue="2 Projects"
              />
              <StatsCard
                title="Current Value"
                description="Estimated portfolio value"
                value="$865"
                subValue="+8.1%"
                subValueColor="text-emerald-600 dark:text-emerald-400"
              />
              <StatsCard
                title="Tokens Claimed"
                description="Vested tokens received"
                value="2,500"
                subValue="15.6% of total"
              />
            </div>

            <Tabs defaultValue="investments" className="w-full">
              <TabsList className="w-full justify-start mb-6">
                <TabsTrigger value="investments">My Investments</TabsTrigger>
                <TabsTrigger value="vesting">Vesting Schedule</TabsTrigger>
                <TabsTrigger value="transactions">
                  Transaction History
                </TabsTrigger>
              </TabsList>

              <TabsContent value="investments" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {USER_INVESTMENTS.map((investment) => (
                    <InvestmentCard key={investment.id} {...investment} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="vesting" className="space-y-6">
                {/* Vesting schedule content */}
                <Button variant="outline" className="w-full gap-2">
                  <Download className="h-4 w-4" /> Export Vesting Schedule
                </Button>
              </TabsContent>

              <TabsContent value="transactions" className="space-y-6">
                <div className="space-y-4">
                  {TRANSACTIONS.map((tx) => (
                    <TransactionItem key={tx.id} {...tx} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
