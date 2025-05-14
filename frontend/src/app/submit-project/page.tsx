import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WalletConnectModal } from "@/components/wallet/wallet-connect-modal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/src/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/src/components/ui/separator";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Check,
  FileText,
  Github,
  Globe,
  HelpCircle,
  Info,
  Twitter,
  Upload,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

export default function SubmitProjectPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-teal-50 dark:from-black dark:to-teal-950/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-2 mb-8">
              <Link
                href="/"
                className="flex items-center text-sm text-muted-foreground hover:text-teal-500 transition-colors"
              >
                <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
              </Link>
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2">
                  Submit Your Project
                </h1>
                <p className="text-muted-foreground max-w-[700px]">
                  List your Web3 project on SuiVana and raise capital through
                  equity tokens on the Sui blockchain
                </p>
              </div>
              <div className="flex items-center mt-4">
                <WalletConnectModal />
                <span className="text-sm text-muted-foreground ml-4">
                  Connect your wallet to submit a project
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Tabs defaultValue="basic" className="w-full">
                  <div className="flex justify-between items-center mb-6">
                    <TabsList>
                      <TabsTrigger value="basic">Basic Info</TabsTrigger>
                      <TabsTrigger value="details">Project Details</TabsTrigger>
                      <TabsTrigger value="team">Team</TabsTrigger>
                      <TabsTrigger value="tokenomics">Tokenomics</TabsTrigger>
                      <TabsTrigger value="review">Review</TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="basic" className="space-y-6">
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
                          <Input
                            id="project-name"
                            placeholder="Enter your project name"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="short-description">
                            Short Description
                          </Label>
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
                          <Label htmlFor="long-description">
                            Full Description
                          </Label>
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
                                <SelectItem value="dao">
                                  DAO/Governance
                                </SelectItem>
                                <SelectItem value="infrastructure">
                                  Infrastructure
                                </SelectItem>
                                <SelectItem value="metaverse">
                                  Metaverse
                                </SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="tags">Tags (comma separated)</Label>
                            <Input
                              id="tags"
                              placeholder="e.g., DeFi, Lending, Yield"
                            />
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
                            <Button
                              variant="outline"
                              size="sm"
                              className="mt-4"
                            >
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
                  </TabsContent>

                  <TabsContent value="details" className="space-y-6">
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
                                  <Label
                                    htmlFor={`milestone-${index}-description`}
                                  >
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
                  </TabsContent>

                  <TabsContent value="team" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Team Information</CardTitle>
                        <CardDescription>
                          Add details about your team members
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-4">
                          {[1, 2, 3].map((index) => (
                            <div
                              key={index}
                              className="p-4 border rounded-lg space-y-4"
                            >
                              <div className="flex justify-between items-center">
                                <h3 className="font-medium">
                                  Team Member {index}
                                </h3>
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
                                  <Label htmlFor={`member-${index}-name`}>
                                    Full Name
                                  </Label>
                                  <Input
                                    id={`member-${index}-name`}
                                    placeholder="Full name"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor={`member-${index}-role`}>
                                    Role
                                  </Label>
                                  <Input
                                    id={`member-${index}-role`}
                                    placeholder="e.g., CEO, CTO, Developer"
                                  />
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor={`member-${index}-bio`}>
                                  Bio
                                </Label>
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
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="mt-2"
                                  >
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
                  </TabsContent>

                  <TabsContent value="tokenomics" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Tokenomics</CardTitle>
                        <CardDescription>
                          Define your token economics and fundraising goals
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="token-name">Token Name</Label>
                            <Input
                              id="token-name"
                              placeholder="e.g., SuiDAO Token"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="token-symbol">Token Symbol</Label>
                            <Input id="token-symbol" placeholder="e.g., SDT" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="total-supply">Total Supply</Label>
                            <Input
                              id="total-supply"
                              placeholder="e.g., 100,000,000"
                              type="number"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="token-price">
                              Token Price (USD)
                            </Label>
                            <Input
                              id="token-price"
                              placeholder="e.g., 0.05"
                              type="number"
                              step="0.01"
                            />
                          </div>
                        </div>

                        <Separator />

                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <Label>Token Distribution</Label>
                            <div className="text-xs text-muted-foreground">
                              Total: 0%
                            </div>
                          </div>

                          {[
                            "Public Sale",
                            "Team",
                            "Treasury",
                            "Ecosystem",
                            "Advisors",
                          ].map((category, index) => (
                            <div
                              key={index}
                              className="grid grid-cols-3 gap-4 items-center"
                            >
                              <Input
                                defaultValue={category}
                                className="col-span-2"
                              />
                              <div className="flex items-center">
                                <Input
                                  placeholder="%"
                                  type="number"
                                  min="0"
                                  max="100"
                                />
                                <span className="ml-2">%</span>
                              </div>
                            </div>
                          ))}

                          <Button variant="outline" className="w-full">
                            + Add Category
                          </Button>
                        </div>

                        <Separator />

                        <div className="space-y-4">
                          <Label>Vesting Schedule</Label>

                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <Label
                                htmlFor="public-vesting"
                                className="text-sm"
                              >
                                Public Sale Vesting
                              </Label>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <HelpCircle className="h-3 w-3 mr-1" />
                                <span>
                                  How tokens will be released to investors
                                </span>
                              </div>
                            </div>
                            <Input
                              id="public-vesting"
                              placeholder="e.g., 25% at TGE, then 25% every 3 months"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="team-vesting" className="text-sm">
                              Team Vesting
                            </Label>
                            <Input
                              id="team-vesting"
                              placeholder="e.g., 12-month cliff, then 25% every 6 months"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label
                              htmlFor="advisors-vesting"
                              className="text-sm"
                            >
                              Advisors Vesting
                            </Label>
                            <Input
                              id="advisors-vesting"
                              placeholder="e.g., 6-month cliff, then 25% every 3 months"
                            />
                          </div>
                        </div>

                        <Separator />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="funding-goal">
                              Funding Goal (USD)
                            </Label>
                            <Input
                              id="funding-goal"
                              placeholder="e.g., 1,000,000"
                              type="number"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="min-investment">
                              Minimum Investment (USD)
                            </Label>
                            <Input
                              id="min-investment"
                              placeholder="e.g., 100"
                              type="number"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="start-date">Sale Start Date</Label>
                            <Input id="start-date" type="date" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="end-date">Sale End Date</Label>
                            <Input id="end-date" type="date" />
                          </div>
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
                  </TabsContent>

                  <TabsContent value="review" className="space-y-6">
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
                            Please review all information carefully. After
                            submission, your project will be reviewed by our
                            team before being listed on SuiVana.
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
                              <p className="text-muted-foreground">
                                Project Name
                              </p>
                              <p className="font-medium">SuiDAO</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Category</p>
                              <p className="font-medium">DAO/Governance</p>
                            </div>
                          </div>
                          <div className="text-sm">
                            <p className="text-muted-foreground">Description</p>
                            <p>
                              Decentralized Governance Platform built on Sui
                              blockchain
                            </p>
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
                              <p className="text-muted-foreground">
                                Token Name
                              </p>
                              <p className="font-medium">SuiDAO Token</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">
                                Token Symbol
                              </p>
                              <p className="font-medium">SDT</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">
                                Total Supply
                              </p>
                              <p className="font-medium">100,000,000</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">
                                Token Price
                              </p>
                              <p className="font-medium">$0.05</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">
                                Funding Goal
                              </p>
                              <p className="font-medium">$2,000,000</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">
                                Sale Period
                              </p>
                              <p className="font-medium">
                                Jun 1 - Jul 15, 2025
                              </p>
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
                                I agree to the Terms of Service and Privacy
                                Policy
                              </label>
                              <p className="text-muted-foreground">
                                By submitting this project, I confirm that all
                                information provided is accurate and I have the
                                authority to list this project.
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
                                I understand that all team members will need to
                                complete KYC verification before the project can
                                be listed.
                              </p>
                            </div>
                          </div>
                        </div>

                        <Alert variant="destructive">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Important Notice</AlertTitle>
                          <AlertDescription>
                            Please connect your wallet to submit your project.
                            This wallet address will be associated with your
                            project for administrative purposes.
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
                  </TabsContent>
                </Tabs>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Submission Guide</CardTitle>
                    <CardDescription>
                      Tips for a successful project submission
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium flex items-center">
                        <Check className="h-4 w-4 text-teal-500 mr-2" />
                        Complete All Sections
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Fill out all required fields with accurate and detailed
                        information to increase your chances of approval.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium flex items-center">
                        <Check className="h-4 w-4 text-teal-500 mr-2" />
                        Provide Clear Documentation
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Include links to your whitepaper, GitHub repositories,
                        and other relevant documentation.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium flex items-center">
                        <Check className="h-4 w-4 text-teal-500 mr-2" />
                        Team Information
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Highlight your team's experience and expertise in
                        blockchain and your specific domain.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium flex items-center">
                        <Check className="h-4 w-4 text-teal-500 mr-2" />
                        Tokenomics
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Define a clear token distribution and vesting schedule
                        that aligns with your project's goals.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Review Process</CardTitle>
                    <CardDescription>
                      What happens after submission
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="relative pl-8 pb-4">
                      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-muted"></div>
                      <div className="absolute left-[-4px] top-1 h-4 w-4 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
                      </div>
                      <h3 className="font-medium">Initial Review</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Our team will review your submission within 3-5 business
                        days.
                      </p>
                    </div>

                    <div className="relative pl-8 pb-4">
                      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-muted"></div>
                      <div className="absolute left-[-4px] top-1 h-4 w-4 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
                      </div>
                      <h3 className="font-medium">KYC Verification</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Team members will need to complete KYC verification.
                      </p>
                    </div>

                    <div className="relative pl-8 pb-4">
                      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-muted"></div>
                      <div className="absolute left-[-4px] top-1 h-4 w-4 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
                      </div>
                      <h3 className="font-medium">Technical Review</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Our technical team will review your project's code and
                        architecture.
                      </p>
                    </div>

                    <div className="relative pl-8">
                      <div className="absolute left-[-4px] top-1 h-4 w-4 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
                      </div>
                      <h3 className="font-medium">Listing</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        If approved, your project will be listed on SuiVana for
                        fundraising.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Need Help?</CardTitle>
                    <CardDescription>Contact our support team</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full">
                      Contact Support
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Our team is available Monday-Friday, 9am-5pm UTC
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
