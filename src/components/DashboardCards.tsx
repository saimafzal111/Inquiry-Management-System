import React from "react"
import { AddUser } from "./AddUser"

function DashboardCards() {
  return (
    <main className="">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center rounded-md bg-orange-600 text-black font-medium shadow hover:bg-orange-700 active:translate-y-[1px]">
          <span><AddUser /></span>
        </div>
      </div>

      {/* Cards row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
  {/* Card 1 */}
  <div className="text-card-foreground flex flex-col justify-between gap-6 py-6 shadow-sm rounded-xl bg-gradient-to-t from-orange-50 to-white">
    <p className="text-gray-600">Total Users</p>
    <h2 className="text-2xl font-bold">4</h2>
  </div>

  {/* Card 2 */}
  <div className="text-card-foreground flex flex-col justify-between gap-6 py-6 shadow-sm rounded-xl bg-gradient-to-t from-orange-50 to-white">
    <p className="text-gray-600">Total Inquiries</p>
    <h2 className="text-2xl font-bold">104</h2>
  </div>

  {/* Card 3 */}
  <div className="text-card-foreground flex flex-col justify-between gap-6 py-6 shadow-sm rounded-xl bg-gradient-to-t from-orange-50 to-white">
    <p className="text-gray-600">Total Locations</p>
    <h2 className="text-2xl font-bold">55</h2>
  </div>

  {/* Card 4 */}
  <div className="text-card-foreground flex flex-col justify-between gap-6 py-6 shadow-sm rounded-xl bg-gradient-to-t from-orange-50 to-white">
    <p className="text-gray-600">Total Reservations</p>
    <h2 className="text-2xl font-bold">0</h2>
  </div>
</div>

    </main>
  )
}

export default DashboardCards
