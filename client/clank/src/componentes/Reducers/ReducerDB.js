export function ReducerDB(state, action) {
  switch (action.type) {
    case "AGREGAR_SUB":
      return [...state, action.payload];

    case "BORRAR":
      return state.filter((sub) => sub.id !== action.payload);

    case "GET_SUB":
      return {
        ...state,
      }
    default:
      return state;
  }
}