// app/locations/create/page.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
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
      <Card className="max-w-3xl mx-auto w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Add New Venue</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label>Venue Name</Label>
              <Input placeholder="Enter venue name" required />
            </div>

            {/* Image URL */}
            <div className="space-y-2">
              <Label>Image URL</Label>
              <Input type="url" placeholder="https://example.com/image.jpg" />
            </div>

            {/* Map Link */}
            <div className="space-y-2">
              <Label>Map Link</Label>
              <Input type="url" placeholder="https://maps.google.com/..." />
            </div>

            {/* Capacity */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Min Capacity</Label>
                <Input type="number" placeholder="50" />
              </div>
              <div>
                <Label>Max Capacity</Label>
                <Input type="number" placeholder="500" />
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <Label>Address</Label>
              <Textarea placeholder="Full venue address" className="resize-none" />
            </div>

            {/* Phones */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Primary Phone</Label>
                <Input type="tel" placeholder="+92 300 1234567" />
              </div>
              <div>
                <Label>Secondary Phone</Label>
                <Input type="tel" placeholder="+92 333 9876543" />
              </div>
            </div>

            {/* Status */}
            <div className="space-y-2">
              <Label>Status</Label>
              <Select>
                <SelectTrigger>
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
              <div className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="bed" />
                  <label htmlFor="bed">Bed</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="car" />
                  <label htmlFor="car">Car</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="mail" />
                  <label htmlFor="mail">Mail</label>
                </div>
              </div>
            </div>

            {/* Event Types */}
            <div className="space-y-2">
              <Label>Event Types</Label>
              <Input placeholder="e.g. Wedding, Corporate, Birthday" />
              <p className="text-xs text-gray-500">Comma separated</p>
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-orange-500/95 text-white hover:bg-orange-400"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save Venue"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}