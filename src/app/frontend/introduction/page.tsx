import { Button } from "@/components/ui/button";
import { navItems } from "@/constants";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frontend Introduction",
  description:
    "Belajar frontend adalah hal yang menyenangkan dan menjadi fondasi untuk pembelajaran kita kedepannya",
};

export default function ApiReference() {
  return (
    <main className="max-w-3xl mx-auto prose">
      <h1>Halo Dunia!</h1>
      <p>
        Belajar frontend adalah hal yang menyenangkan dan menjadi fondasi untuk
        pembelajaran kita kedepannya karena kita bekerja dengan tampilan,
        desain, bukan dengan terminal. Disini materinya diringkas dan langsung
        to the point aja!
      </p>

      <h2>Prasyarat</h2>
      <ul>
        <li>
          Download IDE alias tempat kita nulis kodenya di link ini:{" "}
          <a href="https://code.visualstudio.com/download">VSCode</a>
        </li>
        <li>Setelah terinstall, run filenya lalu ikuti saja petunjuknya ya</li>
      </ul>

      <h2>Mari kita mulai</h2>
      <h3>Buka project</h3>
      <p>
        Di Visual Studio Code, klik navigasi bernama <b>File</b> di pojok kiri
        atas lalu pilih opsi <b>Open Folder</b>. Buatlah folder baru untuk
        latihan ini misal namanya <code>frontend</code>.
      </p>
      <Image
        src="/frontend/1.png"
        alt="1.png"
        width={1600}
        height={900}
        className="object-cover object-top rounded"
      />
      <h3>Buat file baru</h3>
      <p>
        Klik ikon tambah file di sidebar anda lalu ketik <code>index.html</code>
        . Lalu, tekan enter untuk membuatnya. Perlu diperhatikan disini website
        pada umumnya memiliki struktur file:
      </p>
      <ul>
        <li>
          <b>HTML (Hypertext Markup Language)</b> <code>format: *.html</code>{" "}
          sebagai kerangka dalam pembuatan elemen seperti judul, tulisan,
          gambar, link, tombol, dan sebagainya
        </li>
        <li>
          <b>CSS (Cascading Style Sheets)</b>
          <code>format: *.css</code> sebagai style untuk memberikan gaya
          terhadap elemen dari HTML seperti font-size, warna, font, margin,
          padding dan sebagainya
        </li>
        <li>
          <b>Javascript</b> <code>format: *.js</code>sebagai logika untuk
          membuat website lebih interaktif, dinamis, menambah fungsionalitas
        </li>
      </ul>
      <Image
        src="/frontend/2.png"
        alt="2.png"
        width={1600}
        height={900}
        className="object-cover object-top rounded"
      />
      <h2>HTML</h2>
      <h3>Komentar</h3>
      <pre>
        <code>{`<!-- Ini adalah komentar -->`}</code>
      </pre>
      <p>
        Dengan tulisan apapun yang dibungkus diantara{" "}
        <code>{`<!-- ... -->`}</code> itu tidak akan dijalankan oleh program
        alias untuk pemberi informasi saja atau komentar agar mengerti maksud
        dari kodenya.
      </p>
      <h3>Tag</h3>
      <p>
        Sebenarnya ada banyak sekali tag pada html yang fungsinya berbeda-beda{" "}
        <a href="https://www.w3schools.com/tags/">Daftar tag</a>. Tapi ada dua
        jenis tag dalam html atau bisa juga disebut elemen yang perlu kalian
        ketahui:
      </p>
      <ul>
        <li>
          <h4>Pair</h4>
          <pre>
            <code>{`<tag>konten</tag>`}</code>
          </pre>
          <ul>
            <li>
              <code>{`<h1>Ini adalah judul</h1>`}</code>
            </li>
            <li>
              <code>{`<p>Ini dalah paragraf</p>`}</code>
            </li>
            <li>
              <code>{`<li>Ini adalah list</li>`}</code> dan masih banyak lagi
            </li>
          </ul>
        </li>
        <li>
          <h4>Self-closing</h4>
          <pre>
            <code>{`<tag />`}</code>
          </pre>
          <ul>
            <li>
              <code>{`<img />`}</code> untuk gambar
            </li>
            <li>
              <code>{`<div />`}</code> untuk pembungkus/container
            </li>
            <li>
              <code>{`<br />`}</code> untuk line break, dan masih banyak lagi
            </li>
          </ul>
        </li>
      </ul>
      <h3>Atribut</h3>
      <p>
        Atribut adalah konfigurasi atau opsi yang bisa kalian gabungkan dengan
        elemen atau tag. Seperti contoh disini ada atribut <b>src</b>,{" "}
        <b>style</b> dan masih banyak lagi.{" "}
        <a href="https://www.w3schools.com/tags/ref_attributes.asp">
          Daftar atribut
        </a>
      </p>
      <ul>
        <li>
          <code>{`<img src="my-picture.jpg"/>`}</code>
        </li>
        <li>
          <code>{`<h1 style="text-align: center;">Selamat datang!</h1>`}</code>
        </li>
      </ul>
      <h3>Struktur HTML</h3>
      <pre>
        <code>{`<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Personal Portfolio</title> <!-- Judul web di tab browser -->
	</head>
	<body>
		<!-- Tempat menulis elemen"nya -->
	</body>
</html>
`}</code>
      </pre>
      <p>
        Ini adalah kode wajib yang harus ditulis untuk memulainya. Di VSCode
        bisa generate kode ini dengan shortcut <code>! + Tab/Enter</code>.
        Struktur ini mencangkup judul website, metadata, dan <b>body</b> dimana
        kita menulis kontennya.
      </p>
      <h2>CSS</h2>
      <p>
        Udah bosen ngga nih cuman nulis elemen doang ngga di hias wkwk. Nah
        saatnya kita mengdekorasi elemen tersebut dengan teknologi CSS. Eh, tapi
        ada 3 cara untuk kalian bisa melakukannya: <br />
        <i>(cara ke-2 yang dianjurkan)</i>
      </p>
      <ul>
        <li>
          <h4>Atribut CSS</h4>
          <p>
            Haha, ini cara paling gampang sih cuma ngga recommended karna ini
            bakal ngerusak html kalian kalau stylenya ribet dan elemennya nanti
            juga banyak.
          </p>
          <pre>
            <code>{`<h1 style="text-align: center">Selamat datang!</h1>`}</code>
          </pre>
        </li>
        <li>
          <h4>Eksternal CSS</h4>
          <p>
            Bisa dilihat kalian harus <b>buat file css baru </b> dengan cara
            yang sama seperti membuat html sebelunya misal namanya{" "}
            <code>style.css</code>. Lalu, import cssnya ingat untuk sesuaikan
            atribut hrefnya dengan nama file kalian.
          </p>
          <p>
            <b>Penting:</b> Langkah selanjutnya adalah mendefinisikan nama style
            terserah kalian misalnya <code>header</code> sebagai penanda di file
            cssnya nanti didalam atribut kelas pada elemen yang kalian mau
            styling.
          </p>
          <pre>
            <code>{`index.html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Personal Portfolio</title>
		<link rel="stylesheet" href="style.css" /> <!-- import file css dari html -->
	</head>
	<body>
		<h1 class="header"></h1> <!-- Definisikan nama style dalam atribut class -->
	</body>
</html>
`}</code>
          </pre>
          <p>
            Pada file css, ini adalah format penulisannya dengan nama kelas yang
            kalian definisikan tadi diawali dengan titik yang artinya kelas lalu
            bebaslah berkreasi dengan properti seperti <code>text-align</code>{" "}
            dan masih banyak lagi didalam kurung kurawal.{" "}
            <a href="https://www.w3schools.com/cssref/index.php">
              Daftar properti CSS
            </a>
          </p>
          <pre>
            <code>
              {`style.css
.header {
	text-align: center;
}
`}
            </code>
          </pre>
        </li>
        <li>
          <h4>Internal CSS</h4>
          <p>
            Mirip dengan metode Eksternal CSS tapi ngga rekomen juga karna
            enakan terpisah ngga sih lebih teratur gitu. Jadi caranya tinggal
            buat tag style di setelah tag title dan tulis kode CSSnya.
          </p>
          <pre>
            <code>
              {`<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Document</title>
		<style> <!-- Buat tag style disini lalu tulis kode CSS seperti metode eksternal -->
			.header {
				text-align: center;
			}
		</style>
	</head>
	<body>
		<h1 class="header"></h1>
	</body>
</html>
`}
            </code>
          </pre>
        </li>
      </ul>
      <h2>Javascript</h2>
      <p>
        Perlu diperhatikan, disini kita belajar fundamental konsep bahasa
        pemogramannya dulu ya karena ini agak laen dan rumit dibanding HTML dan
        CSS. Jangan khawatir, yok kita ke page selanjutnya!
      </p>
      <h2>Uji Pemahaman</h2>
      <p>
        Mari kita uji seberapa paham kamu akan materi ini, good luck semoga
        benar semua yaa!
      </p>

      <div className="flex justify-end items-center">
        <Button>
          <Link
            href={navItems[1].items[1].url}
            className="no-underline flex items-center gap-2 text-white">
            {navItems[1].items[1].title} <ChevronRight />
          </Link>
        </Button>
      </div>
    </main>
  );
}
