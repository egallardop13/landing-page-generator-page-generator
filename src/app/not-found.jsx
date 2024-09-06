"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function NotFound() {
  const [isInFrame, setIsInFrame] = useState(null);

  // Resolves server error when accessing window
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsInFrame(window.self !== window.top);
    }
  }, []);

  if (isInFrame === null) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-zinc-950">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            No Components Configured
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            It seems the page you're trying to access doesn't have any
            components configured. Please check your configuration or try a
            different URL
          </p>
          {!isInFrame && (
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/#create-page"
                className="rounded-md bg-zinc-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                Start Building
              </Link>
              <Link href="/" className="text-sm font-semibold text-gray-900">
                Learn How to Use <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
