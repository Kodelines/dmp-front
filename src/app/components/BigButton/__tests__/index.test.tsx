import React from 'react';

import { render } from '@testing-library/react';

import { BigButton } from '../';

describe('<BigButton  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<BigButton>test</BigButton>);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
