/** @format */
import { ColumnDef } from "@tanstack/react-table";
import { Guru } from "@/types/guru";
import { Button } from "@/components/ui/button";
import { Eye, FolderPen } from "lucide-react";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export const columns: ColumnDef<Guru>[] = [
  {
    accessorKey: "name",
    header: "Nama",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "nip",
    header: "Nip/Status",
    cell: ({ row }) => <div className="capitalize">{row.getValue("nip")}</div>,
  },
  {
    accessorKey: "gander",
    header: "Gander",
    cell: ({ row }) => <div className="capitalize">{row.getValue("gander")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="capitalize">{row.getValue("email")}</div>,
  },
  {
    id: "actions",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      const guru = row.original;

      return (
        <div className="gap-1 flex flex-col md:flex-row">
          <Link href={`/admin/guru/edit?id=${guru.id}`}>
            <Button size={"sm"} variant="outline">
              <Eye className="w-4 h-4 me-3" />
              Detail Guru
            </Button>
          </Link>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size={"sm"} variant="destructive">
                <FolderPen className="w-4 h-4 me-3" />
                Hapus Guru
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm Delete</AlertDialogTitle>
                <AlertDialogDescription>Apakah anda yakin akan menghapus layanan {guru.name}? This action cannot be undone.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];
