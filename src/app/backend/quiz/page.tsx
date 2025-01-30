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
			form.one == 'a' &&
			form.two == 'a' &&
			form.three == 'c' &&
			form.four == 'b' &&
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
			<h1>Quiz</h1>
			<p className='mb-0'>
				1. Apa method API yang cocok untuk return atau retrieve satu
				atau lebihdata?
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
					<p>GET</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='one-b'
					/>
					<p>PUT</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='one-c'
					/>
					<p>PATCH</p>
				</label>
			</RadioGroup>

			<p className='mb-0'>
				2. Apa kegunaan memakai library <code>Prisma</code> dibanding
				yang lain?
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
						Aman dari SQL Injection, karena tidak langsung menulis
						query terang-terangan dalam kode alias sudah di handle
						oleh ORM libary.
					</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='two-b'
					/>
					<p>
						Lebih simple pemakaiannya dalam query yang sangat kompleks
					</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='two-c'
					/>
					<p>
						Sama saja, tidak ada kegunaan spesial dari libary{' '}
						<code>Prisma</code> ini
					</p>
				</label>
			</RadioGroup>

			<p className='mb-0'>
				3. <code>req.body</code> mendapat nilai <b>nama</b> dan{' '}
				<b>peminjam</b> dari mana?
			</p>
			<pre>
				<code>{`app.post('/books', async (req, res) => {
	const { nama, peminjam } = req.body
	...
})`}</code>
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
					<p>
						Dari request url parameter yang kemudian ditangkap ke
						dalam nilai variabel tersebut
					</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='three-b'
					/>
					<p>
						Dari nilai cookies yang di send oleh client melalui API
					</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='three-c'
					/>
					<p>
						Dari request isi API yang bisa dalam bentuk format JSON
						atau yang lainnya
					</p>
				</label>
			</RadioGroup>

			<p className='mb-0'>
				4. Kenapa penulis menyarankan untuk menggunakan libary{' '}
				<code>nodemon</code> dari pada <code>node [nama file]</code>{' '}
				dalam fase development?
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
					<p>
						<code>nodemon</code> memudahkan untuk debug program karena
						dapat mengetahui error-error
					</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='four-b'
					/>
					<p>
						<code>nodemon</code> memudahkan dalam <b>auto-save</b>{' '}
						setiap kali ada perubahan dalam kode
					</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='four-c'
					/>
					<p>
						<code>node [nama file]</code>memudahkan dalam{' '}
						<b>auto-save</b> setiap kali ada perubahan dalam kode
					</p>
				</label>
			</RadioGroup>

			<p className='mb-0'>
				5. Kenapa kita harus menyimpan nilai variabel penting ke dalam
				file <code>.env</code>?
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
					<p>
						<code>.env</code> memudahkan kita untuk mengelola
						variabel-variabel yang bisa dipakai kembali
					</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='five-b'
					/>
					<p>
						<code>.env</code> akan disimpan di server alih-alih pada
						kodenya langsung jadi lebih aman
					</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='five-c'
					/>
					<p>
						<code>.env</code> membuat aplikasi teratur dengan
						penempatan nilai-nilai pada satu file
					</p>
				</label>
			</RadioGroup>

			<Button onClick={onSubmit}>Submit</Button>
		</main>
	)
}
