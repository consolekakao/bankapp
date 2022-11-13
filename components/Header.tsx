import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const StyledHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
`;

const StyledButtonPrev = styled.View`
  font-size: 20;
  height: 20;
`;
export const Header = () => {
  return (
    <StyledHeader>
      <StyledButtonPrev>
        <Text>{'<'}</Text>
      </StyledButtonPrev>
      <Text>ddd</Text>
      <Text>ddd</Text>
    </StyledHeader>
  );
};
