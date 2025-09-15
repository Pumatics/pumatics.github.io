import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function TutorsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-indigo-800 text-center mb-12">Meet Our Tutors</h1>

          <div className="space-y-12">
            {/* Boris S. */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://i.imgur.com/fZwlRPC.jpeg"
                  alt="Boris S."
                  className="w-64 h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-indigo-800 mb-2">Boris S.</h3>
                <p className="text-indigo-600 font-semibold mb-4">
                  <strong>Subjects:</strong> Middle School Math, Middle School Science, Algebra I, Geometry, Algebra II
                  / Trigonometry, Precalculus / Math Analysis
                </p>
                <div className="text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-indigo-700">Bio:</strong> Hello! I am Boris. I am from Russia. I like
                    climbing trees, playing guitar, and the snow. I do not like pizza. My favorite topics are
                    mathematics, literature, and history. Especially mathematics, because it is beautiful and
                    interconnected. There is nothing more exciting than being stuck on a problem except for finally
                    solving it. My mission is to share my love for knowledge with my students.
                  </p>
                </div>
              </div>
            </div>

            {/* Emily B. */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://i.imgur.com/edPrjqD.jpeg"
                  alt="Emily B."
                  className="w-64 h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-indigo-800 mb-2">Emily B.</h3>
                <p className="text-indigo-600 font-semibold mb-4">
                  <strong>Subjects:</strong> AP Biology, Honors Biology
                </p>
              </div>
            </div>

            {/* George C. */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://i.imgur.com/t4V38GL.jpeg"
                  alt="George C."
                  className="w-64 h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-indigo-800 mb-2">George C.</h3>
                <p className="text-indigo-600 font-semibold mb-4">
                  <strong>Subjects:</strong> AP Calculus AB/BC, AP Physics 1/2/C, AP Statistics, AP Computer Science
                  A/Principles, SAT/ACT Math, Honors Chemistry, Chemistry
                </p>
              </div>
            </div>

            {/* Jerry V. */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://i.imgur.com/hVIQY5T.jpeg"
                  alt="Emily B."
                  className="w-64 h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-indigo-800 mb-2">Jerry V.</h3>
                <p className="text-indigo-600 font-semibold mb-4">
                  <strong>Subjects:</strong> AP Chemistry, Honors Chemistry, AP Computer Science Principles
                </p>
              </div>
            </div>

            {/* Vicky V. */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://i.imgur.com/1b119i6.jpeg"
                  alt="Emily B."
                  className="w-64 h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-indigo-800 mb-2">Vicky V.</h3>
                <p className="text-indigo-600 font-semibold mb-4">
                  <strong>Subjects:</strong> AP Precalculus, AP Statistics, AP Chemistry, Honors Chemistry, Biology
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
