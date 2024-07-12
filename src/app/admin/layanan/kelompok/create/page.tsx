/** @format */

// page.tsx
/** @format */
"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/admin/breadcumbs";
import { DataTableDemo } from "@/components/admin/table/data-table-check";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { data } from "@/services/api";
import { columns } from "@/app/admin/layanan/components/columns-siswa-check";

const CreateKelompok = () => {
  const [rowSelection, setRowSelection] = React.useState<Record<string, boolean>>({});
  const [users, setUsers] = React.useState<{ nis: number; nama: string }[]>([]);

  const selectedRows = Object.keys(rowSelection).filter(key => rowSelection[key]);
  return (
    <main className=" lg:gap-6 lg:p-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-col">
          <h1 className="text-lg font-semibold md:text-2xl">Add Group Services</h1>
          <p className="hidden md:block text-sm text-foreground font-extralight">Form tambah data layanan Kelompok siswa</p>
        </div>
        <Breadcrumbs />
      </div>
      <div className="mt-10 flex justify-center">
        <Card className="max-w-[1080px] flex rounded-lg border shadow-sm overflow-x-auto">
          <CardContent className="my-3 font-poppins items-center w-full">
            <Select>
              <SelectTrigger className="text-primary border p-2 rounded-lg max-w-[180px]">
                <SelectValue className="text-primary" placeholder="Tahun Ajaran" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">2021/2022</SelectItem>
                <SelectItem value="dark">2022/2023</SelectItem>
              </SelectContent>
            </Select>
            <DataTableDemo columns={columns} data={data} setUserInfo={setUsers} rowSelection={rowSelection} setRowSelection={setRowSelection} />

            <form action="" method="post">
              {selectedRows.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm">Nama Siswa</p>
                  {users.map((user, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Input value={`${user.nama} / ${user.nis}`} readOnly className="my-1" />
                    </div>
                  ))}
                </div>
              )}
              <div className="flex flex-col md:flex-row gap-1">
                <div className="pt-3 flex flex-col space-y-1.5">
                  <Label htmlFor="name">Nama Guru</Label>
                  <Input id="name" disabled value={"Syafiq Rohman"} />
                </div>
                <div className="pt-3 flex flex-col space-y-1.5">
                  <Label htmlFor="name">Jenis Layanan</Label>
                  <Input id="name" disabled placeholder={"Individual"} />
                </div>
                <div className="pt-3 flex flex-col space-y-1.5">
                  <Label htmlFor="name">Tahun Ajaran</Label>
                  <Input id="name" disabled placeholder={"2020/2021"} />
                </div>
              </div>
              <div className="flex-col md:flex-row gap-1">
                <div className="w-full pt-3 flex flex-col space-y-1.5">
                  <Label htmlFor="name">Tempat</Label>
                  <Input id="name" placeholder="Masukkan Tempat" />
                </div>
                <div className="pt-3 flex flex-col space-y-1.5">
                  <Label htmlFor="name">Waktu</Label>
                  <Input type="time" />
                </div>
                <div className="pt-3 flex flex-col space-y-1.5">
                  <Label htmlFor="name">Tahun Ajaran</Label>
                  <Input id="name" value={"2020/2021"} />
                </div>
              </div>
              <hr className="mt-2 mb-4"></hr>
              <div className="pt-3 flex flex-col space-y-1.5">
                <Label htmlFor="name">Layanan</Label>
                <Select>
                  <SelectTrigger className="text-primary border p-2 rounded-lg w-full">
                    <SelectValue className="text-primary" placeholder="Pilih Layanan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="LayananReferal">Layanan Referal</SelectItem>
                    <SelectItem value="LayananKonseling">Layanan Konseling</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="py-3 flex flex-col space-y-1.5">
                <Label htmlFor="name">Keterangan</Label>
                <Input id="keterangan" placeholder={"Masukkan Keterangan"} />
              </div>
              <Button size={"sm"} variant="secondary" className="">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default CreateKelompok;
