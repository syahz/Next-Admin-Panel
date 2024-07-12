/** @format */
import { ColumnDef } from "@tanstack/react-table";
import { TahunAjaran } from "@/types/tahun-ajaran";
import { Button } from "@/components/ui/button";
import { Eye, FolderPen } from "lucide-react";
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
import Link from "next/link";

export const columns: ColumnDef<TahunAjaran>[] = [
  {
    accessorKey: "name",
    header: "Nama",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "startAjaran",
    header: "Awal Ajaran",
    cell: ({ row }) => <div className="capitalize">{row.getValue("startAjaran")}</div>,
  },
  {
    accessorKey: "endAjaran",
    header: "Akhir Ajaran",
    cell: ({ row }) => <div className="capitalize">{row.getValue("endAjaran")}</div>,
  },
  {
    id: "actions",
    header: () => <div className="text-left">Actions</div>,
    enableHiding: false,
    cell: ({ row }) => {
      const tahunAjaran = row.original;

      return (
        <div className="gap-1 flex flex-col">
          <Link href={`/admin/tahunAjaran/edit?id=${tahunAjaran.id}`}>
            <Button size={"sm"} variant="outline">
              <Eye className="w-4 h-4 me-3" />
              Detail masa Ajaran
            </Button>
          </Link>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size={"sm"} variant="destructive">
                <FolderPen className="w-4 h-4 me-3" />
                Hapus data Ajaran
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm Delete</AlertDialogTitle>
                <AlertDialogDescription>Apakah anda yakin akan menghapus layanan {tahunAjaran.name}? This action cannot be undone.</AlertDialogDescription>
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
