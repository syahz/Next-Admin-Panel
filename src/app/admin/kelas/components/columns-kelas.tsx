/** @format */
import { ColumnDef } from "@tanstack/react-table";
import { Kelas } from "@/types/kelas";
import { Button } from "@/components/ui/button";
import { FolderPen } from "lucide-react";
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

export const columns: ColumnDef<Kelas>[] = [
  {
    accessorKey: "name",
    header: "Nama",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "tingkat",
    header: "Tingkat",
    cell: ({ row }) => <div className="capitalize">{row.getValue("tingkat")}</div>,
  },
  {
    id: "actions",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      const kelas = row.original;

      return (
        <div className="gap-1 flex flex-col md:flex-row">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size={"sm"} variant="destructive">
                <FolderPen className="w-4 h-4 me-3" />
                Hapus Kelas
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm Delete</AlertDialogTitle>
                <AlertDialogDescription>Apakah anda yakin akan menghapus layanan {kelas.name}? This action cannot be undone.</AlertDialogDescription>
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
