import React from 'react';
import { render, screen } from '@testing-library/react';
import SubmitScan from './index';
jest.mock('./hooks', () => ({uselogicForm : () => ({
  formik: {
    handleChange: () => {},
    values: {
      Findings: ""
    }
  }
})}));

test('renders SubmitScan', () => {
  render(<SubmitScan/>);
  const linkElement = screen.getByText(/Status/i);
  expect(linkElement).toBeInTheDocument();
});
