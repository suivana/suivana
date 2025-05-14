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
import { ArrowLeft, ArrowRight, Upload } from "lucide-react";

export function TeamInfoForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Information</CardTitle>
        <CardDescription>Add details about your team members</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {[1, 2, 3].map((index) => (
            <div key={index} className="p-4 border rounded-lg space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">Team Member {index}</h3>
                {index > 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20"
                  >
                    Remove
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`member-${index}-name`}>Full Name</Label>
                  <Input id={`member-${index}-name`} placeholder="Full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`member-${index}-role`}>Role</Label>
                  <Input
                    id={`member-${index}-role`}
                    placeholder="e.g., CEO, CTO, Developer"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor={`member-${index}-bio`}>Bio</Label>
                <Textarea
                  id={`member-${index}-bio`}
                  placeholder="Brief biography and relevant experience"
                  className="resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`member-${index}-linkedin`}>
                    LinkedIn (optional)
                  </Label>
                  <Input
                    id={`member-${index}-linkedin`}
                    placeholder="LinkedIn profile URL"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`member-${index}-twitter`}>
                    Twitter (optional)
                  </Label>
                  <Input
                    id={`member-${index}-twitter`}
                    placeholder="Twitter profile URL"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Profile Photo</Label>
                <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <Upload className="h-6 w-6 text-muted-foreground mb-2" />
                  <p className="text-xs text-muted-foreground">
                    PNG or JPG (max. 1MB)
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Select Photo
                  </Button>
                </div>
              </div>
            </div>
          ))}

          <Button variant="outline" className="w-full">
            + Add Another Team Member
          </Button>
        </div>

        <Separator />

        <div className="space-y-2">
          <Label htmlFor="advisors">Advisors (optional)</Label>
          <Textarea
            id="advisors"
            placeholder="List any advisors or notable supporters of your project"
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
