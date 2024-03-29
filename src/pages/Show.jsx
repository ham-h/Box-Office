import { Link, useParams } from 'react-router-dom'; //custom hooks from router,if v want to reuse or extract hooks logic,then u can place incide a custom reacthook
// import { useEffect, useState } from "react"//built in hooks
import { getshowbyid } from '../api/Tvmaze';
import { useQuery } from '@tanstack/react-query';
import Showmaindata from '../components/shows/Showmaindata';
import Details from '../components/shows/Details';
import Cast from '../components/shows/Cast';
import Seasons from '../components/shows/Seasons';
const Show = () => {
  
  const { showid } = useParams();

 
  
  const { data: showdata, error: showerror } = useQuery({
    queryKey: ['show', showid],
    queryFn: () => getshowbyid(showid),
    refetchOnWindowFocus:false,
  });

//   const navigateTo = useNavigate()
// const gobackhome=()=>{
// navigateTo('/')
// }

  if (showerror) {
    return <div>show error:{showerror.message} </div>;
  }
  if (showdata) {
   
    return (
      
      <div>

{/* //to give goback compo at the top */}
  <Link to="/">go back to home</Link> 
  {/* this will work bt v have an alternative using navigate */}
  {/* <button type='button' onClick={gobackhome}>go to home</button> in this case Link itself is the easy option*/}

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
      
      loading data
    </div>
  );
};

export default Show;
//v can use data fetching libraries ssuch as swr ,react query(tanstack query),they will give abstract hooks to fetch data incide component when v have lot of hook implmntion
