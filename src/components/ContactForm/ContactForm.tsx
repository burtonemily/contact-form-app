import { useState, type FormEvent } from "react";
import "./contact-form.css";

type ContactFormProps = {
  onSubmitSuccess: () => void;
};

function ContactForm({ onSubmitSuccess }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const newErrors: { [key: string]: string } = {};
    if (!data.firstName) newErrors.firstName = "First name is required";
    if (!data.lastName) newErrors.lastName = "Last name is required";
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email as string)) {
      newErrors.email = "Valid email is required";
    }
    if (!data.enquiry) newErrors.enquiry = "Please select an enquiry type";
    if (!data.message) newErrors.message = "Message is required";
    if (!form.privacy.checked)
      newErrors.privacy = "You must accept the privacy policy";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setLoading(false);
      return;
    }

    console.log("Submitted data:", data);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      onSubmitSuccess();
    }, 1000);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="first-name" className="visually-hidden">
            First Name
          </label>
          <input
            id="first-name"
            name="firstName"
            type="text"
            placeholder="FIRST NAME"
            autoComplete="given-name"
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="last-name" className="visually-hidden">
            Last Name
          </label>
          <input
            id="last-name"
            name="lastName"
            type="text"
            placeholder="LAST NAME"
            autoComplete="family-name"
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="visually-hidden">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="EMAIL ADDRESS"
            autoComplete="email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <fieldset>
            <legend className="visually-hidden">Enquiry Type</legend>
            <div className="radio-group">
              <label>
                <input type="radio" name="enquiry" value="general" />
                GENERAL ENQUIRY
              </label>
              <label>
                <input type="radio" name="enquiry" value="technical" />
                TECHNICAL SUPPORT
              </label>
              <label>
                <input type="radio" name="enquiry" value="sales" />
                SALES REQUEST
              </label>
            </div>
            {errors.enquiry && <p className="error">{errors.enquiry}</p>}
          </fieldset>
        </div>

        <div className="form-group">
          <label htmlFor="message" className="visually-hidden">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="MESSAGE"
            rows={5}
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <div className="checkbox-group">
          <label className="privacy-checkbox">
            <input type="checkbox" name="privacy" />
            <span className="privacy-policy">
              By selecting this you agree to our privacy policy
            </span>
          </label>
          <button className="submit-button" type="submit" disabled={loading}>
            {loading ? "SUBMITTING..." : "SUBMIT"}
          </button>
        </div>
        {errors.privacy && <p className="error">{errors.privacy}</p>}
      </form>
    </div>
  );
}

export default ContactForm;
