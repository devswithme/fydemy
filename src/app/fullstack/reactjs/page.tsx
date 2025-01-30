import { Metadata } from 'next'
export const metadata: Metadata = {
	title: 'Frontend Introduction',
	description:
		'Belajar frontend adalah hal yang menyenangkan dan menjadi fondasi untuk pembelajaran kita kedepannya',
}

export default function ApiReference() {
	return (
		<main className='max-w-3xl mx-auto prose'>
			<h1>ReactJS</h1>
			<p>
				React.js adalah pustaka JavaScript untuk membangun antarmuka
				pengguna (UI) yang interaktif. Dengan React, kita bisa membuat
				komponen kecil yang dapat digunakan kembali, seperti tombol
				atau formulir, untuk menyusun tampilan aplikasi. Keunggulan
				React terletak pada cara kerjanya yang efisien dengan Virtual
				DOM, sehingga hanya bagian yang berubah saja yang diperbarui
				tanpa me-refresh seluruh halaman. React banyak digunakan untuk
				membuat aplikasi web modern yang cepat, dinamis, dan
				responsif.
			</p>
			<h2>Tujuan Modul</h2>
			<ul>
				<li>Memahami dasar-dasar React.js dan cara kerjanya</li>
				<li>
					Membuat aplikasi front-end yang interaktif dengan React.js
				</li>
				<li>
					Menghubungkan aplikasi React dengan backend menggunakan API
				</li>
			</ul>
			<h2>Prasyarat</h2>
			<p>
				Sebelum memulai modul ini, kamu disarankan untuk menguasai
				dasar-dasar berikut:
			</p>
			<ul>
				<li>HTML, CSS, dan JavaScript (termasuk ES6)</li>
				<li>Pemahaman tentang Node.js dan NPM</li>
				<li>Pengetahuan dasar Git untuk mengelola proyek</li>
			</ul>
		</main>
	)
}
