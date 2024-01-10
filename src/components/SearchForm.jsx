import { useState } from "react";

const SearchForm = ({onsearch}) => {
    const [search, setsearch] = useState('');
    const [searchopt, setsearchopt] = useState('shows');
   
    
    const onsearchinput = e => {
        setsearch(e.target.value);
      };
      const onradiochange = e => {
        setsearchopt(e.target.value);
      };
      const onSubmit=(e)=>{
        e.preventDefault();
        const options={
q:search,
searchopt
        }
        onsearch(options);
      }
  return (
    <form onSubmit={onSubmit}>
    <button type="submit">seacrh</button>
    <input type="text" value={search} onChange={onsearchinput} />
    <label>
      shows
      <input
        type="radio"
        name="search-option"
        value="shows"
        checked={searchopt === 'shows'}
        onChange={onradiochange}
      />
    </label>
    <label>
      actors
      <input
        type="radio"
        name="search-option"
        value="actors"
        checked={searchopt === 'actors'}
        onChange={onradiochange}
      />
      {/* value={actors} */}
    </label>
  </form>
  )
}

export default SearchForm
// component lifwcycle means from mounting compo till it unmount
// stages:1)whwn compo mounts 2)when it gets rerendered when staes change 3)when unmounts 2.5)logic bfore nxt rerender
// useEffect(() => {//for single mounting-to run logic once

  // console.log("search opt changes")//this works when v put searchopt incide depenedency array so useffect runs atleat once n matter what-now whwnever v switch btw shows and actors useeffect rerenders
      //  return ()=>{//run when compo unmounts//cleanup function-it cleansup current useeffect run//so now when v clicked on starred it will come what is incide this return//bt it reruns aftr every effect if there is something incide dependency array
  // console.log("bfore nxt usefeect runs",searchopt)
      //  }
      // }, [searchopt])//this[] is called dependency array which is used to rerender or call back when states changes ,v list values we would like to listen n when this values change ,v instruct useffect to rerender changes