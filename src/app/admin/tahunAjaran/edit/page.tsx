/** @format */
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/admin/breadcumbs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const EditTahunAjaran = () => {
  return (
    <div className=" lg:gap-6 lg:p-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-col">
          <h1 className="text-lg font-semibold md:text-2xl">Form Edit Data Tahun Ajaran</h1>
          <p className="hidden md:block text-sm text-foreground font-extralight">Form untuk mengubah data Tahun Ajaran.</p>
        </div>
        <Breadcrumbs />
      </div>
      <div className="mt-10 flex justify-center">
        <Card className="w-full max-w-[500px] flex rounded-lg border shadow-sm">
          <CardContent className="mt-3 font-poppins items-center w-full">
            {/* ---------- Form ----------- */}
            <form>
              <p className="py-4 hidden md:block text-sm text-foreground font-extralight">Form Ubah Data masa Tahun Ajaran.</p>
              <div className="grid items-center gap-3">
                {/* ------ Form Nama Guru & Kelas ------ */}
                <div className="w-full flex flex-col space-y-1.5">
                  <Label htmlFor="name">Nama Tahun Ajaran</Label>
                  <Input id="name" value={"2020/2021"} />
                </div>
                <div className="w-full flex flex-col space-y-1.5">
                  <Label htmlFor="startAjaran">Start Masa Ajaran :</Label>
                  <Input id="startAjaran" value="2020-07-31" type="date" />
                </div>
                <div className="w-full flex flex-col space-y-1.5">
                  <Label htmlFor="endAjaran">End Masa Ajaran</Label>
                  <Input id="endAjaran" value="2021-06-30" type="date" />
                </div>
                {/* ------ Form Gender & Email ------ */}
              </div>
              <Button size={"sm"} className="w-fit mt-3" variant="default">
                Ubah Data Tahun Ajaran
              </Button>
            </form>
            {/* ---------- Form ----------- */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EditTahunAjaran;
