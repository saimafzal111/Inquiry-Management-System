"use client"

import { CartesianGrid, LineChart, XAxis, YAxis, Line } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Calendar22 } from "./Calendar"

// Chart description
export const description = "A line chart with dots"

// Data for October 2025
const chartData = [
  { date: "2025-10-01", total: 0 },
  { date: "2025-10-02", total: 0 },
  { date: "2025-10-03", total: 0 },
  { date: "2025-10-04", total: 0 },
  { date: "2025-10-05", total: 0 },
  { date: "2025-10-06", total: 0 },
  { date: "2025-10-07", total: 0 },
  { date: "2025-10-08", total: 0 },
  { date: "2025-10-09", total: 0 },
  { date: "2025-10-10", total: 0 },
  { date: "2025-10-11", total: 0 },
  { date: "2025-10-12", total: 0 },
  { date: "2025-10-13", total: 0 },
  { date: "2025-10-14", total: 0 },
  { date: "2025-10-15", total: 1 },
  { date: "2025-10-16", total: 0 },
  { date: "2025-10-17", total: 0 },
  { date: "2025-10-18", total: 0 },
  { date: "2025-10-19", total: 0 },
  { date: "2025-10-20", total: 0 },
  { date: "2025-10-21", total: 0 },
  { date: "2025-10-22", total: 0 },
  { date: "2025-10-23", total: 0 },
  { date: "2025-10-24", total: 1 },
  { date: "2025-10-25", total: 0 },
  { date: "2025-10-26", total: 0 },
  { date: "2025-10-27", total: 0 },
  { date: "2025-10-28", total: 0 },
  { date: "2025-10-29", total: 0 },
  { date: "2025-10-30", total: 0 },
  { date: "2025-10-31", total: 0 },
]

// Chart config
const chartConfig = {
  enquiries: {
    label: "Enquiries",
    color: "black",
  },
} satisfies ChartConfig

export function AppLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-xl lg:justify-between sm:flex-wrap">
          Enquiries Over Months
          <Calendar22 />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            {/* X axis shows date */}
            <XAxis
              dataKey="date"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
            />
            {/* Y axis 0 → 1 */}
            <YAxis
              domain={[0, 1]}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            {/* Tooltip */}
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent
                labelFormatter={(label) => `Date: ${label}`}
                formatter={(value) => [`Total: ${value}`, ""]}
              />}
            />

            {/* Line with black stroke + outlined dots */}
            <Line
              type="linear"
              dataKey="total"
              stroke="black"
              strokeWidth={3}
              dot={{ r: 4, stroke: "black", strokeWidth: 2, fill: "white" }}
              activeDot={{ r: 5, stroke: "black", strokeWidth: 2, fill: "white" }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
