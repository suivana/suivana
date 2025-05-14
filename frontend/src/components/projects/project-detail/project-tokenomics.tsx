import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Progress } from "@/src/components/ui/progress";
import { Separator } from "@/src/components/ui/separator";

interface TokenDistribution {
  category: string;
  percentage: number;
}

interface TokenVesting {
  public: string;
  team: string;
  advisors: string;
}

interface ProjectTokenomicsProps {
  distribution: TokenDistribution[];
  vesting: TokenVesting;
}

export function ProjectTokenomics({
  distribution,
  vesting,
}: ProjectTokenomicsProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Tokenomics</h2>
        <p className="text-muted-foreground">
          Token distribution and vesting schedule.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Token Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {distribution.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{item.category}</span>
                    <span>{item.percentage}%</span>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Vesting Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-teal-500 mr-2"></div>
                  <span className="font-medium">Public Sale</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {vesting.public}
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-violet-500 mr-2"></div>
                  <span className="font-medium">Team</span>
                </div>
                <p className="text-sm text-muted-foreground">{vesting.team}</p>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="font-medium">Advisors</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {vesting.advisors}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
