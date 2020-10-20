/**
 *
 * Asynchronously loads the component for MyPatients
 *
 */

import { lazyLoad } from 'utils/loadable';

export const MyPatients = lazyLoad(
  () => import('./index'),
  module => module.MyPatients,
);
