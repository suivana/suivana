"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter } from "lucide-react"

interface ProjectFilterProps {
  onSortChange?: (value: string) => void
  onFilterClick?: () => void
}

export function ProjectFilter({ onSortChange, onFilterClick }: ProjectFilterProps) {
  return (
    <div className="flex items-center gap-2">
      <Select defaultValue="newest" onValueChange={onSortChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="popular">Most Popular</SelectItem>
          <SelectItem value="funded">Most Funded</SelectItem>
          <SelectItem value="ending">Ending Soon</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline" size="icon" onClick={onFilterClick}>
        <Filter className="h-4 w-4" />
      </Button>
    </div>
  )
}
