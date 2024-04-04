"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data: TableData[] = [
  {
    groupname: "Sapphire Eagles",
    project: "Avalanche",
    labels: ["Development", "Design"],
    members: 10,
    lastactive: "2024-03-09",
  },
  {
    groupname: "Golden Phoenix",
    project: "Firestorm",
    labels: ["Marketing", "Research"],
    members: 6,
    lastactive: "2024-03-05",
  },
  {
    groupname: "Silver Tigers",
    project: "Thunderstrike",
    labels: ["Testing", "Analysis"],
    members: 8,
    lastactive: "2024-03-12",
  },
  {
    groupname: "Ruby Dragons",
    project: "Blizzard",
    labels: ["QA", "Documentation"],
    members: 7,
    lastactive: "2024-03-18",
  },
  {
    groupname: "Emerald Wolves",
    project: "Cyclone",
    labels: ["Support", "Training"],
    members: 12,
    lastactive: "2024-03-21",
  },
  {
    groupname: "Amber Bears",
    project: "Whirlwind",
    labels: ["Management", "Sales"],
    members: 9,
    lastactive: "2024-03-25",
  },
  {
    groupname: "Obsidian Lions",
    project: "Tornado",
    labels: ["Operations", "Security"],
    members: 11,
    lastactive: "2024-03-28",
  },
  {
    groupname: "Topaz Falcons",
    project: "Earthquake",
    labels: ["Integration", "Deployment"],
    members: 5,
    lastactive: "2024-03-03",
  },
  {
    groupname: "Diamond Bears",
    project: "Typhoon",
    labels: ["DevOps", "Optimization"],
    members: 8,
    lastactive: "2024-03-16",
  },
  {
    groupname: "Jade Falcons",
    project: "Hurricane",
    labels: ["Localization", "Customization"],
    members: 7,
    lastactive: "2024-03-22",
  },
];

export type TableData = {
  groupname: string;
  project: string;
  labels: string[];
  members: number;
  lastactive: string;
};

interface TableDataProps {
  data: TableData[];
}

export const columns: ColumnDef<TableData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "groupname",
    header: "Group Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("groupname")}</div>
    ),
  },
  {
    accessorKey: "project",
    header: "Project",
  },
  {
    accessorKey: "labels",
    header: "Labels",
    cell: ({ row }) => {
      const labels = row.getValue("labels");
      return Array.isArray(labels) ? labels.join(", ") : labels;
    },
  },
  {
    accessorKey: "members",
    header: "Members",
  },
  {
    accessorKey: "lastactive",
    header: "Last Active",
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function DataTableDemo({ data }: TableDataProps) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full p-2">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter group name..."
          value={
            (table.getColumn("groupname")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("groupname")?.setFilterValue(event.target.value)
          }
          className="max-w-44"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Filter <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
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
                    <TableCell key={cell.id}>
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
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
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
