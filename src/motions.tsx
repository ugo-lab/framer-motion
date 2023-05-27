/* eslint-disable react-refresh/only-export-components */

import { IMotion } from './models';
import MultiStepFormPage from './pages/multiStepForm/MultiStepFormPage';

export const MOTIONS: IMotion[] = [
  {
    name: 'multistep form',
    path: '/multistep-form',
    element: <MultiStepFormPage />
  }
  /* {
    name: 'arrow on hover', // 
    path: '/arrow-on-hover',
    element: 
  }, */
  /* {
    name: 'link svg anim', // pour le logo Twitch x Twitter de Stats Feeder
    path: '/link-svg-anim',
    element: 
  }, */
  /* {
    name: 'select/radio', // https://codesandbox.io/s/framer-motion-2-layout-animations-kij8p?from-embed
    path: ,
    element: 
  }, */
];
