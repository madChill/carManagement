import React from 'react';
import { render, screen } from '@testing-library/react';
import ScansDashboard from './index';
jest.mock('./hooks', () => ({uselogicForm : () => ({
  scans: [],
  total: 10
})}));

test('renders ScansDashboard', () => {
  render(<ScansDashboard/>);
  const linkElement = screen.getByText(/Repository Name/i);
  expect(linkElement).toBeInTheDocument();
});
