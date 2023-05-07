/* eslint-disable react-refresh/only-export-components */

import { IMotion } from './models';
import MultiStepFormPage from './pages/multiStepForm/MultiStepFormPage';

export const MOTIONS: IMotion[] = [
  {
    name: 'multistep form',
    path: '/multistep-form',
    element: <MultiStepFormPage />
  }
];
