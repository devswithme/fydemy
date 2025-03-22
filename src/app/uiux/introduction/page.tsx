import { Button } from "@/components/ui/button";
import { navItems } from "@/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UI/UX Introduction",
  description: "Jadi, Apa itu UI & UX Design?",
};

export default function ApiReference() {
  return (
    <main className="max-w-3xl mx-auto prose">
      <h1>Selamat datang, designer!</h1>
      <h2>Jadi, Apa itu UI & UX Design?</h2>
      <p>
        UI & UX Design merupakan proses merancang interaksi dan pengalaman bagi
        pengguna pada sebuah produk (seperti aplikasi & website). Proses ini
        dilakukan sejak tahap riset, eksekusi desain hingga pengujian.
      </p>
      <Image
        src="/uiux/6.png"
        alt="6.png"
        width={1600}
        height={900}
        className="w-full sm:w-1/2 object-cover object-top rounded"
      />
      <h2>Lalu, Apa itu UX?</h2>
      <p>
        User Experience adalah bagaimana perasaan dan pengalaman pengguna/user
        ketika menggunakan suatu produk (website/aplikasi) UX akan berfokus pada
        rancangan flow dan interaksi antara user dengan device dan software,
        seperti website dan aplikasi.{" "}
        <b>UX adalah soal bagaimana aplikasi digunakan</b>.
      </p>
      <h2>Sedangkan UI Design</h2>
      <p>
        User Interface adalah bagian visual atau tampilan pada sebuah
        web/aplikasi mulai dari warna, icon, layout desain, font yang digunakan,
        dan sebagainya. Dengan desain tampilan yang baik, diharapkan bisa
        membantu User untuk menggunakan produk dengan optimal.{" "}
        <b>UI mencakup konsep desain visual</b>.
      </p>

      <div className="flex justify-between items-center">
        <Button>
          <Link
            href={navItems[0].items[0].url}
            className="no-underline flex items-center gap-2 text-white">
            <ChevronLeft /> {navItems[0].items[0].title}
          </Link>
        </Button>
        <Button>
          <Link
            href={navItems[0].items[2].url}
            className="no-underline flex items-center gap-2 text-white">
            {navItems[0].items[2].title} <ChevronRight />
          </Link>
        </Button>
      </div>
    </main>
  );
}
