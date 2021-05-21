export interface DemoState {
  count: number;
  decrementCount: number;
  name: string;
  age: number;
  active: boolean;
}

export const DemoInitialState: DemoState = {
  count: 0,
  decrementCount: 0,
  name: "",
  age: 0,
  active: false
};
