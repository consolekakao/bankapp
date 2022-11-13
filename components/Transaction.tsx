import React, {useState} from 'react';
import {Image, ScrollView, Text} from 'react-native';
import styled from 'styled-components';
import {transactionList} from '../data';
const StyledFilterbar = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  padding: 12px 30px;
`;

const StyledItem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  padding: 0 12px;
  /* background-color: aqua; */
`;
const StyledTotal = styled.View`
  display: flex;
  flex-direction: column;
`;

const StyledHr = styled.View`
  height: 1px;
  width: 100%;
  background-color: #d9d9d9;
`;
const FilterBar = () => {
  return (
    <StyledFilterbar>
      <Text style={{color: '#333', fontSize: 20}}>검색</Text>
      <Text style={{color: '#333', fontSize: 20}}>최신순</Text>
    </StyledFilterbar>
  );
};

const List = () => {
  const [data, setData] = useState(transactionList.reverse());

  return data.map((v: any, i: number) => {
    return (
      <>
        <StyledItem>
          <Text style={{flexGrow: 0.6}}>{v.date}</Text>
          <Text style={{flexGrow: 6, paddingLeft: 20}}>{v.name}</Text>
          <StyledTotal>
            <Text
              style={{
                textAlign: 'right',
                fontSize: 16,
                fontWeight: 'bold',
                color: v.value < 0 ? 'red' : '#2196F3',
              }}>
              {v.value.toLocaleString('ko-KR')}원
            </Text>
            <Text
              style={{
                textAlign: 'right',
              }}>
              {v.value.toLocaleString('ko-KR')}원
            </Text>
          </StyledTotal>
        </StyledItem>
        <StyledHr />
      </>
    );
  });
};

export const Transaction = (props: any) => {
  const {selectedMember, setSelectedMember} = props;
  return (
    <>
      <FilterBar />
      <ScrollView>
        <List />
      </ScrollView>
    </>
  );
};
