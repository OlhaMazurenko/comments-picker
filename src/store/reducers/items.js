import { ActionType } from "../constants/items";

const initialState = {
  itemsArray: [],
  selectedItem: null
};

const items = (state = initialState, action) => {
  const arrayCopy = state.itemsArray.slice();

  switch (action.type) {
    case ActionType.ADD_ITEM:
      arrayCopy.push(action.payload);
      console.log("sdfsdsdg", action.payload);
      return {
        ...state,
        itemsArray: arrayCopy
      };
    case ActionType.REMOVE_ITEM:
      const updatedData = arrayCopy.filter(item => item.id !== action.payload);
      return {
        ...state,
        itemsArray: updatedData,
        selectedItem: null
      };
    case ActionType.SELECT_ITEM:
      return {
        ...state,
        selectedItem: action.payload
      };
    case ActionType.ADD_COMMENT:
      arrayCopy.forEach(element => {
        if (element.id === action.id) {
          element.comments.push(action.payload);
        }
      });
      return {
        ...state,
        itemsArray: arrayCopy
      };
    default:
      return state;
  }
};

export default items;
