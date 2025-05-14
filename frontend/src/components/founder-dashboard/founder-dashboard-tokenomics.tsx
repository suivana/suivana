import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

export function FounderDashboardTokenomics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Token Distribution</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center justify-center bg-muted/20">
          <div className="text-center text-muted-foreground">
            Distribution chart
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vesting Schedule</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center justify-center bg-muted/20">
          <div className="text-center text-muted-foreground">
            Vesting timeline
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Token Release Schedule</CardTitle>
            <CardDescription>Upcoming token unlocks</CardDescription>
          </div>
          <Button variant="outline">Manage Schedule</Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { date: "Sep 15, 2025", amount: "2,500,000 SDT", percent: "25%" },
              { date: "Dec 15, 2025", amount: "2,500,000 SDT", percent: "25%" },
              { date: "Mar 15, 2026", amount: "2,500,000 SDT", percent: "25%" },
              { date: "Jun 15, 2026", amount: "2,500,000 SDT", percent: "25%" },
            ].map((unlock, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
              >
                <div>
                  <p className="font-medium">{unlock.date}</p>
                  <p className="text-xs text-muted-foreground">
                    Token unlock date
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{unlock.amount}</p>
                  <p className="text-xs text-muted-foreground">
                    {unlock.percent} of total
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
