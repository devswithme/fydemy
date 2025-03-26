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
	})

	const handleChange = (key: string, value: string) => {
		setForm((prev) => ({
			...prev,
			[key]: value,
		}))
	}

	const [mark, setMark] = useState<{ [key: string]: boolean }>({})

	const correctAnswers = {
		one: 'c',
		two: 'b',
		three: 'c',
		four: 'c',
		five: 'b',
		six: 'c',
		seven: 'c',
		eight: 'c',
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
			})
			setMark({})
		}
	}

	return (
		<main className='max-w-3xl mx-auto prose'>
			<h1>Kuis Hooks di React 📦✨</h1>
			<p
				className={`mb-0 ${
					mark.one &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				1. Apa itu state dalam React? {mark.one && <X />}
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
					<p>Sebuah fungsi untuk mengubah halaman</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='one-b'
					/>
					<p>Sebuah variabel biasa yang tidak bisa berubah</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='one-c'
					/>
					<p>Sebuah nilai yang bisa berubah di dalam komponen</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='d'
						id='one-d'
					/>
					<p>Sebuah elemen HTML</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.two &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				2. Apa fungsi dari useState di React? {mark.two && <X />}
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
					<p>Untuk membuat efek samping</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='two-b'
					/>
					<p>Untuk menyimpan dan mengubah nilai state</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='two-c'
					/>
					<p>Untuk menghapus elemen dari DOM</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='d'
						id='two-d'
					/>
					<p>Untuk menghubungkan ke API</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.three &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				3. Apa yang akan ditampilkan oleh kode berikut saat pertama
				kali dirender? {mark.three && <X />}
			</p>
			<pre>
				<code className='language-js'>{`funtion Contoh(){
    const [angka, setAngka] = useState(10);
    return <h2>Nilai: {angka}</h2>;
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
					<p>Nilai: 0</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='three-b'
					/>
					<p>Nilai: undefined</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='three-c'
					/>
					<p>Nilai: 10</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='d'
						id='three-d'
					/>
					<p>Tidak ada output</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.four &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				4. Bagaimana cara mengubah state dalam useState?{' '}
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
					<p>
						<code className='language-js'>{`angka = 5;`}</code>
					</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='four-b'
					/>
					<p>
						<code className='language-js'>{`useState(5);`}</code>
					</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='four-c'
					/>
					<p>
						<code className='language-js'>{`setAngka(5);`}</code>
					</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='d'
						id='four-d'
					/>
					<p>
						<code className='language-js'>{`changeState(5);`}</code>
					</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.five &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				5. Apa fungsi utama dari useEffect di React?{' '}
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
					<p>Untuk mengubah nilai state secara langsung</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='five-b'
					/>
					<p>
						Untuk menjalankan kode saat komponen berubah atau dimount
					</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='five-c'
					/>
					<p>Untuk menambahkan event listener ke tombol</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='d'
						id='five-d'
					/>
					<p>Untuk membuat style CSS di React</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.six &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				<div>
					6. Kapan useEffect dengan dependensi kosong (
					<code className='language-js'>{`useEffect(() => {}, [])`}</code>
					) akan dijalankan?
				</div>
				{mark.six && <X />}
			</p>
			<RadioGroup
				className='-space-y-10'
				value={form.six}
				onValueChange={(value) => handleChange('six', value)}>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='a'
						id='six-a'
					/>
					<p>Setiap kali state berubah</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='six-b'
					/>
					<p>Setiap kali komponen di-render ulang</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='six-c'
					/>
					<p>Hanya saat komponen pertama kali muncul</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='d'
						id='six-d'
					/>
					<p>Tidak pernah dijalankan</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.seven &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				7. Apa output dari kode berikut setelah tombol ditekan sekali?{' '}
				{mark.seven && <X />}
			</p>
			<pre>
				<code className='language-js'>{`function Contoh(){
    const [hitung, setHitung] = useState(0);

    useEffect(() => {
        console.log("State berubah! Hitung:", hitung);
    }, [hitung]);

    return (
        <div>
            <h2>Hitung: {hitung}</h2>
            <button onClick={() => setHitung(hitung + 1)}>Tambah</button>
        </div>
    );
}`}</code>
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
					<p>Tidak ada log di console</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='seven-b'
					/>
					<p>{`"State berubah! Hitung: 0"`}</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='seven-c'
					/>
					<p>{`"State berubah! Hitung: 1"`}</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='d'
						id='seven-d'
					/>
					<p>{`"State berubah! Hitung: 0" dan "State berubah! Hitung: 1"`}</p>
				</label>
			</RadioGroup>

			<p
				className={`mb-0 ${
					mark.eight &&
					'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
				}`}>
				<div>
					8. Apa yang terjadi jika kita tidak memberikan array
					dependensi pada useEffect (
					<code className='language-js'>{`useEffect(() => {...})`}</code>
					)?
				</div>
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
					<p>useEffect tidak akan pernah dijalankan</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='b'
						id='eight-b'
					/>
					<p>useEffect hanya dijalankan saat pertama kali render</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='c'
						id='eight-c'
					/>
					<p>{`"State berubah! Hitung: 1"`}</p>
				</label>
				<label className='flex items-center space-x-3'>
					<RadioGroupItem
						value='d'
						id='eight-d'
					/>
					<p>Error</p>
				</label>
			</RadioGroup>

			<Button onClick={onSubmit}>Submit</Button>
		</main>
	)
}
