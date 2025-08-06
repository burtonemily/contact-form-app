import "./thankyou-styles.css";

function ThankYouPage() {
  return (
    <main className="confirmation-page">
      <img
        src="../src/assets/tick.svg"
        alt="Success tick"
        className="thankyou-logo"
      ></img>
      <h1 className="thankyou-header">Your form has been submitted</h1>
      <p>
        Thankyou for your enquiry. We'll get back to you as soon as possible.
      </p>
      <button
        className="submit-button"
        onClick={() => window.location.reload()}
      >
        SUBMIT ANOTHER ENQUIRY
      </button>
    </main>
  );
}

export default ThankYouPage;
