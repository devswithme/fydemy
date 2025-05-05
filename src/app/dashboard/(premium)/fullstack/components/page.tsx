import { navItems } from "@/constants/constant";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Fullstack Components",
  description:
    "Komponen di ReactJS adalah bagian yang membentuk antarmuka pengguna (UI).",
};

export default function ApiReference() {
  return (
    <>
      <h1>Cara Membuat Components</h1>
      <h3>Sebelum ke cara membuat Components, Apa sih Components itu?</h3>
      <p>
        Komponen di ReactJS adalah bagian yang membentuk antarmuka pengguna
        (UI). Komponen ini dapat berupa UI (misalnya tombol, input form, dll.)
        atau logika pengolahan data yang menghasilkan UI. Komponen dapat
        digunakan kembali (reusable) di berbagai bagian aplikasi.
      </p>
      <h3>
        Nah Setelah tau apa itu Components, langsung aja ke cara membuatnya!
      </h3>
      <p>
        Pertama, kamu buat folder components di dalam /src, disclaimer nama
        foldernya bebas sesuai yang kamu inginkan, itu kenapa aku kasih nama
        folder components, karna agar lebih mudah membacanya. Setelah kamu
        membuat folder sekarang buat file .jsx di dalam folder yang baru kamu
        buat tadi!
      </p>
      <Image
        src="/fullstack/7.png"
        alt="7.png"
        width={1600}
        height={900}
        className="w-full sm:w-1/2 object-cover object-top rounded"
      />
      <p>
        Setelah kamu membuat folder dan file, disinilah kamu akan membuat
        Component.
      </p>
      <Image
        src="/fullstack/8.png"
        alt="8.png"
        width={1600}
        height={900}
        className="w-full sm:w-1/2 object-cover object-top rounded"
      />
      <p>
        Nah disitu aku buat component bernama Fysite, di dalam component Fysite
        ini kamu bisa membuat apapun yang akan kamu tampilkan ke halaman website
        kamu, sebagai contoh aku akan membuat paragraf.{" "}
      </p>
      <Image
        src="/fullstack/9.png"
        alt="9.png"
        width={1600}
        height={900}
        className="w-full sm:w-1/2 object-cover object-top rounded"
      />
      <p>
        Setelah aku menambahkan paragraf pasti pada bertanya kok belum muncul
        paragrafnya di website yang kita buat.{" "}
      </p>
      <p>
        Saat kamu buat komponen, komponen itu hanya ada di file tempat kamu
        menulisnya. Kalau kamu pengen komponen itu muncul di halaman web, kamu
        harus memberitahu React untuk merender komponen tersebut, artinya
        memberi tahu React untuk menampilkan komponen tersebut di halaman.
      </p>
      <h3>Bagaimana caranya memberitahu react untuk menampilkan?</h3>
      <p>
        Impor Komponen di App.js: Agar komponen Fysite muncul di halaman, kamu
        perlu mengimpor komponen itu ke dalam file App.js. Contoh:
      </p>
      <Image
        src="/fullstack/10.png"
        alt="10.png"
        width={1600}
        height={900}
        className="object-cover object-top rounded"
      />
      <p>
        Nah Seperti itu cara Impor Component di React.js, Sekarang Coba cek
        website kamu pasti paragraf yang tadi kita buat di component fysite
        pasti sudah ada.
      </p>
      <Image
        src="/fullstack/11.png"
        alt="11.png"
        width={1600}
        height={900}
        className="object-cover object-top rounded"
      />
      <p>
        Sudah Muncul kan paragraf yang sudah kita buat tadi, gimana mudah bukan
        cara membuat component di React?
      </p>
      <h3>Kesimpulannya:</h3>
      <ul>
        <li>Buat komponen seperti Fysite.</li>
        <li>
          Impor komponen ke file yang ingin kamu tampilkan (seperti App.js).
        </li>
        <li>
          Gunakan komponen itu di dalam JSX{" "}
          <code className="language-js">{`(misalnya <Fysite />
					).`}</code>
        </li>
      </ul>
      <p>Gitu Ajaa pasti kalian bisaa! Aku Ada Kuis!</p>
      <Image
        src="/fullstack/12.png"
        alt="12.png"
        width={1600}
        height={900}
        className="object-cover object-top rounded"
      />
      <p>
        Jika Aku Import component hanya menambahkan{" "}
        <code className="language-js">{` <Fysite />`}</code> aja apakah bisa di
        import komponen Fysite?
      </p>

      <div className="bg-muted w-full border-t fixed right-0 md:pl-64 bottom-0 py-4">
        <div className="flex justify-between items-center max-w-3xl mx-auto px-5 lg:px-0">
          <Link href={navItems[3].items[2].url}>
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <span className="font-semibold">{navItems[3].items[3].title}</span>
          <Link href={navItems[3].items[4].url}>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
