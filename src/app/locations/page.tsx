import { DataTable } from '../payments/data-table';
import { columns } from '../payments/columns';
import { inquiries } from '../../app/inquiries/inquiries'; 


export default function InquiryOversightPage() {
  const data = inquiries;

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="w-full px-6">
            <div className="flex flex-col py-4">
              <h2 className="text-2xl font-bold mb-2">Location Management</h2>
              <DataTable columns={columns} data={data} />
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}
