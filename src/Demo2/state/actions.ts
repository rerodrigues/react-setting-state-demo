import {
  ActionTypes,
  DecrementCounter,
  IncrementCounter,
  SetActive,
  SetAge,
  SetName
} from "./actionsTypes";

export const incrementCounter = (): IncrementCounter => ({
  type: ActionTypes.INCREMENT_COUNTER
});

export const decrementCounter = (): DecrementCounter => ({
  type: ActionTypes.DECREMENT_COUNTER
});

export const setName = (name: string): SetName => ({
  type: ActionTypes.SET_NAME,
  payload: name
});

export const setAge = (age: string): SetAge => ({
  type: ActionTypes.SET_AGE,
  payload: parseInt(age, 10)
});

export const setActive = (active: boolean): SetActive => ({
  type: ActionTypes.SET_ACTIVE,
  payload: active
});
