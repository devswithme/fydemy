'use client'

import { Button } from '@/components/ui/button'
import {
	RadioGroup,
	RadioGroupItem,
} from '@/components/ui/radio-group'
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

	const onSubmit = () => {
		console.log(form)
		if (
			form.one == 'b' &&
			form.two == 'b' &&
			form.three == 'a' &&
			form.four == 'c' &&
			form.five == 'b'
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
			<h1>Kuis Props di React 📦✨</h1>
			<p className='mb-0'>1. Apa itu props di React?</p>
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

			<p className='mb-0'>
				2. Bagaimana cara mengirim props ke komponen anak?
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
						Dengan menggunakan <code>setProps()</code>
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
						Dengan menulis <code>{`props.nama = "Budi"`}</code>{' '}
						langsung di dalam komponen anak
					</p>
				</label>
			</RadioGroup>

			<p className='mb-0'>
				3. Apa yang akan ditampilkan oleh kode ini?
			</p>
			<pre>
				<code>{`funtion Halo(props){
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
						Error karena <code>props</code> belum dideklarasikan
					</p>
				</label>
			</RadioGroup>

			<p className='mb-0'>4. Props bisa berupa apa saja?</p>
			<pre>
				<code>{`function add(a, b) {
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

			<p className='mb-0'>
				5. Kenapa props tidak boleh diubah oleh komponen anak?
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
