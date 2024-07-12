/** @format */
import { ColumnDef } from "@tanstack/react-table";
import { Layanan } from "@/types/layanan";
import { Button } from "@/components/ui/button";
import { Eye, FolderPen, Printer } from "lucide-react";
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

export const columns: ColumnDef<Layanan>[] = [
  {
    accessorKey: "nama",
    header: "Nama",
    cell: ({ row }) => <div className="capitalize">{row.getValue("nama")}</div>,
  },
  {
    accessorKey: "kelas",
    header: "Kelas",
    cell: ({ row }) => <div className="capitalize">{row.getValue("kelas")}</div>,
  },
  {
    accessorKey: "tanggal",
    header: "Tanggal Layanan",
    cell: ({ row }) => <div className="capitalize">{row.getValue("tanggal")}</div>,
  },
  {
    accessorKey: "guru",
    header: "Guru",
    cell: ({ row }) => <div className="capitalize">{row.getValue("guru")}</div>,
  },
  {
    accessorKey: "typeLayanan",
    header: "Type Layanan",
    cell: ({ row }) => <div className="capitalize">{row.getValue("typeLayanan")}</div>,
  },
  {
    id: "actions",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      const layanan = row.original;

      return (
        <div className="gap-1 flex flex-col lg:flex-row">
          <Link href={`/admin/layanan/edit/${layanan.id}?jenis=${layanan.jenisLayanan}`}>
            <Button className="w-full" size={"sm"} variant="outline">
              <Printer className="w-4 h-4 me-3" />
              Print Laporan
            </Button>
          </Link>
          <div className="flex flex-col gap-1">
            <Link href={`/admin/layanan/edit?id=${layanan.id}`}>
              <Button className="w-full" size={"sm"} variant="outline">
                <Eye className="w-4 h-4 me-3" />
                Detail Layanan
              </Button>
            </Link>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button size={"sm"} variant="destructive">
                  <FolderPen className="w-4 h-4 me-3" />
                  Hapus Layanan
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm Delete</AlertDialogTitle>
                  <AlertDialogDescription>Apakah anda yakin akan menghapus layanan {layanan.nama}? This action cannot be undone.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      );
    },
  },
];
