/* eslint-disable no-undef */
import React from 'react';
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

const WastesContainer = () => {
  const [
    {
      Waste: { wastes }
    },
    dispatch
  ] = useStateValue();

  const { t } = useTranslation();

  React.useEffect(() => {
    WasteCreators.getWastes({ dispatch });
  }, []);

  return <WastesComponent t={t} wastes={wastes} total={getWastesTotal(wastes)} />;
};

export default WastesContainer;
