import { ProjectCard } from "@/components/home/project-card";
import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Mock project data
const FEATURED_PROJECTS = [
  {
    id: "suidao",
    name: "SuiDAO",
    description: "Decentralized Governance Platform",
    raised: "$1.2M",
    goal: "$2M",
    progress: 60,
    investors: 342,
  },
  {
    id: "metaverse-realms",
    name: "MetaVerse Realms",
    description: "Virtual World Ecosystem",
    raised: "$800K",
    goal: "$1.5M",
    progress: 53,
    investors: 215,
  },
  {
    id: "defi-pulse",
    name: "DeFi Pulse",
    description: "Financial Analytics Platform",
    raised: "$450K",
    goal: "$1M",
    progress: 45,
    investors: 178,
  },
];

export function FeaturedProjects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border border-transparent bg-teal-500/10 px-2.5 py-0.5 text-xs font-semibold text-teal-600 dark:text-teal-400">
              <span>Featured Projects</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Current Investment Opportunities
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore some of our highlighted projects currently raising capital
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-600 hover:to-violet-700 text-white border-0"
            asChild
          >
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
