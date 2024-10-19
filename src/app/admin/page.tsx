/** @format */

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
const AdminHome = () => {
  return (
    <main className=" flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Dahsboard</h1>
      </div>
      <Card className="flex  rounded-lg border shadow-sm">
        <CardContent className="font-poppins flex flex-1 items-center justify-center">
          <div className="col">
            <h5 className="text-primary">Selamat Datang</h5>
            <h3 className="text-foreground mb-2">Max Varstappen</h3>
            <p className="">
              <i>
                Sukses bukanlah kunci dari kebahagiaan. Sebaliknya, kebahagiaan adalah kunci kesuksesan. Jika kamu mencintai apa yang kamu lakukan, kamu akan sukses.
                <b> -Albert Schweitzer</b>
              </i>
            </p>
          </div>
          <div className="col d-none d-lg-block">
            <Image src="/img/dashboard.svg" alt="Book 3d" width={1000} height={1000} />
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default AdminHome;
