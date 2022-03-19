import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Export Report Header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Export Report/i);
  expect(linkElement).toBeInTheDocument();
});
