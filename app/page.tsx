import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-800 via-indigo-700 to-blue-500 text-white py-12 md:py-20 px-4 md:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">Pumatics</h1>
            <p className="text-lg md:text-xl mb-8">Expert Tutoring for STEM AP, Honors, and College Courses</p>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-400 rounded-full flex items-center justify-center">
                <img
                  src="https://i.imgur.com/EXje6lM.jpeg"
                  alt="Student with molecular model"
                  className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 order-2 lg:order-1">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto">
              <img
                src="https://i.imgur.com/yHsEEhy.jpeg"
                alt="Student in classroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-6 text-balance">Welcome to Pumatics</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-3">
                  Expert Tutoring for Academic Excellence
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Pumatics provides specialized one-on-one tutoring in STEM subjects, led by George, a Ph.D. student in
                  computational and applied mathematics at Rice University. With degrees in Mathematics, Electrical
                  Engineering, and Physics, George brings comprehensive expertise to help students excel in their
                  academic journey.
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-3">Our Teaching Approach</h3>
                <p className="text-gray-700 mb-4 text-sm md:text-base">Our tutoring methods focus on:</p>
                <ul className="space-y-2 text-gray-700 text-left max-w-2xl mx-auto lg:mx-0">
                  <li className="flex items-start text-sm md:text-base">
                    <span className="text-indigo-600 font-bold mr-2">•</span>
                    <div>
                      <strong className="text-indigo-700">Individual Instruction:</strong> Lessons tailored to each
                      student's needs
                    </div>
                  </li>
                  <li className="flex items-start text-sm md:text-base">
                    <span className="text-indigo-600 font-bold mr-2">•</span>
                    <div>
                      <strong className="text-indigo-700">Understanding:</strong> Focus on comprehension over
                      memorization
                    </div>
                  </li>
                  <li className="flex items-start text-sm md:text-base">
                    <span className="text-indigo-600 font-bold mr-2">•</span>
                    <div>
                      <strong className="text-indigo-700">Application:</strong> Practice with real problems
                    </div>
                  </li>
                  <li className="flex items-start text-sm md:text-base">
                    <span className="text-indigo-600 font-bold mr-2">•</span>
                    <div>
                      <strong className="text-indigo-700">Study Methods:</strong> Teaching effective study techniques
                    </div>
                  </li>
                  <li className="flex items-start text-sm md:text-base">
                    <span className="text-indigo-600 font-bold mr-2">•</span>
                    <div>
                      <strong className="text-indigo-700">Progress:</strong> Building skills through consistent practice
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-3">Get Started</h3>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  Ready to start tutoring? Schedule your session now.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 rounded-full font-semibold w-full sm:w-auto text-sm md:text-base">
                  SCHEDULE APPOINTMENT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
