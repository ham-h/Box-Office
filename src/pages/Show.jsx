import { useParams } from 'react-router-dom'; //custom hooks from router,if v want to reuse or extract hooks logic,then u can place incide a custom reacthook
// import { useEffect, useState } from "react"//built in hooks
import { getshowbyid } from '../api/Tvmaze';
import { useQuery } from '@tanstack/react-query';
import Showmaindata from '../components/shows/Showmaindata';
import Details from '../components/shows/Details';
import Cast from '../components/shows/Cast';
import Seasons from '../components/shows/Seasons';
const Show = () => {
  //    const params = useParams()//now using this hook i can access showid,since params is an objct v can use destructering and interpolate in js
  // const useShowbyid=(showid)=>{
  //   const[showdata,setshowdata]=useState(null)
  //   const[showerror,setshowerror]=useState(null)
  //   useEffect(() => {

  //    async function fetchData(){
  //       try{

  //        const data = await getshowbyid(showid)
  //   setshowdata(data)
  //       }
  //      catch(er){
  //       setshowerror(er);
  //      }

  //    }
  //    fetchData()
  //   }, [showid]);

  //   return {showdata,showerror}
  // }--comenting aft installing custom hook from react query-tanstack

  const { showid } = useParams();

  // const[showdata,setshowdata]=useState(null)
  // const[showerror,setshowerror]=useState(null)
  // useEffect(() => {

  //  async function fetchData(){
  //     try{

  //      const data = await getshowbyid(showid)
  // setshowdata(data)
  //     }
  //    catch(er){
  //     setshowerror(er);
  //    }

  //  }
  //  fetchData()
  // }, [showid]);--aftr useshowbyid
  // const {showdata,showerror} =useShowbyid(showid);//now i can use this hook in any component
  const { data: showdata, error: showerror } = useQuery({
    queryKey: ['show', showid],
    queryFn: () => getshowbyid(showid),
    refetchOnWindowFocus:false,
  });
  if (showerror) {
    return <div>show error:{showerror.message} </div>;
  }
  if (showdata) {
    // return <div>show name:{showdata.name}</div>
    return (
      <div>
        {' '}
        <Showmaindata
          image={showdata.image}
          name={showdata.name}
          rating={showdata.rating}
          summary={showdata.summary}
          genres={showdata.genres}
        />
        <div>
          <h2>Details</h2>
          <Details
            status={showdata.status}
            premiered={showdata.premiered}
            network={showdata.network}
          />
        </div>
        <div>
          <h2>Cast</h2>
          <Cast cast={showdata._embedded.cast}/>
        </div>
        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showdata._embedded.seasons}/>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* show page for show {showid}  */}
      {/* now its not possible change url manually always so..change link part in showcard */}
      loading data
    </div>
  );
};

export default Show;
//v can use data fetching libraries ssuch as swr ,react query(tanstack query),they will give abstract hooks to fetch data incide component when v have lot of hook implmntion
