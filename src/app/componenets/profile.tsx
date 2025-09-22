import astronauts from '../data/astronauts.json'

export function Profile({selection} : {selection : string}){

  const person = astronauts.filter(n => n.Name == selection)[0]
  console.log(person)

  return(
  <div className="profile">
    <div className="profile-person">
      <div className="profile-pfp" style={{
        backgroundImage: `url(${person['Photo Url']})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100px",
        height: "100px",
        borderRadius: "50%"
      }}></div>
      <div className="profile-name">{person.Name}</div>
    </div>

    <div className="personInformation">
      <div className="personInfo">
        <div className="infoGroup">
          <div className="about">{person.Bio}</div>
        </div>
        <div className="infoGroup">
          <div className="stats-country">Hometown : {person['Hometown Text']}</div>
          <div className="stats-country">Country : {person.Country}</div>
        </div>
        <div className="infoGroup">
          <div className="stats-age">Flight Count: {person['Total Flights']}</div>
          <div className="stats-age">Flights : {person.Flights}</div>
          <div className="stats-age">Flight Time : {person['Total Flight Time (ddd:hh:mm)']}</div>
        </div>
      </div>
    </div>
    <div className="titleCard">AstroQuery</div>
  </div>
  );
}