import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App'; // Ensure this path matches your actual file structure

test('renders Navbar, Home, and About components', () => {
  const { getByText, getByTestId } = render(<App />);
  
  expect(getByText(/About/i)).toBeInTheDocument();
  expect(getByText(/Now/i)).toBeInTheDocument();
  expect(getByText(/In React apps/i)).toBeInTheDocument();
  // Additional assertions based on your needs
});

test('should include "Now" in the header instead of a time', () => {
  render(<App />);
  expect(screen.getAllByText(/Now/i)).toBeInTheDocument();
});

test('should include the <ExampleComponent />', () => {
  render(<App />);
  expect(screen.getByText(/In React apps, we write JSX/i)).toBeInTheDocument();
});

test('should include the <TestComponent />', () => {
  render(<App />);
  expect(screen.getByTitle("time video")).toBeInTheDocument();
});


