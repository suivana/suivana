import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { LineChart, Users, Wallet } from "lucide-react";

export function FounderDashboardOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Fundraising Progress</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center justify-center bg-muted/20">
          <LineChart className="h-16 w-16 text-muted-foreground/50" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Investor Demographics</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center justify-center bg-muted/20">
          <Users className="h-16 w-16 text-muted-foreground/50" />
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                    <Wallet className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <p className="font-medium">New Investment</p>
                    <p className="text-xs text-muted-foreground">
                      0x7a3b...f92e invested $500
                    </p>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">2h ago</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
