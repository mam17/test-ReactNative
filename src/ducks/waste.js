import { wastesMock } from './__mocks__/waste';

export const Types = {
  IS_LOADING: 'waste/IS_LOADING',
  WASTES: 'waste/WASTES'
};

export const INITIAL_STATE = {
  isLoading: false,
  wastes: null
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case Types.IS_LOADING:
      return { ...state, isLoading: payload };
    case Types.WASTES:
      return { ...state, wastes: payload };
    case Types.CLEAR:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const Creators = {
  setIsLoading: (isLoading) => ({
    type: Types.IS_LOADING,
    payload: isLoading
  }),
  setWastes: (wastes) => ({
    type: Types.WASTES,
    payload: wastes
  }),
  clear: () => ({
    type: Types.CLEAR
  }),
  getWastes: async ({ dispatch }) => {
    dispatch(Creators.setIsLoading(true));

    await new Promise((resolve) => {
      setTimeout(() => {
        dispatch(Creators.setWastes(wastesMock));
        dispatch(Creators.setIsLoading(false));
        resolve();
      }, 2000);
    });
  }
};
