"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ParkingCircle, Bed, Calendar, Check, Car, Mail } from "lucide-react"
import { AddAttribute } from "@/components/AddAtribute"
import { EditEvent } from "@/components/EditEvent"
import { DeleteEvent } from "@/components/DeleteEvent"

const attributes = [
  { name: "Free Parking", icon: ParkingCircle },
  { name: "Big Terrace", icon: Bed },
  { name: "Garden", icon: Calendar },
  { name: "Air Conditioning", icon: Check },
  { name: "Sound System", icon: Car },
  { name: "Stage/Platform", icon: Mail },
]

export default function AttributeTable() {
  return (
    <section className="px-4">
      <div className="flex items-center justify-between my-4">
        <h1 className="font-bold text-2xl">Attributes</h1>
        <AddAttribute />
      </div>

      <Card>
        <CardContent className="divide-y">
          {attributes.map((attr) => (
            <div
              key={attr.name}
              className="flex items-center justify-between py-2"
            >
              {/* Attribute name with icon */}
              <div className="flex items-center gap-2">
                <attr.icon className="h-5 w-5" />
                <p className="font-medium">{attr.name}</p>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3">
                <div
                  className="border rounded-md hover:bg-gray-100 transition"
                >
                  <EditEvent />
                </div>
                <div className="border rounded-md hover:bg-gray-100 transition">
                  <DeleteEvent />
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
