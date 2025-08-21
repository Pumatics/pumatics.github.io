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
    {% assign rate = category[1].rate %}
    <tr>
      <td>{{ category[1].description }}</td>
      <td>{% include format_money.html amount=rate suffix='/hour' %}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

## Package Discounts

Package benefits:
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
          <th>Effective Rate</th>
          <th>Savings</th>
        </tr>
      </thead>
      <tbody>
        {% for package in site.data.pricing.packages %}
        {% assign original = package.hours | times: base_rate %}
        {% assign discount_amount = original | times: package.discount %}
        {% assign package_price = original | minus: discount_amount %}
        {%- comment -%} Round to nearest $10 {%- endcomment -%}
        {% assign price_div10 = package_price | divided_by: 10.0 %}
        {% assign rounded_price = price_div10 | round | times: 10 %}
        {% assign effective_rate = rounded_price | divided_by: package.hours %}
        {% assign savings = original | minus: rounded_price %}

        <tr>
          <td>{{ package.hours }}</td>
          <td>{% include format_money.html amount=rounded_price %}</td>
          <td>{% include format_money.html amount=effective_rate suffix='/hour' %}</td>
          <td class="savings">{% include format_money.html amount=savings %}</td>
        </tr>
        {% endfor %}
      </tbody>
    </table>
  </div>
  {% endfor %}
</div>

## Payment Details

- **At booking:** All sessions booked through Acuity scheduling system are payable at the time of booking.
- **Packages:** Package payments are accepted via Venmo, Cash App, and Zelle. After booking, you'll receive an invoice with detailed payment instructions and your unique scheduling code.
- **Validity:** Package hours are valid for 365 days from the date the package code is sent to your email.
- **Refunds:** For detailed refund information, please refer to our [Terms and Conditions](/terms-and-conditions/#refund-policy).