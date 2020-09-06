/**
 *
 * Asynchronously loads the component for UserFile
 *
 */

import { lazyLoad } from 'utils/loadable';

export const UserFile = lazyLoad(
  () => import('./index'),
  module => module.UserFile,
);
