"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Updated data with high demand but a much higher shortage (low supply)
const chartData = [
  { year: "2025", demand: 800, shortage: 500 },
  { year: "2026", demand: 900, shortage: 600 },
  { year: "2027", demand: 1000, shortage: 700 },
  { year: "2028", demand: 1100, shortage: 850 },
  { year: "2029", demand: 1200, shortage: 1000 },
  { year: "2030", demand: 1300, shortage: 1200 },
]

// Chart configuration with custom colors
const chartConfig = {
  demand: {
    label: "Demand",
    color: "hsl(var(--chart-1))", // Ensure this color is defined in your CSS
  },
  shortage: {
    label: "Shortage",
    color: "hsl(var(--chart-2))", // Ensure this color is defined in your CSS
  },
} satisfies ChartConfig

export function Component() {
  return (
    <Card className="bg-black text-white border border-gray-700">
      <CardHeader>
        <CardTitle>Premium Editors Demand vs Shortage (2025 - 2030)</CardTitle>
        <CardDescription>
          Showing the estimated demand and shortage of premium editors over the next 5 years
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} style={{ height: "300px", width: "100%" }}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} stroke="rgba(255, 255, 255, 0.2)" />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value}
              tick={{ fill: "white" }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="shortage"
              type="natural"
              fill="red" // Shortage area in red
              fillOpacity={0.4}
              stroke="red"
              stackId="a"
            />
            <Area
              dataKey="demand"
              type="natural"
              fill="blue" // Demand area in blue
              fillOpacity={0.4}
              stroke="blue"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm text-white">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this year <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              2025 - 2030
            </div>
          </div>
          {/* Added the color legend for clarity */}
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-1">
              <span className="w-4 h-4 bg-red-500 rounded-full"></span>
              <span>Demand</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
              <span>Shortage</span>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
