import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="bg-indigo-800 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-5xl font-bold mb-8 text-balance">Contact Pumatics</h1>

            <p className="text-xl mb-12 leading-relaxed">
              We're here to help you achieve your academic goals. Choose the best way to reach us below.
            </p>

            {/* Book a Session */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 underline">Book a Session</h2>
              <p className="text-lg mb-6">Schedule your tutoring session here.</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold">
                SCHEDULE APPOINTMENT
              </Button>
            </div>

            {/* Other Contact Methods */}
            <div>
              <h2 className="text-2xl font-bold mb-6 underline">Other Contact Methods</h2>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4">
                    <span className="text-indigo-800 font-bold">@</span>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>info@pumatics.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4">
                    <span className="text-indigo-800 font-bold">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p>(650) 209-0336</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Have Questions */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
              <p className="text-lg">Fill out the form below and we'll get back to you shortly.</p>
            </div>
          </div>

          {/* Contact Image */}
          <div className="flex-1 flex justify-end">
            <div className="w-80 h-80 rounded-full overflow-hidden">
              <img
                src="/keyboard-with-contact-us-keys-highlighted-in-blue.png"
                alt="Contact keyboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
