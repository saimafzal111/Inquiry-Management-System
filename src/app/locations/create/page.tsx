// app/venues/create/page.tsx
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

export default function CreateVenuePage() {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Venue form submitted ✅", { file });
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Add Venue</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Grid layout for inputs */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* User */}
          <div className="space-y-2">
            <Label>User</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select user" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="user1">User 1</SelectItem>
                <SelectItem value="user2">User 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Upload Image */}
          <div className="space-y-2">
            <Label>Upload Image</Label>
            <Input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            />
          </div>

          {/* Location Name */}
          <div className="space-y-2">
            <Label htmlFor="locationName">Location Name</Label>
            <Input id="locationName" placeholder="Enter location" />
          </div>

          {/* Primary Phone */}
          <div className="space-y-2">
            <Label htmlFor="primaryPhone">Primary Phone Number</Label>
            <Input id="primaryPhone" placeholder="Primary phone number" />
          </div>

          {/* Secondary Phone */}
          <div className="space-y-2">
            <Label htmlFor="secondaryPhone">Secondary Phone Number</Label>
            <Input id="secondaryPhone" placeholder="Secondary phone number" />
          </div>

          {/* Min Capacity */}
          <div className="space-y-2">
            <Label htmlFor="minCapacity">Min Capacity</Label>
            <Input id="minCapacity" type="number" placeholder="Min Capacity" />
          </div>

          {/* Max Capacity */}
          <div className="space-y-2">
            <Label htmlFor="maxCapacity">Max Capacity</Label>
            <Input id="maxCapacity" type="number" placeholder="Max Capacity" />
          </div>

          {/* Address */}
          <div className="space-y-2 md:col-span-2 lg:col-span-3">
            <Label htmlFor="address">Address</Label>
            <Textarea id="address" placeholder="Address" />
          </div>

          {/* Attributes */}
          <div className="space-y-2">
            <Label>Attributes</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select options" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wifi">WiFi</SelectItem>
                <SelectItem value="parking">Parking</SelectItem>
                <SelectItem value="sound">Sound System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Event Types */}
          <div className="space-y-2">
            <Label>Event Types</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select options" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wedding">Wedding</SelectItem>
                <SelectItem value="party">Party</SelectItem>
                <SelectItem value="conference">Conference</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <Label>Status</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end gap-3">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-orange-500/95 text-white hover:bg-orange-400"
          >
            Add Location
          </Button>
        </div>
      </form>
    </div>
  );
}
