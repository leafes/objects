import crc32 from 'crc-32';

export const make = () => [];

const keyToIndex = (key) => crc32.str(key) % 1000;

export const set = (map, key, value) => {
  const index = keyToIndex(key);
  if (map[index]) return false; // Проверка на коллизию

  map[index] = [key, value];
  return true;
};

export const get = (map, key, defaultValue = null) => {
  if (map.length === 0) return defaultValue;

  const index = keyToIndex(key);
  const copyOfMap = [...map];
  const [pairKey, value] = copyOfMap[index];

  if (pairKey !== key || !value) return defaultValue;
  return value;
};