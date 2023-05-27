import { FC, useState } from 'react';
import { MultiStepFormStep1 as Step1 } from './MultiStepFormStep1';
import { MultiStepFormStep2 as Step2 } from './MultiStepFormStep2';

const MultiStepFormPage: FC = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <div className="multistep-form">
      <div className="steps-1">
        <Step1 step={1} currentStep={step} />
        <Step1 step={2} currentStep={step} />
        <Step1 step={3} currentStep={step} />
        <Step1 step={4} currentStep={step} />
      </div>

      <div className="steps-2">
        <Step2 step={1} currentStep={step} />
        <Step2 step={2} currentStep={step} />
        <Step2 step={3} currentStep={step} />
        <Step2 step={4} currentStep={step} />
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
