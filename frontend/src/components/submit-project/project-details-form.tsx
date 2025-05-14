import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";
import { Separator } from "@/src/components/ui/separator";
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  Github,
  Globe,
  Twitter,
} from "lucide-react";

export function ProjectDetailsForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Details</CardTitle>
        <CardDescription>
          Add more information about your project
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <div className="flex">
              <div className="flex items-center px-3 border rounded-l-md bg-muted">
                <Globe className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                id="website"
                placeholder="https://yourproject.com"
                className="rounded-l-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="twitter">Twitter</Label>
            <div className="flex">
              <div className="flex items-center px-3 border rounded-l-md bg-muted">
                <Twitter className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                id="twitter"
                placeholder="https://twitter.com/yourproject"
                className="rounded-l-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="github">GitHub</Label>
            <div className="flex">
              <div className="flex items-center px-3 border rounded-l-md bg-muted">
                <Github className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                id="github"
                placeholder="https://github.com/yourproject"
                className="rounded-l-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="whitepaper">Whitepaper</Label>
            <div className="flex">
              <div className="flex items-center px-3 border rounded-l-md bg-muted">
                <FileText className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                id="whitepaper"
                placeholder="https://yourproject.com/whitepaper"
                className="rounded-l-none"
              />
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <Label>Project Roadmap</Label>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border rounded-lg"
              >
                <div className="space-y-2">
                  <Label htmlFor={`milestone-${index}-title`}>
                    Milestone Title
                  </Label>
                  <Input
                    id={`milestone-${index}-title`}
                    placeholder={`e.g., Q${index} 2025`}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor={`milestone-${index}-description`}>
                    Description
                  </Label>
                  <Input
                    id={`milestone-${index}-description`}
                    placeholder="Describe this milestone"
                  />
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              + Add Another Milestone
            </Button>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <Label htmlFor="problem">Problem Statement</Label>
          <Textarea
            id="problem"
            placeholder="What problem does your project solve?"
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="solution">Solution</Label>
          <Textarea
            id="solution"
            placeholder="How does your project solve this problem?"
            className="min-h-[100px]"
          />
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
