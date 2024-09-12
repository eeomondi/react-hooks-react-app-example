import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Ensure this is imported
import App from '../App'; // Adjust the import path as necessary

test('should include "Now" in the header instead of a time', () => {
  render(<App />);
  expect(screen.getAllByText(/Now/i)).toBeInTheDocument(); // Use regex for flexibility
});

test('should include the <ExampleComponent />', () => {
  render(<App />);
  expect(screen.getByText(/In React apps, we write JSX/i)).toBeInTheDocument(); // Use regex for flexibility
});

test('should include the <TestComponent />', () => {
  render(<App />);
  expect(screen.getByTitle("time video")).toBeInTheDocument(); // Ensure the title matches
});

