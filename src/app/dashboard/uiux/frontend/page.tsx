import { navItems } from '@/constants'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'UI/UX Frontend',
	description: 'Mari Mengenal Frontend Developer',
}

export default function ApiReference() {
	return (
		<main className='max-w-3xl mx-auto prose'>
			<h1>Frontend</h1>
			<h2>Mari Mengenal Frontend Developer</h2>
			<p>
				Frontend Developer bertanggung jawab untuk membangun UI (user
				interface) terlihat menarik dari sebuah aplikasi atau situs
				web dan memastikan bahwa (user experience) berfungsi dengan
				baik.
			</p>
			<h2>Jadi Frontend Developer memiliki tugas</h2>
			<p>
				<b>Mengubah suatu desain menjadi code</b>. Frontend Developer
				akan mengubah desain yang dibuat oleh UI/UX menjadi sebuah
				code yang dapat dijalankan di browser. Melalui:
			</p>
			<ul>
				<li>
					<b>HTML (HyperText Markup Language)</b> Frontend developer
					menggunakan HTML untuk mengatur struktur konten halaman web.
					Membuat elemen dasar seperti teks,gambar, link, dan form.
				</li>
				<li>
					<b>CSS (Cascading Style Sheets)</b> Frontend developer
					menggunakan CSS untuk mengatur gaya dan tampilan
					web/aplikasi seperti layout, warna dan font.
				</li>
				<li>
					<b>JS (JavaScript)</b> Digunakan untuk membuat halaman web
					yang interaktif seperti animasi, carousel gambar atau fitur
					dinamis lainnya seperti dropdown menu, modal, dan slider
					dll. Namun JavaScript juga dapat digunkan untuk
					mengembangkan backend.
				</li>
			</ul>

			<div className='bg-white w-full border-t fixed right-0 md:pl-64 bottom-0 py-5'>
				<div className='flex justify-between items-center max-w-3xl mx-auto px-5 lg:px-0'>
					<Link href={navItems[0].items[1].url}>
						<ChevronLeft />
					</Link>
					<span className='font-semibold'>
						{navItems[0].items[2].title}
					</span>
					<Link href={navItems[0].items[3].url}>
						<ChevronRight />
					</Link>
				</div>
			</div>
		</main>
	)
}
