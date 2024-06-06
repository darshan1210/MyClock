'use client'
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 100); // Update every 100 milliseconds to capture milliseconds accurately

    return () => clearInterval(timer);
  }, []);

  // const formatTime = (date) => {
  //   if (!date) return 'Loading...'; // Placeholder while loading
  //   const hours = date.getHours().toString().padStart(2, '0');
  //   const minutes = date.getMinutes().toString().padStart(2, '0');
  //   const seconds = date.getSeconds().toString().padStart(2, '0');
  //   const milliseconds = Math.floor(date.getMilliseconds() / 10).toString().padStart(2, '0'); // Ensure 2 digits for milliseconds
  //   return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  // };

  const formatTime = (date) => {
    if (!date) return 'Loading...'; // Placeholder while loading
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const milliseconds = Math.floor(date.getMilliseconds() / 10).toString().padStart(2, '0'); // Ensure 2 digits for milliseconds
    const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM/PM

    // Convert hours to 12-hour format
    hours = hours % 12 || 12;
    // ${ampm}
    return `${hours}:${minutes}:${seconds}:${milliseconds} `;
  };
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <div className="text-6xl font-extrabold text-center text-green-500 text-clock">
            {/* <Image
                src='/clock.gif'
                alt='clock'
                width={100}
                height={150}
              /> */}
            {formatTime(time)}
            {/* <Image
                src='/clock.gif'
                alt='clock'
                width={100}
                height={150}
              /> */}
          </div>
        </div>
      </main>
    </>
  );
}
