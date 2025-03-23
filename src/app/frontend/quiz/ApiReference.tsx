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
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSubmit = () => {
    console.log(form);
    if (form.one == 'a' && form.two == 'b' && form.three == 'c' && form.four == 'b' && form.five == 'a') {
      setForm({
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
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
      <h1>Quiz</h1>
      <p className="mb-0">1. Apa 3 elemen utama dalam pembuatan website sederhana?</p>
      <RadioGroup className="-space-y-10" value={form.one} onValueChange={(value) => handleChange('one', value)}>
        <label className="flex items-center space-x-3" id="one-a">
          <RadioGroupItem value="a" id="one-a" />
          <p>HTML, CSS, Javascript</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="b" id="one-b" />
          <p>HTML, CSS, Java</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="c" id="one-c" />
          <p>HTMX, CSS, Javascript</p>
        </label>
      </RadioGroup>

      <p className="mb-0">2. Perhatikan kode berikut ini, apa output yang akan tampil?</p>
      <pre>
        <code>{`let nama = 'Budi'
nama = 'Yanto'
console.log(nama)`}</code>
      </pre>
      <RadioGroup className="-space-y-10" value={form.two} onValueChange={(value) => handleChange('two', value)}>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="a" id="two-a" />
          <p>Budi</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="b" id="two-b" />
          <p>Yanto</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="c" id="two-c" />
          <p>Error</p>
        </label>
      </RadioGroup>

      <p className="mb-0">3. Coba tebak output dari program ini!</p>
      <pre>
        <code>{`const menikah = false
const umur = 28

if (menikah) {
  console.log('selamat')
} else if (!menikah && umur > 30) {
  console.log('semoga dapat jodoh')
} else {
  console.log('sabar ya')
}`}</code>
      </pre>
      <RadioGroup className="-space-y-10" value={form.three} onValueChange={(value) => handleChange('three', value)}>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="a" id="three-a" />
          <p>selamat</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="b" id="three-b" />
          <p>semoga dapat jodoh</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="c" id="three-c" />
          <p>sabar ya</p>
        </label>
      </RadioGroup>

      <p className="mb-0">4. Kenapa program ini salah?</p>
      <pre>
        <code>{`function add(a, b) {
  return a + b
}
console.log(add(3, 4, 5))`}</code>
      </pre>
      <RadioGroup className="-space-y-10" value={form.four} onValueChange={(value) => handleChange('four', value)}>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="a" id="four-a" />
          <p>Tipe data parameter tidak sesuai</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="b" id="four-b" />
          <p>Jumlah parameter diluar yang sudah didefinisikan</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="c" id="four-c" />
          <p>Kegunaan fungsi tidak cocok</p>
        </label>
      </RadioGroup>

      <p className="mb-0">5. Apakah javascript bisa digunakan diluar lingkungan browser?</p>
      <RadioGroup className="-space-y-10" value={form.five} onValueChange={(value) => handleChange('five', value)}>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="a" id="five-a" />
          <p>True</p>
        </label>
        <label className="flex items-center space-x-3">
          <RadioGroupItem value="b" id="five-b" />
          <p>False</p>
        </label>
        {/* <label className='flex items-center space-x-3'>
          <RadioGroupItem
            value='c'
            id='five-c'
          />
          <p>HTML</p>
        </label> */}
      </RadioGroup>

      <Button onClick={onSubmit}>Submit</Button>
    </main>
  );
}
