import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ExternalLink, FileText, Github, Globe, Twitter } from "lucide-react"

interface ProjectOverviewProps {
  longDescription: string
  website: string
  twitter: string
  github: string
  whitepaper: string
}

export function ProjectOverview({ longDescription, website, twitter, github, whitepaper }: ProjectOverviewProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Project Overview</h2>
        <p className="text-muted-foreground">{longDescription}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
                </div>
                <span>Decentralized governance system</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
                </div>
                <span>Proposal creation and voting</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
                </div>
                <span>Treasury management</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
                </div>
                <span>Integration with Sui ecosystem</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Project Links</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Link
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-teal-500 transition-colors"
              >
                <Globe className="mr-2 h-4 w-4" />
                <span>Website</span>
                <ExternalLink className="ml-auto h-3 w-3" />
              </Link>
              <Link
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-teal-500 transition-colors"
              >
                <Twitter className="mr-2 h-4 w-4" />
                <span>Twitter</span>
                <ExternalLink className="ml-auto h-3 w-3" />
              </Link>
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-teal-500 transition-colors"
              >
                <Github className="mr-2 h-4 w-4" />
                <span>GitHub</span>
                <ExternalLink className="ml-auto h-3 w-3" />
              </Link>
              <Link
                href={whitepaper}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-teal-500 transition-colors"
              >
                <FileText className="mr-2 h-4 w-4" />
                <span>Whitepaper</span>
                <ExternalLink className="ml-auto h-3 w-3" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
