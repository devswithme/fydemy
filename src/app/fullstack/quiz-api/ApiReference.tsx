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
		six: '',
		seven: '',
		eight: '',
		nine: '',
		ten: '',
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
		four: 'b',
		five: 'b',
		six: 'b',
		seven: 'b',
		eight: 'b',
		nine: 'a',
		ten: 'a',
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
				six: '',
				seven: '',
				eight: '',
				nine: '',
				ten: '',
			})
			setMark({})
		}
	}

	return (
		<main className='max-w-3xl mx-auto prose'>
			<h1>Kuis API di React 📦✨</h1>
			<p
				className={`mb-0 ${
					mark.one &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				1. Apa fungsi utama dari Axios dalam React?{' '}
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
					<p>Mengubah warna halaman</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='one-b'
					/>
					<p>Mengambil dan mengirim data dari/ke API</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='one-c'
					/>
					<p>Membuat animasi</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.two &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				<div>
					2. Apa perbedaan utama antara{' '}
					<code className='language-js'>fetch()</code> dan{' '}
					<code className='language-js'>axios</code>?
				</div>
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
						<code className='language-js'>fetch()</code> lebih mudah
						digunakan daripada Axios
					</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='two-b'
					/>
					<p>Axios otomatis mengubah response ke JSON</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='two-c'
					/>
					<p>
						<code className='language-js'>fetch()</code> selalu lebih
						cepat daripada Axios
					</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.three &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				<div>
					3. Apa fungsi dari{' '}
					<code className='language-js'>useEffect</code> dalam
					pengambilan data API?
				</div>
				{mark.three && <X />}
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
					<p>Menjalankan kode setiap kali halaman di-refresh</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='three-b'
					/>
					<p>Menyimpan data di dalam komponen</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='three-c'
					/>
					<p>Mempercepat proses loading</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.four &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				<div>
					4. Kapan sebaiknya kita menggunakan{' '}
					<code className='language-js'>useEffect</code> dengan array
					dependency kosong <code className='language-js'>[]</code>?
				</div>
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
					<p>Setiap kali user menekan tombol</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='four-b'
					/>
					<p>Hanya saat komponen pertama kali muncul</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='four-c'
					/>
					<p>Setiap kali state berubah</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.five &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				5. Apa yang terjadi jika kita tidak menangani error dalam
				Axios? {mark.five && <X />}
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
					<p>Program akan tetap berjalan tanpa masalah</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='five-b'
					/>
					<p>
						Bisa terjadi error yang tidak ditampilkan dan menyebabkan
						crash
					</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='five-c'
					/>
					<p>Axios otomatis mengatasi semua error</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.six &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				6. Apa yang dilakukan kode berikut? {mark.six && <X />}
			</p>
			<pre>
				<code className='language-js'>{`axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => console.log(response.data))
	.catch(error => console.error(error));`}</code>
			</pre>
			<RadioGroup
				className='-space-y-10'
				value={form.six}
				onValueChange={(value) => handleChange('six', value)}>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='a'
						id='six-a'
					/>
					<p>Menghapus semua data dari API</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='six-b'
					/>
					<p>Mengambil data dari API dan mencetaknya ke console</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='six-c'
					/>
					<p>Mengubah data dalam API</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.seven &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				7. Dalam kode berikut, di mana data API disimpan?{' '}
				{mark.seven && <X />}
			</p>
			<pre>
				<code className='language-js'>{`const [posts, setPosts] = useState([]);`}</code>
			</pre>
			<RadioGroup
				className='-space-y-10'
				value={form.seven}
				onValueChange={(value) => handleChange('seven', value)}>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='a'
						id='seven-a'
					/>
					<p>Dalam sebuah file terpisah</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='seven-b'
					/>
					<p>
						Di dalam state <code className='language-js'>posts</code>
					</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='seven-c'
					/>
					<p>Dalam API</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.eight &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				8. Apa yang ditampilkan jika API gagal dipanggil?{' '}
				{mark.eight && <X />}
			</p>
			<RadioGroup
				className='-space-y-10'
				value={form.eight}
				onValueChange={(value) => handleChange('eight', value)}>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='a'
						id='eight-a'
					/>
					<p>Data tetap muncul</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='eight-b'
					/>
					<p>
						Pesan error yang sudah diset dalam{' '}
						<code className='language-js'>catch()</code>
					</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='eight-c'
					/>
					<p>Halaman akan crash</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.nine &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				9. Bagaimana cara menampilkan hanya 5 data pertama dari API?{' '}
				{mark.nine && <X />}
			</p>
			<RadioGroup
				className='-space-y-10'
				value={form.nine}
				onValueChange={(value) => handleChange('nine', value)}>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='a'
						id='nine-a'
					/>
					<p>{`posts.slice(0, 5)`}</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='nine-b'
					/>
					<p>
						<code className='language-js'>{`posts.filter(5)`}</code>
					</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='nine-c'
					/>
					<p>
						<code className='language-js'>{`posts.map(5)`}</code>
					</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.ten &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				<div>
					10. Apa yang terjadi jika kita lupa menambahkan{' '}
					<code className='language-js'>[]</code> di{' '}
					<code className='language-js'>useEffect</code>?
				</div>
				{mark.ten && <X />}
			</p>
			<RadioGroup
				className='-space-y-10'
				value={form.ten}
				onValueChange={(value) => handleChange('ten', value)}>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='a'
						id='ten-a'
					/>
					<p>API akan dipanggil berkali-kali setiap render ulang</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='ten-b'
					/>
					<p>API hanya dipanggil sekali</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='ten-c'
					/>
					<p>
						<code className='language-js'>
							Program tidak akan berjalan
						</code>
					</p>
				</label>
			</RadioGroup>

			<Button onClick={onSubmit}>Submit</Button>
		</main>
	)
}
