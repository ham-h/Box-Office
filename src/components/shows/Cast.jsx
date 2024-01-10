const Cast = ({ cast }) => {
  return (
    <div>
      {/* {cast.map((item)=><div key={item.person.id}>
        <div><img src={item.person.image ? item.person.image.medium : '/no-image-icon-23489.png' } alt="imgg"/></div>
        </div>)}
<div>{item.person.name || item.person.character.name}</div>  as this ite,m.person is repetative v will destructre it*/}
      {cast.map(({ person, character, voice }) => (
        <div key={person.id}>
          <div>
            <img
              src={
                person.image ? person.image.medium : '/no-image-icon-23489.png'
              }
              alt="imgg"
            />
          </div>
          <div>
            {person.name} || {character.name} {voice && '| Voiceover'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cast;
