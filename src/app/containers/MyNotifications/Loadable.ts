/**
 *
 * Asynchronously loads the component for MyNotifications
 *
 */

import { lazyLoad } from 'utils/loadable';

export const MyNotifications = lazyLoad(
  () => import('./index'),
  module => module.MyNotifications,
);
