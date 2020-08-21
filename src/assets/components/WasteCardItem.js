import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { COLORS } from '../styles/colors';
import Icon from './Icon';

const Container = styled.View`
  height: 70px;
  background-color: ${COLORS.white};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
  padding: 8px 16px;
  flex-direction: row;
`;
const ContentLeft = styled.View`
  flex: 3;
  justify-content: space-around;
`;
const SubTitleBox = styled.View`
  flex-direction: row;
  align-items: center;
`;
const ContentRight = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;
const Title = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-decoration-line: ${({ disabled }) => (disabled ? 'line-through' : 'none')};
  color: ${({ disabled }) => (disabled ? COLORS.blueLight3 : COLORS.greyDark)};
`;
const SubTitle = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: ${({ disabled }) => (disabled ? COLORS.blueLight3 : COLORS.blueLight4)};
`;
const CostArea = styled.View`
  flex-direction: row;
  align-items: center;
`;
const CostTitle = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  text-decoration-line: ${({ disabled }) => (disabled ? 'line-through' : 'none')};
  color: ${({ disabled }) => (disabled ? COLORS.blueLight3 : COLORS.greyDark)};
`;

const WasteCardItem = ({ disabled, subtitle, title, cost }) => (
  <Container>
    <ContentLeft>
      <Title disabled={disabled} testID="WasteCardItem-Title">
        {title}
      </Title>
      <SubTitleBox>
        <Icon name="SUPPLY" width={16} height={16} />
        <SubTitle testID="WasteCardItem-Subtitle" disabled={disabled}>
          {' '}
          {subtitle}
        </SubTitle>
      </SubTitleBox>
    </ContentLeft>
    <ContentRight>
      <CostArea>
        <Icon
          name="refundable"
          width={18}
          height={18}
          fill={disabled ? COLORS.blueLight3 : COLORS.green}
        />
        <CostTitle disabled={disabled} testID="WasteCardItem-Cost">
          {' '}
          {cost.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </CostTitle>
      </CostArea>
    </ContentRight>
  </Container>
);

WasteCardItem.propTypes = {
  disabled: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired
};

export default WasteCardItem;
