/** @format */
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useParams, useSearchParams } from "next/navigation";

const EditLayanan = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const jenis = searchParams.get("jenis"); // Mengambil query parameter "jenis"

  return (
    <div className="lg:gap-6 lg:p-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-col">
          <h1 className="text-lg font-semibold md:text-2xl">Form Edit Data Layanan {jenis}</h1>
          <p className="hidden md:block text-sm text-foreground font-extralight">Form untuk Mengubah data Layanan.</p>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Card className="max-w-[1080px] w-full flex rounded-lg border shadow-sm">
          <CardContent className="my-3 font-poppins items-center w-full">
            {/* ---------- Form ----------- */}
            <form>
              <p className="py-4 hidden md:block text-sm text-foreground font-extralight">Form Ubah Data Layanan.</p>
              <div className="grid items-center gap-4">
                {/* ------ Form Nama Siswa & Kelas ------ */}
                <div className="justify-between gap-3 flex flex-col md:flex-row">
                  <div className="w-full flex flex-col space-y-1.5">
                    <Label htmlFor="name">Nama Siswa</Label>
                    <Input id="name" value={"Muhammad Sumbul"} readOnly />
                  </div>
                  <div className="w-full flex flex-col space-y-1.5">
                    <Label htmlFor="nis">NIS</Label>
                    <Input id="nis" value={"43802"} readOnly />
                  </div>
                </div>
                {/* ------ Form Nama Siswa & Kelas ------ */}
                {/* ------ Form Nis & NISN ------ */}
                <div className="justify-between gap-3 flex flex-col md:flex-row">
                  <div className="w-full flex flex-col space-y-1.5">
                    <Label htmlFor="kelas">Kelas</Label>
                    <Input id="kelas" value="VII-A" readOnly />
                  </div>
                  <div className="w-full flex flex-col space-y-1.5">
                    <Label htmlFor="alamat">Type Layanan</Label>
                    <Input id="alamat" value="Layanan Konseling Individu" readOnly />
                  </div>
                  <div className="w-full flex flex-col space-y-1.5">
                    <Label htmlFor="nisn">Tahun Ajaran</Label>
                    <Input id="nisn" value="2021/2022" />
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

export default EditLayanan;
