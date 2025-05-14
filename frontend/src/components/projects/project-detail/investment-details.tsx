import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Progress } from "@/src/components/ui/progress";
import { Separator } from "@/src/components/ui/separator";
import { Calendar, Clock } from "lucide-react";

interface InvestmentDetailsProps {
  raised: string;
  goal: string;
  progress: number;
  investors: number;
  tokenPrice: string;
  minInvestment: string;
  totalSupply: string;
  vestingPeriod: string;
  startDate: string;
  endDate: string;
}

export function InvestmentDetails({
  raised,
  goal,
  progress,
  investors,
  tokenPrice,
  minInvestment,
  totalSupply,
  vestingPeriod,
  startDate,
  endDate,
}: InvestmentDetailsProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Investment Details</CardTitle>
        <CardDescription>Token sale information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Raised</span>
            <span className="font-medium">{raised}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Goal</span>
            <span className="font-medium">{goal}</span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{progress}% Complete</span>
            <span>{investors} Investors</span>
          </div>
        </div>
        <Separator />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Token Price</p>
            <p className="font-medium">{tokenPrice}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">
              Min. Investment
            </p>
            <p className="font-medium">{minInvestment}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Total Supply</p>
            <p className="font-medium">{totalSupply}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Vesting Period</p>
            <p className="font-medium">{vestingPeriod}</p>
          </div>
        </div>
        <Separator />
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Start Date:</span>
            <span className="ml-auto">
              {new Date(startDate).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">End Date:</span>
            <span className="ml-auto">
              {new Date(endDate).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Time Left:</span>
            <span className="ml-auto">15 days</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
