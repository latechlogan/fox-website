import { useState } from "react";
import { Toaster, toast } from "@pheralb/toast";

export default function ApplicationForm() {
  const [submitting, setSubmitting] = useState(false);
  const [jobCount, setJobCount] = useState(1);
  const [refCount, setRefCount] = useState(1);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        form.reset();
        toast.success({
          text: "Application submitted!",
          description: "We'll review your application and be in touch soon.",
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
        <input
          type="hidden"
          name="access_key"
          value="2d9a63c1-c177-46f1-86bd-0f158aabbd61"
        />

        {/* Honeypot spam protection */}
        <input
          type="checkbox"
          name="botcheck"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        <h1>Employment application</h1>
        <p className="text-base">
          Complete the sections below. A resume is optional — if you don't have
          one, just fill out your work history and qualifications here.
        </p>

        <h2>Applicant Information</h2>

        <div className="row">
          <div>
            <label htmlFor="first">
              First name <span className="req">*</span>
            </label>
            <input
              type="text"
              id="first"
              name="first_name"
              placeholder="Jordan"
              required
            />
          </div>
          <div>
            <label htmlFor="last">
              Last name <span className="req">*</span>
            </label>
            <input
              type="text"
              id="last"
              name="last_name"
              placeholder="Rivera"
              required
            />
          </div>
        </div>

        <div className="row">
          <div>
            <label htmlFor="email">
              Email <span className="req">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="phone">
              Phone <span className="req">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="(555) 555-0123"
              required
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="address">Street address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="123 Main St"
          />
        </div>

        <div className="row-3">
          <div>
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input type="text" id="state" name="state" />
          </div>
          <div>
            <label htmlFor="zip">ZIP</label>
            <input type="text" id="zip" name="zip" />
          </div>
        </div>

        <div className="row">
          <div>
            <label htmlFor="legal">
              Legally authorized to work in the U.S.?{" "}
              <span className="req">*</span>
            </label>
            <select id="legal" name="work_authorized" defaultValue="" required>
              <option value="" disabled>
                Select…
              </option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <label htmlFor="age18">Are you 18 or older?</label>
            <select id="age18" name="over_18" defaultValue="">
              <option value="" disabled>
                Select…
              </option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <h2>Position &amp; Availability</h2>

        <div className="field">
          <label htmlFor="position">
            Position applying for <span className="req">*</span>
          </label>
          <select id="position" name="position" defaultValue="" required>
            <option value="" disabled>
              Select a role…
            </option>
            <option>Apprentice Electrician</option>
            <option>Journeyman Electrician</option>
            <option>Master Electrician</option>
            <option>Electrician's Helper / Laborer</option>
            <option>Foreman</option>
            <option>Estimator</option>
            <option>Project Manager</option>
            <option>Low Voltage Technician</option>
            <option>Service Technician</option>
            <option>Other</option>
          </select>
        </div>

        <div className="row-3">
          <div>
            <label htmlFor="start">Earliest start date</label>
            <input type="date" id="start" name="start_date" />
          </div>
          <div>
            <label htmlFor="availability">Availability</label>
            <select id="availability" name="availability" defaultValue="">
              <option value="" disabled>
                Select…
              </option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Weekends only</option>
              <option>Flexible</option>
            </select>
          </div>
          <div>
            <label htmlFor="pay">Desired pay rate</label>
            <input
              type="text"
              id="pay"
              name="desired_pay"
              placeholder="$ / hour"
            />
          </div>
        </div>

        <div className="row">
          <div>
            <label htmlFor="travel">Willing to travel to job sites?</label>
            <select id="travel" name="willing_travel" defaultValue="">
              <option value="" disabled>
                Select…
              </option>
              <option>Yes</option>
              <option>No</option>
              <option>Within local area only</option>
            </select>
          </div>
          <div>
            <label htmlFor="license_driver">Valid driver's license?</label>
            <select id="license_driver" name="drivers_license" defaultValue="">
              <option value="" disabled>
                Select…
              </option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <h2>Work History</h2>
        <p className="text-base">
          List your most recent positions first. Include any electrical,
          construction, or trade experience.
        </p>

        {Array.from({ length: jobCount }, (_, i) => {
          const n = i + 1;
          return (
            <div className="block" key={n}>
              <div className="block-label">
                {n === 1 ? "Most recent employer" : "Previous employer"}
              </div>
              <div className="row">
                <div>
                  <label htmlFor={`job${n}_employer`}>Company</label>
                  <input
                    type="text"
                    id={`job${n}_employer`}
                    name={`job${n}_employer`}
                  />
                </div>
                <div>
                  <label htmlFor={`job${n}_title`}>Job title</label>
                  <input
                    type="text"
                    id={`job${n}_title`}
                    name={`job${n}_title`}
                  />
                </div>
              </div>
              <div className="row-3">
                <div>
                  <label htmlFor={`job${n}_from`}>From&ensp;(month / year)</label>
                  <input
                    type="month"
                    id={`job${n}_from`}
                    name={`job${n}_from`}
                  />
                </div>
                <div>
                  <label htmlFor={`job${n}_to`}>To&ensp;(month / year)</label>
                  <input type="month" id={`job${n}_to`} name={`job${n}_to`} />
                </div>
                <div>
                  <label htmlFor={`job${n}_phone`}>Employer phone</label>
                  <input
                    type="tel"
                    id={`job${n}_phone`}
                    name={`job${n}_phone`}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor={`job${n}_duties`}>
                  Duties &amp; responsibilities
                </label>
                <textarea
                  id={`job${n}_duties`}
                  name={`job${n}_duties`}
                  rows="2"
                  placeholder={
                    n === 1 ? "What did the role involve?" : undefined
                  }
                ></textarea>
              </div>
              <div className="field">
                <label htmlFor={`job${n}_reason`}>Reason for leaving</label>
                <input
                  type="text"
                  id={`job${n}_reason`}
                  name={`job${n}_reason`}
                />
              </div>
            </div>
          );
        })}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setJobCount((c) => c + 1)}
        >
          + Add another job
        </button>

        <h2>Education &amp; Training</h2>

        <div className="row">
          <div>
            <label htmlFor="edu_level">Highest level completed</label>
            <select id="edu_level" name="education_level" defaultValue="">
              <option value="" disabled>
                Select…
              </option>
              <option>Some high school</option>
              <option>High school diploma / GED</option>
              <option>Trade / vocational school</option>
              <option>Some college</option>
              <option>Associate degree</option>
              <option>Bachelor's degree or higher</option>
            </select>
          </div>
          <div>
            <label htmlFor="edu_school">School / program name</label>
            <input type="text" id="edu_school" name="education_school" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="apprenticeship">
            Apprenticeship / trade program (if any)
          </label>
          <input
            type="text"
            id="apprenticeship"
            name="apprenticeship"
            placeholder="Program name, hours completed, status"
          />
        </div>

        <h2>Licenses &amp; Certifications</h2>
        <p className="section-note">
          Check all that apply, and add details below.
        </p>

        <div className="checkbox-grid">
          <label>
            <input type="checkbox" name="certs" value="apprentice_license" />{" "}
            Apprentice electrician license
          </label>
          <label>
            <input type="checkbox" name="certs" value="journeyman_license" />{" "}
            Journeyman license
          </label>
          <label>
            <input type="checkbox" name="certs" value="master_license" /> Master
            electrician license
          </label>
          <label>
            <input type="checkbox" name="certs" value="osha10" /> OSHA 10
          </label>
          <label>
            <input type="checkbox" name="certs" value="osha30" /> OSHA 30
          </label>
          <label>
            <input type="checkbox" name="certs" value="first_aid" /> First Aid /
            CPR
          </label>
          <label>
            <input type="checkbox" name="certs" value="cdl" /> Commercial
            driver's license (CDL)
          </label>
          <label>
            <input type="checkbox" name="certs" value="lift" /> Forklift / lift
            certification
          </label>
        </div>

        <div className="row">
          <div>
            <label htmlFor="license_number">License number(s)</label>
            <input type="text" id="license_number" name="license_number" />
          </div>
          <div>
            <label htmlFor="license_state">Issuing state</label>
            <input type="text" id="license_state" name="license_state" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="certs_other">Other certifications or training</label>
          <input type="text" id="certs_other" name="certs_other" />
        </div>

        <h2>Skills &amp; Experience</h2>

        <div className="row">
          <div>
            <label htmlFor="years_exp">
              Years of electrical / construction experience
            </label>
            <input
              type="number"
              id="years_exp"
              name="years_experience"
              min="0"
              max="60"
              placeholder="0"
            />
          </div>
          <div>
            <label htmlFor="work_type">Primary experience type</label>
            <select id="work_type" name="work_type" defaultValue="">
              <option value="" disabled>
                Select…
              </option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Industrial</option>
              <option>Mix of the above</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label htmlFor="skills">Describe your relevant skills</label>
          <textarea
            id="skills"
            name="skills"
            rows="3"
            placeholder="Wiring, conduit bending, panel installation, blueprint reading, troubleshooting, etc."
          ></textarea>
        </div>

        <div className="field">
          <label htmlFor="tools">Do you have your own hand tools?</label>
          <select id="tools" name="own_tools" defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option>Yes — full set</option>
            <option>Yes — partial set</option>
            <option>No</option>
          </select>
        </div>

        <h2>Resume / CV (optional)</h2>
        <p className="text-base">
          To submit a resume, email it to{" "}
          <a href="mailto:admin@foxfamilyelectric.com">
            admin@foxfamilyelectric.com
          </a>{" "}
          with your name and the position you're applying for in the subject
          line.
        </p>

        <h2>References</h2>
        <p className="text-base">
          Please provide three professional references.
        </p>

        {Array.from({ length: refCount }, (_, i) => {
          const n = i + 1;
          return (
            <div className="block" key={n}>
              <div className="block-label">Reference {n}</div>
              <div className="row">
                <div>
                  <label htmlFor={`ref${n}_name`}>Name</label>
                  <input
                    type="text"
                    id={`ref${n}_name`}
                    name={`ref${n}_name`}
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor={`ref${n}_relationship`}>Relationship</label>
                  <input
                    type="text"
                    id={`ref${n}_relationship`}
                    name={`ref${n}_relationship`}
                    placeholder="e.g. Former foreman"
                  />
                </div>
              </div>
              <div className="row">
                <div>
                  <label htmlFor={`ref${n}_phone`}>Phone</label>
                  <input
                    type="tel"
                    id={`ref${n}_phone`}
                    name={`ref${n}_phone`}
                    placeholder="(555) 555-0123"
                  />
                </div>
                <div>
                  <label htmlFor={`ref${n}_email`}>Email</label>
                  <input
                    type="email"
                    id={`ref${n}_email`}
                    name={`ref${n}_email`}
                    placeholder="reference@email.com"
                  />
                </div>
              </div>
            </div>
          );
        })}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setRefCount((c) => c + 1)}
        >
          + Add another reference
        </button>

        <h2>Certification</h2>
        <div className="inline">
          <input type="checkbox" id="certify" name="certify" required />
          <label htmlFor="certify">
            I certify that the information provided is true and complete to the
            best of my knowledge. <span className="req">*</span>
          </label>
        </div>

        <div className="field">
          <label htmlFor="signature">
            Type your full name as signature <span className="req">*</span>
          </label>
          <input
            type="text"
            id="signature"
            name="signature"
            placeholder="Your full name"
            required
          />
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? "Submitting…" : "Submit application"}
        </button>
      </form>
    </>
  );
}
