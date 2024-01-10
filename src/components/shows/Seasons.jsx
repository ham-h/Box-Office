

const Seasons = ({seasons}) => {
  return (
    <div>
      <p>Seasons in total:{seasons.length}</p>
      {/* since season is an array,v give length */}
      <p>Episodes in total:{seasons.reduce((sum,seasons)=>sum+seasons.episodeOrder,0)}</p>
      <div>
        {seasons.map(seasons=><div key={seasons.id}>
            <p>Season: {seasons.number}</p>
            <p>Episode :{seasons.episodeOrder}</p>
            <div>Aired: {seasons.premiereDate} - {seasons.endDate}</div>
            </div>)}
      </div>
    </div>
  )
}

export default Seasons
