import Submission from "@/components/submission";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "UI/UX Projects",
  description: "Develop Design menjadi Prototype",
};

export default function ApiReference() {
  return (
    <>
      <h1>Develop Design menjadi Prototype</h1>
      <Submission id="ux" />
      <p>
        Prototype merupakan bentuk desain dalam sebuah aplikasi namun sudah
        dikembangkan sebelum dirilis ke user. Prototype dapat digunakan
        selayaknya produk yang sudah jadi.
      </p>
      <p>
        Prototype dibuat untuk bahan uji coba kelayakan sebelum produk tersebut
        dirilis ke pasaran. Prototype ini digunakan sebagai bahan usability
        testing sebelum diserahkan kepada web developer untuk dikembangkan
        menjadi aplikasi yang matang.
      </p>
      <h2>Figma Simple Tutorial</h2>
      <p>
        Mari kita coba memvisualisasikan desain kita menggunakan Figma Sebelum
        membuat sebuah desain kalian harus mempersiapkan berbagai icon dan
        komponen yang akan digunakan. Mari buat terlebih dahulu….
      </p>
      <h3>Langkah 1: Icon </h3>
      <ul>
        <li>
          Setelah membuka project baru di Figma kalian klik 🌐(Explore Comunity)
          bisanya di pojok kiri bawah atau kiri atas, di sini kalian bisa
          mencari Icon-icon yang sudah ada untuk mempermudah dalam mendesain{" "}
          <Image
            src="/uiux/2.png"
            alt="2.png"
            width={1600}
            height={900}
            className="w-full object-cover object-top rounded"
          />
        </li>
        <li>
          Setelah itu pilih dibagian research resource “icon” maka akan muncul
          berbagai macam bentuk icon. pilih salah satu sesuai kebutuhan. Tapi
          ingat kalian harus memilih icon dengan warna dan bentuk setipe agar
          tampilan dalam desain konsisten 💡Tips : Pilihlah Icon Free untuk
          pemula kemudian copy paste ke page desain Figma yang kalian
          <Image
            src="/uiux/3.png"
            alt="3.png"
            width={1600}
            height={900}
            className="w-full object-cover object-top rounded"
          />
        </li>
        <li>
          Setah itu kalian bisa atur warna-warnanya sesuai dengan theme desain
          yang kalian kerjakan.
          <Image
            src="/uiux/4.png"
            alt="4.png"
            width={1600}
            height={900}
            className="sm:w-1/2 w-full object-cover object-top rounded"
          />
        </li>
        <li>
          Apabila kalian sudah menentukan icon apa saja yang akan dipakai.
          kalian bisa mengelompokkan icon icon tersebut kedalam sebuah komponen
        </li>
        <li>
          Kalian juga bisa membuat komponen button dengan cara yang sama ya….
        </li>
      </ul>
      <h3>Langkah 2: Frame </h3>
      <ul>
        <li>
          Kalian bisa memilih frame terlebih dahulu (Kalian tinggal klik gambar
          kotak sebelah panah di bagian bawah tampilan dan pilih frame yang
          sesuai) <b>*Kali ini contohnya untuk music apps di iphone ya…</b>
          <Image
            src="/uiux/8.png"
            alt="8.png"
            width={1600}
            height={900}
            className="w-full object-cover object-top rounded"
          />
        </li>
        <li>
          Kemudian kalian klik kanan, pilih plugin kemudian manage plugin dan
          pilih tema yang sesuai dengan desain. 💡Karena aku sudah ada history
          desain jadi aku pilih bagian unsplash dan aku pilih gambar music
          <Image
            src="/uiux/9.png"
            alt="9.png"
            width={1600}
            height={900}
            className="sm:w-1/2 w-full object-cover object-top rounded"
          />
        </li>
        <li>
          Setelah memilih gambar yang sesuai kemudian copy paste ke frame yang
          sudah kita buat dan sesuaikan ukurannya dan kita bikin gradien bagian
          tengah agar tampilan lebih menarik
          <div className="sm:flex sm:gap-x-4">
            <Image
              src="/uiux/10.png"
              alt="10.png"
              width={1600}
              height={900}
              className="sm:w-1/2 w-full object-cover object-top rounded"
            />
            <Image
              src="/uiux/11.png"
              alt="11.png"
              width={1600}
              height={900}
              className="sm:w-1/2 w-full object-cover object-top rounded"
            />
          </div>
        </li>
      </ul>
      <h3>Langkah 3: Teks </h3>
      <ul>
        <li>
          Kita lock dulu di bagian tanda kecil sebelah tulisan grup kita klik.
          kemudian pilih font dan masukkan teks sesuai kebutuhan{" "}
          <div className="sm:flex sm:gap-x-4">
            <Image
              src="/uiux/12.png"
              alt="12.png"
              width={1600}
              height={900}
              className="sm:w-1/2 w-full object-cover object-top rounded"
            />
            <Image
              src="/uiux/13.png"
              alt="13.png"
              width={1600}
              height={900}
              className="sm:w-1/2 w-full object-cover object-right-top rounded"
            />
          </div>
        </li>
        <li>
          Setelah itu kita masukkan icon/button yang sudah kita buat diawal
        </li>
        <li>Kita buat satu frame lagi ya dengan cara yang sama </li>
      </ul>
      <h3>Langkah 4: Prototype</h3>
      <ul>
        <li>Setelah membuat desain alihkan ke menu prototype</li>
        <li>
          Pilih konten yang akan diarahkan tarik panah sesuai dengan lokasi yang
          dimaksud
          <Image
            src="/uiux/14.png"
            alt="14.png"
            width={1600}
            height={900}
            className="w-full object-cover object-right-top rounded"
          />
        </li>
        <li>
          Kemudian pilih navigasi yang kalian inginkan, kali ini aku pilih one
          click supaya sekali click bisa langsung ke page ke 2
        </li>
        <li>
          Dan untuk kembali dari page 2 ke page 1 kalian tinggal tambahkan dan
          tarik panah dari page 2 ke page 1
        </li>
      </ul>
      <h3>Langkah 5: Prototype</h3>
      <ul>
        <li>
          Klik bagian main menu dan install plugin dengan cara find more plugin
          dan pilih (sebenarnya ada banyak macam plugin cuma pilih salah satu
          misal anima)
        </li>
        <li>
          Login ke plugin yang dipilih klik layer yang ingin kalian jadikan
          HTML, setelah itu kalian klik preview untuk melihat apakah sudah
          sesuai dengan yang kalian inginkan.
        </li>
        <li>
          Klik get code dan kalian akan mendapatkan code sesuai yang kalian
          inginkan.
        </li>
      </ul>
      {/* <blockquote>
        Untuk pengecekan dan review project, bisa kirim ke email cs@fysite.id.
        Kirim kode dalam bentuk zip beserta screenshot ya!
      </blockquote> */}
    </>
  );
}
