"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "./ui/button"
import { DeleteEvent } from "./DeleteEvent"
import { EditEvent } from "./EditEvent"

const events = [
  { name: "Wedding" },
  { name: "Birthday" },
  { name: "Party" },
  { name: "Meeting" },
]

export function EventTable() {
  return (
    <section className="px-4">
      <h1 className="font-bold text-2xl my-4">Event Types</h1>
      <Card>
        <CardContent className="divide-y">
          {events.map((event) => (
            <div
              key={event.name}
              className="flex items-center justify-between py-2"
            >
              {/* Event name */}
              <p className="font-medium">{event.name}</p>

              {/* Action buttons */}
              <div className="flex items-center gap-3">
                <EditEvent />
                <Button
                  variant="outline"
                  size="icon"
                  className="border rounded-md hover:bg-gray-100 transition"
                >
                  <DeleteEvent />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}