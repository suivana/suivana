import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Separator } from "@/src/components/ui/separator";
import { WalletConnectModal } from "@/src/components/wallet/wallet-connect-modal";
import { Info, Lock } from "lucide-react";

interface InvestmentFormProps {
  projectName: string;
  minInvestment: string;
  tokenPrice: string;
}

export function InvestmentForm({
  projectName,
  minInvestment,
  tokenPrice,
}: InvestmentFormProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Invest in {projectName}</CardTitle>
        <CardDescription>Purchase equity tokens</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Amount to Invest</span>
            <span className="text-xs text-muted-foreground">
              Balance: 0 SUI
            </span>
          </div>
          <div className="flex items-center border rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="0.00"
              className="flex-1 px-3 py-2 bg-transparent focus:outline-none text-right"
            />
            <div className="px-3 py-2 bg-muted font-medium">SUI</div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>Min: {minInvestment}</span>
            <span>≈ 2,000 Tokens</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Token Price</span>
            <span>{tokenPrice}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Platform Fee (2%)</span>
            <span>$2.00</span>
          </div>
          <Separator />
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>$102.00</span>
          </div>
        </div>

        <div className="space-y-2">
          <WalletConnectModal />
          <Button variant="outline" className="w-full gap-2">
            <Info className="h-4 w-4" /> How It Works
          </Button>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Lock className="h-3 w-3" />
          <span>
            Your investment is secured by smart contracts on the Sui blockchain
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
