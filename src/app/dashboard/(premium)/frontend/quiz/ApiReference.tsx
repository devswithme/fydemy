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
    one: 'a',
    two: 'b',
    three: 'c',
    four: 'b',
    five: 'a',
  };

  const onSubmit = async () => {
    // Check if all questions are answered
    const allAnswered = Object.values(form).every((value) => value !== '');
    const minimumCorrect = Math.ceil(quiz.length / 2.2);

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

    const isCorrect = quiz.filter((item) => !newMark[item.id]).length;
    const point = quiz
      .filter((item) => !newMark[item.id])
      .map((item) => item.point)
      .reduce((a, b) => a + b, 0);
    const emptyForm = quiz
      .map((item) => item.id)
      .reduce((acc, item) => ({ ...acc, [item]: '' }), {}) as typeof form;

    if (isCorrect >= minimumCorrect) {
      setForm(emptyForm);
      setMark({});

      const isCompleted = await updateXp(point, path);

      if (isCompleted) {
        toast(`Congratulation! Kamu berhasil menjawab ${isCorrect} pertanyaan!`);
      } else {
        toast('Anda sudah mengerjakan quiz ini');
      }
    } else {
      toast(
        `Minimal anda harus menjawab ${minimumCorrect} pertanyaan dengan benar, silahkan coba lagi!`
      );
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
