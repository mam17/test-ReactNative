/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import WastesComponent from '../components/WastesComponent';
import { useStateValue } from '../../state';
import { Creators as WasteCreators } from '../../ducks/waste';

const getWastesTotal = (wastes) =>
  wastes?.reduce((accumulator, waste) => {
    if (!waste?.canceled) {
      return waste?.cost + accumulator;
    }
    return accumulator;
  }, 0);

const WastesContainer = ({ navigation }) => {
  const [
    {
      Waste: { wastes, isLoading }
    },
    dispatch
  ] = useStateValue();

  const { t } = useTranslation();

  React.useLayoutEffect(
    () =>
      navigation?.setOptions({
        headerShown: false
      }),
    []
  );

  React.useEffect(() => {
    WasteCreators.getWastes({ dispatch });
  }, []);

  return (
    <WastesComponent
      t={t}
      loading={isLoading}
      wastes={wastes}
      total={getWastesTotal(wastes)}
      onPressWasteItem={(id) =>
        navigation?.navigate('Waste', {
          wasteId: id
        })
      }
    />
  );
};

WastesContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    setOptions: PropTypes.func.isRequired
  }).isRequired
};

export default WastesContainer;
