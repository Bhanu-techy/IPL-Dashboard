import './index.css'

const MatchCard = props => {
  const {details} = props
  const {
    result,
    competingTeamLogo,
    competingTeam,
    competingTeamName,
    matchStatus,
  } = details

  const matchStatusCss = matchStatus === 'Lost' ? 'lost' : 'win'

  return (
    <li className="list">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competingTeamLogo"
      />
      <p className="competingTeamName">{competingTeamName}</p>
      <p className="result">{result}</p>
      <p className={`${matchStatusCss}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
