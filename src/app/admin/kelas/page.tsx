/** @format */
"use client";
import { Card, CardContent } from "@/components/ui/card";
import Breadcrumbs from "@/components/admin/breadcumbs";
import { DataTableDemo } from "@/components/admin/table/data-table";
import { data } from "@/services/api-kelas";
import { columns } from "@/app/admin/kelas/components/columns-kelas";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CircleFadingPlus } from "lucide-react";

const Kelas = () => {
  return (
    <main className="lg:gap-6 lg:p-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-col">
          <h1 className="text-lg font-semibold md:text-2xl">Data Kelas</h1>
          <p className="hidden md:block text-sm text-foreground font-extralight">Table List of data Kelas F1 Academy</p>
        </div>
        <Breadcrumbs />
      </div>
      <div className="mt-10 flex justify-center">
        <Card className="max-w-[1080px] flex rounded-lg border shadow-sm overflow-x-auto">
          <CardContent className="my-3 font-poppins items-center w-full">
            <Link href={"/admin/kelas/create"}>
              <Button size={"sm"} variant={"secondary"}>
                <CircleFadingPlus className="w-4 h-4 me-2" />
                Tambah Kelas
              </Button>
            </Link>
            <div className="w-full overflow-x-auto">
              <DataTableDemo data={data} columns={columns} />
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Kelas;
