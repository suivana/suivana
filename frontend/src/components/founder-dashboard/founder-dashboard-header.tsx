import { Button } from "@/src/components/ui/button";

export function FounderDashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2">
          Founder Dashboard
        </h1>
        <p className="text-muted-foreground">
          Manage your project, investors, and token distribution
        </p>
      </div>
      <Button className="bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-600 hover:to-violet-700 text-white border-0">
        Edit Project
      </Button>
    </div>
  );
}
