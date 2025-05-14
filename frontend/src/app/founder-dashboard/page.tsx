import { SiteHeader } from "@/src/components/layout/site-header";
import { SiteFooter } from "@/src/components/layout/site-footer";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { FounderDashboardHeader } from "@/src/components/founder-dashboard/founder-dashboard-header";
import { FounderDashboardStats } from "@/src/components/founder-dashboard/founder-dashboard-stats";
import { FounderDashboardOverview } from "@/src/components/founder-dashboard/founder-dashboard-overview";
import { FounderDashboardInvestors } from "@/src/components/founder-dashboard/founder-dashboard-investors";
import { FounderDashboardTokenomics } from "@/src/components/founder-dashboard/founder-dashboard-tokenomics";
import { FounderDashboardUpdates } from "@/src/components/founder-dashboard/founder-dashboard-updates";
import { FounderDashboardTreasury } from "@/src/components/founder-dashboard/founder-dashboard-treasury";

export default function FounderDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-teal-50 dark:from-black dark:to-teal-950/20">
          <div className="container px-4 md:px-6">
            <FounderDashboardHeader />
            <FounderDashboardStats />

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="investors">Investors</TabsTrigger>
                <TabsTrigger value="tokenomics">Tokenomics</TabsTrigger>
                <TabsTrigger value="updates">Project Updates</TabsTrigger>
                <TabsTrigger value="treasury">Treasury</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <FounderDashboardOverview />
              </TabsContent>

              <TabsContent value="investors" className="space-y-6">
                <FounderDashboardInvestors />
              </TabsContent>

              <TabsContent value="tokenomics" className="space-y-6">
                <FounderDashboardTokenomics />
              </TabsContent>

              <TabsContent value="updates" className="space-y-6">
                <FounderDashboardUpdates />
              </TabsContent>

              <TabsContent value="treasury" className="space-y-6">
                <FounderDashboardTreasury />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
