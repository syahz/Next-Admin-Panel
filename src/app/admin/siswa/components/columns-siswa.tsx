/** @format */
import { ColumnDef } from "@tanstack/react-table";
import { Siswa } from "@/types/siswa";
import { Button } from "@/components/ui/button";
import { Eye, FolderPen, SquarePen } from "lucide-react";
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

export const columns: ColumnDef<Siswa>[] = [
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
    accessorKey: "tahunAjaran",
    header: "Tahun Ajaran",
    cell: ({ row }) => <div className="capitalize">{row.getValue("tahunAjaran")}</div>,
  },
  {
    id: "TambahLayanan",
    header: "Tambah Layanan",
    enableHiding: false,
    cell: () => {
      return (
        <>
          <Link href={`/admin/individual/create`}>
            <Button size={"sm"} variant="secondary">
              <SquarePen className="w-4 h-4 me-3" />
              Tambah Layanan
            </Button>
          </Link>
        </>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      const siswa = row.original;

      return (
        <div className="gap-1 flex flex-col md:flex-row">
          <Link href={`/admin/siswa/edit/${siswa.nis}?tahunAjaran=${siswa.tahunAjaran}`}>
            <Button size={"sm"} variant="outline">
              <Eye className="w-4 h-4 me-3" />
              Detail Siswa
            </Button>
          </Link>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size={"sm"} variant="destructive">
                <FolderPen className="w-4 h-4 me-3" />
                Hapus Siswa
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm Delete</AlertDialogTitle>
                <AlertDialogDescription>Apakah anda yakin akan menghapus Siswa {siswa.nama}? This action cannot be undone.</AlertDialogDescription>
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
