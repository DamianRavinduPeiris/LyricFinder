"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useState } from "react";


export function HomePage() {
  const[aName,setAName]=useState<string>('')
  const[sName,setSName]=useState<string>('')
  
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-100 dark:bg-gray-950">
      
      <header className="px-4 lg:px-6 h-14 flex items-center bg-transparent">
        <Link className="flex items-center justify-center" href="#">
          <MusicIcon className="h-6 w-6 text-gray-950 dark:text-gray-50" />
          <span className="sr-only">Lyric Findr </span>
        </Link>
        <h1 className="text-2xl font-bold text-gray-950 dark:text-gray-50 ml-4"></h1>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-24 lg:py-32">
        <div className="max-w-xl w-full space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-gray-950 dark:text-gray-50 sm:text-4xl md:text-5xl">
              Lyric Findr
            </h1>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-md mx-auto text-base/relaxed">
              Search for your favorite songs and artists to find the lyrics
              you're looking for.
            </p>
          </div>
          <form className="grid gap-4">
            <Input placeholder="Artist Name." type="text" onChange={(e)=>{
              setAName(e.target.value)
            }} />
            <Input placeholder="Song Name." type="text"
            onChange={(e)=>{
              setSName(e.target.value)
            }}
             />
            <Button
              onClick={() => {
                

              }}
            >
              Search
            </Button>
          </form>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-300 dark:border-gray-800">
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Made with ❤️ by Damian.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-600 dark:text-gray-400"
            href="https://github.com/DamianRavinduPeiris/LyricFinder"
          >
            Github.
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-600 dark:text-gray-400"
            href="https://ig.me/damian.peiris"
          >
            Instagram.
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MusicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}
