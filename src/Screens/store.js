import React from 'react';
import { useLocalStore } from 'mobx-react';


const StoreProvider = ({children}) => {
  const store = useLocalStore(() => ({
    id: '123',
    setId: id => {
      store.id = id;
    }
  }));
  
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}
export const StoreContext = React.createContext();
export default StoreProvider;
