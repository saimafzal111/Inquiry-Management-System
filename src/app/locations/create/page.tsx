// app/locations/create/page.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function CreateLocationPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push("/location");
    }, 1000);
  };

  return (
    <div className="flex flex-1 flex-col p-6">
      <h1 className="text-2xl font-bold mb-6">Add Venues</h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full"
      >
        {/* User */}
        <div className="space-y-2">
          <Label>User</Label>
          <Select>
            <SelectTrigger className="w-full">
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
          <Input type="file" />
        </div>

        {/* Location Name */}
        <div className="space-y-2">
          <Label>Location Name</Label>
          <Input placeholder="enter location" required />
        </div>

        {/* Primary Phone */}
        <div className="space-y-2">
          <Label>Primary Phone Number</Label>
          <Input type="tel" placeholder="primary phone number" />
        </div>

        {/* Secondary Phone */}
        <div className="space-y-2">
          <Label>Secondary Phone Number</Label>
          <Input type="tel" placeholder="secondary phone number" />
        </div>

        {/* Min Capacity */}
        <div className="space-y-2">
          <Label>Min Capacity</Label>
          <Input type="number" placeholder="Min Capacity" />
        </div>

        {/* Max Capacity */}
        <div className="space-y-2">
          <Label>Max Capacity</Label>
          <Input type="number" placeholder="Max Capacity" />
        </div>

        {/* Address */}
        <div className="space-y-2">
          <Label>Address</Label>
          <Input placeholder="address" />
        </div>

        {/* Status */}
        <div className="space-y-2">
          <Label>Status</Label>
          <Select defaultValue="Active">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Attributes */}
        <div className="space-y-2">
          <Label>Attributes</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select options" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bed">Bed</SelectItem>
              <SelectItem value="car">Car</SelectItem>
              <SelectItem value="mail">Mail</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Event Types */}
        <div className="space-y-2">
          <Label>Event Types</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select options" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wedding">Wedding</SelectItem>
              <SelectItem value="birthday">Birthday</SelectItem>
              <SelectItem value="corporate">Corporate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center">
          <Button
            type="submit"
            className="bg-orange-500/95 text-white hover:bg-orange-400 px-6"
            disabled={loading}
          >
            {loading ? "Saving..." : "Add Location"}
          </Button>
        </div>
      </form>

      {/* Map Placeholder */}
      <div className="mt-6 border rounded-md overflow-hidden h-96">
        <iframe
          title="map"
          width="100%"
          height="100%"
          src="https://www.openstreetmap.org/export/embed.html"
        ></iframe>
      </div>
    </div>
  );
}
