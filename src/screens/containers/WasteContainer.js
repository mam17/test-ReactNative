/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import WasteComponent from '../components/WasteComponent';
import { useStateValue } from '../../state';
import { Creators as WasteCreators } from '../../ducks/waste';
import Icon from '../../assets/components/Icon';

const WasteContainer = ({ navigation, route }) => {
  const [
    {
      Waste: { waste, isLoading }
    },
    dispatch
  ] = useStateValue();

  const { t } = useTranslation();
  const { wasteId } = route?.params;

  React.useLayoutEffect(
    () =>
      navigation?.setOptions({
        headerLeft: () => (
          <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => navigation.pop()}>
            <Icon name="arrowBack" width={24} height={24} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View style={{ marginHorizontal: 20 }}>
            <Icon name="pencil" width={20} height={20} />
          </View>
        ),
        headerTitle: ''
      }),
    []
  );

  React.useEffect(() => {
    WasteCreators.getWasteById({ dispatch, id: wasteId });
  }, []);

  React.useEffect(
    () => () => {
      dispatch(WasteCreators.setWaste(null));
    },
    []
  );

  return <WasteComponent t={t} waste={waste} loading={isLoading} />;
};

WasteContainer.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      wasteId: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
  navigation: PropTypes.shape({
    setOptions: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired
  }).isRequired
};

export default WasteContainer;
