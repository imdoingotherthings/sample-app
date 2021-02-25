import { makeAutoObservable } from "mobx";
import { createContext, useContext, FC } from "react";

// create the store
class AdditionStore {
  // declare the variable that is going to update the data
  num1: number = 0;

  // mobx observes the state and updates it when the state changes
  constructor() {
    makeAutoObservable(this);
  }

  // declare the function that will update the data
  addingOne = () => {
    this.num1++;
  };
  subtractingOne = () => {
    this.num1--;
  };
}

// create the provider
const AdditionContext = createContext<AdditionStore>(new AdditionStore());

const AdditionProvider: FC<{ store: AdditionStore }> = ({
  store,
  children,
}) => {
  return (
    <AdditionContext.Provider value={store}>
      {children}
    </AdditionContext.Provider>
  );
};

// create custom hook to use the store
const useStore = () => {
  return useContext(AdditionContext);
};

export { AdditionStore, AdditionProvider, useStore };
