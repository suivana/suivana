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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { ArrowLeft, ArrowRight, Upload } from "lucide-react";
import { Textarea } from "../ui/textarea";

export function BasicInfoForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
        <CardDescription>
          Provide essential details about your project
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="project-name">Project Name</Label>
          <Input id="project-name" placeholder="Enter your project name" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="short-description">Short Description</Label>
          <Textarea
            id="short-description"
            placeholder="Brief description of your project (max 150 characters)"
            className="resize-none"
            maxLength={150}
          />
          <p className="text-xs text-muted-foreground">
            This will appear in project listings
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="long-description">Full Description</Label>
          <Textarea
            id="long-description"
            placeholder="Detailed description of your project, its goals, and unique value proposition"
            className="min-h-[150px]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="defi">DeFi</SelectItem>
                <SelectItem value="nft">NFT</SelectItem>
                <SelectItem value="gaming">Gaming</SelectItem>
                <SelectItem value="dao">DAO/Governance</SelectItem>
                <SelectItem value="infrastructure">Infrastructure</SelectItem>
                <SelectItem value="metaverse">Metaverse</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags (comma separated)</Label>
            <Input id="tags" placeholder="e.g., DeFi, Lending, Yield" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Project Logo</Label>
          <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
            <Upload className="h-8 w-8 text-muted-foreground mb-2" />
            <p className="text-sm font-medium">
              Drag and drop or click to upload
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              PNG, JPG or SVG (max. 2MB)
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              Select File
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" disabled>
          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button>
          Next <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
