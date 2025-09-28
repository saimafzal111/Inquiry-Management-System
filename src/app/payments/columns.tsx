'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Inquiry } from '../inquiries/inquiries';
import { Button } from '@/components/ui/button'; 
import { Badge } from '@/components/ui/badge'; 
import { ArrowUpDown, ScrollText, MoreHorizontal } from 'lucide-react'; 

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

export const columns: ColumnDef<Inquiry>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="!px-0"
      >
        ID
      </Button>
    ),
    cell: ({ row }) => (
      <Link href={`/inquiries/edit/${row.original.id}`} className="capitalize pointer">
        <span className="underline text-blue-600">{row.original.id}</span>
      </Link>
    ),
  },
  {
    accessorKey: 'contactPerson',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="!px-0"
      >
        Contact Person
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue('contactPerson')}</div>,
  },
  {
    accessorKey: 'venue',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="!px-0"
      >
        Venue
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue('venue')}</div>,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="!px-0"
      >
        Email
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>,
  },
  {
    accessorKey: 'eventDate',
    header: 'Event Date',
    cell: ({ row }) => <div className="capitalize">{row.getValue('eventDate')}</div>,
  },
  {
    accessorKey: 'deadline',
    header: 'Deadline',
    cell: ({ row }) => <div>{row.getValue('deadline')}</div>,
  },
  {
    accessorKey: 'eventType',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="!px-0"
      >
        Event Type
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue('eventType')}</div>,
  },
  {
  accessorKey: "guest",
  header: "Guests",
  cell: ({ row }) => <div>{row.getValue("guest") ?? 0}</div>, // fallback to 0
},

  {
    accessorKey: 'notes',
    header: 'Notes',
    cell: ({ row }) => (
      <div className="capitalize">
        {row.original.notes ? <ScrollText className="w-5 h-5" /> : ""}
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="!px-0"
      >
        Status
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <Badge className="bg-gray-300 text-gray-800 hover:bg-gray-300/80">
        {row.getValue('status')}
      </Badge>
    ),
  },
  {
  id: 'actions',
  enableHiding: false,
  header: 'Actions',
  cell: () => {

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {/* Delete */}
          <DropdownMenuItem className="text-red-600">
            Delete Inquiry
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
}

];