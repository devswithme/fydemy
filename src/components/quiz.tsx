import Image from 'next/image';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { X } from 'lucide-react';
import { quizItems } from '@/constants/constant';

type QuizProps = {
  mark: { [key: string]: boolean };
  form: { [key: string]: string };
  item: (typeof quizItems)[0]['items'][0];
  handleChange: (key: string, value: string) => void;
};

const Quiz = ({ mark, item, form, handleChange }: QuizProps) => {
  return (
    <>
      <h4
        className={`mb-0 ${
          mark[item.id] &&
          'bg-red-50 px-4 py-2 rounded-md text-red-600 flex justify-between items-center'
        }`}>
        {item.question} {mark[item.id] && <X />}
      </h4>
      {item.code && (
        <pre>
          <code className='language-js'>{item.code}</code>
        </pre>
      )}
      {item.img && (
        <Image
          src={item.img}
          alt={item.question.toString()}
          width={1600}
          height={900}
          className='w-full sm:w-1/2 object-cover object-top rounded'
        />
      )}
      <RadioGroup
        className='-space-y-10'
        value={form[item.id as keyof typeof form]}
        onValueChange={(value) => handleChange(item.id, value)}>
        {item.answers.map((answer, index) => (
          <label key={index} className='flex items-center space-x-3 cursor-pointer'>
            <RadioGroupItem value={answer.value} />
            {typeof answer.text === 'string' ? <p>{answer.text}</p> : answer.text}
          </label>
        ))}
      </RadioGroup>
    </>
  );
};

export default Quiz;
