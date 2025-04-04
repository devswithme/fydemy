import { checkPremiumStatus } from '@/config/firebase/auth';
import { useCookies } from '@/hooks/useCookies';
import { redirect } from 'next/navigation';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const { uid } = await useCookies();
  const premiumStatus = await checkPremiumStatus(uid);
  if (!premiumStatus) return redirect('/dashboard');
  return <>{children}</>;
}
