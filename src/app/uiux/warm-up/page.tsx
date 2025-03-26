import { navItems } from '@/constants'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'UI/UX Warm up',
	description:
		'Coba tebak. Dalam pembuatan aplikasi apa saja yang dibutuhkan dan bagaimana caranya?',
}

export default function ApiReference() {
	return (
		<>
			<main className='max-w-3xl mx-auto prose'>
				<h1>Sebelum Mulai..</h1>
				<p>
					Coba tebak. Dalam pembuatan aplikasi apa saja yang
					dibutuhkan dan bagaimana caranya? dan Komponen serta Step by
					step apa yang diperlukan ?
				</p>
				<Image
					src='/uiux/7.png'
					alt='7.png'
					width={1600}
					height={900}
					className='w-full sm:w-1/2 object-cover object-top rounded'
				/>
				<p>Tentunya dalam pembuatan sebuah aplikasi memerlukan:</p>
				<ul>
					<li>
						<b>Product Planning & Solution</b>: Sebagai langkah awal
						perencanaan produk dan bagian apa yang akan dikembangkan
						sesuai dengan hasil riset bersama user dan menemukan
						solusi dalam pengembangan produk
					</li>
					<li>
						<b>Produk Design</b>: Membuat visualisasi produk sebelum
						launching dan experience dari user. Hal ini berkaitan erat
						juga dengan seorang UI/UX karena sebelum develompment
						proses dan menjadi sebuah aplikasi tampilan serta
						experience user sangat diperlukan
					</li>
					<li>
						<b>Development Proses</b>: Proses pengembangan produk yang
						semula berupa rancangan dari UI/UX akan diaplikasikan dan
						diproses oleh Engineer
					</li>
					<li>
						<b>Product Launch</b>: Launching produk atau perilisan
						produk setelah development proses dan melalui Quality
						Testing
					</li>
				</ul>

				<div className='bg-white w-full border-t fixed right-0 md:pl-64 bottom-0 py-5'>
					<div className='flex justify-between items-center max-w-3xl mx-auto px-5 lg:px-0'>
						<Link
							href={navItems[0].items[1].url}
							className='invisible'>
							<ChevronLeft />
						</Link>
						<span className='font-semibold'>
							{navItems[0].items[0].title}
						</span>
						<Link href={navItems[0].items[1].url}>
							<ChevronRight />
						</Link>
					</div>
				</div>
			</main>
		</>
	)
}
