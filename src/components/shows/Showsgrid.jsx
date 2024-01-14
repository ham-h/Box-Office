// import { useEffect, useReducer } from 'react';
import Showcard from './Showcard';
import { useStarredshows } from '../../lib/Usestarredshows';
// const usePersistedreducer = (reducer, initialstate, localStoragekey) => {
//   const [state, dispatch] = useReducer(reducer, initialstate, initial => {
//     const persistedValue = localStorage.getItem(localStoragekey);
//     return persistedValue ? JSON.parse(persistedValue) : initial;
//   });
//   useEffect(() => {
//     localStorage.setItem(localStoragekey, JSON.stringify(state));
//   }, [state, localStoragekey]);
//   return [state, dispatch];
// };

// const starredshowsreducer = (currentstarred, action) => {
//   switch (action.type) {
//     case 'STAR':
//       return currentstarred.concat(action.showid);
//     case 'UNSTAR':
//       return currentstarred.filter(showid => showid !== action.showid);
//     default:
//       return currentstarred;
//   }
// };

const Showsgrid = ({ shows }) => {
  const [starredshows, dispatchstarred] = useStarredshows()
  // const [starredshows, dispatchstarred] = usePersistedreducer(
  //   starredshowsreducer,
  //   [],
  //   'starredshows'
  // );
  const onstarmeclick = showid => {
    const isStarred = starredshows.includes(showid);
    if (isStarred) {
      dispatchstarred({ type: 'UNSTAR', showid });
    } else {
      dispatchstarred({ type: 'STAR', showid });
    }
  };

  return (
    <div>
      {shows.map(data => (
        <Showcard
          key={data.show.id}
          name={data.show.name}
          id={data.show.id}
          image={
            data.show.image
              ? data.show.image.medium
              : '/no-image-icon-23489.png'
          }
          summary={data.show.summary}
          onstarmeclick={onstarmeclick}
          isStarred={starredshows.includes(data.show.id)}//this will say whwether show is present in starred shows array
        />
      ))}
    </div>
  );
};

export default Showsgrid;
// shows.map(data =>(<Showcard key={data.show.id} name={data.show.name}/>))
/* shows.map(data =>(<div key={data.show.id}>{data.show.name}</div>)) */
//localStorage.setitem('lol','hi')--in applications-localstorage-suboption-key value
//localStorage.getitem('lol')
//hii-outpu
//JSON.stringify(['a','b'])
//'["a","b"]'--now array will be turned into a string
//now to turn striing back to obj v use
//JSON.parse('["a","b"]')
