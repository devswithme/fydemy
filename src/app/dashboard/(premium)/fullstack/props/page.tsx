import { navItems } from '@/constants/constant';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Fullstack Props',
  description:
    'Haiii adik-adik Fysite! 👶✨ Hari ini kita mau belajar tentang Props di React! Waaah, apa itu props? Yuk, kita lihat!',
};

export default function ApiReference() {
  return (
    <main className='max-w-3xl mx-auto prose'>
      <h1>Props</h1>
      <h2>Apa itu Props di React?</h2>
      <p>
        Haiii adik-adik Fysite! 👶✨ Hari ini kita mau belajar tentang Props di React! Waaah, apa
        itu props? Yuk, kita lihat!
      </p>
      <h3>Apa itu Props</h3>
      <p>{`Props itu kayak paket kiriman 📦 yang dikirim dari orang tua (komponen induk) ke anak (komponen anak). Jadi, kalau kita punya komponen yang butuh sesuatu dari luar, kita bisa kasih pakai props!
Bayangin gini:
👩 Mama kasih hadiah ke 👶 Bayi. Mama bilang, "Ini hadiah buat kamu, ya!" 🎁 Nah, hadiahnya itu adalah props!
`}</p>
      <h2>Contoh Props di React</h2>
      <p>Coba kita buat contoh, ya!</p>
      <pre>
        <code className='language-js'>{`function Hadiah(props){
    return <h2>Ini hadiah dari Mama: {props.namaHadiah} 🎁</h2>;
}
                
function Mama(){
    return <Hadiah namaHadiah="Boneka Beruang" />;
}`}</code>
      </pre>
      <p>
        <b>📌 Penjelasan:</b>
      </p>
      <ul>
        <li>
          <b>Mama</b> (komponen induk) kasih props{' '}
          <code className='language-js'>{`namaHadiah="Boneka Beruang"`}</code> ke <b>Hadiah</b>
          (komponen anak).
        </li>
        <li>
          <b>Hadiah</b> menerima props itu dan menampilkannya!
        </li>
      </ul>
      <p>
        Jadi hasilnya: <b>{`"Ini hadiah dari Mama: Boneka Beruang 🎁"`}</b>
      </p>
      <h3>Props Itu Tidak Bisa Diubah 🚫</h3>
      <p>
        Props itu kayak paket dari mama, nggak bisa diubah oleh bayi! Jadi kalau komponen anak
        menerima props, dia cuma bisa memakai props itu, bukan mengubahnya.
      </p>
      <h3>Props Bisa Apa Aja!</h3>
      <p>Props bisa dikirim dalam banyak bentuk:</p>
      <ul>
        <li>
          Teks: <code className='language-js'>{`<Hadiah namaHadiah="Mobil Mainan" />`}</code>
        </li>
        <li>
          Angka: <code className='language-js'>{`<Hadiah jumlah=3 />`}</code>
        </li>
        <li>
          Boolean: <code className='language-js'>{`<Hadiah isBaru={true} />`}</code>
        </li>
        <li>
          Objek:{' '}
          <code className='language-js'>{`<Hadiah info={{ nama: "Kue", rasa: "Coklat" }} />`}</code>
        </li>
        <li>
          Fungsi: <code className='language-js'>{`<Hadiah onClick={handleKlik} />`}</code>
        </li>
      </ul>
      <p>Waaaah, props itu keren banget ya! 😍</p>
      <h3>Kesimpulan 🎉</h3>
      <ul>
        <li>✅ Props itu paket kiriman dari komponen induk ke komponen anak.</li>
        <li>✅ Props tidak bisa diubah oleh komponen anak.</li>
        <li>✅ Props bisa berupa teks, angka, objek, fungsi, dll.</li>
      </ul>
      <p>Sekian materi hari ini! Semoga belajar React jadi lebih seruuu! 🎈🥳</p>

      <div className='bg-white w-full border-t fixed right-0 md:pl-64 bottom-0 py-5'>
        <div className='flex justify-between items-center max-w-3xl mx-auto px-5 lg:px-0'>
          <Link href={navItems[3].items[3].url}>
            <ChevronLeft />
          </Link>
          <span className='font-semibold'>{navItems[3].items[4].title}</span>
          <Link href={navItems[3].items[5].url}>
            <ChevronRight />
          </Link>
        </div>
      </div>
    </main>
  );
}
