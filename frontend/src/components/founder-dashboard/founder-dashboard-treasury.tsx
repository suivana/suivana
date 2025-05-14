import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

export function FounderDashboardTreasury() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Treasury Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$1,200,000</div>
            <div className="text-xs text-muted-foreground mt-2">
              Held in multi-sig wallet
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Token Reserve</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">70,000,000 SDT</div>
            <div className="text-xs text-muted-foreground mt-2">
              70% of total supply
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Signatories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3/5</div>
            <div className="text-xs text-muted-foreground mt-2">
              Required for transactions
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Treasury Transactions</CardTitle>
            <CardDescription>Recent financial activity</CardDescription>
          </div>
          <Button className="bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-600 hover:to-violet-700 text-white border-0">
            New Transaction
          </Button>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-5 p-3 font-medium border-b">
              <div>Transaction</div>
              <div>Amount</div>
              <div>Date</div>
              <div>Status</div>
              <div>Approvals</div>
            </div>
            {[
              {
                type: "Development Expense",
                amount: "$50,000",
                date: "Jun 1, 2025",
                status: "Completed",
                approvals: "5/5",
              },
              {
                type: "Marketing Budget",
                amount: "$25,000",
                date: "May 15, 2025",
                status: "Completed",
                approvals: "4/5",
              },
              {
                type: "Team Compensation",
                amount: "$75,000",
                date: "May 1, 2025",
                status: "Completed",
                approvals: "5/5",
              },
              {
                type: "Infrastructure Costs",
                amount: "$10,000",
                date: "Jun 5, 2025",
                status: "Pending",
                approvals: "2/5",
              },
            ].map((tx, index) => (
              <div
                key={index}
                className="grid grid-cols-5 p-3 border-b last:border-0"
              >
                <div>{tx.type}</div>
                <div>{tx.amount}</div>
                <div className="text-sm text-muted-foreground">{tx.date}</div>
                <div>
                  <span
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                      tx.status === "Completed"
                        ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                        : "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400"
                    }`}
                  >
                    {tx.status}
                  </span>
                </div>
                <div>{tx.approvals}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
