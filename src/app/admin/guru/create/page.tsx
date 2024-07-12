/** @format */
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/admin/breadcumbs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CreateGuru = () => {
  return (
    <div className=" lg:gap-6 lg:p-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-col">
          <h1 className="text-lg font-semibold md:text-2xl">Form Add Data Guru</h1>
          <p className="hidden md:block text-sm text-foreground font-extralight">Form untuk menambahkan data guru.</p>
        </div>
        <Breadcrumbs />
      </div>
      <div className="mt-10 flex justify-center">
        <Card className="w-full max-w-[1080px] flex rounded-lg border shadow-sm">
          <CardContent className="mt-3 font-poppins items-center w-full">
            {/* ---------- Form ----------- */}
            <form>
              <p className="py-4 hidden md:block text-sm text-foreground font-extralight">Form Tambah Data Guru.</p>
              <div className="grid items-center gap-3">
                {/* ------ Form Nama Guru & Kelas ------ */}
                <div className="justify-between gap-3 flex flex-col md:flex-row">
                  <div className="w-full flex flex-col space-y-1.5">
                    <Label htmlFor="name">Nama Guru</Label>
                    <Input id="name" placeholder="Masukan Nama Guru" />
                  </div>
                  <div className="w-full flex flex-col space-y-1.5">
                    <Label htmlFor="kelas">NIP / Status</Label>
                    <Input id="kelas" placeholder="Masukan NIP / Status Guru" />
                  </div>
                </div>
                {/* ------ Form Nama Siswa & Kelas ------ */}
                {/* ------ Form Gender & Email ------ */}
                <div className="justify-between gap-3 flex flex-col md:flex-row">
                  <div className="w-full flex flex-col space-y-1.5">
                    <Label htmlFor="gender">Gander</Label>
                    <Select>
                      <SelectTrigger id="gender">
                        <SelectValue placeholder="Masukkan Gander" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="laki-laki">Laki-laki</SelectItem>
                        <SelectItem value="perempuan">Perempuan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full flex flex-col space-y-1.5">
                    <Label htmlFor="nisn">Email</Label>
                    <Input id="nisn" placeholder="Masukan Email" type="email" />
                  </div>
                </div>
                {/* ------ Form Gender & Email ------ */}

                {/* ------ Form Password & Confirm Password ------ */}
                <div className="justify-between gap-3 flex flex-col md:flex-row">
                  <div className="w-full flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" placeholder="Masukan password" type="password" />
                  </div>
                  <div className="w-full flex flex-col space-y-1.5">
                    <Label htmlFor="confirm_password">Konfirmasi Password</Label>
                    <Input id="confirm_password" placeholder="Konfirmasi Password" type="password" />
                  </div>
                </div>
                {/* ------ Form Password & Confirm Password ------ */}
              </div>
              <Button className="w-fit mt-3" variant="default">
                Submit
              </Button>
            </form>
            {/* ---------- Form ----------- */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateGuru;
