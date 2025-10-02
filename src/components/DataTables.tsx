"use client"

import * as React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { TriangleAlert } from "lucide-react"

const invoices = [
  { name: "Sasa Mitrovic", event: "Maturalne vecere", location: "Peron 16", deadline: "in 12 days", status: "PENDING" },
  { name: "admin", event: "Maturalne vecere", location: "Peron 16", deadline: "yesterday", status: "PENDING" },
]

export function DashboardTables() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Urgent Deadline Table */}
      <div className="w-full rounded-md border">
        <div className="flex items-center gap-2 px-4 py-2 border-b bg-gray-50">
          <TriangleAlert className="text-red-600" />
          <h1 className="text-lg font-semibold">Urgent Deadline</h1>
        </div>
        {/* responsive scroll */}
        <div className="w-full overflow-x-auto lg:overflow-x-visible">
          <Table className="min-w-[580px]">
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Event Type</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Abdul Test</TableCell>
                <TableCell>Wedding</TableCell>
                <TableCell>Hall A</TableCell>
                <TableCell>Today</TableCell>
                <TableCell>Pending</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Latest Inquiries Table */}
      <div className="w-full rounded-md border">
        <div className="flex items-center gap-2 px-4 py-2 border-b bg-gray-50">
          <h1 className="text-lg font-semibold">Latest Inquiries</h1>
        </div>
        {/* responsive scroll */}
        <div className="w-full overflow-x-auto lg:overflow-x-visible">
          <Table className="min-w-[580px]">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Client</TableHead>
                <TableHead>Event Type</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.name}>
                  <TableCell className="font-medium">{invoice.name}</TableCell>
                  <TableCell>{invoice.event}</TableCell>
                  <TableCell>{invoice.location}</TableCell>
                  <TableCell>{invoice.deadline}</TableCell>
                  <TableCell>{invoice.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
