import { Metadata } from 'next'
export const metadata: Metadata = {
	title: 'Fullstack Props',
	description:
		'Haiii adik-adik Fysite! 👶✨ Hari ini kita mau belajar tentang Props di React! Waaah, apa itu props? Yuk, kita lihat!',
}

export default function ApiReference() {
	return (
		<main className='max-w-3xl mx-auto prose'>
			<h1>Props</h1>
			<h2>Apa itu Props di React?</h2>
			<p>
				Haiii adik-adik Fysite! 👶✨ Hari ini kita mau belajar tentang
				Props di React! Waaah, apa itu props? Yuk, kita lihat!
			</p>
			<h3>Apa itu Props</h3>
			<p>{`Props itu kayak paket kiriman 📦 yang dikirim dari orang tua (komponen induk) ke anak (komponen anak). Jadi, kalau kita punya komponen yang butuh sesuatu dari luar, kita bisa kasih pakai props!
Bayangin gini:
👩 Mama kasih hadiah ke 👶 Bayi. Mama bilang, "Ini hadiah buat kamu, ya!" 🎁 Nah, hadiahnya itu adalah props!
`}</p>
			<h2>Contoh Props di React</h2>
			<p>Coba kita buat contoh, ya!</p>
			<pre>
				<code>{`function Hadiah(props){
    return <h2>Ini hadiah dari Mama: {props.namaHadiah} 🎁</h2>;
}
                
function Mama(){
    return <Hadiah namaHadiah="Boneka Beruang" />;
}`}</code>
			</pre>
			<p>
				<b>📌 Penjelasan:</b>
			</p>
			<ul>
				<li>
					<b>Mama</b> (komponen induk) kasih props{' '}
					<code>{`namaHadiah="Boneka Beruang"`}</code> ke{' '}
					<b>Hadiah</b>
					(komponen anak).
				</li>
				<li>
					<b>Hadiah</b> menerima props itu dan menampilkannya!
				</li>
			</ul>
			<p>
				Jadi hasilnya:{' '}
				<b>{`"Ini hadiah dari Mama: Boneka Beruang 🎁"`}</b>
			</p>
			<h3>Props Itu Tidak Bisa Diubah 🚫</h3>
			<p>
				Props itu kayak paket dari mama, nggak bisa diubah oleh bayi!
				Jadi kalau komponen anak menerima props, dia cuma bisa memakai
				props itu, bukan mengubahnya.
			</p>
			<h3>Props Bisa Apa Aja!</h3>
			<p>Props bisa dikirim dalam banyak bentuk:</p>
			<ul>
				<li>
					Teks: <code>{`<Hadiah namaHadiah="Mobil Mainan" />`}</code>
				</li>
				<li>
					Angka: <code>{`<Hadiah jumlah=3 />`}</code>
				</li>
				<li>
					Boolean: <code>{`<Hadiah isBaru={true} />`}</code>
				</li>
				<li>
					Objek:{' '}
					<code>{`<Hadiah info={{ nama: "Kue", rasa: "Coklat" }} />`}</code>
				</li>
				<li>
					Fungsi: <code>{`<Hadiah onClick={handleKlik} />`}</code>
				</li>
			</ul>
			<p>Waaaah, props itu keren banget ya! 😍</p>
			<h3>Kesimpulan 🎉</h3>
			<ul>
				<li>
					✅ Props itu paket kiriman dari komponen induk ke komponen
					anak.
				</li>
				<li>✅ Props tidak bisa diubah oleh komponen anak.</li>
				<li>✅ Props bisa berupa teks, angka, objek, fungsi, dll.</li>
			</ul>
			<p>
				Sekian materi hari ini! Semoga belajar React jadi lebih
				seruuu! 🎈🥳
			</p>
		</main>
	)
}
