import React from 'react';
import styled from 'styled-components';
import { Grid } from './common/Grid';
import BlockList from './common/BlockList';


const MainWrapper = styled('div')`
  display: grid;
  grid-template-areas: "nav grid";
`;

const Nav = styled('div')`
  grid-area: nav;
  display: grid;
  grid-gap: 25px;
  margin-left: 40px;
  grid-template-rows: 50px 100px 180px;
  grid-template-areas: "header" "info" "buttons";
`;

const Header = styled('div')`
  grid-area: header;
  font-size: 24px;
  margin-top: 15px;
  text-align: start;
`;

const Info = styled('div')`
  grid-area: info;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 100px auto;
  grid-template-areas: "image name"
                       "image description";
`;

const ImageWrapper = styled('div')`
  grid-area: image;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background: #fff;
`;

const Name = styled('div')`
  grid-area: name;
  text-align: left;
  align-self: end;
  font-size: 18px;
`;

const Description = styled('div')`
  grid-area: description;
  text-align: left;
  align-self: start;
  font-size: 16px;
  opacity: 0.6;
`;

const ButtonGroup = styled('div')`
  grid-area: buttons;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Button = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 50px;
  background: #F8C7BF;
  border-radius: 50px;
  transition: background-color 1s;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    background: #E0223E;
  }
`;

const ButtonLabel = styled('div')`
  font-size: 18px;
  color: #FFFFFF;
  text-align: center;
  align-self: center;
`;

const Main = () => (
  <MainWrapper>
    <Nav>
      <Header>
        Report generator
      </Header>
      <Info>
        <ImageWrapper>
        </ImageWrapper>
        <Name>Name</Name>
        <Description>Description</Description>
      </Info>
      <ButtonGroup>
        <Button>
          <ButtonLabel>Download File</ButtonLabel>
        </Button>
        <Button>
          <ButtonLabel>Upload File</ButtonLabel>
        </Button>
        <Button>
          <ButtonLabel>Copy</ButtonLabel>
        </Button>
      </ButtonGroup>
    </Nav>
    <Grid>
      <BlockList />
    </Grid>
  </MainWrapper>
);

export default Main;
