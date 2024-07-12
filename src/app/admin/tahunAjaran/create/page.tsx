/** @format */
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/admin/breadcumbs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const CreateTahunAjaran = () => {
  return (
    <div className=" lg:gap-6 lg:p-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-col">
          <h1 className="text-lg font-semibold md:text-2xl">Form Add Data Tahun Ajaran</h1>
          <p className="hidden md:block text-sm text-foreground font-extralight">Form untuk menambah data Tahun Ajaran.</p>
        </div>
        <Breadcrumbs />
      </div>
      <div className="mt-10 flex justify-center">
        <Card className="w-full max-w-[500px] flex rounded-lg border shadow-sm">
          <CardContent className="mt-3 font-poppins items-center w-full">
            {/* ---------- Form ----------- */}
            <form>
              <p className="py-4 hidden md:block text-sm text-foreground font-extralight">Form menambah Data masa Tahun Ajaran.</p>
              <div className="grid items-center gap-3">
                {/* ------ Form Nama Guru & Kelas ------ */}
                <div className="w-full flex flex-col space-y-1.5">
                  <Label htmlFor="file_tahunAjaran">File Data Tahun Ajaran Terbaru :</Label>
                  <Input id="file_tahunAjaran" type="file" />
                  <Badge variant={"destructive"} className="w-fit text-xs">
                    **
                  </Badge>
                </div>
                <div className="mt-3 w-full flex flex-col space-y-1.5">
                  <Label htmlFor="name">Tahun Ajaran :</Label>
                  <Input id="name" placeholder="E.g. 2020/2021" />
                  <Badge variant={"destructive"} className="w-fit">
                    *
                  </Badge>
                </div>
                <div className="mt-3 w-full flex flex-col space-y-1.5">
                  <Label htmlFor="startAjaran">Start Masa Ajaran :</Label>
                  <Input id="startAjaran" value="2020-07-31" type="date" />
                  <Badge variant={"destructive"} className="w-fit">
                    *
                  </Badge>
                </div>
                <div className="mt-3 w-full flex flex-col space-y-1.5">
                  <Label htmlFor="endAjaran">End Masa Ajaran :</Label>
                  <Input id="endAjaran" value="2021-06-30" type="date" />
                  <Badge variant={"destructive"} className="w-fit">
                    *
                  </Badge>
                </div>
                {/* ------ Form Gender & Email ------ */}
              </div>
              <div className="my-3 flex flex-col gap-1">
                <Badge variant={"destructive"} className="w-fit">
                  ** File format Harus CSV
                </Badge>
                <Badge variant={"destructive"} className="w-fit text-xs">
                  * Sesuaikan Tahun Ajaran && Masukan Sesuai Contoh
                </Badge>
              </div>
              <Button size={"default"}>Submit</Button>
            </form>
            {/* ---------- Form ----------- */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateTahunAjaran;
