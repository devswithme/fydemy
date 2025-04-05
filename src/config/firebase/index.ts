import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { get, getDatabase, ref, set } from 'firebase/database';
import { checkPremiumStatus } from './auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app); // **Pastikan ini diekspor**
export const googleProvider = new GoogleAuthProvider();

// 🔹 Fungsi Login dengan Google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error('Login failed', error);
    throw error;
  }
};

export const updateXp = async (point: number) => {
  const currentUser = auth.currentUser;
  if (!currentUser) return;

  const premiumStatus = await checkPremiumStatus(currentUser.uid);

  if (premiumStatus) {
    const userRef = ref(db, `users/${currentUser.uid}/xp`);
    const snapshot = await get(userRef);

    const value = snapshot.val();
    const totalXp = typeof value === 'number' ? value + point : 0;
    set(userRef, totalXp);
  }
};
