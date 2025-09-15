import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-indigo-800 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@pumatics.com</p>
              <p>Phone: (650) 209-0336</p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <Link href="/terms" className="text-gray-300 hover:text-white underline">
              Terms and Conditions
            </Link>
          </div>

          {/* Availability */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Availability</h3>
            <p className="text-gray-300">Online tutoring available nationwide</p>
          </div>

          {/* Pumatics logo and Book Discovery Call */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center">
              <img
            src="https://i.imgur.com/CKfPClv.png"
            alt="Logo" width={250} height={100} />
            </div>
            <Button asChild className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-indigo-800 px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base w-full sm:w-auto">
              <a href="https://app.acuityscheduling.com/schedule.php?owner=21389694&appointmentType=category:Discovery%20Meeting" target="_blank" rel="noopener noreferrer">
                BOOK DISCOVERY CALL
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-indigo-700 text-center text-gray-300">
          <p>© 2025 Pumatics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
