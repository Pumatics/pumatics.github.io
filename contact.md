---
layout: default
title: Contact Us
permalink: /contact/
---

# Contact Pumatics

We're here to help you achieve your academic goals. Choose the best way to reach us below.

## Book a Session

Schedule your tutoring session here.

<div class="cta-container">
    <a href="https://app.acuityscheduling.com/schedule.php?owner=21389694&ref=booking_button" target="_blank" class="acuity-embed-button" style="background: #5fb8b9; color: #fff; padding: 8px 12px; border: 0px; -webkit-box-shadow: 0 -2px 0 rgba(0,0,0,0.15) inset;-moz-box-shadow: 0 -2px 0 rgba(0,0,0,0.15) inset;box-shadow: 0 -2px 0 rgba(0,0,0,0.15) inset;border-radius: 4px; text-decoration: none; display: inline-block;">Schedule Appointment</a>
    <link rel="stylesheet" href="https://embed.acuityscheduling.com/embed/button/21389694.css" id="acuity-button-styles" />
    <script src="https://embed.acuityscheduling.com/embed/button/21389694.js" async></script>
</div>

## Other Contact Methods

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

## Have Questions?

Fill out the form below and we'll get back to you shortly.

<form action="https://formspree.io/f/{{ site.social.formspree_id }}" method="POST" class="contact-form" id="consultationForm">
    <div class="form-group">
        <label for="name">Name: <span class="required">*</span></label>
        <input type="text" id="name" name="name" required>
        <div class="error-message" id="nameError">Please enter your name</div>
    </div>
    
    <div class="form-group">
        <label for="email">Email: <span class="required">*</span></label>
        <input type="email" id="email" name="email" required>
        <div class="error-message" id="emailError">Please enter a valid email address</div>
    </div>
    
    <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" placeholder="(XXX) XXX-XXXX">
    </div>
    
    <div class="form-group">
        <label for="subject">Subject Needed: <span class="required">*</span></label>
        <select id="subject" name="subject" required>
            <option value="">Select a subject...</option>
            {% for category in site.data.subjects %}
            <optgroup label="{{ category[1].name }}">
                {% for subject in category[1].subjects %}
                <option value="{{ subject }}">{{ subject }}</option>
                {% endfor %}
            </optgroup>
            {% endfor %}
        </select>
        <div class="error-message" id="subjectError">Please select a subject</div>
    </div>
    
    <div class="form-group">
        <label for="message">Message: <span class="required">*</span></label>
        <textarea id="message" name="message" rows="5" required></textarea>
        <div class="error-message" id="messageError">Please enter your message</div>
    </div>
    
    <div class="form-group">
        <label for="preferred-time">Preferred Consultation Time:</label>
        <input type="text" id="preferred-time" name="preferred-time" placeholder="e.g., Weekdays after 4pm">
    </div>
    
    <button type="submit" class="acuity-embed-button" style="background: #5fb8b9; color: #fff; padding: 8px 12px; border: 0px; -webkit-box-shadow: 0 -2px 0 rgba(0,0,0,0.15) inset;-moz-box-shadow: 0 -2px 0 rgba(0,0,0,0.15) inset;box-shadow: 0 -2px 0 rgba(0,0,0,0.15) inset;border-radius: 4px; text-decoration: none; display: inline-block; cursor: pointer;">Request Consultation</button>
</form>

<style>
.required {
    color: #e74c3c;
    margin-left: 4px;
}

.error-message {
    color: #e74c3c;
    font-size: 0.9em;
    margin-top: 4px;
    display: none;
}

.form-group input.invalid,
.form-group select.invalid,
.form-group textarea.invalid {
    border-color: #e74c3c;
}

.form-group input.invalid:focus,
.form-group select.invalid:focus,
.form-group textarea.invalid:focus {
    border-color: #e74c3c;
    box-shadow: 0 0 5px rgba(231, 76, 60, 0.3);
}
</style>

<script>
document.getElementById('consultationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset error messages
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(el => {
        el.classList.remove('invalid');
    });
    
    let isValid = true;
    
    // Validate name
    const nameInput = document.getElementById('name');
    if (!nameInput.value.trim()) {
        document.getElementById('nameError').style.display = 'block';
        nameInput.classList.add('invalid');
        isValid = false;
    }
    
    // Validate email
    const emailInput = document.getElementById('email');
    if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
        document.getElementById('emailError').style.display = 'block';
        emailInput.classList.add('invalid');
        isValid = false;
    }
    
    // Validate subject
    const subjectInput = document.getElementById('subject');
    if (!subjectInput.value) {
        document.getElementById('subjectError').style.display = 'block';
        subjectInput.classList.add('invalid');
        isValid = false;
    }
    
    // Validate message
    const messageInput = document.getElementById('message');
    if (!messageInput.value.trim()) {
        document.getElementById('messageError').style.display = 'block';
        messageInput.classList.add('invalid');
        isValid = false;
    }
    
    if (isValid) {
        this.submit();
    }
});
</script>