import { navItems } from "@/constants/constant";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Backend Implementation",
  description:
    "Ada sebuah perpustakaan yang ngga up-to-date nih. Kalian tiba-tiba punya ide untuk merancang sebuah web app",
};

export default function Home() {
  return (
    <>
      <h1>Library</h1>
      <p>
        Ada sebuah perpustakaan yang ngga up-to-date nih. Kalian tiba-tiba punya
        ide untuk merancang sebuah web app supaya pendataan peminjaman buku
        dilakukan otomatis dan digital. Yaa.. walau bisa pakai google
        spreadsheet wkwk. Tapi..
      </p>
      <p>
        Kita bisa buat yang lebih simple, minimalis dalam artian fitur yang ada
        dibuat seadanya sesuai keperluan, kalau di spreadsheet kan banyak banget
        tuh menu-menu yang kompleks dan mungkin ngga dibutuhkan. Penasaran cara
        buatnya? Gass simak ya!
      </p>

      <h2>Pemahaman awal</h2>
      <p>
        Ini adalah lanjutan dari modul{" "}
        <code className="language-js">syntax</code> sebelumnya, pastikan kalian
        sudah setup seperti menginstall library nodemon, prisma, express,
        dotenv. Nah, ini adalah struktur workflownya untuk program API kita!
      </p>
      <Image
        src="/backend/1.png"
        alt="1.png"
        width={1600}
        height={900}
        className="object-cover object-top rounded"
      />
      <h2>Sudah siapp?</h2>
      <h3>Setup express</h3>
      <p>
        Buat file baru misalnya bernama{" "}
        <code className="language-js">index.js</code> dan juga environment
        variabelnya yang harus bernama <code className="language-js">.env</code>{" "}
        di struktur/level folder yang sama misalnya namanya{" "}
        <code className="language-js">library</code>
      </p>
      <pre>
        <code className="language-js">{`library
├── node_modules
├── index.js
├── package.json
└── package-lock.json
└── .env
`}</code>
      </pre>
      <pre>
        <code className="language-js">{`.env
APP_PORT=3000`}</code>
      </pre>
      <pre>
        <code className="language-js">{`index.js
const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

app.listen(process.env.APP_PORT, () => {
    console.log('server sedang berjalan..)
})
`}</code>
      </pre>
      <pre>
        <code className="language-js">{`nodemon index.js atau nodemon .`}</code>
      </pre>
      <p>
        Dengan begitu, kalian bisa buka browser dengan mengetik url{" "}
        <code className="language-js">localhost:3000</code>. Tidak ada yang
        terjadi namun url tersebut bisa diakses karena kita belum menulis output
        apa-apa ke route tersebut.
      </p>
      <pre>
        <code className="language-js">{`index.js
app.get('/', (req, res) => {
	res.send('Hello World')
})           `}</code>
      </pre>
      <p>
        Disini kita kasih tau ke expressnya kala route{" "}
        <code className="language-js">/</code> atau utamanya, kita mau
        konfigurasi dan dia punya dua parameter bawaan yaitu req (request) dan
        res (respond). Karena kita mau display output maka kita pakai respond.
        Nah, bisa dilihat ke browser kembali, ada tulisan Hello World!. Hahha
        kok lebih ribet dari html wkw? Tenang aja, kita lihat nanti
        kelebihannya.
      </p>
      <h3>Setup prisma</h3>
      <p>
        Library ini gunanya untuk berinteraksi dengan database dengan aman dan
        simple terintegrasi ke dalam project kita. Pertama, run command ini di
        terminal anda.
      </p>
      <pre>
        <code className="language-js">{`npx prisma init`}</code>
      </pre>
      <p>
        Tiba tiba ada folder dan file baru, terlihat juga .envnya berubah, hah
        kena hack kah? ngga bercanda wkwk. Ini adalah setup awal prisma.
        Sebelumnya agar mudah, install extension prisma di VsCode kalian agar
        ada syntax highlighting dan autocomplete dari file .prisma ya
      </p>
      <Image
        src="/backend/2.png"
        alt="2.png"
        width={1600}
        height={900}
        className="object-cover object-top rounded bg-neutral-300"
      />
      <p>
        Nah, setelah ini kita mau buat struktur database atau disebut{" "}
        <b>Schema</b>. Ini adalah syntax dari Prisma sendiri, bisa dicek
        dokumentasinya <a href="https://www.prisma.io/">Disini</a> untuk
        pengertian lengkapnya!. Lihat! sekarang ada <b>Syntax Highlighting</b>{" "}
        dan <b>Auto Complete</b>!
      </p>
      <Image
        src="/backend/5.png"
        alt="5.png"
        width={1600}
        height={900}
        className="object-cover object-top rounded bg-neutral-300"
      />
      <ul>
        <li>
          Kita ubah provider dalam objek datasouce db menjadi <b>mysql</b> ya
          yang sebelumnya adalah postgresql .
        </li>
        <li>
          Kita buat table bernama <code className="language-js">Books</code>{" "}
          yang berstruktur id, nama, dan peminjamnya dengan tipe masing-masing.
        </li>
        <li>
          Kita buat namanya unik agar menghindari data buku yang duplikat yang
          dicek dari namanya.
        </li>
        <li>
          <code className="language-js">uuid()</code>adalah nilai default id
          berupa random string agar setiap elemen data itu unik!
        </li>
      </ul>
      <p>
        Ini adalah <code className="language-js">.env</code> yang tergenerate.
        Ubah nilai databasenya ya menjadi seperti ini. Ini adalah nilai default
        ketika kalian belum buat user baru di database!. Ubah{" "}
        <code className="language-js">[nama db kalian]</code> menjadi nama
        database yang telah dibuat sebelumnya ya di phpmyadmin.
      </p>
      <pre>
        <code className="language-js">
          {`APP_PORT=3001
DATABASE_URL="mysql://root:@localhost:3306/[nama db kalian]?schema=public"`}
        </code>
      </pre>
      <p>
        Sebelumnya, ada satu library namanya{" "}
        <code className="language-js">@prisma/client</code> yang harus diinstall
        untuk kita berinteraksi dengan database di client ya alias file js kita
        itu.
      </p>
      <pre>
        <code className="language-js">npm i @prisma/client</code>
      </pre>
      <p>
        Sekarang waktunya kita menyimpan perubahan ini ke dalam database kita!
        Dengan Prisma, kita bisa dengan mudah mengenerate autocomplete dari{" "}
        <code className="language-js">@prisma/client</code> dan migrate hanya
        dengan perintah ini.
      </p>
      <pre>
        <code className="language-js">{`npx prisma generate
npx prisma db push`}</code>
      </pre>
      <Image
        src="/backend/8.png"
        alt="8.png"
        width={1600}
        height={900}
        className="object-cover object-top rounded bg-neutral-300"
      />
      <h2>Ayo kita mulai!</h2>
      <p>
        Dalam API, biasanya ada fungsionalitas CRUD (Create, Read, Update,
        Delete) yang terbagi routenya berdasarkan keperluan, seperti contoh ini.
      </p>
      <Image
        src="/backend/6.png"
        alt="6.png"
        width={1600}
        height={900}
        className="object-cover object-top rounded bg-neutral-300"
      />
      <ul>
        <li>
          <code className="language-js">http://localhost:3000/books</code> rute
          kita untuk method <b>GET</b>
        </li>
        <li>
          <code className="language-js">http://localhost:3000/books</code> rute
          kita untuk method <b>POST</b> alias tambah data
        </li>
        <li>
          <code className="language-js">http://localhost:3000/books/123</code>{" "}
          rute kita untuk method <b>PUT</b>. Perhatikan!, untuk{" "}
          <code className="language-js">123</code> ini akan secara dinamis
          berubah tergantung id bukunya sebagai identifier buku mana yang mau
          diubah.
        </li>
        <li>
          <code className="language-js">http://localhost:3000/books/123</code>{" "}
          rute kita untuk method <b>DELETE</b>. Sama seperti PUT, kita
          membutuhkan parameter id di urlnya untuk sebagai identifier buku mana
          yang mau dihapus.
        </li>
      </ul>
      <h3>Pengujian API</h3>
      <p>
        Kita bisa pakai ekstensi yang ringan dari VScode yaitu{" "}
        <b>Thunder Client</b> untuk mengetes API kita nanti setelah jadi.
      </p>
      <Image
        src="/backend/7.png"
        alt="7.png"
        width={1600}
        height={900}
        className="object-cover object-top rounded bg-neutral-300"
      />
      <h3>Udah ngga sabar ngoding?</h3>
      <h4>
        GET <code className="language-js">/books</code>
      </h4>
      <p>
        Fokus kita hanya di file <code className="language-js">index.js</code>{" "}
        ya!
      </p>
      <pre>
        <code className="language-js">{`const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

app.get('/books', async (req, res) => {
	const data = await db.books.findMany()
	res.json(data)
})
`}</code>
      </pre>
      <p>
        Karena kita tadi menjalankan{" "}
        <code className="language-js">npx prisma generate</code>, kita
        dimudahkan untuk berinteraksi dengan database menggunakan{" "}
        <code className="language-js">@prisma/client</code> karena ada
        autocompletenya seperti ini sesuai dengan schema yang telah kita buat!
      </p>
      <Image
        src="/backend/9.png"
        alt="9.png"
        width={1600}
        height={900}
        className="object-cover object-top rounded bg-neutral-300"
      />
      <p>
        Boleh dibuka ekstensi <b>Thunder Client</b> yang ikonnya ada di sidebar,
        dan ketik{" "}
        <code className="language-js">http://localhost:3000/books</code> lalu
        tekan <b>Send</b>. Lihat! outputnya{" "}
        <code className="language-js">[]</code> karena masih kosong, kita belum
        menambah data buku apapun.
      </p>
      <Image
        src="/backend/10.png"
        alt="10.png"
        width={1600}
        height={900}
        className="object-cover object-top rounded bg-neutral-300"
      />
      <h4>
        POST <code className="language-js">/books</code>
      </h4>
      <p>
        Disinilah fungsi <b>req / request</b> parameter digunakan! kita bisa
        mengambil input data request dari url yang akan disimpan ke database.
      </p>
      <p>
        Tambahkan <code className="language-js">app.use(express.json())</code>{" "}
        agar express ini bisa menerima inputan berformat JSON.
      </p>
      <pre>
        <code className="language-js">{`app.use(express.json())

app.post('/books', async (req, res) => {
	const { nama, peminjam } = req.body
	await db.books.create({
		data: { nama, peminjam },
	})
	res.json({message: "Buku telah berhasil di tambahkan!"})
})`}</code>
      </pre>
      <p>
        Ganti methodnya ke <code className="language-js">POST</code>, lalu klik{" "}
        <b>Send</b>. Bisa dilihat pesan yang tadi kita tulis muncul menandakan
        data berhasil ditambahkan!
      </p>
      <Image
        src="/backend/11.png"
        alt="11.png"
        width={1600}
        height={900}
        className="object-cover object-top rounded bg-neutral-300"
      />
      <p>
        Kembali ke method <code className="language-js">GET</code>, bisa
        dilihat! sekarang kita punya buku-buku yang telah ditambahkan
        sebelumnya! dan kolom id telah tergenerate{" "}
        <code className="language-js">uuid()</code> dari schema prisma yang
        telah kita buat sebelumnya.
      </p>
      <Image
        src="/backend/12.png"
        alt="12.png"
        width={1600}
        height={900}
        className="object-cover object-top rounded bg-neutral-300"
      />
      <h4>
        PUT <code className="language-js">/books/id</code>
      </h4>
      <p>
        Nah, disini di urlnya ada tambahan{" "}
        <code className="language-js">{`/books/{id}`}</code> untuk menandakan
        bahwa kita mendefinisikan variabel id dan itu nilainya bakal dinamis
        atau berubah-ubah.
      </p>
      <p>
        Kita bisa ambil nilai id itu dengan <b>req.params</b> seperti{" "}
        <code className="language-js">{`const { id } = req.params`}</code>
      </p>
      <p>
        Nah di dalam query databasenya kita tambahkan{" "}
        <code className="language-js">where</code> untuk menyeleksi bahwa kita
        pastikan id yang sama dengan yang di url itu yang terupdate bukan data
        yang lain.
      </p>
      <pre>
        <code className="language-js">{`app.put('/books/{id}', async (req, res) => {
	const { id } = req.params
	const { nama, peminjam } = req.body
	await db.books.update({
		where: { id },
		data: { nama, peminjam },
	})
	res.json({ message: 'Buku berhasil di update' })
})`}</code>
      </pre>
      <h4>
        DELETE <code className="language-js">/books/id</code>
      </h4>
      <p>
        Kalian bisa coba sendiri yaa, caranya sama dengan <b>PUT</b> hanya saja
        kita ubah di <code className="language-js">db.books.delete()</code>
      </p>
      <h3>Pendinginan</h3>
      <p>
        Gimana nih apa API nya sudah menerapkan CRUD? dan semua fitur books kita
        berjalan dengan lancar? termasuk fungsi <b>Delete</b>?. Di projek
        selanjutnya kita akan menerapkan konsep{" "}
        <code className="language-js">try catch</code> dan melihat detail buku
        berdasarkan id!
      </p>

      <div className="bg-muted w-full border-t fixed right-0 md:pl-64 bottom-0 py-4">
        <div className="flex justify-between items-center max-w-3xl mx-auto px-5 lg:px-0">
          <Link href={navItems[2].items[1].url}>
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <span className="font-semibold">{navItems[2].items[2].title}</span>
          <Link href={navItems[2].items[3].url}>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
