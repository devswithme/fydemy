import { Button } from '@/components/ui/button'
import { navItems } from '@/constants'
import { ChevronRight } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
	title: 'Fullstack API',
	description:
		'API (Application Programming Interface) itu kayak restoran! 🍽️',
}

export default function ApiReference() {
	return (
		<main className='max-w-3xl mx-auto prose'>
			<h1>🌐 Apa Itu API?</h1>
			<p>
				API (Application Programming Interface) itu kayak restoran! 🍽️
			</p>
			<ul>
				<li>Kita (frontend) = pelanggan yang pesan makanan</li>
				<li>API = pelayan yang meneruskan pesanan ke dapur</li>
				<li>Backend (server) = dapur yang masak makanan</li>
				<li>Data JSON = makanan yang dikirim ke pelanggan</li>
			</ul>
			<p>
				Jadi, API itu jembatan yang memungkinkan aplikasi kita
				mengambil atau mengirim data dari dan ke server.
			</p>
			<p>
				Berikut materi tentang Mengambil Data dari API dengan Axios
				(GET) di React menggunakan{' '}
				<a href='https://jsonplaceholder.typicode.com/posts'>
					https://jsonplaceholder.typicode.com/posts
				</a>
				! 🚀
			</p>
			<h2>🔧 Apa Itu Axios?</h2>
			<p>
				Axios adalah library di JavaScript buat mengambil data dari
				API dengan lebih mudah. Dibanding fetch(), Axios lebih simpel
				karena:
			</p>
			<ul>
				<li>✅ Sudah otomatis mengubah response ke JSON</li>
				<li>✅ Bisa menangani error lebih baik</li>
				<li>✅ Bisa mengatur timeout dan headers lebih mudah</li>
			</ul>
			<h3>📥 Cara Menggunakan Axios untuk GET Data dari API</h3>
			<p>
				Sekarang, kita mau ambil data dari API
				<a href='https://jsonplaceholder.typicode.com/posts'>
					https://jsonplaceholder.typicode.com/posts
				</a>
				, yang berisi daftar postingan.
			</p>
			<ul>
				<li>
					1️⃣ Install Axios dulu (jika belum)
					<pre>
						<code className='language-js'>{`npm install axios`}</code>
					</pre>
				</li>
				<li>2️⃣ Gunakan Axios di React</li>
				<pre>
					<code className='language-js'>{`import React, {useState, useEffect} from "react";
import axios from "axios";

function PostList(){
    const [posts, setPosts] = useState([]); // Simpan data API
    const [loading, setLoading] = useState(true) // Untuk indikator loading
    const [error, setError] = useState(null) // Simpan error jika ada

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts) // Ambil data dari API
            .then((response) => {
                setPosts(response.data); // Simpan data ke state
                setLoading(false); // Matikan loading
            })
            .catch((error) => {
                setError(error.message); // Simpan pesan error
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading data ... ⏳</p>;
    if (error) return <p>Error: {error} ❌</p>;

    return (
        <div>
            <h2>Daftar Postingan 📜</h2>
            <ul>
                {posts.slice(0, 10).map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export defalt PostList;`}</code>
				</pre>
				<p>
					<b>📝 Penjelasan Kode</b>
				</p>
				<ul>
					<li>
						✅ Kita pakai{' '}
						<code className='language-js'>useState</code> buat
						menyimpan data API.
					</li>
					<li>
						✅ Kita pakai{' '}
						<code className='language-js'>useEffect</code> supaya data
						API diambil saat komponen pertama kali muncul.
					</li>
					<li>
						✅ <code className='language-js'>axios.get()</code>{' '}
						digunakan untuk mengambil data dari API.
					</li>
					<li>
						✅ Jika <b>loading</b> masih berjalan, tampilkan teks
						Loading....
					</li>
					<li>
						✅ Jika ada <b>error</b>, tampilkan pesan error.
					</li>
					<li>
						✅ Jika <b>data sudah ada</b>, tampilkan daftar postingan.
					</li>
				</ul>
				<p>🔥 Apa yang Akan Ditampilkan?</p>
				<pre>
					<code className='language-js'>{`📜 Daftar Postingan
- Sunt aut facere repellat provident occaecati excepturi optio reprehenderit
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Qui est esse
  Doloribus autem saepe qui et et.
...`}</code>
				</pre>
			</ul>
			<h3>🚀 Kesimpulan</h3>
			<ul>
				<li>
					✅ <code className='language-js'>axios</code> mempermudah
					pengambilan data dari API.
				</li>
				<li>
					✅ <code className='language-js'>useEffect</code> dipakai
					supaya API hanya dipanggil sekali saat halaman pertama kali
					muncul.
				</li>
				<li>
					✅ <code className='language-js'>useState</code> menyimpan
					data dari API ke dalam state agar bisa ditampilkan di UI.
				</li>
			</ul>
			<p>Selamat mencoba! 🎉</p>

			<div className='flex justify-end items-center'>
				<Button>
					<Link
						href={navItems[3].items[9].url}
						className='no-underline flex items-center gap-2 text-white'>
						{navItems[3].items[9].title} <ChevronRight />
					</Link>
				</Button>
			</div>
		</main>
	)
}
