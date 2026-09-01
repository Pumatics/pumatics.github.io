import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { PackagePriceTables, StandardRatesTable } from "@/components/pricing-tables"
import { packageValidityPricing } from "@/lib/pricing"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="pt-12 md:pt-20">
        <section className="py-12 md:py-16 px-4 md:px-6 bg-indigo-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
                Tutoring Rates
              </h1>
              <p className="text-blue-200 text-base md:text-lg">
                Hourly rates and package discounts for all tutoring levels.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-shrink-0 order-2 lg:order-1">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full flex items-center justify-center relative mx-auto">
                  <div className="text-center">
                    <div className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">TUTORING</div>
                    <div className="absolute top-6 md:top-8 left-8 md:left-12 text-xs md:text-sm font-semibold text-gray-600 transform -rotate-12">
                      Personal
                    </div>
                    <div className="absolute top-8 md:top-12 right-6 md:right-8 text-xs md:text-sm font-semibold text-gray-600 transform rotate-12">
                      Development
                    </div>
                    <div className="absolute left-2 md:left-4 top-1/2 text-xs md:text-sm font-semibold text-gray-600 transform -rotate-90">
                      Lead
                    </div>
                    <div className="absolute right-2 md:right-4 top-1/2 text-xs md:text-sm font-semibold text-gray-600 transform rotate-90">
                      Teaching
                    </div>
                    <div className="absolute bottom-8 md:bottom-12 left-6 md:left-8 text-xs md:text-sm font-semibold text-gray-600 transform rotate-12">
                      Skills
                    </div>
                    <div className="absolute bottom-6 md:bottom-8 right-8 md:right-12 text-xs md:text-sm font-semibold text-gray-600 transform -rotate-12">
                      Leadership
                    </div>
                    <div className="absolute bottom-12 md:bottom-16 left-1/2 transform -translate-x-1/2 text-xs md:text-sm font-semibold text-gray-600">
                      Mentor
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full order-1 lg:order-2">
                <StandardRatesTable />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-900 text-center mb-8 text-balance">
              Package Discounts
            </h2>

            <div className="mb-8">
              <h3 className="text-lg md:text-xl font-semibold text-indigo-800 mb-4">Package benefits:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm md:text-base">
                    <strong>Flexible scheduling</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm md:text-base">
                    <strong>Refund available</strong> for unused hours
                  </span>
                </li>
              </ul>
            </div>

            <PackagePriceTables />
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 md:px-6 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-900 text-center mb-8 text-balance">
              Payment Details
            </h2>

            <div className="space-y-4 md:space-y-6 text-gray-700">
              <div className="text-sm md:text-base">
                <span className="font-semibold text-indigo-800">Single sessions:</span> Sessions booked in Acuity are
                paid at the time of booking.
              </div>
              <div className="text-sm md:text-base">
                <span className="font-semibold text-indigo-800">Packages:</span> You will receive an invoice first. Pay
                by Venmo, Cash App, or Zelle. After payment is confirmed, you get an email with your scheduling code,
                then you can book.
              </div>
              <div className="text-sm md:text-base">
                <span className="font-semibold text-indigo-800">Validity:</span> {packageValidityPricing}
              </div>
              <div className="text-sm md:text-base">
                <span className="font-semibold text-indigo-800">Refunds:</span>{" "}
                <Link href="/terms#package-refunds" className="text-indigo-600 hover:text-indigo-800 underline">
                  Unused package hours
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
