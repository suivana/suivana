import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  raised: string;
  goal: string;
  progress: number;
  investors: number;
}

export function ProjectCard({
  id,
  name,
  description,
  raised,
  goal,
  progress,
  investors,
}: ProjectCardProps) {
  return (
    <Card className="p-4 rounded-lg border hover:border-teal-500/50 hover:shadow-md transition-all cursor-pointer">
      <CardHeader className="pb-2 px-0">
        <CardTitle className="group-hover:text-teal-600 transition-colors">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {description}
        </p>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span>Raised: {raised}</span>
            <span>Goal: {goal}</span>
          </div>
          <div className="w-full bg-muted rounded-full h-1.5">
            <div
              className="bg-gradient-to-r from-teal-500 to-violet-600 h-1.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-xs text-muted-foreground">
            {investors} investors
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0 px-0">
        <Button
          variant="ghost"
          className="w-full justify-between group"
          asChild
        >
          <Link href={`/projects/${id}`}>
            View Details
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
