import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

export function HelpCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Need Help?</CardTitle>
        <CardDescription>Contact our support team</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button variant="outline" className="w-full">
          Contact Support
        </Button>
        <p className="text-xs text-center text-muted-foreground">
          Our team is available Monday-Friday, 9am-5pm UTC
        </p>
      </CardContent>
    </Card>
  );
}
