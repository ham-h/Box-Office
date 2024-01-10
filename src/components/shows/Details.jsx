
const Details = (props) => {
    const {status,premiered,network}=props
  return (
    <div>
    <p>Status:{status}</p>  
    {/* <p>Primiered:{premiered}{network ? `on ${network.name}`: null}</p> instead of terinery v can use--*/}
    <p>Primiered:{premiered} {!!network && `on ${network.name}`}</p>

    </div>
  )
}

export default Details
