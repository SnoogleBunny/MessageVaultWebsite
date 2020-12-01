import React from 'react';
import { useLocalObservable } from 'mobx-react';


const StoreProvider = ({children}) => {
  const store = useLocalObservable(() => ({
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
