import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"

export function RecentInvestors() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm">Recent Investors</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                <Users className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">0x7a3b...f92e</p>
                <p className="text-xs text-muted-foreground">Invested $500</p>
              </div>
              <div className="text-xs text-muted-foreground">2h ago</div>
            </div>
          ))}
          <Button variant="ghost" className="w-full text-xs">
            View All Investors
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
