/** @format */
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CircleFadingPlus, FolderPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/admin/breadcumbs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const GuruKelas = () => {
  return (
    <main className=" lg:gap-6 lg:p-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-col">
          <h1 className="text-lg font-semibold md:text-2xl">Form Laporan</h1>
          <p className="hidden md:block text-sm text-foreground font-extralight">Form untuk mengunduh laporan layanan sesuai tanggal yang diinginkan</p>
        </div>
        <Breadcrumbs />
      </div>
      <div className="mt-10 flex justify-center">
        <Card className="max-w-[1080px] flex rounded-lg border shadow-sm">
          <CardContent className="my-3 font-poppins items-center w-full">
            <div className="flex w-full items-center gap-3 justify-between">
              <Select>
                <SelectTrigger className="text-primary border p-2 rounded-lg max-w-[180px]">
                  <SelectValue className="text-primary" placeholder="Tahun Ajaran" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">2021/2022</SelectItem>
                  <SelectItem value="dark">2022/2023</SelectItem>
                </SelectContent>
              </Select>
              <Link href={"/admin/guruKelas/create"}>
                <Button size={"sm"} variant="secondary" className="">
                  <CircleFadingPlus className="w-4 h-4 me-3" />
                  Tambah Guru Kelas
                </Button>
              </Link>
            </div>
            <div className="overflow-x-auto">
              <Table className="table-fixed w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[30px]">#</TableHead>
                    <TableHead>Nama Guru</TableHead>
                    <TableHead>Kelas</TableHead>
                    <TableHead>Tahun Ajaran</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="max-w-4 font-medium">1</TableCell>
                    <TableCell>Syafiq Rohman</TableCell>
                    <TableCell className="flex flex-col md:flex-row gap-1">
                      <Badge className="bg-BYellow">VII-A</Badge>
                      <Badge className="bg-BYellow">VII-B</Badge>
                      <Badge className="bg-BGreen">VIII-A</Badge>
                      <Badge className="bg-BBlue">IX-A</Badge>
                    </TableCell>
                    <TableCell>2023/2024</TableCell>
                    <TableCell className="text-right">
                      <Button size={"sm"} variant="secondary" className="">
                        <FolderPen className="w-4 h-4 me-3" />
                        Ubah Guru Kelas
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default GuruKelas;
