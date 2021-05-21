import { ActionTypes, Demo2Actions } from "./actionsTypes";
import { DemoState } from "../../state/state";

const demo2Reducer = (state: DemoState, action: Demo2Actions): DemoState => {
  switch (action.type) {
    case ActionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1
      };
    case ActionTypes.DECREMENT_COUNTER:
      return {
        ...state,
        decrementCount: state.decrementCount - 1
      };
    case ActionTypes.SET_NAME:
      return {
        ...state,
        name: action.payload
      };
    case ActionTypes.SET_AGE:
      return {
        ...state,
        age: action.payload
      };
    case ActionTypes.SET_ACTIVE:
      return {
        ...state,
        active: action.payload
      };
    default:
      return state;
  }
};

export default demo2Reducer;
