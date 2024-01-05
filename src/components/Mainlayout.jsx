import { Outlet } from "react-router-dom"
import Nav from "./Nav"
import Apptitle from "./Apptitle"


const Mainlayout = () => {
  return (
    <div><Apptitle />
    {/* title="hlo" subtitle="ooo" v could ovewrite here*/}
        <Nav/>
        <Outlet/>
    </div>
  )
}

export default Mainlayout