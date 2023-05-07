import { FC, useState } from 'react';
import { MultiStepFormStep as Step } from './MultiStepFormStep';

const MultiStepFormPage: FC = () => {
  const [step, setStep] = useState<number>(2);

  return (
    <div className="multistep-form">
      <div className="steps">
        <Step step={1} currentStep={step} />
        <Step step={2} currentStep={step} />
        <Step step={3} currentStep={step} />
        <Step step={4} currentStep={step} />
      </div>

      <div className="content">
        <span className="placeholder"></span>
        <span className="placeholder"></span>
        <span className="placeholder"></span>
      </div>

      <div className="bottom">
        <button
          className={`back-btn ${step === 1 ? 'disabled' : ''}`}
          onClick={() => setStep(step < 2 ? step : step - 1)}
        >
          back
        </button>
        <button
          className={`continue-btn ${step > 4 ? 'disabled' : ''}`}
          onClick={() => setStep(step > 4 ? step : step + 1)}
        >
          continue
        </button>
      </div>
    </div>
  );
};

export default MultiStepFormPage;
