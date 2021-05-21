export enum ActionTypes {
  INCREMENT_COUNTER = "INCREMENT_COUNTER",
  DECREMENT_COUNTER = "DECREMENT_COUNTER",
  SET_NAME = "SET_NAME",
  SET_AGE = "SET_AGE",
  SET_ACTIVE = "SET_ACTIVE"
}

export interface IncrementCounter {
  type: ActionTypes.INCREMENT_COUNTER;
}

export interface DecrementCounter {
  type: ActionTypes.DECREMENT_COUNTER;
}

export interface SetName {
  type: ActionTypes.SET_NAME;
  payload: string;
}

export interface SetAge {
  type: ActionTypes.SET_AGE;
  payload: number;
}

export interface SetActive {
  type: ActionTypes.SET_ACTIVE;
  payload: boolean;
}

export type Demo3Actions =
  | IncrementCounter
  | DecrementCounter
  | SetName
  | SetAge
  | SetActive;
