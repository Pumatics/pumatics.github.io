---
layout: default
title: Our Services
permalink: /services/
---

# Our Tutoring Services

We provide specialized tutoring in STEM subjects for middle school through college students. Our programs focus on building strong foundations and helping students achieve their academic goals.

{% for category in site.data.subjects %}
## {{ category[1].name }}
{% if category[0] == 'ap_honors' %}
Our AP and Honors tutoring program helps students master advanced material and prepare for exams.
{% endif %}

{% for subject in category[1].subjects %}
- {{ subject }}
{% endfor %}

{% endfor %}

## Session Format

- **One-on-One**: Individual attention for focused learning
- **Online Platform**: Digital whiteboard and screen sharing
- **Flexible Hours**: Available in all time zones

[Schedule a Free Consultation](/contact){: .btn .btn-primary} 