import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("should render without crashing", function () {

  render(<Carousel />);

})

it('should match snapshot', () => {
  
  const { asFragment } = render(<Carousel />)
  expect(asFragment()).toMatchSnapshot();


})

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("shows the next image when clicking on the previous arrow", function () {
  const {queryByTestId, queryByAltText} = render(<Carousel />);
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  
})

it("hides the correct arrows when displaying first or last image", function (){
  const {queryByTestId, queryByAltText} = render(<Carousel />);
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(rightArrow);
  expect(rightArrow).not.toBeInTheDocument();
  fireEvent.click(leftArrow);
  fireEvent.click(leftArrow);
  expect(leftArrow).not.toBeInTheDocument();



})
