import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Button } from "@/components/ui/button";
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { Separator } from "@/src/components/ui/separator";
import { ArrowRight, Check, Wallet } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Welcome to SuiVana</h1>
            <p className="text-muted-foreground">
              Sign in to access your dashboard and investments
            </p>
          </div>

          <Tabs defaultValue="wallet" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="wallet">Wallet</TabsTrigger>
              <TabsTrigger value="email">Email</TabsTrigger>
            </TabsList>
            <TabsContent value="wallet" className="space-y-4 pt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Connect Your Wallet</CardTitle>
                  <CardDescription>
                    Sign in using your Sui wallet
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-3">
                    <Button className="flex justify-between items-center w-full py-6 bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-600 hover:to-violet-700 text-white border-0">
                      <div className="flex items-center">
                        <Wallet className="mr-2 h-5 w-5" />
                        <span>Sui Wallet</span>
                      </div>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="flex justify-between items-center w-full py-6"
                    >
                      <div className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-gradient-to-br from-teal-400 to-violet-600 mr-2"></div>
                        <span>Ethos Wallet</span>
                      </div>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="flex justify-between items-center w-full py-6"
                    >
                      <div className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 mr-2"></div>
                        <span>Suiet Wallet</span>
                      </div>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-teal-500" />
                    <span>Secure and encrypted connection</span>
                  </div>
                  <Separator />
                  <div className="text-center text-sm text-muted-foreground">
                    <span>Don't have a wallet? </span>
                    <Link
                      href="#"
                      className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 font-medium"
                    >
                      Learn how to create one
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="email" className="space-y-4 pt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Sign In with Email</CardTitle>
                  <CardDescription>
                    Enter your email to receive a login link
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-600 hover:to-violet-700 text-white border-0">
                    Send Login Link
                  </Button>
                  <Separator />
                  <div className="text-center text-sm text-muted-foreground">
                    <span>Don't have an account? </span>
                    <Link
                      href="#"
                      className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 font-medium"
                    >
                      Sign up
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
