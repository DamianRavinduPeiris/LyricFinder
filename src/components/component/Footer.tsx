import Link from 'next/link'
import React from 'react'


export default function Footer() {
  return (
    <div>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 ">
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
  )
}
