/**
 *
 * Asynchronously loads the component for UploadUserDoc
 *
 */

import { lazyLoad } from 'utils/loadable';

export const UploadUserDoc = lazyLoad(
  () => import('./index'),
  module => module.UploadUserDoc,
);
