import React from "react";
import styled from "styled-components";

export const Card = ({ children }) => {
  return <Container>{children}</Container>;
};
const Container = styled.div`
  padding: 2rem 1.5rem;
  box-shadow: 2px 2px 2px 2px;
  width: 450px;
  margin: 10px auto;
  border-radius: 10px;

`;
