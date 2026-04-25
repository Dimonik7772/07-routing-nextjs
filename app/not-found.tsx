'use client';

import css from './Not-Found.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push('/'), 2500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>Sorry, the page you are looking for does not exist.</p>
      <p>You will be redirected to the main page in a few seconds . . . </p>
      <Link href="/">Go back home</Link>
    </div>
  );
};
export default NotFound;
