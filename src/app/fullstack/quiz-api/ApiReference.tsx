'use client';

import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { Metadata } from 'next'
import { useState } from 'react';
import { toast } from 'sonner';

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
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSubmit = () => {
    console.log(form);
    if (form.one == 'b' && form.two == 'b' && form.three == 'a' && form.four == 'b' && form.five == 'b' && form.six == 'b' && form.seven == 'b' && form.eight == 'b' && form.nine == 'a' && form.ten == 'a') {
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
      });
      toast('Congratulation! Semua jawaban anda benar.');
    } else if (form.one == '' || form.two == '' || form.three == '' || form.four == '' || form.five == '') {
      toast('Jawban belum lengkap, pastikan terisi semuanya.');
    } else {
      toast('Maaf jawaban salah, silahkan coba lagi!');
    }
  };

  return (
    <main className="max-w-3xl mx-auto prose">
      <h1>Kuis API di React 📦✨</h1>
      <p className="mb-0">1. Apa fungsi utama dari Axios dalam React?</p>
      <RadioGroup className="-space-y-10" value={form.one} onValueChange={(value) => handleChange('one', value)}>
        <label className="flex items-center space-x-3" id="one-a">
          <RadioGroupItem value="a" id="one-a" />
          <p>Mengubah warna halaman</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="b" id="one-b" />
          <p>Mengambil dan mengirim data dari/ke API</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="c" id="one-c" />
          <p>Membuat animasi</p>
        </label>
      </RadioGroup>

      <p className="mb-0">
        2. Apa perbedaan utama antara <code>fetch()</code> dan <code>axios</code>?
      </p>
      <RadioGroup className="-space-y-10" value={form.two} onValueChange={(value) => handleChange('two', value)}>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="a" id="two-a" />
          <p>
            <code>fetch()</code> lebih mudah digunakan daripada Axios
          </p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="b" id="two-b" />
          <p>Axios otomatis mengubah response ke JSON</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="c" id="two-c" />
          <p>
            <code>fetch()</code> selalu lebih cepat daripada Axios
          </p>
        </label>
      </RadioGroup>

      <p className="mb-0">
        3. Apa fungsi dari <code>useEffect</code> dalam pengambilan data API?
      </p>
      <RadioGroup className="-space-y-10" value={form.three} onValueChange={(value) => handleChange('three', value)}>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="a" id="three-a" />
          <p>Menjalankan kode setiap kali halaman di-refresh</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="b" id="three-b" />
          <p>Menyimpan data di dalam komponen</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="c" id="three-c" />
          <p>Mempercepat proses loading</p>
        </label>
      </RadioGroup>

      <p className="mb-0">
        4. Kapan sebaiknya kita menggunakan <code>useEffect</code> dengan array dependency kosong <code>[]</code>?
      </p>
      <RadioGroup className="-space-y-10" value={form.four} onValueChange={(value) => handleChange('four', value)}>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="a" id="four-a" />
          <p>Setiap kali user menekan tombol</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="b" id="four-b" />
          <p>Hanya saat komponen pertama kali muncul</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="c" id="four-c" />
          <p>Setiap kali state berubah</p>
        </label>
      </RadioGroup>

      <p className="mb-0">5. Apa yang terjadi jika kita tidak menangani error dalam Axios?</p>
      <RadioGroup className="-space-y-10" value={form.five} onValueChange={(value) => handleChange('five', value)}>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="a" id="five-a" />
          <p>Program akan tetap berjalan tanpa masalah</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="b" id="five-b" />
          <p>Bisa terjadi error yang tidak ditampilkan dan menyebabkan crash</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="c" id="five-c" />
          <p>Axios otomatis mengatasi semua error</p>
        </label>
      </RadioGroup>

      <p className="mb-0">6. Apa yang dilakukan kode berikut?</p>
      <pre>
        <code>{`axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => console.log(response.data))
	.catch(error => console.error(error));`}</code>
      </pre>
      <RadioGroup className="-space-y-10" value={form.six} onValueChange={(value) => handleChange('six', value)}>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="a" id="six-a" />
          <p>Menghapus semua data dari API</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="b" id="six-b" />
          <p>Mengambil data dari API dan mencetaknya ke console</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="c" id="six-c" />
          <p>Mengubah data dalam API</p>
        </label>
      </RadioGroup>

      <p className="mb-0">7. Dalam kode berikut, di mana data API disimpan?</p>
      <pre>
        <code>{`const [posts, setPosts] = useState([]);`}</code>
      </pre>
      <RadioGroup className="-space-y-10" value={form.seven} onValueChange={(value) => handleChange('seven', value)}>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="a" id="seven-a" />
          <p>Dalam sebuah file terpisah</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="b" id="seven-b" />
          <p>
            Di dalam state <code>posts</code>
          </p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="c" id="seven-c" />
          <p>Dalam API</p>
        </label>
      </RadioGroup>

      <p className="mb-0">8. Apa yang ditampilkan jika API gagal dipanggil?</p>
      <RadioGroup className="-space-y-10" value={form.eight} onValueChange={(value) => handleChange('eight', value)}>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="a" id="eight-a" />
          <p>Data tetap muncul</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="b" id="eight-b" />
          <p>
            Pesan error yang sudah diset dalam <code>catch()</code>
          </p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="c" id="eight-c" />
          <p>Halaman akan crash</p>
        </label>
      </RadioGroup>

      <p className="mb-0">9. Bagaimana cara menampilkan hanya 5 data pertama dari API?</p>
      <RadioGroup className="-space-y-10" value={form.nine} onValueChange={(value) => handleChange('nine', value)}>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="a" id="nine-a" />
          <p>{`posts.slice(0, 5)`}</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="b" id="nine-b" />
          <p>
            <code>{`posts.filter(5)`}</code>
          </p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="c" id="nine-c" />
          <p>
            <code>{`posts.map(5)`}</code>
          </p>
        </label>
      </RadioGroup>

      <p className="mb-0">
        10. Apa yang terjadi jika kita lupa menambahkan <code>[]</code> di <code>useEffect</code>?
      </p>
      <RadioGroup className="-space-y-10" value={form.ten} onValueChange={(value) => handleChange('ten', value)}>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="a" id="ten-a" />
          <p>API akan dipanggil berkali-kali setiap render ulang</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="b" id="ten-b" />
          <p>API hanya dipanggil sekali</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="c" id="ten-c" />
          <p>
            <code>Program tidak akan berjalan</code>
          </p>
        </label>
      </RadioGroup>

      <Button onClick={onSubmit}>Submit</Button>
    </main>
  );
}
