import { AppLineChart } from "@/components/AppLineChart";
import DashboardCards from "@/components/DashboardCards";
import { TopPerformingLocations } from "@/components/TopPerformingLocations";

export default function Home() {
  return (
   <main className="px-8">
   <div className="grid gap-4 col-span-1 lg:col-span-2 2xl:col-span-4">
    {/* cards */}
   <div><DashboardCards /></div>
   {/* linechart */}
   <div><AppLineChart /></div>
   {/* tables */}
   <div>test</div>
   {/* locations */}
   <div><TopPerformingLocations /></div>
   </div>
   </main>
  );
}
