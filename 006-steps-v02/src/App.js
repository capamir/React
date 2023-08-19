import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button
              textColor="#fff"
              bgColor="#7950f2"
              onClick={handlePrevious}
              disableValue={1}
              step={step}
            >
              <span>👈</span> Previous
            </Button>
            <Button
              textColor="#fff"
              bgColor="#7950f2"
              onClick={handleNext}
              disableValue={3}
              step={step}
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}:</h3> {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, disableValue, step, children }) {
  return (
    <>
      {disableValue === step ? (
        <button style={{ backgroundColor: "#f7f7f7", color: "#333" }}>
          {children}
        </button>
      ) : (
        <button
          style={{ backgroundColor: bgColor, color: textColor }}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
}
export default App;
