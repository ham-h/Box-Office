import { useEffect, useReducer } from 'react';


const usePersistedreducer = (reducer, initialstate, localStoragekey) => {
    const [state, dispatch] = useReducer(reducer, initialstate, initial => {
      const persistedValue = localStorage.getItem(localStoragekey);
      return persistedValue ? JSON.parse(persistedValue) : initial;
    });
    useEffect(() => {
      localStorage.setItem(localStoragekey, JSON.stringify(state));
    }, [state, localStoragekey]);
    return [state, dispatch];
  };
  
  const starredshowsreducer = (currentstarred, action) => {
    switch (action.type) {
      case 'STAR':
        return currentstarred.concat(action.showid);
      case 'UNSTAR':
        return currentstarred.filter(showid => showid !== action.showid);
      default:
        return currentstarred;
    }
  };
 export const useStarredshows =()=>{
    return usePersistedreducer(
        starredshowsreducer,
        [],
        'starredshows'
      );
  }
  //local storage persiste data while session storage removes it once we close the tab or refresh