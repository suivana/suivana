import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Separator } from "@/src/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertCircle, ArrowLeft, Check, Info } from "lucide-react";

export function ReviewForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Review & Submit</CardTitle>
        <CardDescription>
          Review your project details before submission
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Review carefully</AlertTitle>
          <AlertDescription>
            Please review all information carefully. After submission, your
            project will be reviewed by our team before being listed on SuiVana.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Basic Information</h3>
            <Button
              variant="ghost"
              size="sm"
              className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 dark:hover:bg-teal-950/20"
            >
              Edit
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Project Name</p>
              <p className="font-medium">SuiDAO</p>
            </div>
            <div>
              <p className="text-muted-foreground">Category</p>
              <p className="font-medium">DAO/Governance</p>
            </div>
          </div>
          <div className="text-sm">
            <p className="text-muted-foreground">Description</p>
            <p>Decentralized Governance Platform built on Sui blockchain</p>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Tokenomics</h3>
            <Button
              variant="ghost"
              size="sm"
              className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 dark:hover:bg-teal-950/20"
            >
              Edit
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Token Name</p>
              <p className="font-medium">SuiDAO Token</p>
            </div>
            <div>
              <p className="text-muted-foreground">Token Symbol</p>
              <p className="font-medium">SDT</p>
            </div>
            <div>
              <p className="text-muted-foreground">Total Supply</p>
              <p className="font-medium">100,000,000</p>
            </div>
            <div>
              <p className="text-muted-foreground">Token Price</p>
              <p className="font-medium">$0.05</p>
            </div>
            <div>
              <p className="text-muted-foreground">Funding Goal</p>
              <p className="font-medium">$2,000,000</p>
            </div>
            <div>
              <p className="text-muted-foreground">Sale Period</p>
              <p className="font-medium">Jun 1 - Jul 15, 2025</p>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-medium">Terms & Conditions</h3>
          <div className="flex items-start space-x-2">
            <div className="flex items-center h-5 mt-0.5">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
              />
            </div>
            <div className="text-sm">
              <label
                htmlFor="terms"
                className="font-medium text-gray-900 dark:text-gray-100"
              >
                I agree to the Terms of Service and Privacy Policy
              </label>
              <p className="text-muted-foreground">
                By submitting this project, I confirm that all information
                provided is accurate and I have the authority to list this
                project.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <div className="flex items-center h-5 mt-0.5">
              <input
                type="checkbox"
                id="kyc"
                className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
              />
            </div>
            <div className="text-sm">
              <label
                htmlFor="kyc"
                className="font-medium text-gray-900 dark:text-gray-100"
              >
                I understand KYC requirements
              </label>
              <p className="text-muted-foreground">
                I understand that all team members will need to complete KYC
                verification before the project can be listed.
              </p>
            </div>
          </div>
        </div>

        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Important Notice</AlertTitle>
          <AlertDescription>
            Please connect your wallet to submit your project. This wallet
            address will be associated with your project for administrative
            purposes.
          </AlertDescription>
        </Alert>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button className="bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-600 hover:to-violet-700 text-white border-0">
          Submit Project <Check className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
