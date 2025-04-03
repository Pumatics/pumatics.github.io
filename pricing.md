---
layout: default
title: Tutoring Rates
permalink: /pricing/
---

# Tutoring Rates

Hourly rates and package discounts for all tutoring levels.

## Standard Rates

<table class="pricing-table">
  <thead>
    <tr>
      <th>Course Level</th>
      <th>Rate</th>
    </tr>
  </thead>
  <tbody>
    {% for category in site.data.pricing.standard_rates %}
    <tr>
      <td>{{ category[1].description }}</td>
      <td>${{ category[1].rate }}/hour</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

## Package Discounts

Package benefits:
- Valid for 365 days from activation
- Flexible scheduling
- Refund available for unused hours

<div class="package-container">
  {% for category in site.data.pricing.standard_rates %}
  <div class="package-section">
    <h3>{{ category[1].description }}</h3>
    {% assign base_rate = category[1].rate %}
    
    <table class="pricing-table">
      <thead>
        <tr>
          <th>Hours</th>
          <th>Price</th>
          <th>Savings</th>
        </tr>
      </thead>
      <tbody>
        {% for package in category[1].packages %}
        {% assign original = package.hours | times: base_rate %}
        {% assign savings = original | minus: package.price %}
        <tr>
          <td>{{ package.hours }}</td>
          <td>${{ package.price }}</td>
          <td class="savings">${{ savings }}</td>
        </tr>
        {% endfor %}
      </tbody>
    </table>
  </div>
  {% endfor %}
</div>

<style>
.package-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  margin: var(--spacing-xl) 0;
}

.package-section {
  background-color: var(--light-bg);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  padding: var(--spacing-xl);
}

.package-section h3 {
  color: var(--secondary-color);
  margin-top: 0;
  margin-bottom: var(--spacing-xl);
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
}

.pricing-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: var(--spacing-md);
  font-size: 1rem;
}

.pricing-table th,
.pricing-table td {
  padding: var(--spacing-md);
  text-align: left;
  border-bottom: 1px solid var(--border-color);
  line-height: 1.5;
}

.pricing-table th {
  background-color: var(--light-bg);
  font-weight: 600;
  color: var(--primary-color);
}

.pricing-table tr:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.savings {
  color: var(--accent-color);
}

@media (max-width: 768px) {
  .pricing-table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    font-size: 0.95rem;
  }
  
  .package-section {
    margin-bottom: var(--spacing-lg);
    padding: var(--spacing-lg);
  }

  .package-section h3 {
    font-size: 1.3rem;
    margin-bottom: var(--spacing-lg);
  }

  .pricing-table th,
  .pricing-table td {
    padding: var(--spacing-sm) var(--spacing-md);
  }
}
</style>

## Payment Details

- Payment at booking
- Scheduling: All sessions booked through Acuity scheduling system
- Package payments: 
  - [Venmo](https://venmo.com/geochum)
  - [Cash App](https://cash.app/$geochum)
  - Zelle: info@pumatics.com
- After package payment, you'll receive a code to use for scheduling
- Package hours valid for 365 days from activation
- Refund available for unused hours at standard rate