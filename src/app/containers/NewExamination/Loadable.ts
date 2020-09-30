/**
 *
 * Asynchronously loads the component for NewExamination
 *
 */

import { lazyLoad } from 'utils/loadable';

export const NewExamination = lazyLoad(
  () => import('./index'),
  module => module.NewExamination,
);
