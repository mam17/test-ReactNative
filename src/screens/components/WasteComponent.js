import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import moment from 'moment';
import { COLORS } from '../../assets/styles/colors';
import Icon from '../../assets/components/Icon';
import DetailBox from '../../assets/components/DetailBox';
import { WasteTypes } from './WastesComponent';
import Loading from '../../assets/components/Loading';

const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.backgroundColor};
`;
const Header = styled.View`
  height: 85px;
  background-color: ${COLORS.blueLight2};
`;
const HeaderContent = styled.View`
  flex-direction: row;
  height: 75px;
  justify-content: flex-end;
`;
const HeaderTitle = styled.Text`
  font-style: normal;
  font-weight: bold;
  line-height: 65px;
  color: ${COLORS.blueLight4};
`;
const HeaderContentLeft = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-start;
`;
const HeaderContentRight = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
const Content = styled.View`
  padding: 15px 25px;
`;
const DateBox = styled.View`
  margin: 10px 0px;
  flex-direction: row;
  align-items: center;
`;
const DateTitle = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: ${COLORS.blueLight4};
`;
const WasteTypeBox = styled.View`
  height: 60px;
  margin: 10px 0px;
  justify-content: space-evenly;
`;
const WasteTypeTitle = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: ${COLORS.greyDark};
`;
const WasteTypeSubtitleBox = styled.View`
  flex-direction: row;
`;
const WasteTypeSubtitleIcon = styled.View`
  justify-content: center;
`;
const WasteTypeSubtitle = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: ${COLORS.blueLight4};
`;
const RefundableBox = styled.View`
  margin: 20px 0px;
  align-items: center;
  flex-direction: row;
`;
const RefundableText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: ${COLORS.green};
`;
const ReceiptImageBox = styled.View`
  height: 200px;
  margin: 20px 0px;
  border-radius: 8px;
  overflow: hidden;
`;
const ReceiptImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const WasteComponent = ({ t, waste, loading }) => (
  <Container>
    <Header>
      <HeaderContent>
        <HeaderContentLeft>
          <HeaderTitle style={{ fontSize: 18 }}>R$</HeaderTitle>
        </HeaderContentLeft>
        <HeaderContentRight>
          <HeaderTitle style={{ fontSize: 48 }}>
            {' '}
            {waste?.cost?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </HeaderTitle>
        </HeaderContentRight>
      </HeaderContent>
    </Header>
    <Content>
      <DateBox>
        <Icon name="calendar" width={20} height={22} />
        <DateTitle> {moment(waste?.date, 'DD-MM-YYYY HH:mm').format('DD/MM/YYYY')}</DateTitle>
      </DateBox>
      <WasteTypeBox>
        <WasteTypeTitle>{waste?.description}</WasteTypeTitle>
        <WasteTypeSubtitleBox>
          <WasteTypeSubtitleIcon>
            <Icon name={waste?.type} width={16} height={16} />
          </WasteTypeSubtitleIcon>
          <WasteTypeSubtitle> {t(`app:${WasteTypes[waste?.type]?.description}`)}</WasteTypeSubtitle>
        </WasteTypeSubtitleBox>
      </WasteTypeBox>
      {waste?.refundable && (
        <RefundableBox>
          <Icon name="refundable" width={24} height={24} fill={COLORS.green} />
          <RefundableText>
            {'  '}
            {t('app:Refundable')}
          </RefundableText>
        </RefundableBox>
      )}
      <DetailBox
        title={waste?.establishment}
        subtitle={`${moment(waste?.date, 'DD-MM-YYYY HH:mm').format('DD/MM/YY - HH[h]mm')}`}
      />
      <ReceiptImageBox>
        <ReceiptImage
          source={{
            uri: waste?.receipt
          }}
          resizeMode="stretch"
        />
      </ReceiptImageBox>
    </Content>
    {loading && <Loading />}
  </Container>
);

WasteComponent.propTypes = {
  t: PropTypes.func.isRequired,
  waste: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    refundable: PropTypes.bool.isRequired,
    establishment: PropTypes.string.isRequired,
    receipt: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired
  }).isRequired,
  loading: PropTypes.bool.isRequired
};

export default WasteComponent;
