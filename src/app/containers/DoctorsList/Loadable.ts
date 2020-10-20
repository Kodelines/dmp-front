/**
 *
 * Asynchronously loads the component for DoctorsList
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DoctorsList = lazyLoad(
  () => import('./index'),
  module => module.DoctorsList,
);
