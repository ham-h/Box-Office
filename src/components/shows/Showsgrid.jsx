import Showcard from './Showcard';
const Showsgrid = ({ shows }) => {
  return (
    <div>
      {shows.map(data => (
        <Showcard
          key={data.show.id}
          name={data.show.name}
          id={data.show.id}
          image={
            data.show.image ? data.show.image.medium : '/no-image-icon-23489.png'
          }
          summary={data.show.summary}
        />
      ))}
    </div>
  );
};

export default Showsgrid;
// shows.map(data =>(<Showcard key={data.show.id} name={data.show.name}/>))
/* shows.map(data =>(<div key={data.show.id}>{data.show.name}</div>)) */
