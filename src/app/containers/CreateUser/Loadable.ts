/**
 *
 * Asynchronously loads the component for CreateUser
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CreateUser = lazyLoad(
  () => import('./index'),
  module => module.CreateUser,
);
