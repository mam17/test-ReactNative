import { wastesMock } from './__mocks__/waste';

export const Types = {
  IS_LOADING: 'waste/IS_LOADING',
  WASTES: 'waste/WASTES',
  WASTE: 'waste/WASTE'
};

export const INITIAL_STATE = {
  isLoading: false,
  wastes: null,
  waste: null
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case Types.IS_LOADING:
      return { ...state, isLoading: payload };
    case Types.WASTES:
      return { ...state, wastes: payload };
    case Types.WASTE:
      return { ...state, waste: payload };
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
  setWaste: (waste) => ({
    type: Types.WASTE,
    payload: waste
  }),
  clear: () => ({
    type: Types.CLEAR
  }),
  getWastes: async ({ dispatch }) => {
    dispatch(Creators.setIsLoading(true));

    await new Promise((resolve) => {
      setTimeout(() => {
        const wastesByDate = wastesMock?.sort((currentWaste, nextWaste) =>
          currentWaste?.date > nextWaste ? -1 : 1
        );
        dispatch(Creators.setWastes(wastesByDate));
        dispatch(Creators.setIsLoading(false));
        resolve();
      }, 2000);
    });
  },
  getWasteById: async ({ dispatch, id }) => {
    dispatch(Creators.setIsLoading(true));

    await new Promise((resolve) => {
      setTimeout(() => {
        const mockedWaste = {
          ...wastesMock.find((waste) => waste?.id === id)
        };

        dispatch(Creators.setWaste(mockedWaste));
        dispatch(Creators.setIsLoading(false));
        resolve();
      }, 2000);
    });
  }
};
