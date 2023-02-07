import { format as dateFnsFormat } from 'date-fns';

export const getFormattedDate = (date, format = 'd.MM.y') => {
  if (!date) return '';
  return dateFnsFormat(new Date(isNaN(date) ? date : Number(date)), format);
};
