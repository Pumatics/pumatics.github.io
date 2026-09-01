/** Client-facing prices and package validity. Used by /pricing and /terms. */

export const PACKAGE_VALIDITY_DAYS = 365

/** Clock starts when the client can book—not when we create the package internally. */
export const packageValidityTerms = `All packages expire ${PACKAGE_VALIDITY_DAYS} days from the date the package code is sent to the client's email. That is when they can book. If the code is sent after purchase, the extra days do not count against the ${PACKAGE_VALIDITY_DAYS} days.`

export const packageValidityPricing = `Package hours are valid for ${PACKAGE_VALIDITY_DAYS} days from the date the package code is sent to your email.`

export type PackageRow = {
  hours: number
  price: number
}

export type PackageTier = {
  id: string
  name: string
  hourly: number
  packages: PackageRow[]
}

export const standardRates: { label: string; hourly: number }[] = [
  { label: "Middle School courses", hourly: 76 },
  { label: "High School (Non-AP/Honors) courses", hourly: 76 },
  { label: "AP & Honors courses", hourly: 84 },
  { label: "College-level courses", hourly: 84 },
  { label: "Programming courses", hourly: 84 },
  { label: "Test Preparation", hourly: 105 },
]

const middleSchoolHighSchoolPackages: PackageRow[] = [
  { hours: 5, price: 360 },
  { hours: 10, price: 680 },
  { hours: 20, price: 1220 },
  { hours: 30, price: 1590 },
]

const apHonorsPackages: PackageRow[] = [
  { hours: 5, price: 400 },
  { hours: 10, price: 760 },
  { hours: 20, price: 1340 },
  { hours: 30, price: 1750 },
]

const collegeProgrammingPackages: PackageRow[] = [
  { hours: 5, price: 400 },
  { hours: 10, price: 760 },
  { hours: 20, price: 1340 },
  { hours: 30, price: 1760 },
]

const testPrepPackages: PackageRow[] = [
  { hours: 5, price: 500 },
  { hours: 10, price: 950 },
  { hours: 20, price: 1680 },
  { hours: 30, price: 2210 },
]

export const packageTiers: PackageTier[] = [
  { id: "middle-school", name: "Middle School courses", hourly: 76, packages: middleSchoolHighSchoolPackages },
  {
    id: "high-school",
    name: "High School (Non-AP/Honors) courses",
    hourly: 76,
    packages: middleSchoolHighSchoolPackages,
  },
  { id: "ap-honors", name: "AP & Honors courses", hourly: 84, packages: apHonorsPackages },
  { id: "college", name: "College-level courses", hourly: 84, packages: collegeProgrammingPackages },
  { id: "programming", name: "Programming courses", hourly: 84, packages: collegeProgrammingPackages },
  { id: "test-prep", name: "Test Preparation", hourly: 105, packages: testPrepPackages },
]

export function formatUSD(amount: number): string {
  return amount.toLocaleString("en-US", { style: "currency", currency: "USD" })
}

export function effectiveHourly(price: number, hours: number): string {
  return `$${(price / hours).toFixed(2)}/hour`
}

export function packageSavings(hourly: number, hours: number, price: number): number {
  return hourly * hours - price
}

/** Illustration on /terms: current AP & Honors 10-hour package, 3 hours used at the standard AP rate. */
export const refundExampleHoursUsed = 3
export const refundExampleTierId = "ap-honors"
export const refundExamplePackageHours = 10

export function currentPackageRefundExample() {
  const tier = packageTiers.find((t) => t.id === refundExampleTierId)
  const pkg = tier?.packages.find((p) => p.hours === refundExamplePackageHours)
  if (!tier || !pkg) {
    throw new Error("Refund example package is missing from pricing data")
  }
  const usedCost = refundExampleHoursUsed * tier.hourly
  return {
    name: tier.name,
    hours: pkg.hours,
    packagePrice: pkg.price,
    hourly: tier.hourly,
    usedHours: refundExampleHoursUsed,
    usedCost,
    refund: pkg.price - usedCost,
  }
}
