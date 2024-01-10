
import {Link} from 'react-router-dom'
const Showcard = ({name,image,id,summary}) => {
    const summarystrip=summary ? summary.split(" ").slice(0,10).join(' ').replace(/<.+?>/g,''): 'no discription'
  return (
    <div>
     <h1>{name}</h1> 
    <div> <img src={image} alt={name} /></div>
   
    <p>{summarystrip}</p>
    <div>
    <Link to={`/show/${id}`}>read more</Link>
    {/* now whwnwvwr v click readmore v have different url ids */}
    <button type='button'>star me</button>
    </div>
    </div>
  )
}

export default Showcard
