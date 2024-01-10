// import { Link } from "react-router-dom"
import { searchforshows,searchforpeople } from '../api/Tvmaze';
import { useState } from 'react';
import SearchForm from '../components/SearchForm';
import Showsgrid from '../components/shows/Showsgrid';
import Actorsgrid from '../components/actors/Actorsgrid';


const Home = () => {
  // const [search, setsearch] = useState('');
  const [apiData, setapiData] = useState(null); //instead  of [] ,can use null by using rendering func down
  const [dataerror, setdataerror] = useState(null);

  const onsearch = async ({q,searchopt}) => {
   
    try {
      setdataerror(null);
      let result;
      if(searchopt === 'shows'){
        
         result = await searchforshows(q)
       
      }
      else{
         result = await searchforpeople(q);
      }
      setapiData(result);
     
    } catch (error) {
      setdataerror(error);
    }
  };
  const renderingApidata = () => {
    if (dataerror) {
      return <div>error occured:{dataerror.message}</div>;
    }
  //   if (apiData) {
  //     return  apiData[0].show ? apiData.map(data => (
  //       <div key={data.show.id}>{data.show.name}</div>
  //     )): apiData.map(data => (
  //       <div key={data.person.id}>{data.person.name}</div>
  //     ))
  //   }
  //   return null;
  // };

  //instead of this create sep folders for actors and shows

if(apiData?.length === 0){//optional chaining   if array is empty
 return <div>no results</div>
}
  if (apiData) {
         return  apiData[0].show ? <Showsgrid shows={apiData}/>
        : <Actorsgrid actors={apiData}/>
         
       }
       return null;
     };
  return (
    <div>
      <SearchForm onsearch={onsearch}/>
     
    
      <div>
        {renderingApidata()}
        
      </div>
    </div>
  );
};

export default Home;
