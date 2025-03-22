import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
	title: 'Home',
	description:
		'Halo, selamat datang! Terima kasih sudah membeli modul ini.',
}

export default function Page() {
	return (
		<main className='max-w-3xl mx-auto prose'>
			<h1>Fysite Academy</h1>
			<p>
				Halo, selamat datang! Terima kasih sudah membeli modul ini,
				Ini adalah kelas berbayar untuk kalian belajar website dari 0
				hingga fullstack. Bagi yang bingung mulai dari mana, gimana
				cara kerjanya, yuk langsung aja kita lihat materinya!
			</p>
			<blockquote>
				Fyi: Kalau kalian bingung dengan konsepnya dan mau dapat
				mentor, review, + sertifikat, kami menawarkan untuk anda
				upgrade melalui{' '}
				<a href='https://academy.fysite.id'>academy.fysite.id</a>.
			</blockquote>
			<p>
				Disini kalian akan mendapatkan materi yang singkat saja jadi
				ngga ada basa basi dan dengan konsep project-based learning!
				Tertarik kah? Langsung aja kita mulai perjalanan kita ini
				menelusuri dunia web development.
			</p>
			<h2>Daftar Isi</h2>
			<pre>
				<code>{`UI/UX Design
├── Warm up & Introduction
├── Frontend Concept
└── Quiz & Projects: Translate design into front-end code
Front-End (Free)
├── Introduction & Syntax
└── Quiz & Projects: Procedure Text & Portfolio Section
Back-End
├── Introduction & Syntax
├── Implementation
└── Quiz & Projects: Library API Improvement
Full-Stack
├── React.js Basic Knowledge & Quiz
└── Project: TVMaze & Deploy`}</code>
			</pre>
			<p>
				Yuk kita mulai!{' '}
				<Link href='/uiux/warm-up'>{`Let's start your journey`}</Link>
			</p>
		</main>
	)
}
