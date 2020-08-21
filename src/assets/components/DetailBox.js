import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { COLORS } from '../styles/colors';
import Icon from './Icon';

const Container = styled.View`
  height: 55px;
  margin: 8px 0px;
  background-color: ${COLORS.white};
  border-radius: 8px;
  border: 1px solid ${COLORS.blueLight2};
  flex-direction: row;
`;
const ContentLeft = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const ContentRight = styled.View`
  flex: 5;
  justify-content: center;
`;
const TitleRight = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: ${COLORS.blueDark};
`;
const SubtitleRight = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: ${COLORS.blueLight4};
`;

const DetailBox = ({ title, subtitle }) => (
  <Container>
    <ContentLeft>
      <Icon name="calendarChecked" width={24} height={24} />
    </ContentLeft>
    <ContentRight>
      <TitleRight>{title}</TitleRight>
      <SubtitleRight>{subtitle}</SubtitleRight>
    </ContentRight>
  </Container>
);

DetailBox.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default DetailBox;
