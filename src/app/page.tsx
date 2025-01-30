import Link from 'next/link'
import React from 'react'

export default function Page() {
	return (
		<main className='max-w-3xl mx-auto prose'>
			<h1>Fysite Academy</h1>
			<p>
				Halo, selamat datang! Ini adalah kelas <b>gratis/trial</b>{' '}
				untuk kalian belajar website. Bagi yang bingung mulai dari
				mana, gimana cara kerjanya, yuk langsung aja kita lihat
				materinya!
			</p>
			<blockquote>
				Fyi: Kalau kalian bingung dengan konsepnya dan mau dapat
				mentor, kami menawarkan versi pronya fysite academy wkwk.
				Order disini:{' '}
				<a href='https://www.academy.fysite.id'>Fysite academy</a>.
			</blockquote>
			<h2>Daftar isi</h2>
			<ul>
				<li>Pengenalan frontend yaitu HTML dan CSS</li>
				<li>
					Konsep pemograman Javascript dan keterhubungannya ke website
				</li>
				<li>List projekan atau praktek yang bisa dinilai langsung</li>
			</ul>
			<Link href='/frontend/introduction'>Lanjut</Link>
		</main>
	)
}
