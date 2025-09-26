import { AppLineChart } from "@/components/AppLineChart";
import DashboardCards from "@/components/DashboardCards";
import { UrgentDeadline } from "@/components/UrgentDeadlines";
import { TopPerformingLocations } from "@/components/TopPerformingLocations";
import { LatestInquiries } from "@/components/LatestInquiries";

export default function Home() {
  return (
   <main className="px-8">
   <div className="grid gap-4 col-span-1 lg:col-span-2 2xl:col-span-4">
    {/* cards */}
   <div className="mt-6 p-6"><DashboardCards /></div>
   {/* linechart */}
   <div><AppLineChart /></div>
   {/* tables */}
   <div>
    {/* <DataTable /> */}
    <UrgentDeadline />
    <LatestInquiries />
   </div>
   {/* locations */}
   <div><TopPerformingLocations /></div>
   </div>
   </main>
  );
}
