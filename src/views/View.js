import React from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import styled from "styled-components";

export const View = props => {
  return (
    <DIV>
      <Sidebar />
      <Main />
    </DIV>
  );
};

const DIV = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
`;

export default View;
