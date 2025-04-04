'use client'

import { Button } from '@/components/ui/button'
import {
	RadioGroup,
	RadioGroupItem,
} from '@/components/ui/radio-group'
import { X } from 'lucide-react'
// import { Metadata } from 'next'
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
		two: 'b',
		three: 'a',
		four: 'c',
		five: 'b',
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
			<h1>Kuis Props di React 📦✨</h1>
			<p
				className={`mb-0 ${
					mark.one &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				1. Apa itu props di React? {mark.one && <X />}
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
					<p>Sebuah fungsi yang mengubah state</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='one-b'
					/>
					<p>
						Paket data yang dikirim dari komponen induk ke komponen
						anak
					</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='one-c'
					/>
					<p>Sebuah variabel global yang bisa diubah sesuka hati</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.two &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				2. Bagaimana cara mengirim props ke komponen anak?{' '}
				{mark.two && <X />}
			</p>
			<RadioGroup
				className='-space-y-10'
				value={form.two}
				onValueChange={(value) => handleChange('two', value)}>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='a'
						id='two-a'
					/>
					<p>
						Dengan menggunakan{' '}
						<code className='language-js'>setProps()</code>
					</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='two-b'
					/>
					<p>
						Dengan memberikan atribut saat memanggil komponen anak
					</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='two-c'
					/>
					<p>
						Dengan menulis{' '}
						<code className='language-js'>{`props.nama = "Budi"`}</code>{' '}
						langsung di dalam komponen anak
					</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.three &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				3. Apa yang akan ditampilkan oleh kode ini?{' '}
				{mark.three && <X />}
			</p>
			<pre>
				<code className='language-js'>{`funtion Halo(props){
    return <h1>Halo, {props.nama}! 👋</h1>;
}

function App(){
    return <Halo nama="Dino" />;
}
`}</code>
			</pre>
			<RadioGroup
				className='-space-y-10'
				value={form.three}
				onValueChange={(value) => handleChange('three', value)}>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='a'
						id='three-a'
					/>
					<p>Halo, Dino! 👋</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='three-b'
					/>
					<p>Halo, props.nama! 👋</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='three-c'
					/>
					<p>
						Error karena <code className='language-js'>props</code>{' '}
						belum dideklarasikan
					</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.four &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				4. Props bisa berupa apa saja? {mark.four && <X />}
			</p>
			<pre>
				<code className='language-js'>{`function add(a, b) {
	return a + b
}
console.log(add(3, 4, 5))`}</code>
			</pre>
			<RadioGroup
				className='-space-y-10'
				value={form.four}
				onValueChange={(value) => handleChange('four', value)}>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='a'
						id='four-a'
					/>
					<p>Hanya teks dan angka</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='four-b'
					/>
					<p>Hanya objek dan array</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='four-c'
					/>
					<p>Teks, angka, objek, fungsi, bahkan komponen lain!</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.five &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				5. Kenapa props tidak boleh diubah oleh komponen anak?{' '}
				{mark.five && <X />}
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
					<p>Karena React malas memperbarui UI</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='five-b'
					/>
					<p>
						Karena props adalah satu arah (one-way binding) dari induk
						ke anak
					</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='five-c'
					/>
					<p>
						Karena komponen anak tidak boleh punya variabel sendiri
					</p>
				</label>
			</RadioGroup>

			<Button onClick={onSubmit}>Submit</Button>
		</main>
	)
}
