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

<div class="package-tabs">
  {% for category in site.data.pricing.standard_rates %}
  <div class="package-tab {% if forloop.first %}active{% endif %}" data-category="{{ category[0] }}">
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
.package-tabs {
  margin: 20px 0;
}

.package-tab {
  display: none;
}

.package-tab.active {
  display: block;
}

@media (min-width: 768px) {
  .package-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .package-tab {
    display: block;
    flex: 1;
    min-width: 300px;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.package-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
</script>

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