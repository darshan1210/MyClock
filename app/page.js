'use client'
import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error', err);
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div>
          Darshan
        </div>
      </main>
    </>
  );
}
