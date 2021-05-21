import { ActionTypes, Demo3Actions } from "./actionTypes";
import produce, { Draft } from "immer";
import { Reducer } from "react";

import { DemoState } from "../../state/state";

const demoReducer: Reducer<DemoState, Demo3Actions> = produce(
  (draft: Draft<DemoState>, action: Demo3Actions) => {
    switch (action.type) {
      case ActionTypes.INCREMENT_COUNTER:
        draft.count++;
        break;
      case ActionTypes.DECREMENT_COUNTER:
        draft.decrementCount--;
        break;
      case ActionTypes.SET_NAME:
        draft.name = action.payload;
        break;
      case ActionTypes.SET_AGE:
        draft.age = action.payload;
        break;
      case ActionTypes.SET_ACTIVE:
        draft.active = action.payload;
        break;
    }
  }
);

export default demoReducer;
