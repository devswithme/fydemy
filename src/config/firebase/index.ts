import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getDatabase, ref, set, get } from 'firebase/database';

// Cegah inisialisasi ulang jika sudah ada
const firebaseConfig = {
  apiKey: 'AIzaSyDfEIEslcYbaVQU-jLgLQivroPWt9LvHMk',
  authDomain: 'fysite-2c797.firebaseapp.com',
  databaseURL: 'https://fysite-2c797-default-rtdb.firebaseio.com',
  projectId: 'fysite-2c797',
  storageBucket: 'fysite-2c797.appspot.com', // <- ini tadinya salah "firebasestorage.app"
  messagingSenderId: '872690344126',
  appId: '1:872690344126:web:eb8c2075ebffabf145feef',
  measurementId: 'G-9145D1X5X5',
};

// Cegah inisialisasi ulang
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  // Cek dan simpan ke database jika belum ada
  const userRef = ref(db, `users/${user.uid}`);
  const snapshot = await get(userRef);

  if (!snapshot.exists()) {
    await set(userRef, {
      email: user.email,
      isPremium: false,
      xp: 0,
    });
  }

  return user;
};
