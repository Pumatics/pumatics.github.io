import {
  effectiveHourly,
  formatUSD,
  packageSavings,
  packageTiers,
  standardRates,
} from "@/lib/pricing"

export function StandardRatesTable() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="bg-indigo-600 text-white p-3 md:p-4">
        <h3 className="text-lg md:text-xl font-bold">Standard Rates</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-blue-100">
            <tr>
              <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">Course Level</th>
              <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">Rate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {standardRates.map((row) => (
              <tr key={row.label}>
                <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">{row.label}</td>
                <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">${row.hourly}/hour</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function PackagePriceTables() {
  return (
    <div className="space-y-6 md:space-y-8">
      {packageTiers.map((tier) => (
        <div key={tier.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="bg-indigo-600 text-white p-3 md:p-4">
            <h3 className="text-lg md:text-xl font-bold">{tier.name}</h3>
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
                  <th className="text-left p-2 md:p-4 font-semibold text-gray-700 text-sm md:text-base">Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tier.packages.map((row, index) => (
                  <tr key={row.hours} className={index % 2 === 1 ? "bg-blue-50" : undefined}>
                    <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">{row.hours}</td>
                    <td className="p-2 md:p-4 font-semibold text-gray-900 text-sm md:text-base">
                      {formatUSD(row.price)}
                    </td>
                    <td className="p-2 md:p-4 text-gray-700 text-sm md:text-base">
                      {effectiveHourly(row.price, row.hours)}
                    </td>
                    <td className="p-2 md:p-4 text-green-600 font-semibold text-sm md:text-base">
                      {formatUSD(packageSavings(tier.hourly, row.hours, row.price))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  )
}
