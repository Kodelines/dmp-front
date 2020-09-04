/**
 *
 * Asynchronously loads the component for Activate
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Activate = lazyLoad(
  () => import('./index'),
  module => module.Activate,
);
