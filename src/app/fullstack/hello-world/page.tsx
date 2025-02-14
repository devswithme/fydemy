import { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = {
	title: 'Fullstack Hello World',
	description:
		'Pasti kalian binging struktur template react ini kann! sini aku jelasinn Folder utama tempat kita menulis kode aplikasi react ini di:',
}

export default function ApiReference() {
	return (
		<main className='max-w-3xl mx-auto prose'>
			<h1>Hello word React</h1>
			<p>
				Pasti kalian binging struktur template react ini kann! sini
				aku jelasinn Folder utama tempat kita menulis kode aplikasi
				react ini di:
			</p>
			<ul>
				<li>
					App.js: Komponen utama React. Di sinilah logika aplikasi
					kamu dimulai.
				</li>
				<li>App.css: File CSS untuk mendesain komponen di App.js.</li>
				<li>
					index.js: Titik masuk aplikasi React. File ini merender
					komponen React ke dalam DOM di index.html.
				</li>
			</ul>
			<p>
				Sekarang udah tau kan betapa pentingnya paham javascript dulu
				baru bisa belajar react, karna ada DOM (Document Object Model)
				kalo kamu sudah paham apa itu javascript pasti udah ga asing
				lagi sama kata DOM ini
			</p>
			<h2>
				Langsung aja bagaimana cara membuat hello word di react!
			</h2>
			<ul>
				<li>Buka file src/App.js di editor kode kamu.</li>
				<li>
					Hapus apa yang aku blok
					<Image
						src='/fullstack/5.png'
						alt='5.png'
						width={1600}
						height={900}
						className='object-cover object-top rounded'
					/>
				</li>
				<li>
					Setelah kamu hapus, maka buat tag h1 dengan berisikan Hello
					Word!
				</li>
				<li>
					Outputnya
					<Image
						src='/fullstack/6.png'
						alt='6.png'
						width={1600}
						height={900}
						className='object-cover object-top rounded'
					/>
				</li>
			</ul>
			<h2>
				Selamat Kamu Telah Berhasil Membuat Hello Word di React^^
			</h2>
		</main>
	)
}
