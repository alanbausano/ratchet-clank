export function Reducer(state, action) {
  switch (action.type) {
    case "AGREGAR":
      return [...state, action.payload];

    case "BORRAR":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
}