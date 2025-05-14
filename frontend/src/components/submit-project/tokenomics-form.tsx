import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Separator } from "@/src/components/ui/separator";
import { ArrowLeft, ArrowRight, HelpCircle } from "lucide-react";

export function TokenomicsForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tokenomics</CardTitle>
        <CardDescription>
          Define your token economics and fundraising goals
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="token-name">Token Name</Label>
            <Input id="token-name" placeholder="e.g., SuiDAO Token" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="token-symbol">Token Symbol</Label>
            <Input id="token-symbol" placeholder="e.g., SDT" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="total-supply">Total Supply</Label>
            <Input
              id="total-supply"
              placeholder="e.g., 100,000,000"
              type="number"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="token-price">Token Price (USD)</Label>
            <Input
              id="token-price"
              placeholder="e.g., 0.05"
              type="number"
              step="0.01"
            />
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label>Token Distribution</Label>
            <div className="text-xs text-muted-foreground">Total: 0%</div>
          </div>

          {["Public Sale", "Team", "Treasury", "Ecosystem", "Advisors"].map(
            (category, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 items-center">
                <Input defaultValue={category} className="col-span-2" />
                <div className="flex items-center">
                  <Input placeholder="%" type="number" min="0" max="100" />
                  <span className="ml-2">%</span>
                </div>
              </div>
            )
          )}

          <Button variant="outline" className="w-full">
            + Add Category
          </Button>
        </div>

        <Separator />

        <div className="space-y-4">
          <Label>Vesting Schedule</Label>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="public-vesting" className="text-sm">
                Public Sale Vesting
              </Label>
              <div className="flex items-center text-xs text-muted-foreground">
                <HelpCircle className="h-3 w-3 mr-1" />
                <span>How tokens will be released to investors</span>
              </div>
            </div>
            <Input
              id="public-vesting"
              placeholder="e.g., 25% at TGE, then 25% every 3 months"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="team-vesting" className="text-sm">
              Team Vesting
            </Label>
            <Input
              id="team-vesting"
              placeholder="e.g., 12-month cliff, then 25% every 6 months"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="advisors-vesting" className="text-sm">
              Advisors Vesting
            </Label>
            <Input
              id="advisors-vesting"
              placeholder="e.g., 6-month cliff, then 25% every 3 months"
            />
          </div>
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="funding-goal">Funding Goal (USD)</Label>
            <Input
              id="funding-goal"
              placeholder="e.g., 1,000,000"
              type="number"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="min-investment">Minimum Investment (USD)</Label>
            <Input id="min-investment" placeholder="e.g., 100" type="number" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="start-date">Sale Start Date</Label>
            <Input id="start-date" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="end-date">Sale End Date</Label>
            <Input id="end-date" type="date" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button>
          Next <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
