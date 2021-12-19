export const searchFilter = (data, value) => {
  return data.filter((elem) => {
    return elem.title.toLowerCase().includes(value.toLowerCase());
  });
};
export const catalogFilter = (data, value) => {
  return data.filter((elem) => {
    return elem.category.includes(value);
  });
};
export const priceFilter = (data, min = 1) => {
  return data.filter((elem) => {
    return elem.price > min;
  });
};
