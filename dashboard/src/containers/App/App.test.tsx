import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './index';

test('renders document', () => {
  render(<App/>);
  const linkElement = screen.getByText(/Scan list/i);
  expect(linkElement).toBeInTheDocument();
});
