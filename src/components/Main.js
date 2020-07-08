import React from "react";
import styled from "styled-components";
import Items from "./Items";
import Comments from "./Comments";

const Main = () => {
  return (
    <DIV>
      <Items />
      <Comments />
    </DIV>
  );
};

const DIV = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  padding: 30px;
`;

export default Main;
