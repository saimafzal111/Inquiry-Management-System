"use client"

import * as React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  { Client: "INV001", paymentStatus: "Paid", totalAmount: "$250.00", paymentMethod: "Credit Card" },
  { Client: "INV002", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal" },
  { Client: "INV003", paymentStatus: "Unpaid", totalAmount: "$350.00", paymentMethod: "Bank Transfer" },
  { Client: "INV004", paymentStatus: "Paid", totalAmount: "$450.00", paymentMethod: "Credit Card" },
  { Client: "INV005", paymentStatus: "Paid", totalAmount: "$550.00", paymentMethod: "PayPal" },
  { Client: "INV006", paymentStatus: "Pending", totalAmount: "$200.00", paymentMethod: "Bank Transfer" },
  { Client: "INV007", paymentStatus: "Unpaid", totalAmount: "$300.00", paymentMethod: "Credit Card" },
]

export function LatestInquiries() {
  return (
    <div className="w-full overflow-hidden rounded-md border">
      {/* Table wrapper for horizontal scroll */}
      <div className="w-full overflow-x-auto">
        <Table className="min-w-[700px]">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Client</TableHead>
              <TableHead>Event Type</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="text-right">Deadline</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.Client}>
                <TableCell className="font-medium">{invoice.Client}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  )
}
