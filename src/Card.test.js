import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("should render without crashing", function () {

  render(<Card />);

})

it('should match snapshot', () => {
    const imgUrl = 'https://images.unsplash.com/photo-1660663577778-c45295fc2dec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

    const { asFragment } = render(<Card caption = "a nice picture" src= {imgUrl} currNum = {1} totalNum = {1} />)
    expect(asFragment()).toMatchSnapshot();


})