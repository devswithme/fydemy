import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Frontend Introduction',
	description:
		'Belajar frontend adalah hal yang menyenangkan dan menjadi fondasi untuk pembelajaran kita kedepannya',
}

export default function ApiReference() {
	return (
		<main className='max-w-3xl mx-auto prose'>
			<h1>Selamat datang, designer!</h1>
			<h2>Jadi, Apa itu UI & UX Design?</h2>
			<p>
				UI & UX Design merupakan proses merancang interaksi dan
				pengalaman bagi pengguna pada sebuah produk (seperti aplikasi
				& website). Proses ini dilakukan sejak tahap riset, eksekusi
				desain hingga pengujian.
			</p>
			<h2>Lalu, Apa itu UX?</h2>
			<p>
				User Experience adalah bagaimana perasaan dan pengalaman
				pengguna/user ketika menggunakan suatu produk
				(website/aplikasi) UX akan berfokus pada rancangan flow dan
				interaksi antara user dengan device dan software, seperti
				website dan aplikasi.{' '}
				<b>UX adalah soal bagaimana aplikasi digunakan</b>.
			</p>
			<h2>Sedangkan UI Design</h2>
			<p>
				User Interface adalah bagian visual atau tampilan pada sebuah
				web/aplikasi mulai dari warna, icon, layout desain, font yang
				digunakan, dan sebagainya. Dengan desain tampilan yang baik,
				diharapkan bisa membantu User untuk menggunakan produk dengan
				optimal. <b>UI mencakup konsep desain visual</b>.
			</p>
		</main>
	)
}
