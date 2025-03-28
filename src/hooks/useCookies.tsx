'use server';

import { cookies } from 'next/headers';

const useCookies = async () => {
  const cookieStore = await cookies();
  const uid: string = cookieStore.get('uid')?.value!;
  const deleteCookies = () => cookieStore.delete('uid');

  return { uid, deleteCookies, cookieStore };
};

const logout = async () => {
  const { deleteCookies } = await useCookies();
  deleteCookies();
};

const setCookies = async (id: string) => {
  const { cookieStore } = await useCookies();
  cookieStore.set('uid', id, { httpOnly: true, maxAge: 60 * 60 * 24 * 7 });
};

export { logout, setCookies, useCookies };
