"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, Phone } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-['Pacifico'] text-blue-600">さくら皮膚科クリニック</div>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
              ホーム
            </Link>
            <Link
              href="/diseases"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
            >
              皮膚の病気・症状
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
            >
              院長・クリニック紹介
            </Link>
            <Link
              href="/treatment"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
            >
              診療内容・治療
            </Link>
            <Link
              href="/first-visit"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
            >
              初診の方へ
            </Link>
            <Link
              href="/access"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
            >
              アクセス
            </Link>
          </div>

          <div className="hidden md:block">
            <a
              href="tel:03-1234-5678"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 cursor-pointer whitespace-nowrap flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              電話予約
            </a>
          </div>

          <button
            className="md:hidden w-6 h-6 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
          <Link
            href="/"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            ホーム
          </Link>
          <Link
            href="/diseases"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            皮膚の病気・症状
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            院長・クリニック紹介
          </Link>
          <Link
            href="/treatment"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            診療内容・治療
          </Link>
          <Link
            href="/first-visit"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            初診の方へ
          </Link>
          <Link
            href="/access"
            className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            アクセス
          </Link>
          <a
            href="tel:03-1234-5678"
            className="block px-3 py-2 text-blue-600 font-medium flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone className="w-4 h-4 mr-2" />
            電話予約
          </a>
        </div>
      </div>
    </header>
  )
}
