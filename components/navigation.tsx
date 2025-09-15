"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white">
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
            <img
            src="https://i.imgur.com/ICLXFWI.png"
            alt="Logo" width={50} height={50} />
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-indigo-700 font-semibold hover:text-indigo-800">
            Home
          </Link>
          <Link href="/services" className="text-indigo-700 font-semibold hover:text-indigo-800">
            Services
          </Link>
          <Link href="/pricing" className="text-indigo-700 font-semibold hover:text-indigo-800">
            Pricing
          </Link>
          <Link href="/tutors" className="text-indigo-700 font-semibold hover:text-indigo-800">
            Tutors
          </Link>
          <Link href="/contact" className="text-indigo-700 font-semibold hover:text-indigo-800">
            Contact Us
          </Link>
        </div>

        <Button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-4 lg:px-6 py-2 rounded-full font-semibold text-sm lg:text-base">
          SCHEDULE APPOINTMENT
        </Button>

        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6 text-indigo-700" /> : <Menu className="h-6 w-6 text-indigo-700" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-indigo-700 font-semibold hover:text-indigo-800 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-indigo-700 font-semibold hover:text-indigo-800 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/pricing"
              className="block text-indigo-700 font-semibold hover:text-indigo-800 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/tutors"
              className="block text-indigo-700 font-semibold hover:text-indigo-800 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tutors
            </Link>
            <Link
              href="/contact"
              className="block text-indigo-700 font-semibold hover:text-indigo-800 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Button
              className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SCHEDULE APPOINTMENT
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
