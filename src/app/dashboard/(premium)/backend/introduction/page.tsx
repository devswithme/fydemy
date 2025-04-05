import { navItems } from '@/constants/constant';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Backend Introduction',
  description:
    'Setelah kalian belajar basic frontend dengan HTML CSS dan JS. Pernah penasaran kah sama cara kerja website Tokopedia,',
};

export default function Home() {
  return (
    <main className='max-w-3xl mx-auto prose'>
      <h1>Dapur</h1>
      <p>
        Setelah kalian belajar basic frontend dengan HTML CSS dan JS. Pernah penasaran kah sama cara
        kerja website Tokopedia, Instagram, Tiktok, dll. Ribet kan? Masa dengan ilmu frontend aja
        bisa? Iya bisa sih cuma jadi statis doang kita ngga bisa lihat tuh updatean story, post
        orang misalnya wkwk.
      </p>
      <p>
        Disini mungkin agak ngebosenin karna kita bekerja dengan database, data, logika dan API.
        Disini juga pemahaman pemograman kamu diuji!
      </p>
      <p>
        Backend itu ibaratkan dapur yang bekerja untuk membuat makanan yang akan diatarkan oleh
        waiters (API) ke konsumen (frontend).
      </p>
      <p>Itu sih konsepnya, nah biar lebih paham yok kita langsung praktek aja, ngga sabar kan?</p>
      <h2>Backend</h2>
      <p>
        Disinilah kumpulan logika pemograman ada, disini kita pakai Javascript ya btw. Backend ini
        mencangkup database, routing API, logika, dll.
      </p>

      <h3>Database</h3>
      <p>
        Pernah ngebayangin ngga web kaya Instagram nyimpan data user, postingan dimana? Di excel,
        word, notepad? Wkwk bisa aja sih tapi masa iya? Nah, ada yang namanya database kaya tabel
        gitu, ada yang jenis relational dan non relational.
      </p>
      <ul>
        <li>
          Relational itu kita harus nentuin nama, tipe data kolom alias strukturnya, contoh: MySQL,
          PostgreSQL, dll.
        </li>
        <li>
          Non relational itu kita ngga perlu definisi eksplisit apa apa langsung aja insert data
          tanpa struktur dan biasanya berbasis objek, contoh kaya MongoDB salah satunya.
        </li>
      </ul>
      <h3>Setup database</h3>
      <ul>
        <li>
          Download XAMPP <a href='https://www.apachefriends.org/'>Disini</a>. Lalu, run dan
          next-next aja biarkan di setingan defaultnya.
        </li>
        <li>
          Setelah terinstall sepenuhnya, buka appnya dan klik{' '}
          <code className='language-js'>start</code> pada baris <b>Apache</b> dan <b>MySQL</b>
          .
          <Image
            src='/backend/3.png'
            alt='3.png'
            width={1600}
            height={900}
            className='object-cover object-top rounded'
          />
        </li>
        <li>
          Setelah itu buka url <code className='language-js'>localhost/phpmyadmin</code> di browser,
          lalu buat database baru dengan cara klik <b>New</b> pada sidebar dan ketik nama
          databasenya lalu klik tombol <b>Create</b>.
          <Image
            src='/backend/4.jpg'
            alt='4.png'
            width={1600}
            height={900}
            className='object-cover object-top rounded'
          />
        </li>
      </ul>
      <h3>Routing API</h3>
      <p>
        Aplikasi yang kompleks biasanya terdiri dari banyak fungsionalitas seperti Instagram
        misalnya. Ada fitur upload, edit, delete, melihat postingan, melihat profil ataupun
        algoritmanya. Nah kita pecah pecah fitur itu menjadi route atau rute, sebagai contoh:
      </p>
      <ul>
        <li>
          Method GET: <code className='language-js'>{`/posts`}</code> untuk melihat post
        </li>
        <li>
          Method PUT: <code className='language-js'>{`/posts/{postId}`}</code> untuk mengupdate
          postingan berdasarkan idnya
        </li>
      </ul>
      <h3>Eksekusi?</h3>
      <p>
        Sebelumnya install <a href='https://nodejs.org/en/download'>Node.js</a> dulu yaa. Kita
        disini pakai <b>Express.js</b> sebagai library untuk handle API nya dan <b>Prisma</b> untuk
        handle databasenya.
      </p>

      <div className='bg-white w-full border-t fixed right-0 md:pl-64 bottom-0 py-5'>
        <div className='flex justify-between items-center max-w-3xl mx-auto px-5 lg:px-0'>
          <Link href={navItems[2].items[1].url} className='invisible'>
            <ChevronLeft />
          </Link>
          <span className='font-semibold'>{navItems[2].items[0].title}</span>
          <Link href={navItems[2].items[1].url}>
            <ChevronRight />
          </Link>
        </div>
      </div>
    </main>
  );
}
