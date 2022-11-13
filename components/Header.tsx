import React from 'react';
import {Image, Text} from 'react-native';
import styled from 'styled-components';

const StyledHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

const StyledButton = styled.Text`
  font-size: 20px;
  height: 40px;
`;
export const Header = () => {
  return (
    <StyledHeader>
      <StyledButton>
        <Text style={{color: '#fff'}}>이전</Text>
      </StyledButton>
      <StyledButton>
        <Text style={{color: '#fff', fontSize: 18}}>🐶React Study</Text>
      </StyledButton>
      <StyledButton>
        <Text style={{color: '#fff'}}>설정</Text>
      </StyledButton>
    </StyledHeader>
  );
};
