import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <h1>A Tapical Page</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #741188;
  padding: 20px 20px;
  color: white;
`;
