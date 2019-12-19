import React, { useRef } from 'react';
import styled from 'styled-components';

const Block = styled('div')`
  display: flex;
  justify-content: flex-start;
  position: relative;
  width: 200px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  @media only screen and (max-width: 720px) {
    margin-bottom: 0;
  }
`;

const Label = styled('div')`
  margin-left: 30px;
`;

const Input = styled('input')`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const Toggle = styled('div')`
  width: 50px;
  height: 25px;
  background: white;
  border: 1px solid;
  border-radius: 5px;
`;

const Checkbox = ({ label, value, onChange }) => {
  const checkboxBlock = useRef(null);
  const handleClick = () => checkboxBlock.current && checkboxBlock.current.click();

  return (
    <Block onClick={handleClick}>
      <Toggle />
      <Label>{label}</Label>
      <Input hidden ref={checkboxBlock} type="checkbox" checked={value} onChange={onChange} />
    </Block>
  );
};

export default Checkbox;
