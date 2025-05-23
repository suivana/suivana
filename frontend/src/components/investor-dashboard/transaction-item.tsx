import { LineChart, Wallet } from "lucide-react";

export interface TransactionItemProps {
  id: string;
  type: "Investment" | "Token Claim";
  project: string;
  amount: string;
  date: string;
  status: string;
}

export function TransactionItem({
  type,
  project,
  amount,
  date,
}: TransactionItemProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
      <div className="flex items-center gap-3">
        <div
          className={`h-10 w-10 rounded-full flex items-center justify-center ${
            type === "Investment"
              ? "bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400"
              : "bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400"
          }`}
        >
          {type === "Investment" ? (
            <Wallet className="h-5 w-5" />
          ) : (
            <LineChart className="h-5 w-5" />
          )}
        </div>
        <div>
          <p className="font-medium">{type}</p>
          <p className="text-xs text-muted-foreground">{project}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium">{amount}</p>
        <p className="text-xs text-muted-foreground">
          {new Date(date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
