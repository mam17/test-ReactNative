import moment from 'moment';

export const getDay = (date) => moment(date, 'DD-MM-YYYY HH:mm').format('DD');
export const getWeekDay = (date) =>
  moment(date, 'DD-MM-YYYY HH:mm').locale('pt-br').format('dddd').toLocaleUpperCase();
