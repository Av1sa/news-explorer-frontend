const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const formatDate = (date) => {
  return `${months[date.split('-')[1] - 1]} 
  ${+date.split('-')[2].split('T')[0]}, ${date.split('-')[0]}`;
};

const countKeywords = (cards) => {
  return cards
    .map((card) => card.keyword)
    .reduce((tally, word) => {
      tally[word] = (tally[word] || 0) + 1;
      return tally;
    }, {});
};

const sortKeywords = (num) => {
  return Object.entries(num).sort((a, b) => b[1] - a[1]);
};

const createDesc = (keywords) => {
  switch (keywords.length) {
    case 0:
      return 'n/a';
    case 1:
    case 2:
    case 3:
      return keywords
        .splice(1)
        .reduce(
          (accumulator, currentValue) => accumulator + ', ' + currentValue[0],
          keywords[0][0],
        );
    default:
      return `${keywords[0][0]}, ${keywords[1][0]}, and ${
        keywords.length - 2
      } other`;
  }
};

export { formatDate, countKeywords, sortKeywords, createDesc };
