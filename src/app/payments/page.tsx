import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Eye, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Calendar22 } from "@/components/Calendar";

const getData = async (): Promise<Payment[]> => {
    return [
        {
            id: "1",
            status: "pending",
            username: "John Doe",
            email: "johndoe@gmail.com",
            venue: "Kristy Mosciski",
            eventdate: "32 days ago",
            deadline: "7 days ago",
            eventType: "party",
            guest: 1245,
        },
        {
            id: "2",
            status: "success",
            username: "Jane Doe",
            email: "janedoe@gmail.com",
            venue: "Mrs. Joanne Ernser",
            eventdate: "22 days ago",
            deadline: "17 days ago",
            eventType: "wedding",
            guest: 245,
        },
        {
            id: "3",
            status: "success",
            username: "Mike Galloway",
            email: "mikegalloway@gmail.com",
            venue: "Pink Bode",
            eventdate: "12 days ago",
            deadline: "2 days ago",
            eventType: "wedding",
            guest: 124523,
        },
        {
            id: "4",
            status: "failed",
            username: "Minerva Robinson",
            email: "minerbarobinson@gmail.com",
            venue: "Cristopher Lehner III",
            eventdate: "32 days ago",
            deadline: "7 days ago",
            eventType: "party",
            guest: 1245,
        },
        {
            id: "5",
            status: "success",
            username: "Mable Clayton",
            email: "mableclayton@gmail.com",
            venue: "Prof. Kathleen Strosin IV",
            eventdate: "65 days ago",
            deadline: "27 days ago",
            eventType: "birthday",
            guest: 145,
        },
        {
            id: "6",
            status: "pending",
            username: "Nathan McDaniel",
            email: "nathanmcdaniel@gmail.com",
            venue: "Mr. Stanford Schiller",
            eventdate: "30 days ago",
            deadline: "23 days ago",
            eventType: "meeting",
            guest: 189,
        },
        {
            id: "7",
            status: "success",
            username: "Myrtie Lamb",
            email: "myrtielamb@gmail.com",
            venue: "Orville Russel",
            eventdate: "52 days ago",
            deadline: "17 days ago",
            eventType: "wedding",
            guest: 178,
        },
        {
            id: "8",
            status: "success",
            username: "Leona Bryant",
            email: "leonabryant@gmail.com",
            venue: "Jed Thompson",
            eventdate: "35 days ago",
            deadline: "07 days ago",
            eventType: "party",
            guest: 190,
        },
        {
            id: "9",
            status: "failed",
            username: "Aaron Willis",
            email: "aaronwillis@gmail.com",
            venue: "Tanya Hamill",
            eventdate: "4 days ago",
            deadline: "1 days ago",
            eventType: "meeting",
            guest: 134,
        },
        {
            id: "10",
            status: "success",
            username: "Joel Keller",
            email: "joelkeller@gmail.com",
            venue: "Adrianna Schoen",
            eventdate: "32 days ago",
            deadline: "7 days ago",
            eventType: "wedding",
            guest: 543,
        },
        {
            id: "11",
            status: "pending",
            username: "Daniel Ellis",
            email: "danielellis@gmail.com",
            venue: "Stefanie Hansen",
            eventdate: "72 days ago",
            deadline: "37 days ago",
            eventType: "birthday",
            guest: 234,
        },
        {
            id: "12",
            status: "success",
            username: "Gordon Kennedy",
            email: "gordonkennedy@gmail.com",
            venue: "Prof. Gertrude Bayer",
            eventdate: "12 days ago",
            deadline: "5 days ago",
            eventType: "wedding",
            guest: 345,
        },
        {
            id: "13",
            status: "failed",
            username: "Emily Hoffman",
            email: "emilyhoffman@gmail.com",
            venue: "Prof. Kathleen Strosin IV",
            eventdate: "32 days ago",
            deadline: "7 days ago",
            eventType: "party",
            guest: 335,
        },
        {
            id: "14",
            status: "pending",
            username: "Jeffery Garrett",
            email: "jefferygarrett@gmail.com",
            venue: "Dr. Jermain Mohr DDS",
            eventdate: "2 days ago",
            deadline: "1 days ago",
            eventType: "meeting",
            guest: 664,
        },
        {
            id: "15",
            status: "success",
            username: "Ralph Baker",
            email: "ralphbaker@gmail.com",
            venue: "Jennyfer Stoltenberg DDS",
            eventdate: "32 days ago",
            deadline: "7 days ago",
            eventType: "party",
            guest: 332,
        },
        {
            id: "16",
            status: "failed",
            username: "Seth Fields",
            email: "sethfields@gmail.com",
            venue: "Hazle Douglas",
            eventdate: "22 days ago",
            deadline: "7 days ago",
            eventType: "wedding",
            guest: 413,
        },
        {
            id: "17",
            status: "pending",
            username: "Julia Webb",
            email: "juliawebb@gmail.com",
            venue: "Marco Blick",
            eventdate: "56 days ago",
            deadline: "3 days ago",
            eventType: "birthday",
            guest: 345,
        },
        {
            id: "18",
            status: "success",
            username: "Gary Banks",
            email: "garybanks@gmail.com",
            venue: "Orville Russel",
            eventdate: "32 days ago",
            deadline: "7 days ago",
            eventType: "party",
            guest: 754,
        },
        {
            id: "19",
            status: "failed",
            username: "Flora Chambers",
            email: "florachambers@gmail.com",
            venue: "Dr. Aracely Kunde",
            eventdate: "32 days ago",
            deadline: "17 days ago",
            eventType: "meeting",
            guest: 643,
        },
        {
            id: "20",
            status: "pending",
            username: "Steve Hanson",
            email: "stevehanson@gmail.com",
            venue: "Jeramie Schimmel",
            eventdate: "32 days ago",
            deadline: "7 days ago",
            eventType: "birthday",
            guest: 543,
        },
        {
            id: "21",
            status: "success",
            username: "Lola Robinson",
            email: "lolarobinson@gmail.com",
            venue: "Stefanie Hansen",
            eventdate: "12 days ago",
            deadline: "2 days ago",
            eventType: "wedding",
            guest: 1245,
        },
        {
            id: "22",
            status: "pending",
            username: "Ethel Waters",
            email: "ethelwaters@gmail.com",
            venue: "Morton O'Hara",
            eventdate: "32 days ago",
            deadline: "7 days ago",
            eventType: "meeting",
            guest: 354,
        },
        {
            id: "23",
            status: "failed",
            username: "Grace Edwards",
            email: "graceedwards@gmail.com",
            venue: "Iva Hansen I",
            eventdate: "32 days ago",
            deadline: "7 days ago",
            eventType: "birthday",
            guest: 244,
        },
        {
            id: "24",
            status: "success",
            username: "Sallie Wong",
            email: "salliewong@gmail.com",
            venue: "Hollis Jerde",
            eventdate: "20 days ago",
            deadline: "9 days ago",
            eventType: "party",
            guest: 712,
        },
        {
            id: "25",
            status: "success",
            username: "Bryan Gutierrez",
            email: "bryangutierrez@gmail.com",
            venue: "Iva Hansen I",
            eventdate: "32 days ago",
            deadline: "7 days ago",
            eventType: "meeting",
            guest: 1215,
        },
        {
            id: "26",
            status: "pending",
            username: "Erik Rice",
            email: "erikrice@gmail.com",
            venue: "Leonard Simonis DVM",
            eventdate: "23 days ago",
            deadline: "17 days ago",
            eventType: "party",
            guest: 1245,
        },
        {
            id: "27",
            status: "success",
            username: "Jordan Atkins",
            email: "jordanatkins@gmail.com",
            venue: "Mr. Kadin Abbott",
            eventdate: "9 days ago",
            deadline: "1 days ago",
            eventType: "wedding",
            guest: 1234
        },
        {
            id: "28",
            status: "failed",
            username: "Bill Brewer",
            email: "billbrewer@gmail.com",
            venue: "Dr. Esmeralda Bosco",
            eventdate: "13 days ago",
            deadline: "05 days ago",
            eventType: "party",
            guest: 56
        },
        {
            id: "29",
            status: "success",
            username: "Edwin Morris",
            email: "edwinmorris@gmail.com",
            venue: "Dr. Aracely Kunde",
            eventdate: "32 days ago",
            deadline: "7 days ago",
            eventType: "birthday",
            guest: 456
        },
        {
            id: "30",
            status: "success",
            username: "Harold Becker",
            email: "haroldbecker@gmail.com",
            venue: "Edward Hegmann PhD",
            eventdate: "132 days ago",
            deadline: "98 days ago",
            eventType: "wedding",
            guest: 924
        },
        {
            id: "31",
            status: "success",
            username: "Hannah Rodriguez",
            email: "hannahrodriguez@gmail.com",
            venue: "Rico Stamm",
            eventdate: "42 days ago",
            deadline: "23 days ago",
            eventType: "party",
            guest: 765
        },
        {
            id: "32",
            status: "success",
            username: "Zachary Beck",
            email: "zacharybeck@gmail.com",
            venue: "Prof. Kathleen Strosin IV",
            eventdate: "32 days ago",
            deadline: "7 days ago",
            eventType: "meeting",
            guest: 450
        },
        {
            id: "33",
            status: "failed",
            username: "Frances Potter",
            email: "francespotter@gmail.com",
            venue: "Leonard Simonis DVM",
            eventdate: "32 days ago",
            deadline: "7 days ago",
            eventType: "wedding",
            guest: 876
        },
        {
            id: "34",
            status: "success",
            username: "Raymond Murray",
            email: "raymondmurray@gmail.com",
            venue: "Dr. Uriel Altenwerth",
            eventdate: "02 days ago",
            deadline: "01 days ago",
            eventType: "birthday",
            guest: 1245
        },
        {
            id: "35",
            status: "success",
            username: "Adam Sherman",
            email: "adamsherman@gmail.com",
            venue: "Hazle Douglas",
            eventdate: "43 days ago",
            deadline: "23 days ago",
            eventType: "party",
            guest: 843
        },
        {
            id: "36",
            status: "pending",
            username: "Anne Cruz",
            email: "annecruz@gmail.com",
            venue: "Mrs. Joanne Ernser",
            eventdate: "29 days ago",
            deadline: "14 days ago",
            eventType: "party",
            guest: 914
        },
    ];
};
const PaymentPage = async () => {
  const data = await getData();

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
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default PaymentPage;