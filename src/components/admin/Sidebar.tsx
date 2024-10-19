/** @format */
"use client";

import Link from "next/link";
import { ModeToggle } from "../ui/modetoggle";
import NavMenu from "@/components/admin/navMenu";
import { useState } from "react";

const Sidebar = () => {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const closeSheet = () => setSheetOpen(false);

  return (
    <div className="hidden md:block border-r bg-muted/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span>F1 Academy</span>
          </Link>
          <div className="ml-auto h-8 w-8">
            <ModeToggle />
          </div>
        </div>
        <div className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300">
          <NavMenu closeSheet={closeSheet} />
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
