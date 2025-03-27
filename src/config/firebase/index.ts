import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDfEIEslcYbaVQU-jLgLQivroPWt9LvHMk',
  authDomain: 'fysite-2c797.firebaseapp.com',
  projectId: 'fysite-2c797',
  storageBucket: 'fysite-2c797.firebasestorage.app',
  messagingSenderId: '872690344126',
  appId: '1:872690344126:web:eb8c2075ebffabf145feef',
  measurementId: 'G-9145D1X5X5',
};

const app = initializeApp(firebaseConfig);
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
