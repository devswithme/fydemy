import { ref, get } from 'firebase/database';
import { db } from '@/config/firebase'; // Pastikan Firebase sudah dikonfigurasi

export async function checkPremiumStatus(userId: string): Promise<boolean> {
  try {
    const snapshot = await get(ref(db, `users/${userId}/isPremium`));
    return snapshot.exists() ? snapshot.val() === true : false;
  } catch (error) {
    console.error('Error checking premium status:', error);
    return false;
  }
}
