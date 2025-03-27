import {
	Alert,
	AlertDescription,
	AlertTitle,
} from '@/components/ui/alert'
import { Info } from 'lucide-react'
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
			<h2>Welcome, John Doe!</h2>
			<Alert>
				<Info className='w-4 h-4' />
				<AlertTitle>
					Oops! kamu belum membayar kursus kami.
				</AlertTitle>
				<AlertDescription>
					Nikmati trial modul UI/UX kami atau lakukan pembayaran
					melalui <Link href='/'>WhatsApp</Link>.
				</AlertDescription>
			</Alert>

			<h4>⚡️ Fitur baru (Premium): XP</h4>
			<ul className='list-decimal marker:text-black'>
				<li>
					Selesaikan Quiz dan submission project untuk mendapatkan XP
				</li>
				<li>
					Bersaing jumlah XP antar user lain untuk mendapat peringkat
					tertinggi
				</li>
				<li>
					Dapatkan sertifikat penghargaan kelulusan dan/atau XP!
				</li>
			</ul>

			<h4>📖 Daftar Isi Modul</h4>
			<pre>
				<code className='language-js'>{`UI/UX Design (FREE)
├── Warm up & Introduction
├── Frontend Concept
└── Quiz & Projects: Translate design into front-end code
Front-End (PAID)
├── Introduction & Syntax
└── Quiz & Projects: Procedure Text & Portfolio Section
Back-End (PAID)
├── Introduction & Syntax
├── Implementation
└── Quiz & Projects: Library API Improvement
Full-Stack (PAID)
├── React.js Basic Knowledge & Quiz
└── Project: TVMaze & Deploy`}</code>
			</pre>
		</main>
	)
}
