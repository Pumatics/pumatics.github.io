import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { currentPackageRefundExample, formatUSD, packageValidityTerms } from "@/lib/pricing"
import { site } from "@/lib/site"

export default function TermsPage() {
  const example = currentPackageRefundExample()
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-indigo-800 text-center mb-12">Terms and Conditions</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                By using Pumatics services, you agree to these terms. We may update them on this page; continued use
                means you accept the current version.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Attendance</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Please arrive on time. After a 15-minute grace period, the session is a no-show. The tutor may continue
                if you arrive later, but does not have to. A no-show is charged for the full booked time and is not
                rescheduled or refunded. If the tutor is late, contact us about rescheduling or extending.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Cancellation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cancel or reschedule at least 4 hours before the start time to keep that session eligible for reschedule
                or refund. Emergencies: {site.phoneDisplay} or {site.email}. We will try to help; availability is not
                guaranteed. You are not charged if a cancel fails because of an error on our side.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Less than 4 hours’ notice is billed at the standard or package hourly rate for that purchase and
                subject:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>30-minute session: half an hour at that rate</li>
                <li>1 hour or longer: 1 hour at that rate</li>
              </ul>
            </section>

            <section id="package-refunds">
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Packages</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{packageValidityTerms}</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unused hours may be refunded while the package is still valid. Used hours are deducted at the standard
                hourly rate for that course level, not the package rate.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Example: an {example.name} {example.hours}-hour package costs {formatUSD(example.packagePrice)}. After{" "}
                {example.usedHours} hours used ({example.usedHours} × {formatUSD(example.hourly)} ={" "}
                {formatUSD(example.usedCost)}), the refund is {formatUSD(example.packagePrice)} −{" "}
                {formatUSD(example.usedCost)} = {formatUSD(example.refund)}.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Session length</h2>
              <p className="text-gray-700 leading-relaxed">
                If you end early, you still pay for the time booked. If the tutor ends early, we reschedule the rest. To
                run past the booked slot, the extra time must be purchased first.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
