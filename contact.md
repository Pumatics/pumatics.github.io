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

<!-- Read the Formbutton docs at formspree.io/formbutton/docs. See more examples at codepen.io/formspree -->
<script src="https://formspree.io/js/formbutton-v1.min.js" defer></script>
<script>
  /* paste this line in verbatim */
  window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
  /* customize formbutton below*/     
  formbutton("create", {
    action: "https://formspree.io/f/{{ site.social.formspree_id }}",
    title: "How can we help?",
    fields: [
      { 
        type: "text",
        label: "Name:",
        name: "name",
        required: true,
        placeholder: "Your name"
      },
      { 
        type: "email", 
        label: "Email:", 
        name: "email",
        required: true,
        placeholder: "your@email.com"
      },
      {
        type: "tel",
        label: "Phone:",
        name: "phone",
        placeholder: "(XXX) XXX-XXXX"
      },
      {
        type: "select",
        label: "Subject Needed:",
        name: "subject",
        required: true,
        options: [
          { label: "Select a subject...", value: "" },
          { label: "AP Calculus", value: "AP Calculus" },
          { label: "AP Physics", value: "AP Physics" },
          { label: "AP Chemistry", value: "AP Chemistry" },
          { label: "AP Biology", value: "AP Biology" },
          { label: "AP Computer Science", value: "AP Computer Science" },
          { label: "AP Statistics", value: "AP Statistics" },
          { label: "AP Economics", value: "AP Economics" },
          { label: "AP English", value: "AP English" },
          { label: "AP History", value: "AP History" },
          { label: "Honors Math", value: "Honors Math" },
          { label: "Honors Science", value: "Honors Science" },
          { label: "College Math", value: "College Math" },
          { label: "College Physics", value: "College Physics" },
          { label: "College Chemistry", value: "College Chemistry" },
          { label: "College Biology", value: "College Biology" },
          { label: "Other", value: "Other" }
        ]
      },
      {
        type: "textarea",
        label: "Message:",
        name: "message",
        required: true,
        placeholder: "Tell us about your needs and goals"
      },
      {
        type: "text",
        label: "Preferred Consultation Time:",
        name: "preferred-time",
        placeholder: "e.g., Weekdays after 4pm"
      },
      { type: "submit" }      
    ],
    styles: {
      title: {
        backgroundColor: "#5fb8b9"
      },
      button: {
        backgroundColor: "#5fb8b9"
      }
    }
  });
</script>

<button onclick="formbutton('showForm')" class="acuity-embed-button" style="background: #5fb8b9; color: #fff; padding: 8px 12px; border: 0px; -webkit-box-shadow: 0 -2px 0 rgba(0,0,0,0.15) inset;-moz-box-shadow: 0 -2px 0 rgba(0,0,0,0.15) inset;box-shadow: 0 -2px 0 rgba(0,0,0,0.15) inset;border-radius: 4px; text-decoration: none; display: inline-block; cursor: pointer;">Send Message</button>

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