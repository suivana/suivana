import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ReviewProcess() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Review Process</CardTitle>
        <CardDescription>What happens after submission</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative pl-8 pb-4">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-muted"></div>
          <div className="absolute left-[-4px] top-1 h-4 w-4 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
          </div>
          <h3 className="font-medium">Initial Review</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Our team will review your submission within 3-5 business days.
          </p>
        </div>

        <div className="relative pl-8 pb-4">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-muted"></div>
          <div className="absolute left-[-4px] top-1 h-4 w-4 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
          </div>
          <h3 className="font-medium">KYC Verification</h3>
          <p className="text-sm text-muted-foreground mt-1">Team members will need to complete KYC verification.</p>
        </div>

        <div className="relative pl-8 pb-4">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-muted"></div>
          <div className="absolute left-[-4px] top-1 h-4 w-4 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
          </div>
          <h3 className="font-medium">Technical Review</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Our technical team will review your project's code and architecture.
          </p>
        </div>

        <div className="relative pl-8">
          <div className="absolute left-[-4px] top-1 h-4 w-4 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
          </div>
          <h3 className="font-medium">Listing</h3>
          <p className="text-sm text-muted-foreground mt-1">
            If approved, your project will be listed on SuiVana for fundraising.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
