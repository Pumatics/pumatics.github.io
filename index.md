---
layout: default
title: Home
---

# Welcome to Pumatics

## Passion. Experience. Diligence.

At Pumatics, we champion the principle of tailored education. Our primary commitment is to provide one-on-one tutoring sessions that cater to each student's unique academic needs. George, the founder of Pumatics, brings a rich tapestry of educational experience. With degrees in Mathematics, Electrical Engineering, and Physics, and as a current Ph.D. student in computational and applied mathematics at Rice University, his depth of knowledge in STEM subjects ensures that students receive high-quality mentorship.

## Why Choose Pumatics?

- **Expert Knowledge**: Deep understanding of mathematics, physics, computer science, and other STEM subjects
- **Focused Attention**: One-on-one online sessions tailored to your needs
- **Clear Communication**: Complex topics explained in an understandable way
- **Flexible Schedule**: Online sessions that work with your time zone

## Our Approach

At Pumatics, we believe in building strong relationships with our students. Our greatest joy is witnessing students actively engage and thrive during their sessions. We consistently emphasize the importance of rapport and confidence-building in the subjects they tackle.

## Our Services

We offer specialized tutoring across multiple academic levels:

{% for category in site.data.subjects limit:4 %}
### {{ category[1].name }}
{% for subject in category[1].subjects limit:3 %}
- {{ subject }}
{% endfor %}
{% if category[1].subjects.size > 3 %}
- *and more...*
{% endif %}

{% endfor %}

[View All Services](/services){: .btn .btn-primary style="color: white; background-color: #3498db; border-color: #3498db; margin-right: 10px;"}
[View Pricing](/pricing){: .btn .btn-primary style="color: white; background-color: #3498db; border-color: #3498db;"}

## Get Started

Whether you aim to boost your scores in the SAT/ACT exams, want a deeper understanding of computer science, or are looking to excel in AP and college-level subjects, George and the Pumatics team are here to guide you.

<a href="https://app.acuityscheduling.com/schedule.php?owner=21389694&appointmentType=19109208&ref=booking_button" target="_blank" class="acuity-embed-button" style="background: #5fb8b9; color: #fff; padding: 8px 12px; border: 0px; -webkit-box-shadow: 0 -2px 0 rgba(0,0,0,0.15) inset;-moz-box-shadow: 0 -2px 0 rgba(0,0,0,0.15) inset;box-shadow: 0 -2px 0 rgba(0,0,0,0.15) inset;border-radius: 4px; text-decoration: none; display: inline-block;">Schedule a Discovery Meeting</a>
<link rel="stylesheet" href="https://embed.acuityscheduling.com/embed/button/21389694.css" id="acuity-button-styles" />
<script src="https://embed.acuityscheduling.com/embed/button/21389694.js" async></script>