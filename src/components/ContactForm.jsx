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
      <form className="form-wrap" onSubmit={handleSubmit} noValidate>
        {/* Web3Forms access key */}
        <input type="hidden" name="access_key" value="2d9a63c1-c177-46f1-86bd-0f158aabbd61" />

        {/* Honeypot spam protection */}
        <input
          type="checkbox"
          name="botcheck"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="row">
          <div>
            <label htmlFor="first-name">First Name <span className="req" aria-hidden="true">*</span></label>
            <input type="text" id="first-name" name="first_name" required autoComplete="given-name" />
          </div>
          <div>
            <label htmlFor="last-name">Last Name <span className="req" aria-hidden="true">*</span></label>
            <input type="text" id="last-name" name="last_name" required autoComplete="family-name" />
          </div>
        </div>

        <div className="row">
          <div>
            <label htmlFor="phone">Phone <span className="req" aria-hidden="true">*</span></label>
            <input type="tel" id="phone" name="phone" required autoComplete="tel" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" autoComplete="email" />
          </div>
        </div>

        <fieldset>
          <legend>Topic <span className="req" aria-hidden="true">*</span></legend>
          <div className="radio-group">
            <label><input type="radio" name="topic" value="General Inquiry" required /> General Inquiry</label>
            <label><input type="radio" name="topic" value="Request a Quote" /> Request a Quote</label>
            <label><input type="radio" name="topic" value="Service Call / Repair" /> Service Call / Repair</label>
            <label><input type="radio" name="topic" value="Project Consultation" /> Project Consultation</label>
            <label><input type="radio" name="topic" value="Generator Inquiry" /> Generator Inquiry</label>
            <label><input type="radio" name="topic" value="Billing / Invoice" /> Billing / Invoice</label>
            <label><input type="radio" name="topic" value="Other" /> Other</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>I am a… <span className="req" aria-hidden="true">*</span></legend>
          <div className="radio-group">
            <label><input type="radio" name="customer_type" value="Homeowner" required /> Homeowner</label>
            <label><input type="radio" name="customer_type" value="Business Owner" /> Business Owner</label>
            <label><input type="radio" name="customer_type" value="General Contractor" /> General Contractor</label>
            <label><input type="radio" name="customer_type" value="Property Manager" /> Property Manager</label>
            <label><input type="radio" name="customer_type" value="Other" /> Other</label>
          </div>
        </fieldset>

        <div className="field">
          <label htmlFor="message">Message <span className="req" aria-hidden="true">*</span></label>
          <textarea id="message" name="message" required rows={6} />
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? "Sending…" : "Send Message"}
        </button>
      </form>
    </>
  );
}
