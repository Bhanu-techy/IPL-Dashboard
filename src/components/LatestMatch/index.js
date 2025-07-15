import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = details

  return (
    <div className="LatestMatchcontainer">
      <div className="LatestMatch-header">
        <div className="description">
          <p className="para">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="para">{venue}</p>
          <p className="para">{result}</p>
        </div>
        <div className="img-div">
          <img
            src={competingTeamLogo}
            className="logo"
            alt={`latest match ${competingTeam}`}
          />
        </div>
      </div>
      <hr className="line" />
      <div className="text">
        <p>firstInnings</p>
        <p>{firstInnings}</p>
        <p>secondInnings</p>
        <p>{secondInnings}</p>
        <p>Man of the Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
