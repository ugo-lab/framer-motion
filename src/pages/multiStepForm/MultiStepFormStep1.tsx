import { motion } from 'framer-motion';
import { FC } from 'react';

interface MultiStepFormStep1Props {
  step: number;
  currentStep: number;
}

type Status = 'active' | 'inactive' | 'complete';

export const MultiStepFormStep1: FC<MultiStepFormStep1Props> = ({
  step,
  currentStep
}) => {
  const status: Status =
    currentStep === step
      ? 'active'
      : currentStep < step
      ? 'inactive'
      : 'complete';

  return (
    <motion.div
      animate={status}
      className="step"
      variants={{
        active: {
          width: '30px',
          backgroundColor: '#3b82f6'
        },
        complete: {
          width: '15px'
        },
        inactive: {
          width: '15px'
        }
      }}
      transition={{
        duration: 0.4,
        ease: 'easeInOut'
      }}
    ></motion.div>
  );
};
