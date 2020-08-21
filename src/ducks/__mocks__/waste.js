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

export const wastesMock = [
  {
    id: 1,
    type: 'SUPPLY',
    date: '22-09-2019 18:10',
    cost: 26.0,
    canceled: false,
    description: 'Almoço restaurante1'
  },
  {
    id: 2,
    type: 'SUPPLY',
    date: '22-09-2019 20:10',
    cost: 326.0,
    canceled: false,
    description: 'Almoço restaurante2'
  },
  {
    id: 3,
    type: 'SUPPLY',
    date: '20-09-2019 18:10',
    cost: 26.0,
    canceled: true,
    description: 'Almoço restaurante3'
  },
  {
    id: 4,
    type: 'SUPPLY',
    date: '20-09-2019 18:10',
    cost: 26.0,
    canceled: false,
    description: 'Almoço restaurante4'
  },
  {
    id: 5,
    type: 'SUPPLY',
    date: '14-09-2019 18:10',
    cost: 26.0,
    canceled: false,
    description: 'Almoço restaurante5'
  }
];

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
  getWastes: ({ dispatch }) => {
    dispatch(Creators.setIsLoading(true));
    dispatch(Creators.setWastes(wastesMock));
    dispatch(Creators.setIsLoading(false));
  }
};
