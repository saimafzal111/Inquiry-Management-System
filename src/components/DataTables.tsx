"use client"

import * as React from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { TriangleAlert } from "lucide-react"

const invoices = [
  { invoice: "INV001", paymentStatus: "Paid", totalAmount: "$250.00", paymentMethod: "Credit Card" },
  { invoice: "INV002", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal" },
  { invoice: "INV003", paymentStatus: "Unpaid", totalAmount: "$350.00", paymentMethod: "Bank Transfer" },
  { invoice: "INV004", paymentStatus: "Paid", totalAmount: "$450.00", paymentMethod: "Credit Card" },
]

export function DashboardTables() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Urgent Deadline Table */}
      <div className="w-full overflow-hidden rounded-md border">
        <div className="flex items-center gap-2 px-4 py-2 border-b bg-gray-50">
          <TriangleAlert className="text-red-600" />
          <h1 className="text-lg font-semibold">Urgent Deadline</h1>
        </div>
        {/* scroll only on smaller screens */}
        <div className="w-full overflow-x-auto lg:overflow-x-hidden">
          <Table className="min-w-[600px]">
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

      {/* Latest Inquiries Table */}
      <div className="w-full overflow-hidden rounded-md border">
        <div className="flex items-center gap-2 px-4 py-2 border-b bg-gray-50">
          <h1 className="text-lg font-semibold">Latest Inquiries</h1>
        </div>
        {/* scroll only on smaller screens */}
        <div className="w-full overflow-x-auto lg:overflow-x-hidden">
          <Table className="min-w-[600px]">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">{invoice.invoice}</TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$1,200.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  )
}
