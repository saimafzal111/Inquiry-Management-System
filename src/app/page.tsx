import { AppLineChart } from "@/components/AppLineChart";
import DashboardCards from "@/components/DashboardCards";
import DataTables from "@/components/DataTables";
import { TopPerformingLocations } from "@/components/TopPerformingLocations";

export default function Home() {
  return (
   <main className="px-8 py-8">
   <div className="grid gap-4 col-span-1 lg:col-span-2 2xl:col-span-4">
    {/* cards */}
   <div className="mt-6 p-6"><DashboardCards /></div>
   {/* linechart */}
   <div className="p-6"><AppLineChart /></div>
   {/* tables */}
   <div className="flex flex-col">
    {/* <DataTable /> */}
    {/* <UrgentDeadline />
    <LatestInquiries /> */}
    {/* <DataTables /> */}
   </div>
   {/* locations */}
   <div className="p-6"><TopPerformingLocations /></div>
   </div>
   </main>
  );
}
