'use server';

import { cookies } from 'next/headers';

export const Logout = async () => {
  (await cookies()).delete('uid');
};

export const setCookies = async (id: string) => {
  (await cookies()).set('uid', id);
};
