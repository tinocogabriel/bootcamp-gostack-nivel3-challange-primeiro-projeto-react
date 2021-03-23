import { parseISO, format } from 'date-fns';

const formatDate = (value: Date): string => {
  const iso = parseISO(value.toString());
  const formattedDate = format(iso, 'dd/MM/yyyy', {});
  return formattedDate;
};

export default formatDate;
