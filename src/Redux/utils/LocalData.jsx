export const loadData = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
};

export const saveData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
