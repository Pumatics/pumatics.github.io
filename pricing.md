---
layout: default
title: Tutoring Rates
permalink: /pricing/
---

# Tutoring Rates

At Pumatics, we offer competitive rates for high-quality, personalized tutoring. Our rates are structured based on course level and complexity.

<div class="pricing-container">
  <h2>Standard Hourly Rates</h2>
  <div class="pricing-cards">
    {% for category in site.data.pricing.standard_rates %}
    <div class="pricing-card">
      <div class="pricing-header">
        <h3>{{ category[1].description }}</h3>
        <div class="price">$<span>{{ category[1].rate }}</span>/hour</div>
      </div>
      <div class="pricing-features">
        {% if category[1].features %}
          <ul>
          {% for feature in category[1].features %}
            <li>{{ feature }}</li>
          {% endfor %}
          </ul>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>

  <h2>Package Rates <span class="save-tag">Save More!</span></h2>
  <p class="package-intro">Pre-purchase hours at discounted rates for greater savings.</p>
  
  <div class="pricing-table-container">
    {% for category in site.data.pricing.standard_rates %}
    <div class="pricing-section">
      <h3>{{ category[1].description }} Packages</h3>
      {% assign base_rate = category[1].rate %}
      
      <table class="pricing-table">
        <thead>
          <tr>
            <th>Package Hours</th>
            <th>Total Price</th>
            <th>You Save</th>
            <th>Equivalent Rate</th>
          </tr>
        </thead>
        <tbody>
          {% for package in category[1].packages %}
          {% assign original = package.hours | times: base_rate %}
          {% assign savings = original | minus: package.price %}
          {% assign equivalent_rate = package.price | divided_by: package.hours | round: 0 %}
          <tr>
            <td>{{ package.hours }} hours</td>
            <td>${{ package.price }}</td>
            <td class="savings">${{ savings }}</td>
            <td>${{ equivalent_rate }}/hour</td>
          </tr>
          {% endfor %}
        </tbody>
      </table>
    </div>
    {% endfor %}
  </div>
</div>

## Payment Terms

<div class="payment-terms-container">
  <div class="payment-term">
    <div class="term-icon">💳</div>
    <div class="term-text">Payment is required at the time of booking</div>
  </div>
  
  <div class="payment-term">
    <div class="term-icon">💰</div>
    <div class="term-text">We accept all major credit cards, PayPal, and Venmo</div>
  </div>
  
  <div class="payment-term">
    <div class="term-icon">⏱️</div>
    <div class="term-text">{{ site.data.pricing.package_note }}</div>
  </div>
  
  <div class="payment-term">
    <div class="term-icon">↩️</div>
    <div class="term-text">Unused package hours are refundable at the standard hourly rate</div>
  </div>
</div>

<div class="cta-container">
  <a href="/contact" class="btn btn-primary">Schedule a Free Consultation</a>
</div>