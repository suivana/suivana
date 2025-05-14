import { Badge } from "@/src/components/ui/badge";

interface Milestone {
  title: string;
  description: string;
  status: string;
}

interface ProjectRoadmapProps {
  roadmap: Milestone[];
}

export function ProjectRoadmap({ roadmap }: ProjectRoadmapProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Roadmap</h2>
        <p className="text-muted-foreground">
          Our development plan and milestones.
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-[22px] top-0 bottom-0 w-[2px] bg-muted"></div>
        <div className="space-y-8">
          {roadmap.map((milestone, index) => (
            <div key={index} className="relative pl-12">
              <div
                className={`absolute left-0 top-0 h-6 w-6 rounded-full flex items-center justify-center ${
                  milestone.status === "completed"
                    ? "bg-teal-100 dark:bg-teal-900/30"
                    : milestone.status === "in-progress"
                    ? "bg-violet-100 dark:bg-violet-900/30"
                    : "bg-muted"
                }`}
              >
                <div
                  className={`h-3 w-3 rounded-full ${
                    milestone.status === "completed"
                      ? "bg-teal-600 dark:bg-teal-400"
                      : milestone.status === "in-progress"
                      ? "bg-violet-600 dark:bg-violet-400"
                      : "bg-muted-foreground"
                  }`}
                ></div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center">
                  <h3 className="font-bold">{milestone.title}</h3>
                  <Badge
                    variant="outline"
                    className={`ml-2 ${
                      milestone.status === "completed"
                        ? "bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300"
                        : milestone.status === "in-progress"
                        ? "bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-300"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {milestone.status === "completed"
                      ? "Completed"
                      : milestone.status === "in-progress"
                      ? "In Progress"
                      : "Planned"}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
