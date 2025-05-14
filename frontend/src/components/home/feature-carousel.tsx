"use client";

import { Wallet, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function FeatureCarousel() {
  return (
    <div className="w-full py-8 bg-gradient-to-r from-white to-teal-50/30 dark:from-black dark:to-teal-950/10">
      <div className="container px-4 md:px-6">
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <div className="p-1">
                <div className="overflow-hidden rounded-xl">
                  <div className="flex h-[300px] flex-col items-center justify-center space-y-4 bg-gradient-to-br from-teal-500/10 to-violet-500/10 p-6 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-violet-600">
                      <Wallet className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      SuiVana Beta Now Open
                    </h3>
                    <p className="max-w-[600px] text-muted-foreground">
                      Be among the first to access our revolutionary DAO Equity
                      Launchpad on Sui Blockchain. Early investors get exclusive
                      benefits and priority access to top-tier projects.
                    </p>
                    <Button className="bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-600 hover:to-violet-700 text-white border-0">
                      Join Beta
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <div className="overflow-hidden rounded-xl">
                  <div className="flex h-[300px] flex-col items-center justify-center space-y-4 bg-gradient-to-br from-violet-500/10 to-teal-500/10 p-6 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-teal-600">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Secure & Transparent</h3>
                    <p className="max-w-[600px] text-muted-foreground">
                      Our platform leverages Sui Blockchain's advanced security
                      features to provide transparent, verifiable equity tokens
                      with customizable vesting schedules.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <div className="flex items-center gap-1 rounded-full bg-teal-100 dark:bg-teal-900/30 px-3 py-1 text-sm text-teal-700 dark:text-teal-300">
                        <span className="h-2 w-2 rounded-full bg-teal-500"></span>
                        <span>124+ Projects</span>
                      </div>
                      <div className="flex items-center gap-1 rounded-full bg-violet-100 dark:bg-violet-900/30 px-3 py-1 text-sm text-violet-700 dark:text-violet-300">
                        <span className="h-2 w-2 rounded-full bg-violet-500"></span>
                        <span>$18.5M+ Raised</span>
                      </div>
                      <div className="flex items-center gap-1 rounded-full bg-teal-100 dark:bg-teal-900/30 px-3 py-1 text-sm text-teal-700 dark:text-teal-300">
                        <span className="h-2 w-2 rounded-full bg-teal-500"></span>
                        <span>5,400+ Investors</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <div className="overflow-hidden rounded-xl">
                  <div className="flex h-[300px] flex-col items-center justify-center space-y-4 bg-gradient-to-br from-teal-500/10 to-violet-500/10 p-6 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-violet-600">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      Featured Project: SuiDAO
                    </h3>
                    <p className="max-w-[600px] text-muted-foreground">
                      A revolutionary decentralized governance platform built on
                      Sui Blockchain. Already raised $1.2M from 342 investors
                      with a 60% funding completion.
                    </p>
                    <Button className="bg-gradient-to-r from-teal-500 to-violet-600 hover:from-teal-600 hover:to-violet-700 text-white border-0">
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="static translate-y-0 mr-2" />
            <CarouselNext className="static translate-y-0 ml-2" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
