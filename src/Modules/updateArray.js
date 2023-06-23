const updateArray = (bArray, param1, Param2) => {
  bArray.push({
    Name: param1.value,
    Score: Param2.value,
  });
  localStorage.setItem('Data', JSON.stringify(bArray));
  param1.value = '';
  Param2.value = '';
};

export default updateArray;