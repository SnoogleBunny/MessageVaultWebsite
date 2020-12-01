import React from "react";
import { useLocalStore } from "mobx-react";

const StoreProvider = ({ children }) => {
  // I have used object as well as id so you will understand how you can update object or single value
  const store = useLocalStore(() => ({
    user: {},
    id: 123,
    setId(id) {
      this.id = id;
    },
    get getId() {
      return this.id;
    },
    setUser(name, userId) {
      this.user.name = name;
      this.user.userId = userId;
    },
    get getUser() {
      return this.user;
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
export const StoreContext = React.createContext();

export const useStore = () => {
  const store = React.useContext(StoreContext);
  return store;
};

export default StoreProvider;
