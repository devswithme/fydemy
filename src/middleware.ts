import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const middleware = (req: NextRequest) => {
  const uid = req.cookies.get('uid');

  if (!uid) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
};

export const config = {
  matcher: ['/dashboard/:path*'],
};
