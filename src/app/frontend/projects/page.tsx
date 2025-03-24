import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
	title: 'Frontend Projects',
	description:
		'Untuk projekan kali ini, kalian diharapkan sudah mengerti dulu konsep dasarnya',
}

export default function Home() {
	return (
		<main className='max-w-3xl mx-auto prose'>
			<h1>Projects</h1>
			<p>
				Untuk projekan kali ini, kalian diharapkan sudah mengerti dulu
				konsep dasarnya, untuk pengembangan atau tips and tricksnya
				kalian bisa order di{' '}
				<a href='https://www.academy.fysite.id'>Fysite academy</a>.
				Benefitnya?
			</p>
			<blockquote>
				Untuk pengecekan dan review project, bisa kirim ke email{' '}
				<a href='mailto:cs@fysite.id'>cs@fysite.id</a>.<br />
				Kirim kode dalam bentuk zip beserta screenshot webnya ya!
			</blockquote>
			<ul>
				<li>Dapat sertifikat</li>
				<li>
					Dapat 6 kali pertemuan meeting dengan mentor profesional
					kami
				</li>
				<li>
					Dapat peluang internship di{' '}
					<a href='https://www.fysite.id'>Fysite</a>
				</li>
			</ul>
			<h2>Level 1: Teks prosedur</h2>
			<p>
				Disini kalian harus paham dengan konsep HTML mengenai elemen
				list, heading, gambar dan CSS mengenai layout, padding,
				border. Ini adalah layout prototypenya saja, semoga berhasil!
			</p>
			<h3>Tips dan syarat</h3>
			<ul>
				<li>Bisa menggunakan properti float atau flex pada CSS</li>
				<li>
					Import gambarnya dengan{' '}
					<code className='language-js'>{`<img src="..."/>`}</code> ,
					bisa import dari file lokal anda (dalam folder yang sama)
					atau dari url internet
				</li>
				<li>
					Menggunakan elemen list dalam HTML seperti contoh ini:
					<pre>
						<code className='language-js'>{`<ul>
	<li>List 1</li>
	<li>List 2</li>
</ul>
`}</code>
					</pre>
				</li>
			</ul>
			<Image
				src='/frontend/3.png'
				alt='3.png'
				width={1600}
				height={900}
				className='object-cover object-top rounded'
			/>
			<h2>Level 2: Portfolio section</h2>
			<p>
				Disini kalian harus paham antara gabungan HTML mengenai
				button, CSS mengenai layouting, Javascript mengenai DOM. Ini
				adalah layout prototypenya, semoga berhasil!
			</p>
			<h3>Tips dan syarat</h3>
			<ul>
				<li>
					Tombol selengkapnya jika diklik, menuju ke halaman instagram
					anda
				</li>
				<li>
					Pastikan layoutnya sama persis posisinya dengan contoh. Bisa
					dilakukan dengan konsep <b>flex box</b> dalam CSS.
					<pre>
						<code className='language-js'>{`<div style="display:flex">
	<img src="..."/>
	<img src="..."/>
</div>`}</code>
					</pre>
				</li>
				<li>
					Menggunakan object window untuk implementasi tombol ke
					halama lain{' '}
					<code className='language-js'>
						window.location.href = https://instagram.com/@username
					</code>{' '}
					dalam function penambahan eventnya
				</li>
			</ul>
			<Image
				src='/frontend/4.png'
				alt='4.png'
				width={1600}
				height={900}
				className='object-cover object-top rounded'
			/>
		</main>
	)
}
