/** @format */

import Link from "next/link";
import { Book, ChevronDown, ChevronUp, Home, LineChart, NotebookPen, NotebookTabs, Table2, Users } from "lucide-react";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

interface NavMenuProps {
  closeSheet: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ closeSheet }) => {
  const [activeCollapsible, setActiveCollapsible] = useState<string | null>(null);
  const pathname = usePathname();

  const handleToggle = (name: string) => {
    setActiveCollapsible(activeCollapsible === name ? null : name);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4 pt-2">
      {/* ---------- Core ------------ */}
      <p className="flex items-center gap-3 rounded-lg px-3 pt-2 text-muted-foreground transition-all hover:text-primary">Core</p>
      <Link
        href="/admin"
        className={`flex items-center gap-3 rounded-lg px-3 my-1 py-2 transition-all hover:bg-accent ${isActive("/admin") ? "bg-muted text-primary" : "text-muted-foreground"}`}
        onClick={closeSheet}>
        <Home className="h-4 w-4" />
        Dashboard
      </Link>
      <Link
        href="/admin/laporan"
        className={`flex items-center gap-3 rounded-lg px-3 my-1 py-2 transition-all hover:bg-accent ${isActive("/admin/laporan") ? "bg-muted text-primary" : "text-muted-foreground"}`}
        onClick={closeSheet}>
        <Book className="h-4 w-4" />
        Laporan
      </Link>

      <div>
        <button className="flex items-center gap-3 rounded-lg px-3 my-1 py-2 text-muted-foreground transition-all hover:bg-accent w-full cursor-pointer" onClick={() => handleToggle("guruKelas")}>
          <Users className="h-4 w-4" />
          Guru Kelas
          {activeCollapsible === "guruKelas" ? (
            <ChevronUp className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center rounded-full" />
          ) : (
            <ChevronDown className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center rounded-full" />
          )}
        </button>
        {activeCollapsible === "guruKelas" && (
          <div className="pl-8">
            <Link href="/admin/guruKelas" className="flex items-center rounded-lg p-2 text-muted-foreground transition-all hover:bg-accent w-full" onClick={closeSheet}>
              List Guru Kelas
            </Link>
            <Link href="/admin/guruKelas/create" className="flex items-center rounded-lg p-2 text-muted-foreground transition-all hover:bg-accent w-full" onClick={closeSheet}>
              Tambah Guru Kelas
            </Link>
          </div>
        )}
      </div>
      {/* ---------- Core ------------ */}

      {/* ---------- Siswa ------------ */}
      <p className="flex items-center gap-3 rounded-lg px-3 pt-4 text-muted-foreground transition-all hover:text-primary">Siswa</p>
      <div>
        <button className="flex items-center gap-3 rounded-lg px-3 my-1 py-2 text-muted-foreground transition-all hover:bg-accent w-full cursor-pointer" onClick={() => handleToggle("siswa")}>
          <Users className="h-4 w-4" />
          Siswa
          {activeCollapsible === "siswa" ? (
            <ChevronUp className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center rounded-full" />
          ) : (
            <ChevronDown className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center rounded-full" />
          )}
        </button>
        {activeCollapsible === "siswa" && (
          <div className="pl-8">
            <Link href="/admin/siswa" className="flex items-center rounded-lg p-2 text-muted-foreground transition-all hover:bg-accent w-full" onClick={closeSheet}>
              List Siswa
            </Link>
            <Link href="/admin/siswa/create" className="flex items-center rounded-lg p-2 text-muted-foreground transition-all hover:bg-accent w-full" onClick={closeSheet}>
              Tambah Siswa
            </Link>
          </div>
        )}
      </div>
      {/* ---------- Siswa ------------ */}

      {/* ---------- Layanan ------------ */}
      <p className="flex items-center gap-3 rounded-lg px-3 pt-4 text-muted-foreground transition-all hover:text-primary">Layanan</p>
      <div>
        <button className="flex items-center gap-3 rounded-lg px-3 my-1 py-2 text-muted-foreground transition-all hover:bg-accent w-full cursor-pointer" onClick={() => handleToggle("individual")}>
          <NotebookPen className="h-4 w-4" />
          Individual
          {activeCollapsible === "individual" ? (
            <ChevronUp className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center rounded-full" />
          ) : (
            <ChevronDown className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center rounded-full" />
          )}
        </button>
        {activeCollapsible === "individual" && (
          <div className="pl-8">
            <Link href="/admin/layanan/individual" className="flex items-center rounded-lg p-2 text-muted-foreground transition-all hover:bg-accent w-full" onClick={closeSheet}>
              List Data Individual
            </Link>
            <Link href="/admin/layanan/individual/create" className="flex items-center rounded-lg p-2 text-muted-foreground transition-all hover:bg-accent w-full" onClick={closeSheet}>
              Tambah Individual
            </Link>
          </div>
        )}
      </div>
      <div>
        <button className="flex items-center gap-3 rounded-lg px-3 my-1 py-2 text-muted-foreground transition-all hover:bg-accent w-full cursor-pointer" onClick={() => handleToggle("kelompok")}>
          <NotebookTabs className="h-4 w-4" />
          Kelompok
          {activeCollapsible === "kelompok" ? (
            <ChevronUp className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center rounded-full" />
          ) : (
            <ChevronDown className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center rounded-full" />
          )}
        </button>
        {activeCollapsible === "kelompok" && (
          <div className="pl-8">
            <Link href="/admin/layanan/kelompok" className="flex items-center rounded-lg p-2 text-muted-foreground transition-all hover:bg-accent w-full" onClick={closeSheet}>
              List Data Kelompok
            </Link>
            <Link href="/admin/layanan/kelompok/create" className="flex items-center rounded-lg p-2 text-muted-foreground transition-all hover:bg-accent w-full" onClick={closeSheet}>
              Tambah Kelompok
            </Link>
          </div>
        )}
      </div>
      {/* ---------- Layanan ------------ */}
      {/* ---------- Core ------------ */}
      <p className="flex items-center gap-3 rounded-lg px-3 pt-2 text-muted-foreground transition-all hover:text-primary">Core</p>
      <Link
        href="/admin/guru"
        className={`flex items-center gap-3 rounded-lg px-3 my-1 py-2 transition-all hover:bg-accent ${isActive("/admin/guru") ? "bg-muted text-primary" : "text-muted-foreground"}`}
        onClick={closeSheet}>
        <Table2 className="h-4 w-4" />
        Data Guru
      </Link>
      <Link
        href="/admin/kelas"
        className={`flex items-center gap-3 rounded-lg px-3 my-1 py-2 transition-all hover:bg-accent ${isActive("/admin/kelas") ? "bg-muted text-primary" : "text-muted-foreground"}`}
        onClick={closeSheet}>
        <Table2 className="h-4 w-4" />
        Data Kelas
      </Link>
      <Link
        href="/admin/tahunAjaran"
        className={`flex items-center gap-3 rounded-lg px-3 my-1 py-2 transition-all hover:bg-accent ${isActive("/admin/tahunAjaran") ? "bg-muted text-primary" : "text-muted-foreground"}`}
        onClick={closeSheet}>
        <Table2 className="h-4 w-4" />
        Data Tahun Ajaran
      </Link>
      {/* ---------- Core ------------ */}
    </nav>
  );
};

export default NavMenu;
