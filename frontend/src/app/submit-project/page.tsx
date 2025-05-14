import { SiteHeader } from "@/src/components/layout/site-header";
import { SiteFooter } from "@/src/components/layout/site-footer";
import { WalletConnectModal } from "@/src/components/wallet/wallet-connect-modal";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { BasicInfoForm } from "@/src/components/submit-project/basic-info-form";
import { ProjectDetailsForm } from "@/src/components/submit-project/project-details-form";
import { TeamInfoForm } from "@/src/components/submit-project/team-info-form";
import { TokenomicsForm } from "@/src/components/submit-project/tokenomics-form";
import { ReviewForm } from "@/src/components/submit-project/review-form";
import { SubmissionGuide } from "@/src/components/submit-project/submission-guide";
import { ReviewProcess } from "@/src/components/submit-project/review-process";
import { HelpCard } from "@/src/components/submit-project/help-card";

export default function SubmitProjectPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-teal-50 dark:from-black dark:to-teal-950/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-2 mb-8">
              <Link
                href="/"
                className="flex items-center text-sm text-muted-foreground hover:text-teal-500 transition-colors"
              >
                <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
              </Link>
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2">
                  Submit Your Project
                </h1>
                <p className="text-muted-foreground max-w-[700px]">
                  List your Web3 project on SuiVana and raise capital through
                  equity tokens on the Sui blockchain
                </p>
              </div>
              <div className="flex items-center mt-4">
                <WalletConnectModal />
                <span className="text-sm text-muted-foreground ml-4">
                  Connect your wallet to submit a project
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Tabs defaultValue="basic" className="w-full">
                  <div className="flex justify-between items-center mb-6">
                    <TabsList>
                      <TabsTrigger value="basic">Basic Info</TabsTrigger>
                      <TabsTrigger value="details">Project Details</TabsTrigger>
                      <TabsTrigger value="team">Team</TabsTrigger>
                      <TabsTrigger value="tokenomics">Tokenomics</TabsTrigger>
                      <TabsTrigger value="review">Review</TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="basic" className="space-y-6">
                    <BasicInfoForm />
                  </TabsContent>

                  <TabsContent value="details" className="space-y-6">
                    <ProjectDetailsForm />
                  </TabsContent>

                  <TabsContent value="team" className="space-y-6">
                    <TeamInfoForm />
                  </TabsContent>

                  <TabsContent value="tokenomics" className="space-y-6">
                    <TokenomicsForm />
                  </TabsContent>

                  <TabsContent value="review" className="space-y-6">
                    <ReviewForm />
                  </TabsContent>
                </Tabs>
              </div>

              <div className="space-y-6">
                <SubmissionGuide />
                <ReviewProcess />
                <HelpCard />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
