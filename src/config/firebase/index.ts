import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { get, getDatabase, ref, set, update } from "firebase/database";
import { checkPremiumStatus } from "./auth";
import { query, orderByChild, limitToLast } from "firebase/database";

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
    const user = result.user;
    // Cek dan simpan ke database jika belum ada
    const userRef = ref(db, `users/${user.uid}`);
    const snapshot = await get(userRef);

    if (!snapshot.exists()) {
      await set(userRef, {
        username: user.displayName,
        isPremium: false,
        xp: 0,
      });
    }

    return user;
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};

export const updateXp = async (point: number, path: string) => {
  const currentUser = auth.currentUser;
  if (!currentUser) return;

  const premiumStatus = await checkPremiumStatus(currentUser.uid);

  if (premiumStatus) {
    const userRef = ref(db, `users/${currentUser.uid}`);
    const xpRef = ref(db, `users/${currentUser.uid}/xp`);
    const snapshot = await get(xpRef);
    const userSnapshot = await get(userRef);

    const value = snapshot.val();
    const totalXp = typeof value === "number" ? value + point : 0;
    const quiz = userSnapshot.val().completedQuiz;
    const isCompleted = userSnapshot.val().completedQuiz
      ? Object.values(userSnapshot.val().completedQuiz)
      : [];

    if (!isCompleted.includes(path) || isCompleted.length === 0) {
      update(userRef, {
        completedQuiz: { ...quiz, [(Math.random() * 100).toFixed()]: path },
      });
      set(xpRef, totalXp);
      return true;
    } else {
      return false;
    }
  }
};

export const updateSubmission = async (subId: string) => {
  const currentUser = auth.currentUser;
  if (!currentUser) return;

  const premiumStatus = await checkPremiumStatus(currentUser.uid);
  const subRef = ref(db, `users/${currentUser.uid}/subs`);
  const snapshot = await get(subRef);

  const subs = snapshot.val() || {};
  const [key, value] = subId.split("!");

  if (
    premiumStatus ||
    (!premiumStatus && (!subs[key] || subs[key].length < 1))
  ) {
    if (!subs[key]) {
      subs[key] = [];
    }
    if (!subs[key].includes(value)) {
      subs[key].push(value);
    }
    await set(subRef, subs);
  }
};

export const getUserSubmissionHistory = async (userUid: string) => {
  const subRef = ref(db, `users/${userUid}/subs`);
  const snapshot = await get(subRef);

  const subs = snapshot.val() || {};
  const submissionHistory: { url: string; category: string; status: number }[] =
    [];

  // Iterate through each category in subs
  for (const [category, values] of Object.entries(subs)) {
    if (Array.isArray(values)) {
      // Check the status of each submission in the array
      values.forEach((value) => {
        const [url, status] = value.split("^");
        submissionHistory.push({
          url,
          category,
          status: parseInt(status, 10), // Convert status to a number
        });
      });
    }
  }

  return submissionHistory;
};

export const checkSubmissionStatus = async (subId: string, userUid: string) => {
  const subRef = ref(db, `users/${userUid}/subs`);
  const snapshot = await get(subRef);

  const subs = snapshot.val() || {};

  if (subs[subId] && Array.isArray(subs[subId]) && subs[subId].length > 0) {
    const lastValue = subs[subId][subs[subId].length - 1];
    return lastValue.split("^")[1];
  }

  return null;
};

export const getTopUsersByXp = async () => {
  try {
    const usersRef = ref(db, "users");
    const topUsersQuery = query(usersRef, orderByChild("xp"), limitToLast(3));
    const snapshot = await get(topUsersQuery);

    if (snapshot.exists()) {
      const users = snapshot.val();
      // Convert the object to an array and sort by XP in descending order
      const sortedUsers = Object.entries(users)
        // @ts-expect-error data is not typed
        .map(([uid, data]) => ({ uid, ...data }))
        .sort((a, b) => b.xp - a.xp);

      return sortedUsers;
    } else {
      console.log("No users found");
      return [];
    }
  } catch (error) {
    console.error("Failed to retrieve top users", error);
    throw error;
  }
};
