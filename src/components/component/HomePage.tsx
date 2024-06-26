"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import toast, { Toaster } from "react-hot-toast";
import { Bounce,AttentionSeeker } from "react-awesome-reveal";

export function HomePage() {
  const [aName, setAName] = useState<string>("");
  const [sName, setSName] = useState<string>("");
  const [isLoading, setLoadingStatus] = useState<boolean>(false);
  const [isSearched, setSearchStatus] = useState<boolean>(false);
  const [lyrics, setLyrics] = useState<string>("");
  

  return (
    <div className="flex flex-col min-h-[100dvh] ">
      <Toaster />
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
            {!isSearched ? (
              <>
                <Bounce>
                  
                <h1 className="text-3xl font-bold tracking-tighter text-gray-950 dark:text-gray-50 sm:text-4xl md:text-5xl">
                  Lyric Findr
                </h1>
                <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-md mx-auto text-base/relaxed">
                  Search for your favorite songs and artists to find the lyrics
                  you are looking for.
                </p>
                </Bounce>
              </>
            ) : null}
          </div>
          {isLoading ? <Loader /> : null}
          {!isSearched ? (
            <Bounce>
            <form className="grid gap-4">
              <Input
                placeholder="Artist Name."
                type="text"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    document.querySelectorAll("input")[1].focus();
                  }
                }}
                onChange={(e) => {
                  setAName(e.target.value);
                }}
              />
              <Input
                placeholder="Song Name."
                type="text"
                onChange={(e) => {
                  setSName(e.target.value);
                }}
              />
              <Button
                onClick={async (e) => {
                  if (aName === "" || sName === "") {
                    toast.error("Please enter both Artist and Song names!.");
                    e.preventDefault();
                    return;
                  }
                  setLoadingStatus(true);
                  e.preventDefault();
                  try {
                    console.log(
                      "url : ",
                      process.env.NEXT_PUBLIC_LYRICS_OVH_URL +
                        `${aName}/${sName}`
                    );
                    let res = await axios.get(
                      process.env.NEXT_PUBLIC_LYRICS_OVH_URL +
                        `${aName}/${sName}`
                    );
                    
                    setLyrics(
                      res.data.lyrics
                        .replace(/Paroles de la chanson/g, "")
                        .trim()
                    );
                    setLoadingStatus(false);
                    setSearchStatus(true);
                  } catch (error) {
                    setLoadingStatus(false);
                    toast.error("Lyrics were not found!");
                  }
                }}
              >
                Search
              </Button>
            </form>
            </Bounce>
          ) : (
            <>
              <div className="flex justify-center mt-8 flex-col text-center">
                <h1 className="mb-3 text-3xl font-bold tracking-tighter text-gray-950 dark:text-gray-50 sm:text-4xl md:text-5xl">
                  {aName.charAt(0).toUpperCase() + aName.slice(1)}
                </h1>

                <h4 className="text-xl font-semibold text-gray-600 dark:text-gray-400">
                  {sName.charAt(0).toUpperCase() + sName.slice(1)}
                </h4>
                <h3>
                {lyrics.split("\n")
  .slice(1)
  .map((line, index) => (
    <>
      <AttentionSeeker effect="rubberBand" triggerOnce={true}>
        <p
          key={index}
          className="mt-3 text-gray-600 dark:text-gray-400 text-center"
        >
          {line}
        </p>
      </AttentionSeeker>
    </>
))}
                </h3>

                <Button className="mt-8"
                  onClick={() => {
                    setSearchStatus(false);
                    setLyrics("");
                  }}
                >
                  Back
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
      <h3 className="text-center text-gray-600 dark:text-gray-400">
        Made with ❤️ by Damian.
        
      </h3>
    </div>
  );
}

function MusicIcon(props: any) {
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
