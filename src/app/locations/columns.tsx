//app/loacations/columns.tsx
'use client';

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    ArrowUpDown,
    MoreHorizontal,
    Bed,
    Check,
    Car,
    Mail,
    MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Location } from "./location";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetFooter,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

// Attribute Icon
const AttributeIcon = ({ iconKey }: { iconKey: Location["attributes"][number] }) => {
    const iconProps = { className: "h-4 w-4", strokeWidth: 1.5 };
    switch (iconKey) {
        case "bed": return <Bed {...iconProps} />;
        case "check": return <Check {...iconProps} />;
        case "car": return <Car {...iconProps} />;
        case "mail": return <Mail {...iconProps} />;
        default: return null;
    }
};

// Actions Cell Component
function LocationActions({ location }: { location: Location }) {
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    // Editable fields
    const [editName, setEditName] = useState(location.name);
    const [editStatus, setEditStatus] = useState(location.status);
    const [minCapacity, setMinCapacity] = useState(location.min_capacity);
    const [maxCapacity, setMaxCapacity] = useState(location.max_capacity);
    const [primaryPhone, setPrimaryPhone] = useState(location.primary_phone);
    const [secondaryPhone, setSecondaryPhone] = useState(location.secondary_phone);
    const [address, setAddress] = useState(location.address);

    const handleEditSave = () => {
        console.log("Edited location:", {
            editName,
            editStatus,
            minCapacity,
            maxCapacity,
            primaryPhone,
            secondaryPhone,
            address,
        }, "ID:", location.id);
        setEditOpen(false);
    };

    const handleDelete = () => {
        console.log("Deleted location ID:", location.id);
        setDeleteOpen(false);
    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">

                    <DropdownMenuItem onClick={() => setEditOpen(true)}>Edit </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600" onClick={() => setDeleteOpen(true)}>
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Edit Sheet */}
            <Sheet open={editOpen} onOpenChange={setEditOpen}>
                <SheetContent className="p-4">
                    <SheetHeader>
                        <SheetTitle>Edit Location </SheetTitle>
                        <SheetDescription>Modify location details and save changes.</SheetDescription>
                    </SheetHeader>

                    <div className="py-4 space-y-4">
                        <Input
                            value={editName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditName(e.target.value)}
                            placeholder="Location Name"
                        />
                        <Input
                            value={editStatus}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setEditStatus(e.target.value as "Active" | "Pending" | "Inactive")
                            }
                            placeholder="Status"
                        />

                        <Input
                            value={minCapacity}
                            type="number"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMinCapacity(Number(e.target.value))}
                            placeholder="Min Capacity"
                        />
                        <Input
                            value={maxCapacity}
                            type="number"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMaxCapacity(Number(e.target.value))}
                            placeholder="Max Capacity"
                        />
                        <Input
                            value={primaryPhone}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrimaryPhone(e.target.value)}
                            placeholder="Primary Phone"
                        />
                        <Input
                            value={secondaryPhone || ""}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSecondaryPhone(e.target.value)}
                            placeholder="Secondary Phone"
                        />
                        <Input
                            value={address}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
                            placeholder="Address"
                        />

                    </div>

                    <SheetFooter>
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white" onClick={handleEditSave}>
                            Save Changes
                        </Button>
                    </SheetFooter>
                </SheetContent>
            </Sheet>

            {/* Delete Dialog */}
            <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Confirm Delete</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete this location? This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="flex gap-2 justify-end">
                        <Button variant="outline" onClick={() => setDeleteOpen(false)}>Cancel</Button>
                        <Button className="bg-red-500 hover:bg-red-600 text-white" onClick={handleDelete}>
                            Delete
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}

// Table column definitions
const headerClass = "px-4 py-2 text-sm font-semibold text-gray-700";
const cellClass = "px-4 py-2 text-sm whitespace-nowrap";

export const columns: ColumnDef<Location>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => (
            <div className={headerClass}>
                <Button
                    variant="ghost"
                    className="p-0 text-sm"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    ID <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            </div>
        ),
        cell: ({ row }) => (
            <Link href={`/location/edit/${row.original.id}`} className={`${cellClass} underline text-blue-600`}>
                {row.getValue("id")}
            </Link>
        ),
    },
    {
        accessorKey: "image_url",
        header: () => <div className={headerClass}>Image</div>,
        cell: ({ row }) => (
            <div className={cellClass}>
                <Image
                    src={row.original.image_url || "https://via.placeholder.com/60"}
                    alt="Venue Image"
                    width={60}
                    height={60}
                    className="rounded-md object-cover"
                />
            </div>
        ),
    },
    {
        accessorKey: "map_link",
        header: () => <div className={headerClass}>Map Link</div>,
        cell: ({ row }) => (
            <div className={cellClass}>
                {row.original.map_link ? (
                    <Link href={row.original.map_link} target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
                        <MapPin className="h-4 w-4" />
                    </Link>
                ) : (
                    <span className="text-gray-400 italic">No Link</span>
                )}
            </div>
        ),
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <div className={headerClass}>
                <Button
                    variant="ghost"
                    className="p-0 text-sm"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Location Name <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            </div>
        ),
        cell: ({ row }) => <div className={cellClass}>{row.getValue("name")}</div>,
    },
    {
        accessorKey: "inquiries",
        header: () => <div className={headerClass}>Inquiries</div>,
        cell: ({ row }) => (
            <Link href={`/inquiries?location=${row.original.name}`} className={`${cellClass} underline text-blue-600`}>
                {row.getValue("inquiries")}
            </Link>
        ),
    },
    {
        accessorKey: "reservations",
        header: () => <div className={headerClass}>Reservations</div>,
        cell: ({ row }) => <div className={cellClass}>{row.getValue("reservations")}</div>,
    },
    {
        accessorKey: "overall_score",
        header: () => <div className={headerClass}>Overall</div>,
        cell: ({ row }) => <div className={cellClass}>{row.getValue("overall_score")}</div>,
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <div className={headerClass}>
                <Button variant="ghost" className="p-0 text-sm" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Status <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            </div>
        ),
        cell: ({ row }) => {
            const status = row.getValue("status") as string;
            let badgeClasses = "";
            switch (status) {
                case "Active": badgeClasses = "bg-green-500 hover:bg-green-600 text-white"; break;
                case "Pending": badgeClasses = "bg-yellow-500 hover:bg-yellow-600 text-white"; break;
                case "Inactive": badgeClasses = "bg-red-500 hover:bg-red-600 text-white"; break;
                default: badgeClasses = "bg-gray-300 text-gray-800";
            }
            return <Badge className={badgeClasses}>{status}</Badge>;
        },
    },
    {
        accessorKey: "min_capacity",
        header: () => <div className={headerClass}>Min Capacity</div>,
        cell: ({ row }) => <div className={cellClass}>{row.getValue("min_capacity")}</div>,
    },
    {
        accessorKey: "max_capacity",
        header: () => <div className={headerClass}>Max Capacity</div>,
        cell: ({ row }) => <div className={cellClass}>{row.getValue("max_capacity")}</div>,
    },
    {
        accessorKey: "address",
        header: () => <div className={headerClass}>Address</div>,
        cell: ({ row }) => <div className={`${cellClass} whitespace-pre-wrap break-words min-w-[250px] max-w-[350px]`}>{row.getValue("address")}</div>,
    },
    {
        accessorKey: "primary_phone",
        header: () => <div className={headerClass}>Primary Phone</div>,
        cell: ({ row }) => <div className={cellClass}>{row.getValue("primary_phone")}</div>,
    },
    {
        accessorKey: "secondary_phone",
        header: () => <div className={headerClass}>Secondary Phone</div>,
        cell: ({ row }) => <div className={cellClass}>{row.getValue("secondary_phone")}</div>,
    },
    {
        accessorKey: "attributes",
        header: () => <div className={headerClass}>Attributes</div>,
        cell: ({ row }) => (
            <div className={`${cellClass} flex gap-2`}>
                {(row.getValue("attributes") as Location["attributes"]).map((attr, idx) => (
                    <div key={idx} className="rounded bg-gray-100 h-8 w-8 p-2 flex items-center justify-center" title={attr}>
                        <AttributeIcon iconKey={attr} />
                    </div>
                ))}
            </div>
        ),
    },
    {
        accessorKey: "event_types",
        header: () => <div className={headerClass}>Event Types</div>,
        cell: ({ row }) => {
            const types = row.getValue("event_types") as string[];
            const displayedTypes = types.slice(0, 2);
            const remainingCount = types.length - displayedTypes.length;
            return (
                <div className={`${cellClass} flex gap-2`}>
                    {displayedTypes.map((type, idx) => (
                        <span key={idx} className="rounded bg-gray-100 px-2 py-1 text-xs capitalize">{type}</span>
                    ))}
                    {remainingCount > 0 && <span className="rounded bg-gray-100 px-2 py-1 text-xs capitalize">+{remainingCount} More</span>}
                </div>
            );
        },
    },
    {
        id: "actions",
        header: () => <div className={headerClass}>Actions</div>,
        cell: ({ row }) => <LocationActions location={row.original} />,
    },
];