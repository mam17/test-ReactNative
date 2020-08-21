import WasteReducer, { INITIAL_STATE as WasteInitialState } from './waste';

export const mainReducer = ({ Waste }, action) => ({
  Waste: WasteReducer(Waste, action)
});

export const mainInitialStates = {
  Waste: WasteInitialState
};
