import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Fullstack Projects',
	description:
		'Wuaa wuaa! Kita bikin project React Vite pake API TVMaze yaa! 🎉✨',
}

export default function Home() {
	return (
		<main className='max-w-3xl mx-auto prose'>
			<h1>Project React</h1>
			<p>
				Wuaa wuaa! Kita bikin project React Vite pake API TVMaze yaa!
				🎉✨
			</p>
			<h2>1. Persiapan: Pasang Vite dan React</h2>
			<p>
				Sebelum kita mulai, kita harus menyiapkan project React kita
				dengan bantuan Vite. Vite itu alat keren buat bikin project
				React dengan cepat dan ringan! Yuk, kita mulai dengan perintah
				ini di terminal:
			</p>
			<pre>
				<code className='language-js'>{`npm create vite@latest my-tv-app --template react
cd my-tv-app
npm install
`}</code>
			</pre>
			<p>
				Nah, setelah semua paket terpasang, sekarang kita jalankan
				project kita buat ngecek apakah semuanya berjalan lancar:
			</p>
			<pre>
				<code className='language-js'>{`npm run dev`}</code>
			</pre>
			<p>
				Wuaa! Sekarang kita udah punya project React yang nyala di
				browser! 🥳🎉
			</p>
			<h2>2. Instalasi Axios buat Ambil Data dari API</h2>
			<p>
				Axios itu kayak tukang pos digital yang bakal nganterin
				permintaan kita ke API dan ngambil datanya buat kita. Supaya
				bisa pake Axios, kita harus pasang dulu di project kita:
			</p>
			<pre>
				<code className='language-js'>{`npm install axios`}</code>
			</pre>
			<p>
				Nah, setelah terpasang, kita siap buat panggil data dari API
				TVMaze! 🚀📺
			</p>
			<h2>3. Membuat Komponen Pencarian Acara TV</h2>
			<p>
				Sekarang kita masuk ke bagian seru nih! Kita bakal bikin fitur
				pencarian acara TV. Yuk, kita buat file baru di folder{' '}
				<code className='language-js'>src</code>, namanya{' '}
				<code className='language-js'>SearchShow.jsx</code>, dan ketik
				kode ini:
			</p>
			<pre>
				<code className='language-js'>{`import { useState } from "react";
import axios from "axios";

const SearchShow = () => {
  const [query, setQuery] = useState("");
  const [shows, setShows] = useState([]);

  const searchTV = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("https://api.tvmaze.com/search/shows", {
        params: { q: query },
      });
      setShows(res.data);
    } catch (error) {
      console.log("Oops, terjadi kesalahan!", error);
    }
  };

  return (
    <div>
      <h2>🔎 Cari Acara TV Favoritmu!</h2>
      <form onSubmit={searchTV}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ketik nama acara TV..."
        />
        <button type="submit">Cari!</button>
      </form>
      <div>
        {shows.map((result) => (
          result.show.image ? <img key={result.show.id} src={result.show.image.medium} alt={result.show.name} /> : null
        ))}
      </div>
    </div>
  );
};

export default SearchShow;`}</code>
			</pre>
			<p>
				Di sini, kita bikin state buat menyimpan input pencarian (
				<code className='language-js'>query</code>) dan daftar acara
				TV (<code className='language-js'>shows</code>). Kalau tombol
				submit ditekan, kita bakal manggil API TVMaze dan munculin
				gambar acara TV yang dicari! 🎬📡
			</p>
			<h2>
				4. Integrasikan{' '}
				<code className='language-js'>SearchShow</code> ke{' '}
				<code className='language-js'>App.jsx</code>
			</h2>
			<p>
				Setelah bikin komponen pencarian, kita pasang di{' '}
				<code className='language-js'>App.jsx</code>
				supaya bisa dipakai. Buka{' '}
				<code className='language-js'>src/App.jsx</code>, lalu edit
				kodenya jadi seperti ini:
			</p>
			<pre>
				<code className='language-js'>{`import SearchShow from "./SearchShow";

function App() {
  return (
    <div>
      <h1>📺 Wuaa! Cari Acara TV Favoritmu!</h1>
      <SearchShow />
    </div>
  );
}

export default App;
`}</code>
				<p>
					Sekarang halaman utama kita udah siap menampilkan fitur
					pencarian acara TV! 🥳🎥
				</p>
			</pre>
			<h2>5. Jalankan dan Coba Aplikasinya! 🚀</h2>
			<p>
				Nah, sekarang momen yang ditunggu-tunggu! Saatnya kita
				jalankan aplikasi kita dan coba fitur pencariannya. Balik ke
				terminal, lalu ketik:
			</p>
			<pre>
				<code className='language-js'>{`npm run dev`}</code>
			</pre>
			<p>
				Sekarang buka browser dan pergi ke alamat yang dikasih di
				terminal. Tadaaa! 🎉 Sekarang kita punya aplikasi React yang
				bisa mencari acara TV langsung dari API TVMaze. Gampang kan?
				😆💡
			</p>
			<p>
				Selamat mencoba dan selamat bersenang-senang bikin proyek
				keren ini! 🚀🥳
			</p>
			<blockquote>
				Untuk submission, bisa di kompress atau di zipkan codenya
				tanpa folder <b>node_modules</b>. Lalu, kirimkan ke email{' '}
				<i>cs@fysite.id</i>! Ditunggu aja feedback dan statusnya ya,
				Good luck!
			</blockquote>
		</main>
	)
}
