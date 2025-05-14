import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  raised: string;
  goal: string;
  progress: number;
  investors: number;
  endDate: string;
  tags: string[];
}

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Link
          href={`/projects/${project.id}`}
          key={project.id}
          className="group"
        >
          <Card className="overflow-hidden h-full transition-all hover:border-teal-500/50 hover:shadow-md">
            <div
              className="h-3 bg-gradient-to-r from-teal-500 to-violet-600"
              style={{ width: `${project.progress}%` }}
            ></div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="group-hover:text-teal-600 transition-colors">
                  {project.name}
                </CardTitle>
                <Badge
                  variant="outline"
                  className="bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-900/50"
                >
                  {project.category}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                {project.description}
              </p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Raised: {project.raised}</span>
                  <span>Goal: {project.goal}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-teal-500 to-violet-600 h-2 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{project.investors} investors</span>
                  <span>
                    Ends {new Date(project.endDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="ghost" className="w-full justify-between group">
                View Details
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
