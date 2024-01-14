import { useStarredshows } from '../lib/Usestarredshows';
import { useQuery } from '@tanstack/react-query';
import { getshowsbyid } from '../api/Tvmaze';
import Showsgrid from '../components/shows/Showgridcopy';
const Starred = () => {
  const [starredshowsids] = useStarredshows();
  //to use multiple req for mult.shows---
  const { data: starredshows, error: starredshowserror } = useQuery({
    queryKey: ['starred', starredshowsids],
    queryFn: () =>
      //  getshowsbyid(starredshowsids).then(result=>result.map(showData =>{
      //   return showData;
      //  }))--to make resultmap simpler
      getshowsbyid(starredshowsids).then(result =>
        result.map(show => ({
          show
        }))
      ),
    refetchOnWindowFocus: false,
  });
  if (starredshows?.length === 0 ) {
    return <div>no shows where starred</div>;
  }
  if (starredshows?.length > 0 ) {
    return <Showsgrid shows={starredshows} />;
  }
  if(starredshowserror ){
    return <div>error ocuured: {starredshowserror.message}</div>
  }
  // return <div>Starred page,starred {starredshowsids.length}</div>;
  return <div>shows are loading</div>;
};

export default Starred;
