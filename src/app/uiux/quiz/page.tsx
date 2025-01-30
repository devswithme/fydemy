'use client'

import { Button } from '@/components/ui/button'
import {
	RadioGroup,
	RadioGroupItem,
} from '@/components/ui/radio-group'
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

	const onSubmit = () => {
		console.log(form)
		if (
			form.one == 'b' &&
			form.two == 'a' &&
			form.three == 'b' &&
			form.four == 'a' &&
			form.five == 'c'
		) {
			setForm({
				one: '',
				two: '',
				three: '',
				four: '',
				five: '',
			})
			toast('Congratulation! Semua jawaban anda benar.')
		} else if (
			form.one == '' ||
			form.two == '' ||
			form.three == '' ||
			form.four == '' ||
			form.five == ''
		) {
			toast('Jawban belum lengkap, pastikan terisi semuanya.')
		} else {
			toast('Maaf jawaban salah, silahkan coba lagi!')
		}
	}

	return (
		<main className='max-w-3xl mx-auto prose'>
			<h1>Quiz</h1>
			<p className='mb-0'>
				1. Manakah yang merupakan tanggung jawab seorang UI?
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

			<p className='mb-0'>
				2. Berikut ini merupakan proses dari UI/UX, Yaitu?
			</p>
			<Image
				src='/uiux/1.png'
				alt='1.png'
				width={1600}
				height={900}
				className='w-1/2 object-cover object-top rounded'
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

			<p className='mb-0'>
				3. Siapa yang bertugas merancang proses interaksi dan
				pengalaman bagi pengguna pada sebuah produk (aplikasi &
				website)?
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

			<p className='mb-0'>
				4. Siapa yang bertugas membangun rancangan Interface
				aplikasi/web untuk bisa digunakan oleh user?
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

			<p className='mb-0'>
				5. Untuk mengatur struktur halaman web berupa text menggunakan
				dan gambar?
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
