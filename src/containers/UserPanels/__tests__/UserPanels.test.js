import { render, screen } from '@testing-library/react';
import UserPanels from '..';

test('renders learn react link', () => {
  render(<UserPanels />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
