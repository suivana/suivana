import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Progress } from "@/src/components/ui/progress";
import { ArrowUpRight } from "lucide-react";

export function FounderDashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Funds Raised</CardTitle>
          <CardDescription>Current fundraising status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <div className="text-3xl font-bold">$1.2M</div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-muted-foreground">Goal: $2M</span>
              <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
                60%
              </span>
            </div>
            <Progress value={60} className="h-2 mt-2" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Investors</CardTitle>
          <CardDescription>Total backers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between">
            <div className="text-3xl font-bold">342</div>
            <div className="text-sm text-emerald-600 dark:text-emerald-400 flex items-center">
              +12 <ArrowUpRight className="h-3 w-3 ml-1" />
            </div>
          </div>
          <div className="text-xs text-muted-foreground mt-2">
            24 new investors this week
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Time Left</CardTitle>
          <CardDescription>Fundraising period</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">15 days</div>
          <div className="text-xs text-muted-foreground mt-2">
            Ends on June 15, 2025
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Token Price</CardTitle>
          <CardDescription>Current valuation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between">
            <div className="text-3xl font-bold">$0.05</div>
            <div className="text-sm text-emerald-600 dark:text-emerald-400 flex items-center">
              +2.1% <ArrowUpRight className="h-3 w-3 ml-1" />
            </div>
          </div>
          <div className="text-xs text-muted-foreground mt-2">
            Initial price: $0.049
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
