// create/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export default function CreateInquiryPage() {
  const [date, setDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted ✅");
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Add New Inquiry</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Contact Person */}
        <div className="space-y-2">
          <Label htmlFor="contactPerson">Contact Person</Label>
          <Input id="contactPerson" placeholder="Enter full name" />
        </div>

        {/* Venue */}
        <div className="space-y-2">
          <Label htmlFor="venue">Venue</Label>
          <Input id="venue" placeholder="Venue name" />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="example@email.com" />
        </div>

        {/* Event Date */}
        <div className="space-y-2">
          <Label>Event Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={date} onSelect={setDate} />
            </PopoverContent>
          </Popover>
        </div>

        {/* Deadline */}
        <div className="space-y-2">
          <Label htmlFor="deadline">Deadline</Label>
          <Input id="deadline" placeholder="e.g. 3 days before" />
        </div>

        {/* Event Type */}
        <div className="space-y-2">
          <Label>Event Type</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wedding">Wedding</SelectItem>
              <SelectItem value="birthday">Birthday</SelectItem>
              <SelectItem value="corporate">Corporate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Guests */}
        <div className="space-y-2">
          <Label htmlFor="guests">Guests</Label>
          <Input id="guests" type="number" placeholder="Number of guests" />
        </div>

        {/* Notes */}
        <div className="space-y-2">
          <Label htmlFor="notes">Notes</Label>
          <Textarea id="notes" placeholder="Special instructions..." />
        </div>

        {/* Status */}
        <div className="space-y-2">
          <Label>Status</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end gap-3">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit" className="bg-orange-500/95 text-white hover:bg-orange-400">
            Save Inquiry
          </Button>
        </div>
      </form>
    </div>
  );
}