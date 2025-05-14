import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

interface StatsCardProps {
  title: string;
  description: string;
  value: string;
  subValue?: string;
  subValueColor?: string;
}

export function StatsCard({
  title,
  description,
  value,
  subValue,
  subValueColor,
}: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between">
          <div className="text-3xl font-bold">{value}</div>
          {subValue && (
            <div
              className={`text-sm ${subValueColor || "text-muted-foreground"}`}
            >
              {subValue}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
