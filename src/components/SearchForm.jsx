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
