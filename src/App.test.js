import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Hi, I'm Basirat/i);
  expect(titleElement).toBeInTheDocument();
});