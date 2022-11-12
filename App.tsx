/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, type PropsWithChildren} from 'react';
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

const memberArr = [
  {name: '윤지환', url: 'https://avatars.githubusercontent.com/u/60729088?v=4'},
  {
    name: '김현수',
    url: 'https://avatars.githubusercontent.com/u/115357815?v=4',
  },
  {name: '유소현', url: 'https://avatars.githubusercontent.com/u/73421899?v=4'},
  {name: '이근영', url: 'https://avatars.githubusercontent.com/u/79135142?v=4'},
  {name: '유아영', url: 'https://avatars.githubusercontent.com/u/41851801?v=4'},
];

const transactionList = [
  {
    type: '입금',
    name: '윤지환',
    value: 5000,
    date: '10.03',
    detail: '고정회비납부',
  },
  {
    type: '입금',
    name: '윤지환',
    value: 5000,
    date: '10.16',
    detail: '고정회비납부',
  },
  {
    type: '입금',
    name: '김현수',
    value: 5000,
    date: '10.16',
    detail: '고정회비납부',
  },
  {
    type: '입금',
    name: '유아영',
    value: 5000,
    date: '10.16',
    detail: '고정회비납부',
  },
  {
    type: '입금',
    name: '유소현',
    value: 5000,
    date: '10.18',
    detail: '고정회비납부',
  },
  {
    type: '입금',
    name: '이근영',
    value: 5000,
    date: '10.31',
    detail: '고정회비납부',
  },
  {
    type: '출금',
    name: '스터디룸(강남)',
    value: -15400,
    date: '11.02',
    detail: '강남역 스터디윙 12시~14시 예약으로 사용',
  },
  {
    type: '입금',
    name: '윤지환',
    value: 5000,
    date: '11.10',
    detail: '어쩌구저쩌구',
  },
];
const App = () => {
  const [selectedMember, setSelectedMember] = useState<string>('all');
  return (
    <>
      <SafeAreaView style={{backgroundColor: 'hotpink'}}>
        <StyledHeader>
          <StyledTotalMoney>510,490원</StyledTotalMoney>

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
