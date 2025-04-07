import { checkPremiumStatus } from '@/config/firebase/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const uid = (await cookies()).get('uid')?.value ?? '';
  const premiumStatus = await checkPremiumStatus(uid);
  if (!premiumStatus) return redirect('/dashboard');
  return <>{children}</>;
}
