"use client"

import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { TriangleAlert } from "lucide-react"

export function UrgentDeadline() {
  return (
    <div className="w-full overflow-hidden rounded-md border">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b bg-gray-50">
        <TriangleAlert className="text-red-600" />
        <h1 className="text-lg font-semibold">Urgent Deadline</h1>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead>Event Type</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Deadline</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      </div>
    </div>
  )
}
