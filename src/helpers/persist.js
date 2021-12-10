export const persistValue = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getPersistedValue = (key) => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
  return;
};
