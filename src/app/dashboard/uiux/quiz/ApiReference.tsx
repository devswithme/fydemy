'use client';

import Quiz from '@/components/quiz';
import { Button } from '@/components/ui/button';
import { updateXp } from '@/config/firebase';
import { quizItems } from '@/constants/constant';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ApiReference() {
  const path = usePathname();
  const quiz = quizItems.find((q) => q.name === path)?.items ?? [];

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

  const [mark, setMark] = useState<{ [key: string]: boolean }>({});

  const correctAnswers = {
    one: 'b',
    two: 'a',
    three: 'b',
    four: 'a',
    five: 'c',
  };

  const onSubmit = () => {
    // Check if all questions are answered
    const allAnswered = Object.values(form).every((value) => value !== '');

    if (!allAnswered) {
      toast('Jawaban belum lengkap, pastikan terisi semuanya.');
      return;
    }

    // Mark incorrect answers only after all are filled
    const newMark = Object.keys(form).reduce((acc, key) => {
      if (form[key as keyof typeof form] !== correctAnswers[key as keyof typeof correctAnswers]) {
        acc[key] = true; // Mark only wrong answers
      }
      return acc;
    }, {} as { [key: string]: boolean });

    setMark(newMark);

    //get point for xp
    const point = quiz.map((item) => item.point).reduce((a, b) => a + b, 0);

    if (Object.keys(newMark).length > 0) {
      toast('Maaf jawaban salah, silahkan coba lagi!');
    } else {
      updateXp(point);
      toast('Congratulation! Semua jawaban anda benar.');
      setForm({
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
      });
      setMark({});
    }
  };

  return (
    <main className='max-w-3xl mx-auto prose'>
      <h1>Quiz</h1>
      {quiz.map((item, index) => (
        <Quiz key={index} form={form} mark={mark} item={item} handleChange={handleChange} />
      ))}
      <Button onClick={onSubmit}>Submit</Button>
    </main>
  );
}
