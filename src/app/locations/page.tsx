// src/app/locations/page.tsx
import { columns } from "./columns";
import { DataTable } from "./data-table"; 
import { locations } from "./location"; 


async function getLocations() {

  return locations; 
}

export default async function LocationManagementPage() {
  const data = await getLocations();

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="w-full px-6">
            <div className="flex flex-col py-4">
              <h2 className="text-2xl font-bold mb-2">Location Management</h2>
              
              <DataTable
                columns={columns}
                data={data}
                filterColumnId="name"
                filterPlaceholder="Filter by location name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}