import { useParams } from "react-router-dom"


const Show = () => {
//    const params = useParams()//now using this hook i can access showid,since params is an objct v can use destructering and interpolate in js
const {showid}=useParams()
  return (
    <div>
    show page for show {showid} 
    {/* now its not possible change url manually always so..change link part in showcard */}
    </div>
  )
}

export default Show
