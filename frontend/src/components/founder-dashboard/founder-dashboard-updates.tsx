import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

export function FounderDashboardUpdates() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Project Updates</CardTitle>
          <CardDescription>Keep your investors informed</CardDescription>
        </div>
        <Button className="bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-600 hover:to-violet-700 text-white border-0">
          Post Update
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {[
            {
              title: "Development Milestone Reached",
              date: "Jun 1, 2025",
              content:
                "We're excited to announce that we've completed the first major development milestone...",
            },
            {
              title: "New Partnership Announcement",
              date: "May 15, 2025",
              content:
                "We've partnered with a leading DeFi protocol to integrate our governance solution...",
            },
            {
              title: "Welcome to SuiDAO",
              date: "May 1, 2025",
              content:
                "Thank you for supporting our project! We're thrilled to have you on board as we build...",
            },
          ].map((update, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">{update.title}</h3>
                <span className="text-xs text-muted-foreground">
                  {update.date}
                </span>
              </div>
              <p className="text-muted-foreground">{update.content}</p>
              <div className="flex justify-end mt-4">
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
