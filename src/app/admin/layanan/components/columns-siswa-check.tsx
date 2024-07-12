/** @format */

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Siswa } from "@/types/siswa";

export const columns: ColumnDef<Siswa>[] = [
  {
    id: "select",
    header: "Check",
    cell: ({ row }) => <Checkbox checked={row.getIsSelected()} onCheckedChange={value => row.toggleSelected(!!value)} aria-label="Select row" />,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nama",
    header: "Nama",
    cell: ({ row }) => <div className="capitalize">{row.getValue("nama")}</div>,
  },
  {
    accessorKey: "nis",
    header: "Nis",
    cell: ({ row }) => <div className="capitalize">{row.getValue("nis")}</div>,
  },
  {
    accessorKey: "kelas",
    header: "Kelas",
    cell: ({ row }) => <div className="capitalize">{row.getValue("kelas")}</div>,
  },
  {
    accessorKey: "asrama",
    header: "Asrama",
    cell: ({ row }) => <div className="capitalize">{row.getValue("asrama")}</div>,
  },
];
