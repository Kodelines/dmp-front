/**
 *
 * Asynchronously loads the component for OpenUserDoc
 *
 */

import { lazyLoad } from 'utils/loadable';

export const OpenUserDoc = lazyLoad(
  () => import('./index'),
  module => module.OpenUserDoc,
);
