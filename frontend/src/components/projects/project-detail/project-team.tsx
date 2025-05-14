import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

interface ProjectTeamProps {
  projectName: string
  team: TeamMember[]
}

export function ProjectTeam({ projectName, team }: ProjectTeamProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Team</h2>
        <p className="text-muted-foreground">Meet the talented team behind {projectName}.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {team.map((member, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-teal-600 dark:text-teal-400 mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
