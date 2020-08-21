import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator, Modal } from 'react-native';
import { COLORS } from '../styles/colors';

const Container = styled.View`
  flex: 1;
`;
const Content = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const LoadingBox = styled.View`
  width: 200px;
  height: 200px;
  background-color: ${COLORS.white};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const Loading = () => (
  <Container>
    <Modal transparent>
      <Content>
        <LoadingBox>
          <ActivityIndicator size="large" color={COLORS.blueDark} />
        </LoadingBox>
      </Content>
    </Modal>
  </Container>
);

export default Loading;
