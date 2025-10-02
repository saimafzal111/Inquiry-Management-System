// app/locations/data-table.tsx
"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronsUpDown, Settings2 } from "lucide-react";
import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filterColumnId: keyof TData;
  filterPlaceholder: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  filterColumnId,
  filterPlaceholder,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div className="w-full">
      {/* Search/Filter & Actions Bar */}
      <div className="flex w-full flex-wrap justify-between gap-2 mb-2">
        <div className="flex gap-2">
          <Input
            placeholder={filterPlaceholder}
            value={
              (table.getColumn(filterColumnId as string)?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) =>
              table.getColumn(filterColumnId as string)?.setFilterValue(
                event.target.value
              )
            }
            className="max-w-sm"
          />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                // role="combobox"
                className="w-full sm:w-[140px] justify-between capitalize"
              >
                All
                <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuCheckboxItem onClick={() => table.getColumn("status")?.setFilterValue("Active")}>
                Active
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem onClick={() => table.getColumn("status")?.setFilterValue("Inactive")}>
                Inactive
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem onClick={() => table.getColumn("status")?.setFilterValue("Pending")}>
                Pending
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex gap-2">
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                Views <Settings2 className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-48">
              {table.getAllColumns().map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  className="capitalize flex items-center"
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/locations/create" passHref>
            <Button className="bg-orange-500/95 text-white hover:bg-orange-400">
              + Add Venue
            </Button>
          </Link>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-hidden rounded-md border">
        <div className="relative w-full overflow-x-auto">
          <Table className="min-w-full text-sm">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id} className="whitespace-nowrap px-4 py-2">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="px-4 py-2 whitespace-nowrap"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      
    {/* Pagination */}
<div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4">
  {/*  showing info */}
  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
    <Select
      value={String(table.getState().pagination.pageSize)}
      onValueChange={(value) => table.setPageSize(Number(value))}
    >
      <SelectTrigger className="w-[80px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {[10, 20, 50, 100].map((pageSize) => (
          <SelectItem key={pageSize} value={String(pageSize)}>
            {pageSize}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    <span>
      Showing {table.getRowModel().rows.length} out of{" "}
      {table.getPrePaginationRowModel().rows.length}
    </span>
  </div>

  {/* Pagination */}
 
  <div className="flex items-center space-x-2">
  <Button
    variant="outline"
    size="sm"
    className="cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:text-black"
    onClick={() => table.previousPage()}
    disabled={!table.getCanPreviousPage()}
  >
    Previous
  </Button>

  {Array.from({ length: table.getPageCount() }, (_, i) => (
    <Button
      key={i}
      size="sm"
      variant="outline"
      className={`cursor-pointer transition-all duration-200 
        ${i === table.getState().pagination.pageIndex
          ? "bg-gray-200 text-black font-medium"
          : "hover:bg-gray-100 hover:text-black"}`}
      onClick={() => table.setPageIndex(i)}
    >
      {i + 1}
    </Button>
  ))}

  <Button
    variant="outline"
    size="sm"
    className="cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:text-black"
    onClick={() => table.nextPage()}
    disabled={!table.getCanNextPage()}
  >
    Next
  </Button>
</div>

</div>



    </div>
  );
}