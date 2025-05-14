import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Progress } from "@/src/components/ui/progress";
import { Calendar, ChevronRight, Clock } from "lucide-react";
import Link from "next/link";

interface InvestmentCardProps {
  id: string;
  projectName: string;
  category: string;
  invested: string;
  tokenAmount: string;
  currentValue: string;
  roi: string;
  vestingProgress: number;
  nextUnlock: string;
}

export function InvestmentCard({
  id,
  projectName,
  category,
  invested,
  tokenAmount,
  currentValue,
  roi,
  vestingProgress,
  nextUnlock,
}: InvestmentCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-teal-500 to-violet-600"></div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{projectName}</CardTitle>
            <div className="text-sm text-muted-foreground">{category}</div>
          </div>
          <Badge
            variant="outline"
            className="bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300"
          >
            Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Invested</p>
            <p className="font-medium">{invested}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Token Amount</p>
            <p className="font-medium">{tokenAmount}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Current Value</p>
            <p className="font-medium">{currentValue}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">ROI</p>
            <p className="font-medium text-emerald-600 dark:text-emerald-400">
              {roi}
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Vesting Progress</span>
            <span>{vestingProgress}%</span>
          </div>
          <Progress value={vestingProgress} className="h-2" />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="mr-1 h-3 w-3" />
              <span>
                Next unlock: {new Date(nextUnlock).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              <span>In 3 months</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          variant="ghost"
          className="w-full justify-between group"
          asChild
        >
          <Link href={`/projects/${id}`}>
            View Project
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
