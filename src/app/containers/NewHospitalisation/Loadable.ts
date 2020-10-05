/**
 *
 * Asynchronously loads the component for NewHospitalisation
 *
 */

import { lazyLoad } from 'utils/loadable';

export const NewHospitalisation = lazyLoad(
  () => import('./index'),
  module => module.NewHospitalisation,
);
