

const Showmaindata = ({image,genres,summary,name,rating}) => {
  return (
    <div>
     <img src={image ? image.original: '/no-image-icon-23489.png'} alt="name"/>
     <h1>{name}</h1>
     <div>{rating.average || 'N/A'}</div>
     {/* <div>{summary}</div> if v put it like this v will get <p> html tag along with  it ,to remove it */}
     <div dangerouslySetInnerHTML={{__html:summary}}/>
     <div>Generes:
        {/* generes has suboptions in it,so v need to map it */}
        {genres.map((genre)=><span key={genre}>{genre}</span>)}
     </div>
    </div>
  )
}

export default Showmaindata
