import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Eye, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Calendar22 } from "@/components/Calendar";
// import { Payment } from "../users/page";


const PaymentPage = async () => {
//   const data = await getData();

  return (
    <div className="w-full">
      <h1 className="text-xl font-semibold mt-5 p-4">Inquiries Oversight</h1>

      {/* Top Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-4 mb-6">
        {/* Left Controls */}
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 w-full md:w-auto">
          {/* Search */}
          <Input
            placeholder="Filter by name or venue"
            className="w-full sm:w-[220px]"
          />

          {/* Event Type Filter */}
          <Select>
            <SelectTrigger className="w-full sm:w-[140px]">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="party">Party</SelectItem>
              <SelectItem value="wedding">Wedding</SelectItem>
              <SelectItem value="meeting">Meeting</SelectItem>
              <SelectItem value="birthday">Birthday</SelectItem>
            </SelectContent>
          </Select>

          {/* Date Filter */}
          <div className="w-full sm:w-auto">
            <Calendar22 />
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          {/* Views Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 justify-center w-full sm:w-auto"
              >
                <Eye className="w-4 h-4" /> Views
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Compact</DropdownMenuItem>
              <DropdownMenuItem>Detailed</DropdownMenuItem>
              <DropdownMenuItem>Cards</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Add Inquiry Button */}
          <Button
            size="sm"
            className="flex items-center gap-2 justify-center w-full sm:w-auto"
          >
            <Plus className="w-4 h-4" /> Add Inquiry
          </Button>
        </div>
      </div>

      {/* Data Table */}
      <div className="relative w-full overflow-x-auto px-4">
        {/* <DataTable columns={columns} data={data} /> */}
      </div>
    </div>
  );
};

export default PaymentPage;