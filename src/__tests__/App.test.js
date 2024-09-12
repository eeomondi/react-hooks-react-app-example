import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

beforeEach(() => {
  render(<App />);
});



test('should include "Now" in the header instead of a time', () => {
  render(<App />);
  expect(screen.getAllByText("Now")).toBeInTheDocuments();
});

test("should include the <ExampleComponent />", () => {
  render(<App />);
  expect(screen.getByText("In React apps, we write JSX/i")).toBeInTheDocument();
});

test("should include the <TestComponent />", () => {
  render(<App />);
  expect(screen.getByTitle("This is the TestComponent")).toBeInTheDocument();
});

//   it('should include "Now" in the header instead of a time', () => {
//     expect(wrapper.find('header').text()).to.not.include(moment().format('MMMM Do YYYY'))
//     expect(wrapper.find('header').text()).to.include('Now')
//   });

//   it('should include the ExampleComponent', () => {
//     expect(wrapper.text()).to.include('<ExampleComponent />')
//   });

//   it('should include the TestComponent', () => {
//     expect(wrapper.text()).to.include('<TestComponent />')
//   });
// });
