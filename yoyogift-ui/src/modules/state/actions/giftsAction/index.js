import {
  FETCH_CARDS,
  FETCH_CARD,
  FETCH_CARD_FILTER,
  ADMIN_ADD_CARD,
  UPDATE_CARD_COUNT,
  ADMIN_UPDATE_CARD,
  FETCH_CARD_SEARCH
} from "./types";
import axiosWrapper from "../../../../apis/axiosCreate";

export const fetchCards = () => async dispatch => {
  const response = await axiosWrapper.get("/giftCards");
  dispatch({
    type: FETCH_CARDS,
    payload: response
  });
};

export const fetchCard = id => async dispatch => {
  const response = await axiosWrapper.get(`/giftCards/${id}`);
  dispatch({
    type: FETCH_CARD,
    payload: response
  });
};

export const adminUpdateCard = (id, object) => async dispatch => {
  console.log("adminUpdateCard clicked", id);
  const response = await axiosWrapper.patch(`/giftCards/${id}`, object);
  dispatch({
    type: ADMIN_UPDATE_CARD,
    payload: response
  });
};

export const fetchCardFilter = object => async dispatch => {
  dispatch({
    type: FETCH_CARD_FILTER,
    payload: object
  });
};

export const fetchCardSearch = object => async dispatch => {
  dispatch({
    type: FETCH_CARD_SEARCH,
    payload: object
  });
};

export const adminAddCard = object => async dispatch => {
  const response = await axiosWrapper.post("/giftCards", object);
  dispatch({
    type: ADMIN_ADD_CARD,
    payload: response
  });
};

export const updateCardCount = (cardId, cardCount) => async dispatch => {
  const response = await axiosWrapper.patch(`/giftCards/${cardId}`, {
    cardCount: cardCount
  });
  dispatch({
    type: UPDATE_CARD_COUNT,
    payload: response.data
  });
};
