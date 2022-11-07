import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('comp');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent('HELLO WORLD');
});
