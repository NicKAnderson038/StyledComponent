import React from "react";
import { render } from "react-dom";

import Wrapper from "./Wrapper";
import Title from "./Title";

const App = () => (
  <Wrapper>
    <Title>Styled Component Example!!!</Title>
  </Wrapper>
);

render(<App />, document.getElementById("root"));
