import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ComboboxDemo } from "./ComboBox"

export function AddAttribute() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-[#EE8308] hover:bg-[#DE7841] text-white">
          + Add Attributes
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="font-semibold">Add Attributes List</SheetTitle>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <label htmlFor="sheet-demo-name">Name</label>
            <Input id="sheet-demo-name" placeholder="Enter Attribute name" />
            <ComboboxDemo />
            <Button
              type="submit"
              className="bg-[#EE8308] hover:bg-[#DE7841] text-white"
            >
              Add Attribute
            </Button>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
