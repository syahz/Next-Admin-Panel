/** @format */
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Breadcrumbs from "@/components/admin/breadcumbs";
import { DataTableDemo } from "@/components/admin/table/data-table";
import { data } from "@/services/api-layanan";
import { columns } from "@/app/admin/layanan/components/columns-layanan";

const Individual = () => {
  return (
    <main className="lg:gap-6 lg:p-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-col">
          <h1 className="text-lg font-semibold md:text-2xl">Data Individual</h1>
          <p className="hidden md:block text-sm text-foreground font-extralight">Table List data Individual</p>
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
            <div className="w-full overflow-x-auto">
              <DataTableDemo data={data} columns={columns} />
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Individual;
