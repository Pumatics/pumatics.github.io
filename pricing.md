---
layout: default
title: Tutoring Rates
permalink: /pricing/
---

# Tutoring Rates

At Pumatics, we offer competitive rates for high-quality, personalized tutoring. Our rates are structured based on course level and complexity.

## Standard Hourly Rates

{% for category in site.data.pricing.standard_rates %}
### {{ category[1].description }}
- **${{ category[1].rate }}/hour**
{% endfor %}

## Package Rates

Save more with our package options! Pre-purchase hours at discounted rates.

{% for category in site.data.pricing.standard_rates %}
### {{ category[1].description }}
{% assign base_rate = category[1].rate %}
{% for package in category[1].packages %}
{% assign original = package.hours | times: base_rate %}
{% assign savings = original | minus: package.price %}
- **{{ package.hours }}-hour package: ${{ package.price }}** (Save ${{ savings }})
{% endfor %}

{% endfor %}

## Payment Terms

- Payment is required at the time of booking
- We accept all major credit cards, PayPal, and Venmo
- {{ site.data.pricing.package_note }}
- Unused package hours are refundable at the standard hourly rate

[Schedule a Free Consultation](/contact){: .btn .btn-primary} 