/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState, type PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import styled, {css} from 'styled-components';
import {memberArr, transactionList} from './data';
const StyledHeader = styled.View`
  width: 100%;
  height: 260px;
  background-color: hotpink;
  /* justify-content: center; */
  align-items: center;
`;

const StyledTotalMoney = styled.Text`
  font-size: 30px;
  color: #e5e5e5;
  margin-top: 60px;
  font-weight: bold;
`;

const StyledMembers = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const StyleMemberButton = styled.View`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #999;
  align-items: center;
  justify-content: center;
  margin-left: ${props => (props.isFirst ? 0 : -10)};
`;

const App = () => {
  const [selectedMember, setSelectedMember] = useState<string>('all');

  return (
    <>
      <SafeAreaView style={{backgroundColor: 'hotpink'}}>
        <StyledHeader>
          <StyledTotalMoney>
            {transactionList
              .reduce((prev: any, curr: any) => {
                console.log('currrr:', curr.value);
                return (prev += curr.value);
              }, 0)
              .toLocaleString('ko-KR')}
            원
          </StyledTotalMoney>

          <StyledMembers>
            <TouchableOpacity onPress={() => setSelectedMember('all')}>
              <StyleMemberButton isFirst={true}>
                <Text
                  style={{
                    fontSize: 28,
                    color: '#fff',
                  }}>
                  All
                </Text>
              </StyleMemberButton>
            </TouchableOpacity>
            {memberArr.map((v: any, i: number) => {
              return (
                <TouchableOpacity
                  onPress={() => setSelectedMember(v.name)}
                  key={i}>
                  <Image
                    source={{
                      uri: v.url,
                    }}
                    style={{
                      width: selectedMember === v.name ? 70 : 50,
                      height: selectedMember === v.name ? 70 : 50,
                      borderRadius: 50,
                      marginTop: selectedMember === v.name ? -10 : 0,
                      marginLeft: -10,
                    }}
                  />
                </TouchableOpacity>
              );
            })}
            <TouchableOpacity onPress={() => setSelectedMember('use')}>
              <StyleMemberButton>
                <Text
                  style={{
                    fontSize: 28,
                    color: '#fff',
                  }}>
                  Use
                </Text>
              </StyleMemberButton>
            </TouchableOpacity>
          </StyledMembers>
        </StyledHeader>
      </SafeAreaView>
    </>
  );
};

export default App;
