import { navItems } from "@/constants/constant";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Backend Syntax",
  description:
    "Hah? NPM itu apa? pas kalian install node.js, NPM (Node Package Manager) ini juga terinstall sebagai package managernya.",
};

export default function Home() {
  return (
    <>
      <h1>Node.js</h1>
      <p>Setelah terinstall buat folder baru dan buka terminal</p>
      <pre>
        <code className="language-js">{`npm init -y`}</code>
      </pre>
      <p>
        Hah? NPM itu apa? pas kalian install node.js, NPM (Node Package Manager)
        ini juga terinstall sebagai package managernya. Kalian mau lihat semua
        package-package yang tersedia? <a href="https://npmjs.com">NPM</a>.
        Disana banyak kumpulan library yang bisa kalian pakai di projekan
        kalian. Nah balik lagi, perintah diatas bertujuan untuk{" "}
        <b>menginisiliasi</b> projek kalian dan akan mengcreate file{" "}
        <code className="language-js">package.json</code>. Flag{" "}
        <code className="language-js">-y</code> bertujuan untuk set
        konfigurasinya secara default.
      </p>
      <h2>Fundamental</h2>
      <h3>Penginstallan library</h3>
      <p>
        Nah, selanjutnya cara install packagenya dengan perintah berikut:{" "}
        <code className="language-js">{`npm install [nama librarynya, bisa cek di npmjs.com]`}</code>
      </p>
      <pre>
        <code className="language-js">{`npm install express`}</code>
      </pre>
      <p>
        Untuk package tertentu sepeti{" "}
        <code className="language-js">prisma</code>, kita hanya butuh pada saat{" "}
        <b>fase development</b> aja jadi kita gunakan flag{" "}
        <code className="language-js">--save-dev</code> untuk menginstallnya
        sebagai dev depedencies.
      </p>
      <pre>
        <code className="language-js">{`npm install prisma --save-dev`}</code>
      </pre>
      <p>
        Kalian bisa juga install package secara global dengan flag{" "}
        <code className="language-js">-g</code>. Jadi bisa dijalankan di
        terminal seperti ini.
      </p>
      <pre>
        <code className="language-js">{`npm install -g nodemon`}</code>
      </pre>
      <pre>
        <code className="language-js">{`nodemon namafile.js`}</code>
      </pre>
      <p>
        Nah, bisa dilihat pada berkas{" "}
        <code className="language-js">package.json</code>, properti name secara
        default adalah nama folder kita dan package <b>express</b> berada pada
        properti <code className="language-js">dependencies</code> dan prisma
        pada properti <code className="language-js">devDependencies</code>.
      </p>
      <pre>
        <code className="language-js">{`package.json
{
	"name": "academy",
	"version": "1.0.0",
	"main": "index.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"description": "",
	"dependencies": {
		"express": "^4.21.2"
	},
	"devDependencies": {
		"prisma": "^6.2.0"
	}
}
`}</code>
      </pre>
      <h3>Ekspor & Impor</h3>
      <ul>
        <li>
          <h4>Default</h4>
          <p>
            <b>[Export]</b> Biasanya digunakan untuk export user-defined
            function atau variabel alias yang dibuat sendiri.
          </p>
          <pre>
            <code className="language-js">{`const age = 10
module.exports = age`}</code>
          </pre>
          <p>
            <b>[Import]</b> Dengan kita menginstall library express dan punya
            file yang berisi module exports terpisah seperti contoh diatas,
            berikut contohnya:
          </p>
          <pre>
            <code className="language-js">{`const express = require('express')
const age = require('namafile')`}</code>
          </pre>
        </li>
      </ul>
      <h3>Menjalankan program</h3>
      <ul>
        <li>
          <h4>Cara biasa</h4>
          <pre>
            <code className="language-js">{`node namafile.js`}</code>
          </pre>
        </li>
        <li>
          <h4>Menggunakan script di package.json</h4>
          <p>
            Pada properti scripts, tambahkan perintah{" "}
            <code className="language-js">start</code> misalnya bebas, lalu
            perintahnya seperti yang di atas.
          </p>
          <pre>
            <code className="language-js">{`package.json
{
  "name": "academy",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node namefile.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
`}</code>
          </pre>
        </li>
        <li>
          <h4>Menggunakan package nodemon nya</h4>
          <p>
            Kalau kita pakai perintah yang diatas setiap kali filenya berubah
            atau kita mau lihat output perubahannya, kita harus menjalankan kode
            yang sama berulang kali, makanya disini kita bisa pakai nodemon yang
            telah kita install tadi.
          </p>
          <blockquote>
            Kalian bisa modifikasi scripts di package.jsonnya juga ya dengan
            perintah ini kalau mau pakai custom commandnya.
          </blockquote>
          <pre>
            <code className="language-js">{`nodemon namafile.js`}</code>
          </pre>
        </li>
      </ul>
      <h3>.env</h3>
      <p>
        Ini adalah salah satu file terpenting kedepannya untuk menyimpan
        variabel yang rahasia. Jadi nilai ini akan disimpan nantinya di server
        bukan di kodenya jadi ngga bakal kebobol alias aman, seperti menyimpan
        koneksi url database, port, dll.
      </p>
      <pre>
        <code className="language-js">{`npm i dotenv`}</code>
      </pre>
      <pre>
        <code className="language-js">{`.env
DB_PASSWORD=admin_123`}</code>
      </pre>
      <pre>
        <code className="language-js">{`index.js
const dotenv = require('dotenv')
dotenv.config()

console.log(process.env.DB_PASSWORD)
`}</code>
      </pre>
      <p>
        Install dulu librarynya agar kita bisa gunakan atau import nilainya.
        Nah, format penulisannya seperti contoh di atas ya (menggunakan kapital
        semua) = (nilainya).
      </p>
      <p>
        Di file yang dibutuhkan misalnya{" "}
        <code className="language-js">index.js</code>, dengan library{" "}
        <code className="language-js">dotenv</code>, kita bisa require dan
        inisiliasi dengan perintah{" "}
        <code className="language-js">dotenv.config()</code> baru kita panggil
        dengan awalan <code className="language-js">process.env</code> lalu nama
        variabelnya.
      </p>

      <div className="bg-muted w-full border-t fixed right-0 md:pl-64 bottom-0 py-4">
        <div className="flex justify-between items-center max-w-3xl mx-auto px-5 lg:px-0">
          <Link href={navItems[2].items[0].url}>
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <span className="font-semibold">{navItems[2].items[1].title}</span>
          <Link href={navItems[2].items[2].url}>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
