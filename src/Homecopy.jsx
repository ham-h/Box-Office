// import { Link } from "react-router-dom"
import { searchforshows,searchforpeople } from '../api/Tvmaze';
import { useState } from 'react';
import SearchForm from '../components/SearchForm';

const Home = () => {
  // const [search, setsearch] = useState('');
  const [apiData, setapiData] = useState(null); //instead  of [] ,can use null by using rendering func down
  const [dataerror, setdataerror] = useState(null);
  // const [searchopt, setsearchopt] = useState('shows');
  // const onsearchinput = e => {
  //   setsearch(e.target.value);
  // };
  // const onradiochange = e => {
  //   setsearchopt(e.target.value);
  // };
  const onsearch = async ({q,searchopt}) => {
    //aftr default removd,v dont need e
    //await comes only with async
    // e.preventDefault();
    // const responce=await fetch('https://api.tvmaze.com/search/shows?q=girls')
    // const responce = await fetch(
    //   `https://api.tvmaze.com/search/shows?q=${search}`
    // ); //made it dynamic
    // const body = responce.json();
    // console.log(body);
    // const body=await apiGet(`/search/shows?q=${search}`)
    // searchforshows(search)
    try {
      setdataerror(null);
      if(searchopt === 'shows'){
        // const result = await searchforshows(search);
        const result = await searchforshows(q)
        setapiData(result);
      }
      else{
        const result = await searchforpeople(q);
        setapiData(result);
      }
      // const result = await searchforshows(search);
      // setapiData(result);
    } catch (error) {
      setdataerror(error);
    }
  };
  const renderingApidata = () => {
    if (dataerror) {
      return <div>error occured:{dataerror.message}</div>;
    }
    if (apiData) {
      return  apiData[0].show ? apiData.map(data => (
        <div key={data.show.id}>{data.show.name}</div>
      )): apiData.map(data => (
        <div key={data.person.id}>{data.person.name}</div>
      ))
    }
    return null;
  };

  return (
    <div>
      <SearchForm onsearch={onsearch}/>
      {/* <form onSubmit={onsearch}>
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
     
    
      <div>
        {renderingApidata()}
        {/* {apiData.map((data)=><div key={data.show.id}>{data.show.name}</div>)} */}
      </div>
    </div>
  );
};

export default Home;
// https://www.tvmaze.com/api
//q parameter is the search string in url
// incide our browser v have a webapi called fetch() which is globally available-sense request to supplied url
// response is a method which returns promise ,promise responds

//    const [inputval,setinputval]=useState('')//if v  dont specifyincde  () it will b undefined
//   const oninputchange=(e)=>{
//     setinputval(e.target.value);//one way binding
//   }
//   return (
//     <div>
//         {/* <Link to="/starred">start</Link> */}
//         <div>{inputval}</div>
//         <button type="button" onClick={()=>{
//           setinputval("hamna")}}>update</button>
//         <input type="text" value={inputval} onChange={oninputchange}/>

//         {/* without value=inputval the update works only outside not incide the inputbox */}
//           {/* if v update state it updates text n if update txt it updates state==2 way data binding */}

//         {/* react router use to transfer btw pages  ,v use it for single page applications,where v have only 1 html file*/}
//   {/* actually it not navigating  ,js is imitating as such bt actually js replaces existing html  with new one and change url --client sidenavigation*/}
//   </div>
//   )
// }
