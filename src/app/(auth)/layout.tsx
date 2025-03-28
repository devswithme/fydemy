import { useCookies } from '@/hooks/useCookies';
import { redirect } from 'next/navigation';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const { uid } = await useCookies();
  if (uid) return redirect('/dashboard');
  return <>{children}</>;
}
