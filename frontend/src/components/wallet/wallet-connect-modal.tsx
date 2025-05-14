"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, Loader2, Wallet, X } from "lucide-react";

export function WalletConnectModal() {
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState("");

  const handleConnect = (walletName: string) => {
    setError("");
    setConnecting(true);

    // Simulate connection process
    setTimeout(() => {
      // In a real implementation, this would be the wallet connection logic
      // For now, we'll just simulate a successful connection
      setConnecting(false);

      // Uncomment to simulate an error
      // setError("Failed to connect to wallet. Please try again.")
    }, 1500);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2 bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-600 hover:to-violet-700 text-white border-0">
          <Wallet className="h-4 w-4" /> Connect Wallet
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect your wallet</DialogTitle>
          <DialogDescription>
            Connect your Sui wallet to access the platform and invest in
            projects.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {error && (
            <div className="bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300 p-3 rounded-md flex items-start">
              <X className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          <Button
            onClick={() => handleConnect("Sui Wallet")}
            disabled={connecting}
            className="flex justify-between items-center w-full py-6 bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-600 hover:to-violet-700 text-white border-0"
          >
            <div className="flex items-center">
              <Wallet className="mr-2 h-5 w-5" />
              <span>Sui Wallet</span>
            </div>
            {connecting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <ArrowRight className="h-4 w-4" />
            )}
          </Button>

          <Button
            onClick={() => handleConnect("Ethos Wallet")}
            disabled={connecting}
            variant="outline"
            className="flex justify-between items-center w-full py-6"
          >
            <div className="flex items-center">
              <div className="h-5 w-5 rounded-full bg-gradient-to-br from-teal-400 to-violet-600 mr-2"></div>
              <span>Ethos Wallet</span>
            </div>
            {connecting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <ArrowRight className="h-4 w-4" />
            )}
          </Button>

          <Button
            onClick={() => handleConnect("Suiet Wallet")}
            disabled={connecting}
            variant="outline"
            className="flex justify-between items-center w-full py-6"
          >
            <div className="flex items-center">
              <div className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 mr-2"></div>
              <span>Suiet Wallet</span>
            </div>
            {connecting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <ArrowRight className="h-4 w-4" />
            )}
          </Button>
        </div>
        <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
          <p>Don't have a wallet?</p>
          <Button
            variant="link"
            className="h-auto p-0 text-teal-600 dark:text-teal-400"
          >
            Learn how to create one
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
