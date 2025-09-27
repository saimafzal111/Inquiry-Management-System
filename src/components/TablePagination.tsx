import { Table } from "@tanstack/react-table"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Button } from "./ui/button"

interface DataTablePaginationProps<TData> {
  table: Table<TData>
}

export default function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const pageCount = table.getPageCount()
  const currentPage = table.getState().pagination.pageIndex

  return (
    <div className="flex flex-col gap-4 px-2 py-3 sm:flex-row sm:items-center sm:justify-between">
      {/* Rows per page selector */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
        <div className="flex items-center space-x-2">
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value))
            }}
          >
            <SelectTrigger className="h-8 w-[80px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 25, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span className="text-sm text-muted-foreground">
            Showing {table.getRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length}
          </span>
        </div>
      </div>

      {/* Pagination controls */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end">
        {/* Previous button */}
        <Button
          variant="ghost"
          className="h-8 px-2 text-sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Prev
        </Button>

        {/* Page numbers */}
        <div className="flex flex-wrap gap-1">
          {Array.from({ length: pageCount }, (_, i) => (
            <Button
              key={i}
              variant={i === currentPage ? "default" : "outline"}
              className="h-8 w-8"
              onClick={() => table.setPageIndex(i)}
            >
              {i + 1}
            </Button>
          ))}
        </div>

        {/* Next button */}
        <Button
          variant="ghost"
          className="h-8 px-2 text-sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
