import React from "react";
import styled from "styled-components";

export const Grid = styled.div`
  grid-area: grid;
  display: flex;
  flex-direction: row;
  width: 1300px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const GridItemWrapper = styled.div`
`;

export const GridItem = ({ forwardedRef, ...props }) => (
  <GridItemWrapper ref={forwardedRef} {...props} />
);