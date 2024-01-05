

const Apptitle = (props) => {
    const {title="BoxOffice",subtitle="looking for movie or actor?"}=props
  return (
    <div>
    <h1>{title}</h1> 
    <p>{subtitle}</p> 
    </div>

  )
}

export default Apptitle
