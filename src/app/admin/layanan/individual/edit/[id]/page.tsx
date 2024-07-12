/** @format */
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/admin/breadcumbs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useParams } from "next/navigation";

const EditLayananIndividual = () => {
  const params = useParams();

  return (
    <div className=" lg:gap-6 lg:p-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-col">
          <h1 className="text-lg font-semibold md:text-2xl">Form Edit Data Siswa</h1>
          <p className="hidden md:block text-sm text-foreground font-extralight">Form untuk Mengubah data siswa.</p>
        </div>
        <Breadcrumbs />
      </div>
      <div className="mt-10 flex justify-center">
        <Card className="max-w-[1080px] w-full flex rounded-lg border shadow-sm">
          <CardContent className="my-3 font-poppins items-center w-full">
            {/* ---------- Form ----------- */}
            <form>
              <p className="py-4 hidden md:block text-sm text-foreground font-extralight">Form Ubah Data Siswa.</p>
              <div className="grid items-center gap-4">
                {/* ------ Form Nama Siswa & Kelas ------ */}
                <div className="justify-between gap-3 flex flex-col md:flex-row">
                  <div className="w-full flex flex-col space-y-1.5">
                    <Label htmlFor="name">Nama Siswa</Label>
                    <Input id="name" value={"Muhammad Sumbul"} />
                  </div>
                  <div className="w-full flex flex-col space-y-1.5">
                    <Label htmlFor="kelas">Kelas</Label>
                    <Input id="kelas" value="VII-A" />
                  </div>
                </div>
                {/* ------ Form Nama Siswa & Kelas ------ */}
                {/* ------ Form Nis & NISN ------ */}
                <div className="justify-between gap-3 flex flex-col md:flex-row">
                  <div className="w-full flex flex-col space-y-1.5">
                    <Label htmlFor="nis">NIS</Label>
                    <Input id="nis" value={params.nis} />
                  </div>
                  <div className="w-full flex flex-col space-y-1.5">
                    <Label htmlFor="nisn">NISN</Label>
                    <Input id="nisn" value="NISN" />
                  </div>
                </div>
                {/* ------ Form Nis & NISN ------ */}
                {/* ------ Form Alamat ------ */}
                <div className="w-full flex flex-col space-y-1.5">
                  <Label htmlFor="alamat">Alamat</Label>
                  <Input id="alamat" value="Jl. Sumbersirah No.3S" />
                </div>
                {/* ------ Form Alamat ------ */}
                {/* ------ Form No. HP 1 & 2 ------ */}
                <div className="justify-between gap-3 flex flex-col md:flex-row">
                  <div className="w-full flex flex-col space-y-1.5">
                    <Label htmlFor="no_hportu">No. HP Orang Tua</Label>
                    <Input id="no_hportu" value="08111222333" />
                  </div>
                  <div className="w-full flex flex-col space-y-1.5">
                    <Label htmlFor="no_hportu2">No. HP Orang Tua 2</Label>
                    <Input id="no_hportu2" />
                  </div>
                </div>
                {/* ------ Form No. HP 1 & 2 ------ */}
                {/* ------ Form Asrama ------ */}
                <div className="w-full flex flex-col space-y-1.5">
                  <Label htmlFor="asrama">Asrama</Label>
                  <Input id="asrama" value="Al-Mubtadiien" />
                </div>
                {/* ------ Form Asrama ------ */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="tahunAjaran">Tahun Ajaran</Label>
                  <Select>
                    <SelectTrigger id="tahunAjaran">
                      <SelectValue placeholder="2021/2022" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="VIII-A">2021/2022</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button size={"sm"} variant="secondary" className="">
                  Submit
                </Button>
              </div>
            </form>
            {/* ---------- Form ----------- */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EditLayananIndividual;
