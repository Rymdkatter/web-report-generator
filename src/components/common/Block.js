import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled('div')`
  font-family: 'Montserrat', sans-serif;
  width: 600px;
  height: 400px;
  display: grid;
  grid-template-rows: 50px 350px;
  grid-template-columns: 100px 500px;
  grid-template-areas: "title title";
                       "content content";
`;

const Title = styled('div')`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  color: #6E6E6E;
  margin-left: 5px;
`;

const TitleBlock = styled('div')`
  grid-area: title;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin-left: 25px;
`;

const DragButton = styled('div')`
  display: flex;
  flex-direction: column;
`;

const Dot = styled('div')`
  width: 5px;
  height: 5px;
  background: #C4C4C4;
  border-radius: 30px;
  &:not(:last-child) {
    margin-bottom: 2px;
  }
`;

const ContentBlock = styled('div')`
  grid-area: content;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 600px;
  height: 350px;
  background: #FFF;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const Block = ({ block, index }) => {
  return (
    <Wrapper>
      <TitleBlock>
        <DragButton>
          <Dot />
          <Dot />
          <Dot />
        </DragButton>
        <Title>{block.title}</Title>
      </TitleBlock>
      <ContentBlock>
      </ContentBlock>
    </Wrapper>
  )
};
