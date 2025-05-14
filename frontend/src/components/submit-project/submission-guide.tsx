import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function SubmissionGuide() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Submission Guide</CardTitle>
        <CardDescription>Tips for a successful project submission</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-medium flex items-center">
            <Check className="h-4 w-4 text-teal-500 mr-2" />
            Complete All Sections
          </h3>
          <p className="text-sm text-muted-foreground">
            Fill out all required fields with accurate and detailed information to increase your chances of approval.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium flex items-center">
            <Check className="h-4 w-4 text-teal-500 mr-2" />
            Provide Clear Documentation
          </h3>
          <p className="text-sm text-muted-foreground">
            Include links to your whitepaper, GitHub repositories, and other relevant documentation.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium flex items-center">
            <Check className="h-4 w-4 text-teal-500 mr-2" />
            Team Information
          </h3>
          <p className="text-sm text-muted-foreground">
            Highlight your team's experience and expertise in blockchain and your specific domain.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium flex items-center">
            <Check className="h-4 w-4 text-teal-500 mr-2" />
            Tokenomics
          </h3>
          <p className="text-sm text-muted-foreground">
            Define a clear token distribution and vesting schedule that aligns with your project's goals.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
