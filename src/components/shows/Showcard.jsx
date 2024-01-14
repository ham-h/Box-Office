
// import {Link} from 'react-router-dom'
const Showcard = ({name,image,id,summary,onstarmeclick,isStarred}) => {
    const summarystrip=summary ? summary.split(" ").slice(0,10).join(' ').replace(/<.+?>/g,''): 'no discription'
  return (
    <div>
     <h1>{name}</h1> 
    <div> <img src={image} alt={name} /></div>
   
    <p>{summarystrip}</p>
    <div>
    {/* <Link to={`/show/${id}`}>read more</Link> */}
    {/* now whwnwvwr v click readmore v have different url ids ,now to fetch dynamic data-v use useeffect*/}
    <a href={`/show/${id}`} target="_blank" rel="noreferrer">Read more</a>
    {/* to open read more in a new tab v use anchor tag here */}
    <button type='button' onClick={()=>onstarmeclick(id)}>{isStarred ? 'unstar me': 'star me'}</button>
    {/* now when i press starme -it will turn unstarme bt even if v refresh page ,it will be unstar me bcoz local storage percieves it */}
    </div>
    </div>
  )
}

export default Showcard
