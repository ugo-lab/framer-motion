import { FC } from 'react';
import { motion } from 'framer-motion';
import CheckIcon from '../../components/CheckIcon';

interface MultiStepFormStepProps {
  step: number;
  currentStep: number;
}
type Status = 'active' | 'inactive' | 'complete';

export const MultiStepFormStep: FC<MultiStepFormStepProps> = ({
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
    <motion.div animate={status} className="step">
      <motion.div
        variants={{
          active: {
            scale: 1,
            transition: {
              delay: 0,
              duration: 0.2
            }
          },
          complete: {
            scale: 1.25
          }
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          type: 'tween',
          ease: 'circOut'
        }}
        className="back-bg"
      />

      <motion.div
        initial={false}
        variants={{
          inactive: {
            backgroundColor: '#fff',
            border: '2px solid #e5e5e5',
            color: '#a3a3a3'
          },
          active: {
            backgroundColor: '#fff',
            border: '2px solid #3b82f6',
            color: '#3b82f6'
          },
          complete: {
            backgroundColor: '#3b82f6',
            border: '2px solid #3b82f6',
            color: '#3b82f6'
          }
        }}
        transition={{ duration: 0.2 }}
        className="bg"
      >
        <div>{status === 'complete' ? <CheckIcon /> : <span>{step}</span>}</div>
      </motion.div>
    </motion.div>
  );
};
