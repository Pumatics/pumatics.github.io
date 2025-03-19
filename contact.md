---
layout: default
title: Contact Us
permalink: /contact/
---

# Contact Pumatics

We're here to help you achieve your academic goals. Reach out to schedule a free consultation or learn more about our services.

## Get in Touch

<div class="contact-methods">
    <div class="contact-method">
        <h3>📧 Email</h3>
        <p><a href="mailto:info@pumatics.com">info@pumatics.com</a></p>
    </div>
    
    <div class="contact-method">
        <h3>📱 Phone</h3>
        <p>(650) 209-0336</p>
    </div>
</div>

## Schedule a Free Consultation

Interested in our tutoring services?

<form action="https://formspree.io/f/{{ site.social.formspree_id }}" method="POST" class="contact-form">
    <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
    </div>
    
    <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </div>
    
    <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone">
    </div>
    
    <div class="form-group">
        <label for="subject">Subject Needed:</label>
        <select id="subject" name="subject">
            <option value="">Select a subject...</option>
            {% for category in site.data.subjects %}
            <optgroup label="{{ category[1].name }}">
                {% for subject in category[1].subjects %}
                <option value="{{ subject }}">{{ subject }}</option>
                {% endfor %}
            </optgroup>
            {% endfor %}
        </select>
    </div>
    
    <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
    </div>
    
    <div class="form-group">
        <label for="preferred-time">Preferred Consultation Time:</label>
        <input type="text" id="preferred-time" name="preferred-time" placeholder="e.g., Weekdays after 4pm">
    </div>
    
    <button type="submit" class="btn btn-primary" style="background-color: #3498db; color: #ffffff !important;">Request Consultation</button>
</form>