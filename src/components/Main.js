import React from 'react';
import {Grid} from "./common/Grid";
import {BlockList} from "./common/BlockList";
import styled from 'styled-components';


const MainWrapper = styled('div')`
  display: grid;
  grid-template-areas: "nav grid";
`;

const Nav = styled('div')`
  grid-area: nav;
`;

export const Main = () => {
  return (
    <MainWrapper>
      <Nav>
        Test
      </Nav>
      <Grid>
        <BlockList />
      </Grid>
    </MainWrapper>
  )
};