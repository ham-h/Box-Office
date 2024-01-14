const BASE_URL ="https://api.tvmaze.com"

const apiGet =async (querystring) => {
  // throw new Error("something bad ahppend");
  const responce = await fetch(
     `${BASE_URL}${querystring}`
    //  https://api.tvmaze.com/search/shows?q=girls
   ); //made it dynamic
   const body = responce.json();
   return body
};
export const searchforshows=(query)=>apiGet(`/search/shows?q=${query}`)
export const searchforpeople=(query)=>apiGet(`/search/people?q=${query}`)
// export const getshowbyid=(showid)=>apiGet(`/shows/:id`) from url shows
export const getshowbyid=(showid)=>apiGet(`/shows/${showid}?embed[]=seasons&embed[]=cast`)//added embed later from embedde in maze


export const getshowsbyid=async(showids)=>{
   const promises = showids.map(showid => apiGet(`/shows/${showid}`))
 return  Promise.all(promises)//returns array array of resolves of array of promises in parallel

}