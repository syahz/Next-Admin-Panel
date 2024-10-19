/** @format */
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/admin/breadcumbs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CreateKelas = () => {
  return (
    <div className=" lg:gap-6 lg:p-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-col">
          <h1 className="text-lg font-semibold md:text-2xl">Form Add Data Kelas</h1>
          <p className="hidden md:block text-sm text-foreground font-extralight">Form untuk menambahkan data kelas F1 Academy.</p>
        </div>
        <Breadcrumbs />
      </div>
      <div className="mt-10 flex justify-center">
        <Card className="w-full max-w-[400px] flex rounded-lg border shadow-sm">
          <CardContent className="mt-3 font-poppins items-center w-full">
            {/* ---------- Form ----------- */}
            <form>
              <p className="py-4 hidden md:block text-sm text-foreground font-extralight">Form Tambah Data Kelas.</p>
              <div className="grid items-center gap-3">
                {/* ------ Form Nama Kelas & Tingkat ------ */}
                <div className="w-full flex flex-col space-y-1.5">
                  <Label htmlFor="name">Nama Kelas</Label>
                  <Input id="name" placeholder="Masukan Nama Kelas Eg. VII-A" />
                </div>
                <div className="w-full flex flex-col space-y-1.5">
                  <Label htmlFor="kelas">Tingkat</Label>
                  <Input id="kelas" placeholder="Masukan Tingkat Kelas Eg. 7" />
                </div>
                {/* ------ Form Nama Kelas & Tingkat ------ */}
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

export default CreateKelas;
