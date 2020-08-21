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

export const wastesMock = [
  {
    id: 1,
    type: 'SUPPLY',
    date: '22-09-2019 18:10',
    cost: 26.0,
    canceled: false,
    description: 'Almoço restaurante1',
    refundable: true,
    establishment: 'Contele Filial de Santos - SP',
    receipt: 'https://www.topdata.com.br/media/comprovante-de-ponto-do-trabalhador-1280x720.jpg'
  },
  {
    id: 2,
    type: 'SUPPLY',
    date: '22-09-2019 20:10',
    cost: 326.0,
    canceled: false,
    description: 'Almoço restaurante2',
    refundable: true,
    establishment: 'Contele Filial de Santos - SP',
    receipt: 'https://www.topdata.com.br/media/comprovante-de-ponto-do-trabalhador-1280x720.jpg'
  },
  {
    id: 3,
    type: 'SUPPLY',
    date: '20-09-2019 18:10',
    cost: 26.0,
    canceled: true,
    description: 'Almoço restaurante3',
    refundable: true,
    establishment: 'Contele Filial de Santos - SP',
    receipt: 'https://www.topdata.com.br/media/comprovante-de-ponto-do-trabalhador-1280x720.jpg'
  },
  {
    id: 4,
    type: 'SUPPLY',
    date: '20-09-2019 18:10',
    cost: 26.0,
    canceled: false,
    description: 'Almoço restaurante4',
    refundable: true,
    establishment: 'Contele Filial de Santos - SP',
    receipt: 'https://www.topdata.com.br/media/comprovante-de-ponto-do-trabalhador-1280x720.jpg'
  },
  {
    id: 5,
    type: 'SUPPLY',
    date: '14-09-2019 18:10',
    cost: 26.0,
    canceled: false,
    description: 'Almoço restaurante5',
    refundable: true,
    establishment: 'Contele Filial de Santos - SP',
    receipt: 'https://www.topdata.com.br/media/comprovante-de-ponto-do-trabalhador-1280x720.jpg'
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
  setWaste: (waste) => ({
    type: Types.WASTE,
    payload: waste
  }),
  clear: () => ({
    type: Types.CLEAR
  }),
  getWastes: ({ dispatch }) => {
    dispatch(Creators.setIsLoading(true));
    const wastesByDate = wastesMock?.sort((currentWaste, nextWaste) =>
      currentWaste?.date > nextWaste?.date ? -1 : 1
    );
    dispatch(Creators.setWastes(wastesByDate));
    dispatch(Creators.setWastes(wastesMock));
    dispatch(Creators.setIsLoading(false));
  },
  getWasteById: ({ dispatch, id }) => {
    dispatch(Creators.setIsLoading(true));

    const mockedWaste = wastesMock.find((waste) => waste?.id === id);

    dispatch(Creators.setWaste(mockedWaste));
    dispatch(Creators.setIsLoading(false));
  }
};
