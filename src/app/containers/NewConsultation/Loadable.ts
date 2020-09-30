/**
 *
 * Asynchronously loads the component for NewConsultation
 *
 */

import { lazyLoad } from 'utils/loadable';

export const NewConsultation = lazyLoad(
  () => import('./index'),
  module => module.NewConsultation,
);
