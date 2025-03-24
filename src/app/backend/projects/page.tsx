import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
	title: 'Backend Projects',
	description:
		'Selamat datang di projek akhir kita!, disini kamu hanya disuruh untuk menyempurnakan program library API yang telah kita buat tadi.',
}

export default function Home() {
	return (
		<main className='max-w-3xl mx-auto prose'>
			<h1>Penyempurnaan</h1>
			<p>
				Selamat datang di projek akhir kita!, disini kamu hanya
				disuruh untuk menyempurnakan program library API yang telah
				kita buat tadi. Dengan menerapkan step #1 dan #2 dibawah ini!
			</p>
			<ul>
				<li>
					<b>#1</b>, Tambahkan route GET untuk mengembalikan buku
					secara spesifik sesuai id
				</li>
				<li>
					<b>#2</b>, Di setiap routenya tambahkan{' '}
					<code className='language-js'>try catch</code> untuk
					menghandle bila program terjadi error. Bisa dengan{' '}
					<code className='language-js'>{`res.json({message: err})`}</code>{' '}
					atau hanya{' '}
					<code className='language-js'>{`console.log(err)`}</code>.
				</li>
			</ul>
			<Image
				src='/backend/13.png'
				alt='13.png'
				width={1600}
				height={900}
				className='object-cover object-top rounded'
			/>
			<blockquote>
				Untuk submission, bisa di kompress atau di zipkan codenya
				tanpa folder <b>node_modules</b>. Lalu, kirimkan ke email{' '}
				<i>cs@fysite.id</i>! Ditunggu aja feedback dan statusnya ya,
				Good luck!
			</blockquote>
		</main>
	)
}
