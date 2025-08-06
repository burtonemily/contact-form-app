import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ThankYouPage from "../ThankyouPage/ThankyouPage";
import "../ContactForm/contact-form.css";

function MainContainer() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <div className="main-container">
        <div className="page-wrapper">
          <div className="contact-form-container">
            <div className="header">
              <img src="../src/assets/respectx-logo.svg" alt="Logo" />
              <h1>CONTACT US</h1>
            </div>
            {submitted ? (
              <ThankYouPage />
            ) : (
              <ContactForm onSubmitSuccess={() => setSubmitted(true)} />
            )}
          </div>
          <div className="hero-image-container">
            <img
              src="../src/assets/hero-image.svg"
              alt="Respect X Logo Large"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContainer;
