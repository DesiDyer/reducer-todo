export const initialState = [
  {
    name: "read books",
    id: Date.now(),
    done: false,
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = { name: action.payload, id: Date.now(), done: false };
      return { ...state, newItem };

    case "TOGGLE_ITEM":
      state.map((item) => {
        if (action.payload === item.id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      });

    case "CLEAR_DONE":
      return state.filter((item) => !item.done);

    default:
      return state;
  }
};
