import React from 'react';

import { render } from '@testing-library/react';

import { SideMenu } from '../';

describe('<SideMenu  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SideMenu />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
