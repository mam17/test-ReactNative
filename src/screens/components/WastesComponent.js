import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { SCREEN_HEIGHT } from '../../assets/styles/constants';
import { COLORS } from '../../assets/styles/colors';
import Icon from '../../assets/components/Icon';
import WasteCardItem from '../../assets/components/WasteCardItem';
import { getDay, getWeekDay } from '../../helpers';
import Loading from '../../assets/components/Loading';

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${COLORS.backgroundColor};
`;
const Header = styled.View`
  height: ${SCREEN_HEIGHT * 0.1};
  padding: 0px 16px;
  width: 100%;
  flex-direction: row;
`;
const HeaderTitleBox = styled.View`
  flex: 3;
  justify-content: center;
`;
const HeaderTitle = styled.Text`
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  color: ${COLORS.blueLight4};
`;
const HeaderIconBox = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;
const Content = styled.View``;
const DateHeader = styled.View`
  margin: 10px 0px;
  padding: 0px 16px;
  justify-content: center;
`;
const ItemBoxHeaderInitial = styled.Text`
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: ${COLORS.blueLight3};
`;
const ItemBoxHeaderFinal = styled.Text`
  font-weight: 400;
  font-size: 16px;
  line-height: 33px;
  color: ${COLORS.blueLight3};
`;
const TotalBox = styled.View`
  height: 120px;
  margin-top: 40px;
  padding: 21px 16px;
  background-color: ${COLORS.blueLight2};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
  flex-direction: row;
`;
const TotalBoxLeft = styled.View`
  flex: 2;
`;
const TotalBoxLeftText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: ${COLORS.blueLight3};
`;
const TotalBoxRight = styled.View`
  flex: 1;
  align-items: flex-end;
`;
const TotalBoxRightText = styled.Text`
  font-style: normal;
  font-weight: bold;
  line-height: 22px;
  color: ${COLORS.blueDark};
`;
const Separator = styled.View`
  height: 8px;
`;

export const WasteTypes = {
  SUPPLY: {
    description: 'Supply'
  }
};

const renderWastes = ({ t, wastes, onPressWasteItem }) =>
  wastes?.map((waste, index) => {
    const day = getDay(waste?.date);
    const prevWaste = wastes[index - 1];
    const prevWasteDay = getDay(prevWaste?.date);
    const shouldRenderNewHeader = day !== prevWasteDay;

    return (
      <React.Fragment key={waste?.id}>
        {shouldRenderNewHeader && (
          <DateHeader testID="DateHeader">
            <ItemBoxHeaderInitial>
              {day}
              <ItemBoxHeaderFinal> {getWeekDay(waste?.date)}</ItemBoxHeaderFinal>
            </ItemBoxHeaderInitial>
          </DateHeader>
        )}
        <WasteCardItem
          cost={waste?.cost}
          icon={waste?.type}
          title={waste?.description}
          disabled={waste?.canceled}
          subtitle={t(`app:${WasteTypes[waste?.type].description}`)}
          onPressItem={() => onPressWasteItem(waste?.id)}
        />
        <Separator />
      </React.Fragment>
    );
  });

const WastesComponent = ({ t, wastes, total, onPressWasteItem, loading }) => (
  <Container>
    <Header>
      <HeaderTitleBox>
        <HeaderTitle>Setembro</HeaderTitle>
      </HeaderTitleBox>
      <HeaderIconBox>
        <Icon name="search" width={20} height={20} />
      </HeaderIconBox>
    </Header>
    <Content>
      {renderWastes({ t, wastes, onPressWasteItem })}
      <TotalBox>
        <TotalBoxLeft>
          <TotalBoxLeftText>TOTAL</TotalBoxLeftText>
        </TotalBoxLeft>
        <TotalBoxRight>
          <TotalBoxRightText style={{ fontSize: 13 }}>
            R$
            <TotalBoxRightText style={{ fontSize: 20 }} testID="WastesComponent-Total">
              {' '}
              {total?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </TotalBoxRightText>
          </TotalBoxRightText>
        </TotalBoxRight>
      </TotalBox>
    </Content>
    {loading && <Loading />}
  </Container>
);

WastesComponent.propTypes = {
  t: PropTypes.func.isRequired,
  wastes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  total: PropTypes.number.isRequired,
  onPressWasteItem: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default WastesComponent;
