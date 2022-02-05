const floorToDivisibleByFive = (number) => {
  if(isNaN(number)){
    throw new Error('Expects number');
  }

  if (number <= 5) {
    return number;
  }
  const remainder = number % 5;
  return number - remainder;
};

export default floorToDivisibleByFive;
