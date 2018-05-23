export const fetchPlaceholderImage = (name) => {
  const imageText = name[0] ? name[0].toUpperCase() : '₦';
  
  return (
    `http://placehold.it/35x35/${generateHexCode(name)}/fff?text=${imageText}`
  );
}

const generateHexCode = (name) => {
  if (!name) return '3dd97e';

  const hexMap = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f'
  };

  let hexCode = '';

  for (let i = 0; i < 6; i += 1) {
    hexCode += hexMap[name[i % name.length].charCodeAt() % 15];
  }
  
  return hexCode;
}