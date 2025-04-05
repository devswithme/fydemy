import { navItems } from '@/constants/constant';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'UI/UX Introduction',
  description: 'Jadi, Apa itu UI & UX Design?',
};

export default function ApiReference() {
  return (
    <main className='max-w-3xl mx-auto prose'>
      <h1>Selamat datang, designer!</h1>
      <h2>Jadi, Apa itu UI & UX Design?</h2>
      <p>
        UI & UX Design merupakan proses merancang interaksi dan pengalaman bagi pengguna pada sebuah
        produk (seperti aplikasi & website). Proses ini dilakukan sejak tahap riset, eksekusi desain
        hingga pengujian.
      </p>
      <Image
        src='/uiux/6.png'
        alt='6.png'
        width={1600}
        height={900}
        className='w-full sm:w-1/2 object-cover object-top rounded'
      />
      <h2>Lalu, Apa itu UX?</h2>
      <p>
        User Experience adalah bagaimana perasaan dan pengalaman pengguna/user ketika menggunakan
        suatu produk (website/aplikasi) UX akan berfokus pada rancangan flow dan interaksi antara
        user dengan device dan software, seperti website dan aplikasi.{' '}
        <b>UX adalah soal bagaimana aplikasi digunakan</b>.
      </p>
      <h2>Sedangkan UI Design</h2>
      <p>
        User Interface adalah bagian visual atau tampilan pada sebuah web/aplikasi mulai dari warna,
        icon, layout desain, font yang digunakan, dan sebagainya. Dengan desain tampilan yang baik,
        diharapkan bisa membantu User untuk menggunakan produk dengan optimal.{' '}
        <b>UI mencakup konsep desain visual</b>.
      </p>

      <div className='bg-white w-full border-t fixed right-0 md:pl-64 bottom-0 py-5'>
        <div className='flex justify-between items-center max-w-3xl mx-auto px-5 lg:px-0'>
          <Link href={navItems[0].items[0].url}>
            <ChevronLeft />
          </Link>
          <span className='font-semibold'>{navItems[0].items[1].title}</span>
          <Link href={navItems[0].items[2].url}>
            <ChevronRight />
          </Link>
        </div>
      </div>
    </main>
  );
}
