import { ActionType } from "../constants/items";

export const addItemAction = value => dispatch => {
  return dispatch({
    type: ActionType.ADD_ITEM,
    payload: value
  });
};

export const deleteItemAction = id => dispatch => {
  return dispatch({
    type: ActionType.REMOVE_ITEM,
    payload: id
  });
};

export const selectItemAction = item => dispatch => {
  return dispatch({
    type: ActionType.SELECT_ITEM,
    payload: item
  });
};

export const addCommentAction = (id, comment) => dispatch => {
  return dispatch({
    type: ActionType.ADD_COMMENT,
    payload: comment,
    id: id
  });
};
