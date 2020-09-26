/**
 *
 * Asynchronously loads the component for ExaminationDetails
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ExaminationDetails = lazyLoad(
  () => import('./index'),
  module => module.ExaminationDetails,
);
