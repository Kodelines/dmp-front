import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';

import { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';

import { Register } from '../';

const renderComponent = (store: Store) =>
  render(
    <Provider store={store}>
      <HelmetProvider>
        <Register />
      </HelmetProvider>
    </Provider>,
  );

describe('<Register />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });
  it('should match the snapshot', () => {
    const component = renderComponent(store);
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
