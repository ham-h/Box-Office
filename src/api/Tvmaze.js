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



