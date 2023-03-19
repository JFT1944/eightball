import { render, screen } from '@testing-library/react';
import App from './App';
// import Eightball from './eightball';
// import Responses from './eightball_responses'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
