import { Metadata } from 'next'
// import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
	title: 'Home',
	description:
		'Halo, selamat datang! Terima kasih sudah membeli modul ini.',
}

export default function Page() {
	return (
		<main className='max-w-3xl mx-auto prose'>
			<h1>Landing Page on process..</h1>
		</main>
	)
}
