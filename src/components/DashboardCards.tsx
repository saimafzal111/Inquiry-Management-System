import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import AddUser from "./AddUser"

function DashboardCards() {
  return (
    <main className="">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="flex items-center rounded-md bg-[#FF8904] text-black font-medium shadow hover:bg-orange-700 active:translate-y-[1px]">
          <span><AddUser /></span>
        </div>
      </div>

      {/* Cards row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
        {/* Card 1 */}
        <Card className="shadow-sm border rounded-xl bg-gradient-to-t from-orange-50 to-white">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl sm:text-2xl font-bold">4</p>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="shadow-sm border rounded-xl bg-gradient-to-t from-orange-50 to-white">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Inquiries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl sm:text-2xl font-bold">99</p>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="shadow-sm border rounded-xl bg-gradient-to-t from-orange-50 to-white">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Locations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl sm:text-2xl font-bold">50</p>
          </CardContent>
        </Card>

        {/* Card 4 */}
        <Card className="shadow-sm border rounded-xl bg-gradient-to-t from-orange-50 to-white">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Reservations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl sm:text-2xl font-bold">3</p>
          </CardContent>
        </Card>
      </div>

    </main>
  )
}

export default DashboardCards
