import { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = {
	title: 'Fullstack Instalasi',
	description:
		'React.js dapat diinstal menggunakan berbagai cara. Dua metode yang paling umum adalah:',
}

export default function ApiReference() {
	return (
		<main className='max-w-3xl mx-auto prose'>
			<h1>Instalasi</h1>
			<p>
				Pendahuluan
				<br /> React.js dapat diinstal menggunakan berbagai cara. Dua
				metode yang paling umum adalah:
			</p>
			<ul>
				<li>
					Create React App (CRA): Cara standar untuk memulai proyek
					React.
				</li>
				<li>Vite: Build tool modern yang lebih ringan dan cepat.</li>
			</ul>
			<p>
				Namun pada modul ini kita akan melakukan instalasi menggunakan
				vite{' '}
			</p>
			<h2>Kenapa Instalasi Menggunakan Vite?</h2>
			<p>
				Vite adalah build tool modern yang dirancang untuk mempercepat
				proses pengembangan aplikasi web, termasuk aplikasi React.js.
				Dibandingkan dengan metode tradisional seperti Create React
				App (CRA), Vite menawarkan beberapa keuntungan yang membuatnya
				unggul.
			</p>
			<p>Berikut adalah alasan utama menggunakan Vite:</p>
			<ul>
				<li>Proses Pengembangan yang Lebih Cepat</li>
				<li>Ukuran Proyek Lebih Ringan</li>
				<li>Mendukung Modern JavaScript dan TypeScript</li>
				<li>Server Pengembangan Lebih Cepat</li>
			</ul>
			<p>
				Note: Meskipun Vite sedikit teknis untuk pemula, manfaatnya
				dalam jangka panjang sangat besar untuk produktivitas dan
				performa pengembangan aplikasi.
			</p>
			<h3>Mari kita mulai instalasinya</h3>
			<h4>Buka Terminal</h4>
			<p>Masuk ke Direktori Proyek</p>
			<pre>
				<code>{`cd “nama-proyek”`}</code>
			</pre>
			<h4>Buat Proyek baru dengan vite</h4>
			<p>
				Jalankan perintah berikut untuk membuat proyek baru
				menggunakan template React-Vite
			</p>
			<pre>
				<code>{`npm create vite`}</code>
			</pre>
			<p>Setelah itu beri nama project kalian</p>
			<Image
				src='/fullstack/1.png'
				alt='1.png'
				width={1600}
				height={900}
				className='object-cover object-top rounded'
			/>
			<p>
				Silahkan pilih template framework yg akan kalian gunakan,
				karna ini materi react maka kita akan memilih react
			</p>
			<Image
				src='/fullstack/2.png'
				alt='2.png'
				width={1600}
				height={900}
				className='object-cover object-top rounded'
			/>
			<p>
				Setelah itu kita akan memilih beberapa variasi dari react
				vite, disini kita akan memilih JavaScript{' '}
			</p>
			<Image
				src='/fullstack/3.png'
				alt='3.png'
				width={1600}
				height={900}
				className='object-cover object-top rounded'
			/>
			<p>Masuk ke direktori project lagi</p>
			<pre>
				<code>{`cd nama-proyek`}</code>
			</pre>
			<Image
				src='/fullstack/4.png'
				alt='4.png'
				width={1600}
				height={900}
				className='object-cover object-top rounded'
			/>
			<p>
				Setelah masuk ke direktori project kita, langsung install npm
				nya menggunakan <code>npm install</code> sesuai yang diarahkan
				oleh react. Setelah npm terinstall maka ada dua pilihan yang
				dimana bisa langsung run project kita atau masuk ke IDE kita
				atau Visual Studio Code kita dengan mengetikan{' '}
				<code>code .</code>
			</p>
		</main>
	)
}
