import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Fullstack Deploy",
  description:
    "Sekarang saatnya kita bawa project ini ke internet biar bisa diakses semua orang! Kita bakal pake Vercel buat deploy, dan caranya gampang banget.",
};

export default function ApiReference() {
  return (
    <>
      <h1>Deployment</h1>
      <h2>Deploy ke Vercel Lewat Website 🚀</h2>
      <p>
        Sekarang saatnya kita bawa project ini ke internet biar bisa diakses
        semua orang! Kita bakal pake Vercel buat deploy, dan caranya gampang
        banget. Ikuti langkah-langkah berikut ya! 🎉
      </p>
      <ul className="list-decimal marker:text-black">
        <li>
          <h4>Buat Akun Vercel</h4>
          <p>
            Kalau kamu belum punya akun Vercel, buka vercel.com dan daftar dulu.
            Tenang aja, daftarnya gampang banget! Kamu bisa langsung login pakai
            akun GitHub, GitLab, atau Bitbucket. Pilih salah satu sesuai yang
            kamu pakai buat menyimpan project kamu. 🎈
          </p>
        </li>
        <li>
          <h4>Hubungkan ke GitHub</h4>
          <p>
            Nah, setelah berhasil login, sekarang kita perlu menghubungkan akun
            GitHub kita ke Vercel supaya bisa deploy project kita dengan mudah!
            🚀
          </p>
          <ul>
            <li>
              <b>Upload project ke GitHub</b> – Pastikan semua kode project
              React Vite kamu sudah ada di dalam repository GitHub.
            </li>
            <li>
              <b>Masuk ke Vercel</b> dan klik tombol{" "}
              <code className="language-js">New Project</code>.
            </li>
            <li>
              <b>Hubungkan akun GitHub kamu</b> ke Vercel. Setelah itu, kamu
              akan melihat daftar repository yang ada di akun GitHub kamu.
            </li>
            <li>
              <b>Pilih repository</b> yang berisi project React Vite yang ingin
              kamu deploy.
            </li>
          </ul>
        </li>
        <li>
          <h4>Konfigurasi Project</h4>
          <p>
            Setelah memilih repository, sekarang kita harus sedikit melakukan
            konfigurasi sebelum deploy. Tenang aja, langkah-langkahnya simpel
            kok! 💡
          </p>
          <ul>
            <li>
              <b>Framework Detection</b>: Vercel bakal otomatis mendeteksi
              framework yang kita gunakan. Pastikan React (Vite) sudah terpilih.
            </li>
            <li>
              <b>Atur Build Command</b>: Di bagian ini, pastikan perintah build
              diisi dengan: npm run build
            </li>
            <li>
              <b>Output Directory</b>: Kita harus memberi tahu Vercel di mana
              hasil build project kita berada. Isi bagian ini dengan: dist
            </li>
            <li>
              Setelah semuanya siap, klik tombol <b>Deploy</b> dan tunggu
              beberapa saat hingga prosesnya selesai! ⏳
            </li>
          </ul>
        </li>
        <li>
          <h4>Cek Link Project!</h4>
          <p>
            Setelah proses deploy selesai, Vercel akan memberikan{" "}
            <b>URL unik</b> yang bisa langsung kamu akses untuk melihat hasil
            kerja kerasmu! 🎉✨
          </p>
          <ul>
            <li>
              <b>Klik link yang diberikan Vercel</b> untuk melihat aplikasi
              React Vite kamu sudah berjalan di internet! 🌍
            </li>
            <li>
              <b>Tes semua fitur</b> untuk memastikan semuanya berjalan dengan
              baik.
            </li>
            <li>
              <b>Bagikan link aplikasi kamu</b> ke teman-teman, biar mereka juga
              bisa lihat hasil karyamu! 🥳
            </li>
          </ul>
          <p>
            Kalau ada perubahan atau perbaikan dalam kode, cukup lakukan{" "}
            <b>push ke GitHub</b>, dan Vercel akan otomatis melakukan deploy
            ulang tanpa kamu harus melakukan apapun lagi! 🔄
          </p>
        </li>
        <li>
          <h4>Tips Tambahan</h4>
          <p>
            Biar project kamu makin keren dan stabil, cek beberapa tips ini:
          </p>
          <ul>
            <li>
              <b>Cek error log</b> langsung di Vercel Dashboard kalau ada
              kendala saat deploy.
            </li>
            <li>
              <b>Buat domain custom</b> langsung dari dashboard Vercel supaya
              URL project kamu lebih profesional dan gampang diingat.
            </li>
            <li>
              <b>Tambahkan environment variables</b> kalau project kamu butuh
              API key atau konfigurasi tambahan.
            </li>
            <li>
              <b>Optimalkan ukuran build</b> dengan mengecek dan menghapus
              dependencies yang tidak terpakai.
            </li>
          </ul>
        </li>
      </ul>
      <h2>
        🎊 Selamat! Sekarang aplikasi kamu sudah online dan siap digunakan oleh
        siapa aja! 🎊
      </h2>
      <p>
        Gampang banget kan? Sekarang kamu udah bisa deploy project React Vite ke
        internet dalam hitungan menit. Jangan lupa eksplorasi fitur-fitur lain
        dari Vercel untuk meningkatkan performa dan tampilan project kamu! 🚀🔥
      </p>
      <p>Selamat coding dan happy deploying! 🎈😆</p>
    </>
  );
}
