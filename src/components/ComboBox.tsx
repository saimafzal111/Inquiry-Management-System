"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const icons = [
  { value: "freeParking", label: "Free Parking" },
  { value: "bigterrace", label: "Big Terrace" },
  { value: "garden", label: "Garden" },
  { value: "airConditioning", label: "Air Conditioning" },
  { value: "soundSystem", label: "Sound System" },
  { value: "stage", label: "Stage/Platform" },
  { value: "car", label: "Car" },
  { value: "check", label: "Check" },
  { value: "circle", label: "Circle" },
  { value: "clock", label: "Clock" },
  { value: "coffee", label: "Coffee" },
  { value: "cross", label: "Cross" },
  { value: "dumbell", label: "Dumbell" },
]

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? icons.find((icon) => icon.value === value)?.label
            : "Pick an icon"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search icon..." />
          <CommandEmpty>No icon found.</CommandEmpty>
          <CommandGroup>
            {icons.map((icon) => (
              <CommandItem
                key={icon.value}
                value={icon.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === icon.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {icon.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
