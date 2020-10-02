import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';

import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

import { UserFile } from '../';

const renderComponent = (store: Store) =>
  render(
    <Provider store={store}>
      <HelmetProvider>
        <UserFile />
      </HelmetProvider>
    </Provider>,
  );

describe('<UserFile />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });
  it('should match the snapshot', () => {
    const component = renderComponent(store);
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
