import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="pt-12 md:pt-20">
        {/* Header Section */}
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
              {/* Circular Word Cloud */}
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

              {/* Standard Rates Table */}
              <div className="flex-1 w-full order-1 lg:order-2">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="bg-indigo-600 text-white p-3 md:p-4">
                    <h3 className="text-lg md:text-xl font-bold">Standard Rates</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-blue-100">
                        <tr>
                          <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">
                            Course Level
                          </th>
                          <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">
                            Rate
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">Middle School courses</td>
                          <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$76/hour</td>
                        </tr>
                        <tr>
                          <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">
                            High School (Non-AP/Honors) courses
                          </td>
                          <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$76/hour</td>
                        </tr>
                        <tr>
                          <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">AP & Honors courses</td>
                          <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$84/hour</td>
                        </tr>
                        <tr>
                          <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">College-level courses</td>
                          <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$84/hour</td>
                        </tr>
                        <tr>
                          <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">Programming courses</td>
                          <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$84/hour</td>
                        </tr>
                        <tr>
                          <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">Test Preparation</td>
                          <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$105/hour</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Package Discounts */}
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

            {/* Package Pricing Tables */}
            <div className="space-y-6 md:space-y-8">
              {/* Middle School Courses */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="bg-indigo-600 text-white p-3 md:p-4">
                  <h3 className="text-lg md:text-xl font-bold">Middle School courses</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">Hours</th>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">Price</th>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">
                          Effective Rate
                        </th>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">
                          Savings
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">5</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$360.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$72.00/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$20.00</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">10</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$680.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$68.00/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$80.00</td>
                      </tr>
                      <tr>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">20</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$1,220.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$61.00/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$300.00</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">30</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$1,590.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$53.00/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$690.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* High School (Non-AP/Honors) courses */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="bg-indigo-600 text-white p-3 md:p-4">
                  <h3 className="text-lg md:text-xl font-bold">High School (Non-AP/Honors) courses</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">Hours</th>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">Price</th>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">
                          Effective Rate
                        </th>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">
                          Savings
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">5</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$360.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$72.00/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$20.00</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">10</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$680.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$68.00/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$80.00</td>
                      </tr>
                      <tr>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">20</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$1,220.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$61.00/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$300.00</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">30</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$1,590.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$53.00/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$690.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* AP & Honors courses */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="bg-indigo-600 text-white p-3 md:p-4">
                  <h3 className="text-lg md:text-xl font-bold">AP & Honors courses</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">Hours</th>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">Price</th>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">
                          Effective Rate
                        </th>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">
                          Savings
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">5</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$400.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$80.00/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$20.00</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">10</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$760.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$76.00/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$80.00</td>
                      </tr>
                      <tr>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">20</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$1,340.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$67.00/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$340.00</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">30</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$1,750.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$58.33/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$770.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* College-level courses */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="bg-indigo-600 text-white p-3 md:p-4">
                  <h3 className="text-lg md:text-xl font-bold">College-level courses</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">Hours</th>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">Price</th>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">
                          Effective Rate
                        </th>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">
                          Savings
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">5</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$400.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$80.00/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$20.00</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">10</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$760.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$76.00/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$80.00</td>
                      </tr>
                      <tr>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">20</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$1,340.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$67.00/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$340.00</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">30</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$1,760.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$58.67/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$760.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Programming courses */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="bg-indigo-600 text-white p-3 md:p-4">
                  <h3 className="text-lg md:text-xl font-bold">Programming courses</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">Hours</th>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">Price</th>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">
                          Effective Rate
                        </th>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">
                          Savings
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">5</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$400.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$80.00/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$20.00</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">10</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$760.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$76.00/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$80.00</td>
                      </tr>
                      <tr>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">20</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$1,340.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$67.00/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$340.00</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">30</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$1,760.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$58.67/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$760.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Test Preparation */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="bg-indigo-600 text-white p-3 md:p-4">
                  <h3 className="text-lg md:text-xl font-bold">Test Preparation</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">Hours</th>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">Price</th>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">
                          Effective Rate
                        </th>
                        <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">
                          Savings
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">5</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$500.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$100.00/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$25.00</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">10</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$950.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$95.00/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$100.00</td>
                      </tr>
                      <tr>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">20</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$1,680.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$84.00/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$420.00</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">30</td>
                        <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">$2,210.00</td>
                        <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">$73.67/hour</td>
                        <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">$940.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Details */}
        <section className="py-12 md:py-16 px-4 md:px-6 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-900 text-center mb-8 text-balance">
              Payment Details
            </h2>

            <div className="space-y-4 md:space-y-6 text-gray-700">
              <div className="text-sm md:text-base">
                <span className="font-semibold text-indigo-800">At booking:</span> All sessions booked through Acuity
                scheduling system are payable at the time of booking.
              </div>
              <div className="text-sm md:text-base">
                <span className="font-semibold text-indigo-800">Packages:</span> Package payments are accepted via
                Venmo, Cash App, and Zelle. After booking, you'll receive an invoice with detailed payment instructions
                and your unique scheduling code.
              </div>
              <div className="text-sm md:text-base">
                <span className="font-semibold text-indigo-800">Validity:</span> Package hours are valid for 365 days
                from the date the package code is sent to your email.
              </div>
              <div className="text-sm md:text-base">
                <span className="font-semibold text-indigo-800">Refunds:</span> For detailed refund information, please
                refer to our{" "}
                <Link href="/terms" className="text-indigo-600 hover:text-indigo-800 underline">
                  Terms and Conditions
                </Link>
                .
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
