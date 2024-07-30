export const weakMap = new WeakMap();
export const queryAPI = (endpoint) => {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  const queryCount = weakMap.get(endpoint);
  if (queryCount >= 4) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, queryCount + 1);
};
