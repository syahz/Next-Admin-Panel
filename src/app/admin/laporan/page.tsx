/** @format */
"use client";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import Breadcrumbs from "@/components/admin/breadcumbs";
import { Input } from "@/components/ui/input";

const Laporan = () => {
  const [date, setDate] = useState<Date>();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center justify-between">
        <div className="flex-col">
          <h1 className="text-lg font-semibold md:text-2xl">Form Laporan</h1>
          <p className="text-sm text-foreground font-extralight">Form untuk mengunduh laporan layanan sesuai tanggal yang diinginkan</p>
        </div>
        <Breadcrumbs />
      </div>
      <Card className="flex rounded-lg border shadow-sm w-full">
        <CardContent className="font-poppins items-center w-full">
          <p className="my-4">Masukan range Laporan yang ingin di unduh</p>
          <div className="w-full flex flex-col space-y-1.5">
            <Label htmlFor="tahunAjaran">Tahun Ajaran</Label>
            <Select>
              <SelectTrigger className="border p-2 rounded-lg w-full">
                <SelectValue placeholder="2021/2022" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">2021/2022</SelectItem>
                <SelectItem value="dark">2022/2023</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex mt-4 flex-col lg:flex-row items-center gap-3 w-full">
            <div className="w-full flex flex-col space-y-1.5">
              <Label htmlFor="name">Tanggal Awal</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            {/* Tanggal Akhir */}
            <div className="w-full flex flex-col space-y-1.5">
              <Label htmlFor="name">Tanggal Akhir</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <Button className="mt-5">Submit</Button>
        </CardContent>
      </Card>
    </main>
  );
};

export default Laporan;
