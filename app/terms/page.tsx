import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-indigo-800 text-center mb-12">Terms and Conditions</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                By utilizing our services, all clients hereby acknowledge and agree to adhere strictly to the terms and
                conditions set forth herein. Any violation of these policies may lead to consequences as detailed in
                this document, including, but not limited to, termination of services, imposition of additional fees,
                and forfeiture of booking privileges.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">No Shows</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Clients are obliged to arrive punctually for their scheduled tutoring appointments. A grace period of 15
                minutes will be permitted from the scheduled start time. Should a client fail to arrive within this
                15-minute interval, they will be classified as a "no-show." While tutors may opt to continue the session
                if the client arrives more than 15 minutes late, they are not obligated to do so.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In the occurrence of a no-show, the client will not qualify for rescheduling or reimbursement.
                Conversely, if a tutor arrives late, the client is encouraged to contact us to explore alternative
                arrangements, including rescheduling or extending the meeting duration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Cancellation/Rescheduling</h2>
              <p className="text-gray-700 leading-relaxed">
                Clients must cancel or reschedule their appointments at least 4 hours before the scheduled start time.
                Notice within this timeframe is necessary to maintain eligibility for rescheduling or a refund. In
                emergencies or other extenuating circumstances, clients may contact us at (650) 209-0336 or via email at
                info@pumatics.com to request a cancellation or rescheduling. While we will endeavor to accommodate such
                requests, no guarantees of availability can be extended. Clients will not face penalties for
                unsuccessful cancellation attempts resulting from internal communication errors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Refund Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Clients are responsible for remitting a cancellation fee for sessions canceled with less than 4 hours
                notice. The fee is based on the session's scheduled duration:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>
                  For sessions of 1 hour or longer, the cancellation fee will be equivalent to 1 hour at the standard or
                  package rate, depending on the client's purchase and subject area.
                </li>
                <li>
                  For sessions of 30 minutes, the cancellation fee will be equivalent to the 30-minute rate, based on
                  the standard or package rate, depending on the client's purchase and subject area.
                </li>
                <li>In cases of no-show, clients will be charged 100% of the session cost, regardless of duration.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Student Packages</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Clients may request a refund for unused tutoring package hours, provided the package remains valid and
                has not expired. Refund calculations will involve deducting the cost of utilized hours at the standard
                rate from the total package cost.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For instance, if a client acquires an AP & Honors Online Student Package (10 Hours) for $720 and
                subsequently requests a refund after utilizing three hours, the calculation would proceed as follows:
                the cost of three sessions (3 x $80 = $240) would be subtracted from the total, yielding a refund of
                $720 - $240 = $480.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Ending A Meeting Early</h2>
              <p className="text-gray-700 leading-relaxed">
                Should a client elect to conclude a scheduled meeting before the established end time, they will still
                be liable for the full payment corresponding to the initially planned duration of the session. If a
                tutor terminates the session early, they will arrange to reschedule the remaining time with the client
                at a mutually convenient time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">
                Extending A Meeting Beyond The Booked Time Slot
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Suppose a client desires to extend a meeting beyond the initially booked timeframe. In that case, the
                additional time must be purchased before executing the meeting extension.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Modifications to Terms and Conditions</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to update or modify these terms and conditions at any time without prior notice.
                Any changes will be effective immediately upon being posted to our website or communicated to clients.
                Continued use of our services after any modifications constitutes acceptance of the updated terms.
                Clients are encouraged to review the terms and conditions periodically to stay informed of any updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Package Expiration</h2>
              <p className="text-gray-700 leading-relaxed">
                Please note that all packages will expire 365 days from the date the package is added to the client's
                account, which may differ slightly from the purchase date.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
