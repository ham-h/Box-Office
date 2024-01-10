

// import {Link} from 'react-router-dom'
const Actorcard = ({name,image,gender,country,birthday,deathday}) => {
    
  return (
    <div>
     <h1>{name}{!!gender && `(${gender})`}</h1> 
     {/* !! to make it boolean */}
    <div> <img src={image} alt={name} /></div>
   
   <p>{country ? `comes from ${country}` : 'no country known'}</p>
   {!!birthday && <p>`born ion ${birthday}`</p>}
   <p>{deathday ? `death on ${deathday}` : 'alive'}</p>
    
    
    </div>
  )
}

export default Actorcard

