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
        <Button className="bg-orange-600 hover:bg-orange-700 text-white">
          + Add New User
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
              className="bg-orange-600 hover:bg-orange-700 text-white"
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
