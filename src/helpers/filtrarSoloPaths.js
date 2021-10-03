export const filtrarSoloPath = (arr = []) => {
  const filtrado = arr.map((e) => {
    return e.path;
  });
  return filtrado;
};
