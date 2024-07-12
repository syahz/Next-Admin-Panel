/** @format */
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/admin/breadcumbs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CreateGuruKelas = () => {
  return (
    <div className=" lg:gap-6 lg:p-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-col">
          <h1 className="text-lg font-semibold md:text-2xl">Form Add Data Guru Kelas</h1>
          <p className="hidden md:block text-sm text-foreground font-extralight">Form List Penanggung Jawab BK setiap Kelas.</p>
        </div>
        <Breadcrumbs />
      </div>
      <div className="mt-10 flex justify-center">
        <Card className="w-[300px] max-w-[1080px] flex rounded-lg border shadow-sm">
          <CardContent className=" my-3 font-poppins items-center w-full">
            <form>
              <p className="py-4 hidden md:block text-sm text-foreground font-extralight">Form Tambah Guru Kelas.</p>
              <div className="max-w-[300px] grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Nama Guru</Label>
                  <Input id="name" disabled value={"Syafiq Rohman"} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Kelas</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="VII-A" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="VIII-A">VIII-A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateGuruKelas;
