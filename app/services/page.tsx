"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ServicesPage() {
  const [expandedCards, setExpandedCards] = useState<string[]>([])

  const toggleCard = (cardId: string) => {
    setExpandedCards((prev) => (prev.includes(cardId) ? prev.filter((id) => id !== cardId) : [...prev, cardId]))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="pt-12 md:pt-20">
        {/* Header Section */}
        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-900 mb-6 text-balance">
              Our Tutoring Services
            </h1>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We provide specialized tutoring in STEM subjects for middle school through college students. Our programs
              focus on building strong foundations and helping students achieve their academic goals.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-8 md:py-12 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {/* Middle School */}
              <div className="bg-indigo-800 rounded-lg p-4 md:p-6 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                  <img
                    src="/middle-school-students-studying-math.png"
                    alt="Middle school students"
                    className={`rounded-lg object-cover transition-all duration-300 mx-auto sm:mx-0 ${
                      expandedCards.includes("middle-school")
                        ? "w-24 h-24 md:w-32 md:h-32"
                        : "w-16 h-16 md:w-20 md:h-20"
                    }`}
                  />
                  <div className="text-white text-center sm:text-left flex-1">
                    <h3 className="text-lg md:text-xl font-bold mb-2">MIDDLE SCHOOL</h3>
                    {!expandedCards.includes("middle-school") && (
                      <ul className="space-y-1.5 text-base md:text-lg leading-relaxed">
                        <li>• Middle School Math</li>
                        <li>• Middle School General Science</li>
                      </ul>
                    )}
                    <button
                      className="text-sm md:text-base text-blue-200 hover:text-white mt-3 block mx-auto sm:mx-0 font-medium"
                      onClick={() => toggleCard("middle-school")}
                    >
                      {expandedCards.includes("middle-school") ? "SHOW LESS" : "SEE MORE"} &gt;
                    </button>
                  </div>
                </div>

                {expandedCards.includes("middle-school") && (
                  <div className="text-white text-base md:text-lg text-center sm:text-left leading-relaxed">
                    <ul className="space-y-1.5">
                      <li>• Middle School Math</li>
                      <li>• Middle School General Science</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* High School (Non-AP/Honors) */}
              <div className="bg-indigo-800 rounded-lg p-4 md:p-6 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                  <img
                    src="/high-school-geometry-tools-compass.png"
                    alt="High school geometry"
                    className={`rounded-lg object-cover transition-all duration-300 mx-auto sm:mx-0 ${
                      expandedCards.includes("high-school") ? "w-24 h-24 md:w-32 md:h-32" : "w-16 h-16 md:w-20 md:h-20"
                    }`}
                  />
                  <div className="text-white text-center sm:text-left flex-1">
                    <h3 className="text-lg md:text-xl font-bold mb-2">HIGH SCHOOL</h3>
                    <h4 className="text-base md:text-lg font-semibold">(Non-AP/Honors)</h4>
                    <button
                      className="text-sm md:text-base text-blue-200 hover:text-white mt-3 block mx-auto sm:mx-0 font-medium"
                      onClick={() => toggleCard("high-school")}
                    >
                      {expandedCards.includes("high-school") ? "SHOW LESS" : "SEE MORE"} &gt;
                    </button>
                  </div>
                </div>

                {expandedCards.includes("high-school") && (
                  <div className="text-white text-base md:text-lg text-center sm:text-left leading-relaxed">
                    <ul className="space-y-1.5">
                      <li>• Algebra I</li>
                      <li>• Geometry</li>
                      <li>• Algebra II / Trigonometry</li>
                      <li>• Precalculus / Math Analysis</li>
                      <li>• Physics</li>
                      <li>• Chemistry</li>
                      <li>• Biology</li>
                      <li>• High School General Science</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* AP & Honors */}
              <div className="bg-indigo-800 rounded-lg p-4 md:p-6 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                  <img
                    src="/math-equations-on-chalkboard.png"
                    alt="Math equations"
                    className={`rounded-lg object-cover transition-all duration-300 mx-auto sm:mx-0 ${
                      expandedCards.includes("ap-honors") ? "w-24 h-24 md:w-32 md:h-32" : "w-16 h-16 md:w-20 md:h-20"
                    }`}
                  />
                  <div className="text-white text-center sm:text-left flex-1">
                    <h3 className="text-lg md:text-xl font-bold mb-2">AP & HONORS</h3>
                    <button
                      className="text-sm md:text-base text-blue-200 hover:text-white mt-3 block mx-auto sm:mx-0 font-medium"
                      onClick={() => toggleCard("ap-honors")}
                    >
                      {expandedCards.includes("ap-honors") ? "SHOW LESS" : "READ MORE"} &gt;
                    </button>
                  </div>
                </div>

                {expandedCards.includes("ap-honors") && (
                  <div className="text-white text-base md:text-lg text-center sm:text-left leading-relaxed">
                    <p className="mb-4 text-blue-100">
                      Our AP and Honors tutoring program helps students master advanced material and prepare for exams.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-3 text-lg">Honors Courses:</h5>
                        <ul className="space-y-1.5">
                          <li>• Honors Geometry</li>
                          <li>• Honors Algebra II / Trigonometry</li>
                          <li>• Honors Precalculus / Math Analysis</li>
                          <li>• Honors Physics</li>
                          <li>• Honors Chemistry</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-3 text-lg">AP Courses:</h5>
                        <ul className="space-y-1.5">
                          <li>• AP Physics 1</li>
                          <li>• AP Physics 2</li>
                          <li>• AP Physics C - Mechanics</li>
                          <li>• AP Physics C - Electricity & Magnetism</li>
                          <li>• AP Chemistry</li>
                          <li>• AP Biology</li>
                          <li>• AP Computer Science Principles</li>
                          <li>• AP Computer Science A</li>
                          <li>• AP Statistics</li>
                          <li>• AP Precalculus</li>
                          <li>• AP Calculus AB</li>
                          <li>• AP Calculus BC</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Computer Programming */}
              <div className="bg-indigo-800 rounded-lg p-4 md:p-6 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                  <img
                    src="/person-coding.png"
                    alt="Programming"
                    className={`rounded-lg object-cover transition-all duration-300 mx-auto sm:mx-0 ${
                      expandedCards.includes("programming") ? "w-24 h-24 md:w-32 md:h-32" : "w-16 h-16 md:w-20 md:h-20"
                    }`}
                  />
                  <div className="text-white text-center sm:text-left flex-1">
                    <h3 className="text-lg md:text-xl font-bold mb-2">COMPUTER</h3>
                    <h4 className="text-base md:text-lg font-semibold">PROGRAMMING</h4>
                    <button
                      className="text-sm md:text-base text-blue-200 hover:text-white mt-3 block mx-auto sm:mx-0 font-medium"
                      onClick={() => toggleCard("programming")}
                    >
                      {expandedCards.includes("programming") ? "SHOW LESS" : "READ MORE"} &gt;
                    </button>
                  </div>
                </div>

                {expandedCards.includes("programming") && (
                  <div className="text-white text-base md:text-lg text-center sm:text-left leading-relaxed">
                    <ul className="space-y-1.5">
                      <li>• Introduction to Python Programming</li>
                      <li>• Introduction to Java Programming</li>
                      <li>• Introduction to C/C++ Programming</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* College */}
              <div className="bg-indigo-800 rounded-lg p-4 md:p-6 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                  <img
                    src="/college-student-with-books.png"
                    alt="College student"
                    className={`rounded-lg object-cover transition-all duration-300 mx-auto sm:mx-0 ${
                      expandedCards.includes("college") ? "w-24 h-24 md:w-32 md:h-32" : "w-16 h-16 md:w-20 md:h-20"
                    }`}
                  />
                  <div className="text-white text-center sm:text-left flex-1">
                    <h3 className="text-lg md:text-xl font-bold mb-2">COLLEGE</h3>
                    <button
                      className="text-sm md:text-base text-blue-200 hover:text-white mt-3 block mx-auto sm:mx-0 font-medium"
                      onClick={() => toggleCard("college")}
                    >
                      {expandedCards.includes("college") ? "SHOW LESS" : "READ MORE"} &gt;
                    </button>
                  </div>
                </div>

                {expandedCards.includes("college") && (
                  <div className="text-white text-base md:text-lg text-center sm:text-left leading-relaxed">
                    <ul className="space-y-1.5">
                      <li>• Calculus I</li>
                      <li>• Calculus II</li>
                      <li>• Multivariable Calculus</li>
                      <li>• Elementary Linear Algebra</li>
                      <li>• Elementary Differential Equations</li>
                      <li>• Introduction to Probability</li>
                      <li>• Introduction to Statistics</li>
                      <li>• Introduction to Abstract Mathematics</li>
                      <li>• Classical Physics - Mechanics</li>
                      <li>• Classical Physics - Electromagnetism</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Test Prep */}
              <div className="bg-indigo-800 rounded-lg p-4 md:p-6 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                  <img
                    src="/student-taking-test-with-pencil.png"
                    alt="Test preparation"
                    className={`rounded-lg object-cover transition-all duration-300 mx-auto sm:mx-0 ${
                      expandedCards.includes("test-prep") ? "w-24 h-24 md:w-32 md:h-32" : "w-16 h-16 md:w-20 md:h-20"
                    }`}
                  />
                  <div className="text-white text-center sm:text-left flex-1">
                    <h3 className="text-lg md:text-xl font-bold mb-2">TEST PREP</h3>
                    <button
                      className="text-sm md:text-base text-blue-200 hover:text-white mt-3 block mx-auto sm:mx-0 font-medium"
                      onClick={() => toggleCard("test-prep")}
                    >
                      {expandedCards.includes("test-prep") ? "SHOW LESS" : "READ MORE"} &gt;
                    </button>
                  </div>
                </div>

                {expandedCards.includes("test-prep") && (
                  <div className="text-white text-base md:text-lg text-center sm:text-left leading-relaxed">
                    <ul className="space-y-1.5">
                      <li>• HSPT Math</li>
                      <li>• SSAT Math</li>
                      <li>• ISEE Math</li>
                      <li>• SAT Math</li>
                      <li>• ACT Math</li>
                      <li>• CBEST Math</li>
                      <li>• CSET Math</li>
                      <li>• GRE Math</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Session Format */}
        <section className="py-12 md:py-16 px-4 md:px-6 bg-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-900 mb-8 text-balance">
              Session Format
            </h2>
            <div className="text-left max-w-2xl mx-auto space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-800 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-base md:text-lg leading-relaxed">
                  <span className="font-semibold text-indigo-900">One-on-One:</span>
                  <span className="text-gray-700"> Individual attention for focused learning</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-800 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-base md:text-lg leading-relaxed">
                  <span className="font-semibold text-indigo-900">Online Platform:</span>
                  <span className="text-gray-700"> Digital whiteboard and screen sharing</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-800 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-base md:text-lg leading-relaxed">
                  <span className="font-semibold text-indigo-900">Flexible Hours:</span>
                  <span className="text-gray-700"> Available in all time zones</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
