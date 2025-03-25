import { Button } from '@/components/ui/button';
import { navItems } from '@/constants';
import { ChevronRight } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Fullstack Hooks',
  description:
    'Haii adik-adik Fysite! 🍼 Hari ini kita akan belajar tentang  State, useState, dan useEffect di React. Waaah, ini penting banget kalau mau bikin aplikasi React yang interaktif! Yuk, kita mulai! 🚀',
};

export default function ApiReference() {
  return (
    <main className='max-w-3xl mx-auto prose'>
      <h1>📢 State, useState, dan useEffect di React!</h1>
      <p>
        Haii adik-adik Fysite! 🍼 Hari ini kita akan belajar tentang State, useState, dan useEffect
        di React. Waaah, ini penting banget kalau mau bikin aplikasi React yang interaktif! Yuk,
        kita mulai! 🚀
      </p>
      <h2>1️⃣ Apa Itu State?</h2>
      <p>
        <b>State</b> itu kayak <b>mood bayi!</b> 😆 Bayi bisa
        <b>senang</b>, <b>sedih</b>, atau <b>ngantuk</b>, dan mood-nya bisa berubah! Nah, di React,{' '}
        <b>state</b> juga bisa berubah!
      </p>
      <p>
        Bayangkan kita punya <b>lampu mainan bayi</b> 💡.
      </p>
      <ul>
        <li>
          Kalau ditekan, lampunya <b>nyala</b>!
        </li>
        <li>
          Kalau ditekan lagi, lampunya <b>mati</b>!
        </li>
      </ul>
      <p>
        <b>💡 Lampu ini punya STATE!</b>
      </p>
      <ul>
        <li>
          <b>Nyala (ON)</b>
        </li>
        <li>
          <b>Mati (OFF)</b>
        </li>
      </ul>
      <p>
        State ini penting karena aplikasi kita harus <b>berubah secara langsung</b>, tergantung aksi
        user!
      </p>
      <h2>2️⃣ Gunakan useState untuk Mengubah State!</h2>
      <p>
        React punya <b>useState</b>, biar kita bisa <b>menyimpan</b> dan <b>mengubah state</b>!
      </p>
      <h3>📌 Contoh 1: Tombol Lampu Nyala/Mati</h3>
      <pre>
        <code className='language-js'>{`import {useState} from "react";

function Lampu(){
    const [nyala, setNyala] = useState(false); // Awalnya lampu mati

    return (
        <div>
            <h2>Lampu: {nyala ? "💡 NYALA" : "🌑 MATI"}</h2>
            <button onClick={() => setNyala(!nyala)}>Tekan!</button>
        </div>
    );
}`}</code>
      </pre>
      <p>
        <b>📌 Penjelasan:</b>
      </p>
      <ul>
        <li>
          ✅ <code className='language-js'>useState(false)</code> artinya <b>lampu awalnya mati</b>
        </li>
        <li>
          ✅ <code className='language-js'>setNyala(!nyala)</code> buat <b>mengubah state lampu</b>
          setiap tombol ditekan
        </li>
      </ul>
      <p>
        <b>⚡️ Kalau kita tekan tombol, lampunya bakal nyala atau mati!</b>
      </p>
      <h3>📌 Contoh 2: Hitung Botol Susu 🍼</h3>
      <pre>
        <code className='language-js'>{`import {useState} from "react";

function BotolSusu(){
    const [jumlah, setJumlah] = useState(5); // Awalnya ada 5 botol susu

    return (
        <div>
            <h2>Jumlah botol susu: {jumlah} 🍼</h2>
            <button onClick={() => setJumlah(jumlah - 1)}>Minum Susu</button>
        </div>
    );
}`}</code>
      </pre>
      <p>
        <b>📌 Penjelasan:</b>
      </p>
      <ul>
        <li>
          ✅ <code className='language-js'>useState(5)</code> artinya state awalnya 5 botol susu
        </li>
        <li>
          ✅ <code className='language-js'>setJumlah(jumlah - 1)</code> buat mengurangi jumlah botol
          saat tombol ditekan
        </li>
      </ul>
      <p>
        <b>🍼 Kalau kita tekan tombol, botol susu akan berkurang satu per satu!</b>
      </p>
      <h2>3️⃣ Apa Itu useEffect?</h2>
      <p>
        useEffect itu kayak alarm bayi! ⏰ Kalau ada perubahan mood bayi (state), mama harus
        bereaksi!
      </p>
      <p>💡 useEffect dipakai kalau kita ingin React melakukan sesuatu setelah state berubah!</p>
      <p>Misalnya:</p>
      <ul>
        <li>✅ Tampilkan pesan kalau susu habis</li>
        <li>✅ Update judul halaman kalau ada perubahan data</li>
        <li>✅ Panggil API untuk mengambil data terbaru</li>
      </ul>
      <h3>📌 Contoh 1: Alarm Saat Susu Habis 🚨</h3>
      <pre>
        <code className='language-js'>{`import {useState, useEffect} from "react";

function BotolSusu(){
    const [jumlah, setJumlah] = useState(5);

    useEffect(() => {
        if (jumlah === 0){
            alert("Susu habis! 🍼🚨")
        }
    }, [jumlah]);

    return (
        <div>
            <h2>Jumlah botol susu: {jumlah} 🍼</h2>
            <button onClick={() => setJumlah(jumlah - 1)}>Minum Susu</button>
        </div>
    );
}`}</code>
      </pre>
      <p>
        <b>📌 Penjelasan:</b>
      </p>
      <ul>
        <li>
          ✅{' '}
          <code className='language-js'>{`useEffect(() => { alert("Susu habis!"); }, [jumlah]);`}</code>{' '}
          akan jalan kalau jumlah berubah
        </li>
        <li>✅ Kalau jumlah jadi 0, muncul peringatan 🚨</li>
      </ul>
      <p>
        <b>🥛 Jadi kalau botol susunya habis, ada alarm!</b>
      </p>
      <h3>📌 Contoh 2: Update Judul Halaman Saat State Berubah</h3>
      <pre>
        <code className='language-js'>{`import {useState, useEffect} from "react";

function Halaman(){
    const [judul, setJudul] = useState("Halo, Dunia!");

    useEffect(() => {
        document.title = judul; // Ubah judul halaman browser
    }, [judul]);

    return (
        <div>
            <h2>Judul Halaman: {judul}</h2>
            <button onClick={() => setJudul("Judul Baru!")}>Ubah Judul</button>
        </div>
    );
}`}</code>
      </pre>
      <p>
        <b>📌 Penjelasan:</b>
      </p>
      <ul>
        <li>
          ✅ Setiap kali <code className='language-js'>judul</code> berubah, judul di browser juga
          berubah!
        </li>
      </ul>
      <h2>4️⃣ Kapan Menggunakan useEffect?</h2>
      <p>
        💡 Gunakan <b>useEffect</b> kalau kita mau:
      </p>
      <ul>
        <li>✅ Menjalankan kode saat komponen pertama kali muncul</li>
        <li>✅ Menjalankan kode saat state berubah</li>
        <li>✅ Membersihkan sesuatu sebelum komponen hilang (unmount)</li>
      </ul>
      <p>📝 Contoh lain di dunia nyata:</p>
      <ul>
        <li>
          <b>Cek baterai HP 📱</b> → {`"Baterai kamu tinggal 10%!"`}
        </li>
        <li>
          <b>Cek notifikasi chat 💬</b> → {`"Kamu punya 3 pesan baru!"`}
        </li>
        <li>
          <b>Ambil data dari server 🌐</b> → Tampilkan daftar produk terbaru
        </li>
      </ul>
      <h2>5️⃣ Kesimpulan 🎉</h2>
      <ul>
        <li>
          ✅ <b>State</b> = Mood bayi yang bisa berubah 😆
        </li>
        <li>
          ✅ <b>useState</b> = Alat buat ubah mood bayi (state) 🍼
        </li>
        <li>
          ✅ <b>useEffect</b> = Alarm kalau ada perubahan penting! 🚨
        </li>
        <li>
          ✅ useEffect bisa dipakai untuk:
          <ul>
            <li>
              Menjalankan efek samping saat <b>state berubah</b>
            </li>
            <li>Mengupdate sesuatu (misalnya judul halaman)</li>
            <li>
              Menjalankan kode hanya <b>sekali</b> saat komponen muncul
            </li>
          </ul>
        </li>
      </ul>
      <p>🎈 Sekian materi kita hari ini! Semoga belajar React jadi lebih seruuu! 🥳</p>

      <div className='bg-white w-full fixed right-0 xl:left-32 bottom-0 py-6 xl:px-[22rem] px-5'>
        <div className='flex justify-end items-center'>
          <Button>
            <Link
              href={navItems[3].items[7].url}
              className='no-underline flex items-center gap-2 text-white'>
              {navItems[3].items[7].title} <ChevronRight />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
