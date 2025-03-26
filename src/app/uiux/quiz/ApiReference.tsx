'use client'

import { Button } from '@/components/ui/button'
import {
	RadioGroup,
	RadioGroupItem,
} from '@/components/ui/radio-group'
import { X } from 'lucide-react'
// import { Metadata } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'sonner'

// export const metadata: Metadata = {
// 	title: 'Frontend Introduction',
// 	description:
// 		'Belajar frontend adalah hal yang menyenangkan dan menjadi fondasi untuk pembelajaran kita kedepannya',
// }

export default function ApiReference() {
	const [form, setForm] = useState({
		one: '',
		two: '',
		three: '',
		four: '',
		five: '',
	})

	const handleChange = (key: string, value: string) => {
		setForm((prev) => ({
			...prev,
			[key]: value,
		}))
	}

	const [mark, setMark] = useState<{ [key: string]: boolean }>({})

	const correctAnswers = {
		one: 'b',
		two: 'a',
		three: 'b',
		four: 'a',
		five: 'c',
	}

	const onSubmit = () => {
		// Check if all questions are answered
		const allAnswered = Object.values(form).every(
			(value) => value !== ''
		)

		if (!allAnswered) {
			toast('Jawaban belum lengkap, pastikan terisi semuanya.')
			return
		}

		// Mark incorrect answers only after all are filled
		const newMark = Object.keys(form).reduce((acc, key) => {
			if (
				form[key as keyof typeof form] !==
				correctAnswers[key as keyof typeof correctAnswers]
			) {
				acc[key] = true // Mark only wrong answers
			}
			return acc
		}, {} as { [key: string]: boolean })

		setMark(newMark)

		if (Object.keys(newMark).length > 0) {
			toast('Maaf jawaban salah, silahkan coba lagi!')
		} else {
			toast('Congratulation! Semua jawaban anda benar.')
			setForm({
				one: '',
				two: '',
				three: '',
				four: '',
				five: '',
			})
			setMark({})
		}
	}

	return (
		<main className='max-w-3xl mx-auto prose'>
			<h1>Quiz</h1>
			<p
				className={`mb-0 ${
					mark.one &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				1. Manakah yang merupakan tanggung jawab seorang UI?{' '}
				{mark.one && <X />}
			</p>
			<RadioGroup
				className='-space-y-10'
				value={form.one}
				onValueChange={(value) => handleChange('one', value)}>
				<label
					className='flex items-center space-x-3'
					id='one-a'>
					<RadioGroupItem
						value='a'
						id='one-a'
					/>
					<p>Membuat user persona dan user flow dalam produk</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='one-b'
					/>
					<p>
						Mengatur dan membuat desain visual/tampilan produk
						semenarik mungkin
					</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='one-c'
					/>
					<p>Mengubah produk sesuai harga pasar</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.two &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				2. Berikut ini merupakan proses dari UI/UX, Yaitu?{' '}
				{mark.two && <X />}
			</p>
			<Image
				src='/uiux/1.png'
				alt='1.png'
				width={1600}
				height={900}
				className='w-full sm:w-1/2 object-cover object-top rounded'
			/>
			<RadioGroup
				className='-space-y-10'
				value={form.two}
				onValueChange={(value) => handleChange('two', value)}>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='a'
						id='two-a'
					/>
					<p>User Persona</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='two-b'
					/>
					<p>User Journey MAP</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='two-c'
					/>
					<p>Storyboarding</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.three &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				3. Siapa yang bertugas merancang proses interaksi dan
				pengalaman bagi pengguna pada sebuah produk (aplikasi &
				website)? {mark.three && <X />}
			</p>
			<RadioGroup
				className='-space-y-10'
				value={form.three}
				onValueChange={(value) => handleChange('three', value)}>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='a'
						id='three-a'
					/>
					<p>User Interface</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='three-b'
					/>
					<p>User Experience</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='three-c'
					/>
					<p>UI/UX</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.four &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				4. Siapa yang bertugas membangun rancangan Interface
				aplikasi/web untuk bisa digunakan oleh user?{' '}
				{mark.four && <X />}
			</p>
			<RadioGroup
				className='-space-y-10'
				value={form.four}
				onValueChange={(value) => handleChange('four', value)}>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='a'
						id='four-a'
					/>
					<p>Frontend Developer</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='four-b'
					/>
					<p>Backend Developer</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='four-c'
					/>
					<p>UX Engineer</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.five &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				5. Untuk mengatur struktur halaman web berupa text menggunakan
				dan gambar? {mark.five && <X />}
			</p>
			<RadioGroup
				className='-space-y-10'
				value={form.five}
				onValueChange={(value) => handleChange('five', value)}>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='a'
						id='five-a'
					/>
					<p>CSS</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='five-b'
					/>
					<p>Figma</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='five-c'
					/>
					<p>HTML</p>
				</label>
			</RadioGroup>

			<Button onClick={onSubmit}>Submit</Button>
		</main>
	)
}
