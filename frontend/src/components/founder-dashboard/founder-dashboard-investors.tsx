import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Download } from "lucide-react";

export function FounderDashboardInvestors() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Investor List</CardTitle>
          <CardDescription>All investors in your project</CardDescription>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" /> Export
        </Button>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <div className="grid grid-cols-5 p-3 font-medium border-b">
            <div>Wallet Address</div>
            <div>Investment</div>
            <div>Tokens</div>
            <div>Date</div>
            <div>Status</div>
          </div>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-5 p-3 border-b last:border-0"
            >
              <div className="font-mono text-sm">0x7a3b...f92e</div>
              <div>$500</div>
              <div>10,000 SDT</div>
              <div className="text-sm text-muted-foreground">Jun 1, 2025</div>
              <div>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                  Completed
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
