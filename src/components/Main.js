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
  grid-template-areas: "header" "info" "buttons" "activity";
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
  cursor: pointer;
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

const Activity = styled('div')`
  grid-area: activity;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled('div')`
  font-size: 18px;
`;

const Circle = styled('svg')`
  width: 50px;
  height: 50px;
`;

const Row = styled('div')`
  display: flex;
  flex-direction: row;
`;

const Information = styled('div')`
  width: 300px;
  height: 100px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  align-items: center;
  display: flex;
  cursor: pointer;
  justify-content: center;
`;

const InformationButton = styled('div')`
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
      <Activity>
        <Label>Activity</Label>
        <Row>
          <Circle viewBox="0 0 200 200">
            <circle
              r="80"
              cx="100"
              cy="100"
              fill="none"
              stroke-width="12"
              stroke="#ccc"
            />
            <circle
              r="80"
              cx="100"
              cy="100"
              fill="none"
              stroke-width="12"
              stroke="#E0223E"
              stroke-linecap="round"
              stroke-dasharray="4.5 502.4"
              stroke-dashoffset="132"
            />
            <text
              x="100"
              y="125"
              font-family="Open Sans"
              font-size="70"
              text-anchor="middle"
              fill="#444"
            >
              1
            </text>
          </Circle>
          <Circle viewBox="0 0 200 200">
            <circle
              r="80"
              cx="100"
              cy="100"
              fill="none"
              stroke-width="12"
              stroke="#ccc"
            />
            <circle
              r="80"
              cx="100"
              cy="100"
              fill="none"
              stroke-width="12"
              stroke="#E0223E"
              stroke-linecap="round"
              stroke-dasharray="64.5 502.4" // first number line width
              stroke-dashoffset="192" // 132 + offset. Offset = line width - 4.2
            />
            <text
              x="100"
              y="125"
              font-family="Open Sans"
              font-size="70"
              text-anchor="middle"
              fill="#444"
            >
              15
            </text>
          </Circle>
        </Row>
        <Row>
          <Circle viewBox="0 0 200 200">
            <circle
              r="80"
              cx="100"
              cy="100"
              fill="none"
              stroke-width="12"
              stroke="#ccc"
            />
            <circle
              r="80"
              cx="100"
              cy="100"
              fill="none"
              stroke-width="12"
              stroke="#E0223E"
              stroke-linecap="round"
              stroke-dasharray="164.5 502.4" // first number line width
              stroke-dashoffset="292" // 132 + offset. Offset = line width - 4.2
            />
            <text
              x="100"
              y="125"
              font-family="Open Sans"
              font-size="70"
              text-anchor="middle"
              fill="#444"
            >
              25
            </text>
          </Circle>
          <Circle viewBox="0 0 200 200">
            <circle
              r="80"
              cx="100"
              cy="100"
              fill="none"
              stroke-width="12"
              stroke="#ccc"
            />
            <circle
              r="80"
              cx="100"
              cy="100"
              fill="none"
              stroke-width="12"
              stroke="#F18325"
              stroke-linecap="round"
              stroke-dasharray="226 251.2" // first number line width
              stroke-dashoffset="98" // 132 + offset. Offset = line width - 4.2
            />
            <text
              x="100"
              y="125"
              font-family="Open Sans"
              font-size="70"
              text-anchor="middle"
              fill="#444"
            >
              50
            </text>
          </Circle>
        </Row>
      </Activity>
      <Information>
        <InformationButton>
          Information
        </InformationButton>
      </Information>
    </Nav>
    <Grid>
      <BlockList />
    </Grid>
  </MainWrapper>
);

export default Main;
