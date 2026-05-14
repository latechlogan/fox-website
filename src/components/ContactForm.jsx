import { useState } from "react";
import { Toaster, toast } from "@pheralb/toast";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitting(true);
    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        form.reset();
        toast.success({
          text: "Message sent!",
          description: "We'll get back to you as soon as we can.",
        });
      } else {
        toast.error({
          text: "Something went wrong",
          description: "Please try again or call us at 318-330-9966.",
        });
      }
    } catch {
      toast.error({
        text: "Something went wrong",
        description: "Please try again or call us at 318-330-9966.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Toaster />
      <form
        className="contact-form"
        onSubmit={handleSubmit}
        noValidate
      >
      {/* Web3Forms access key */}
      <input
        type="hidden"
        name="access_key"
        value="2d9a63c1-c177-46f1-86bd-0f158aabbd61"
      />

      {/* Honeypot spam protection */}
      <input
        type="checkbox"
        name="botcheck"
        className="contact-form__honeypot"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* First Name */}
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="first-name">
          First Name <span className="contact-form__required" aria-hidden="true">*</span>
        </label>
        <input
          className="contact-form__input"
          type="text"
          id="first-name"
          name="first_name"
          required
          autoComplete="given-name"
        />
      </div>

      {/* Last Name */}
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="last-name">
          Last Name <span className="contact-form__required" aria-hidden="true">*</span>
        </label>
        <input
          className="contact-form__input"
          type="text"
          id="last-name"
          name="last_name"
          required
          autoComplete="family-name"
        />
      </div>

      {/* Phone */}
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="phone">
          Phone <span className="contact-form__required" aria-hidden="true">*</span>
        </label>
        <input
          className="contact-form__input"
          type="tel"
          id="phone"
          name="phone"
          required
          autoComplete="tel"
        />
      </div>

      {/* Email */}
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="email">Email</label>
        <input
          className="contact-form__input"
          type="email"
          id="email"
          name="email"
          autoComplete="email"
        />
      </div>

      {/* Topic */}
      <fieldset className="contact-form__fieldset">
        <legend className="contact-form__legend">
          Topic <span className="contact-form__required" aria-hidden="true">*</span>
        </legend>
        <div className="contact-form__radio-group">
          <label className="contact-form__radio-label">
            <input className="contact-form__radio" type="radio" name="topic" value="General Inquiry" required />
            General Inquiry
          </label>
          <label className="contact-form__radio-label">
            <input className="contact-form__radio" type="radio" name="topic" value="Request a Quote" />
            Request a Quote
          </label>
          <label className="contact-form__radio-label">
            <input className="contact-form__radio" type="radio" name="topic" value="Service Call / Repair" />
            Service Call / Repair
          </label>
          <label className="contact-form__radio-label">
            <input className="contact-form__radio" type="radio" name="topic" value="Project Consultation" />
            Project Consultation
          </label>
          <label className="contact-form__radio-label">
            <input className="contact-form__radio" type="radio" name="topic" value="Generator Inquiry" />
            Generator Inquiry
          </label>
          <label className="contact-form__radio-label">
            <input className="contact-form__radio" type="radio" name="topic" value="Billing / Invoice" />
            Billing / Invoice
          </label>
          <label className="contact-form__radio-label">
            <input className="contact-form__radio" type="radio" name="topic" value="Other" />
            Other
          </label>
        </div>
      </fieldset>

      {/* Self-Identification */}
      <fieldset className="contact-form__fieldset">
        <legend className="contact-form__legend">
          I am a… <span className="contact-form__required" aria-hidden="true">*</span>
        </legend>
        <div className="contact-form__radio-group">
          <label className="contact-form__radio-label">
            <input className="contact-form__radio" type="radio" name="customer_type" value="Homeowner" required />
            Homeowner
          </label>
          <label className="contact-form__radio-label">
            <input className="contact-form__radio" type="radio" name="customer_type" value="Business Owner" />
            Business Owner
          </label>
          <label className="contact-form__radio-label">
            <input className="contact-form__radio" type="radio" name="customer_type" value="General Contractor" />
            General Contractor
          </label>
          <label className="contact-form__radio-label">
            <input className="contact-form__radio" type="radio" name="customer_type" value="Property Manager" />
            Property Manager
          </label>
          <label className="contact-form__radio-label">
            <input className="contact-form__radio" type="radio" name="customer_type" value="Other" />
            Other
          </label>
        </div>
      </fieldset>

      {/* Message */}
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="message">
          Message <span className="contact-form__required" aria-hidden="true">*</span>
        </label>
        <textarea
          className="contact-form__textarea"
          id="message"
          name="message"
          required
          rows={6}
        />
      </div>

      <button className="btn contact-form__submit" type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Send Message"}
      </button>
      </form>
    </>
  );
}
