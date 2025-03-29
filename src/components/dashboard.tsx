'use client'

import { AuthContext } from '@/components/provider/AuthProvider'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import React, { useContext } from 'react'

export default function Dashboard() {
	const authUser = useContext(AuthContext)

	return (
		<main className='max-w-3xl mx-auto prose'>
			<h2>Welcome, {authUser?.user?.name}!</h2>
			<h4 className='!m-0 !p-0 leading-none'>
				✨ Our top-3 highest rank users
			</h4>
			<Table className='bg-white border'>
				<TableHeader className='bg-neutral-100 text-xs sm:text-sm'>
					<TableRow>
						<TableHead className='pl-6'>Rank</TableHead>
						<TableHead>Avatar</TableHead>
						<TableHead>Username</TableHead>
						<TableHead>Pts</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody className='text-xs sm:text-sm'>
					<TableRow>
						<TableCell className='pl-6'>#1</TableCell>
						<TableCell className='py-3'>
							<Avatar className='w-8 h-8'>
								{/* <AvatarImage src='https://github.com/shadcn.png' /> */}
								<AvatarFallback>JD</AvatarFallback>
							</Avatar>
						</TableCell>
						<TableCell>John Doe</TableCell>
						<TableCell>1200 XP</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='pl-6'>#2</TableCell>
						<TableCell className='py-3'>
							<Avatar className='w-8 h-8'>
								{/* <AvatarImage src='https://github.com/shadcn.png' /> */}
								<AvatarFallback>DJ</AvatarFallback>
							</Avatar>
						</TableCell>
						<TableCell>Doe John</TableCell>
						<TableCell>900 XP</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='pl-6'>#3</TableCell>
						<TableCell className='py-3'>
							<Avatar className='w-8 h-8'>
								{/* <AvatarImage src='https://github.com/shadcn.png' /> */}
								<AvatarFallback>RV</AvatarFallback>
							</Avatar>
						</TableCell>
						<TableCell>Rasselio Valorant</TableCell>
						<TableCell>800 XP</TableCell>
					</TableRow>
				</TableBody>
			</Table>

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

			<h4>❓ Fitur (All): Quiz</h4>
			<ul className='list-decimal marker:text-black'>
				<li>
					Ada quiz di setiap modulnya, pastikan di jawab dengan benar
					untuk mendapatkan XP!
				</li>
				<li>
					Jawaban akan dicek otomatis, anda dapat mengetahui jawaban
					yang salah setelah submit untuk menambah pemahaman
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
