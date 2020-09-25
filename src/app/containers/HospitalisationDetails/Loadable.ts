/**
 *
 * Asynchronously loads the component for HospitalisationDetails
 *
 */

import { lazyLoad } from 'utils/loadable';

export const HospitalisationDetails = lazyLoad(
  () => import('./index'),
  module => module.HospitalisationDetails,
);
