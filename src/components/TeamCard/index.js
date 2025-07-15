import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {teamImgUrl, name, id} = details

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="teamList">
        <img src={teamImgUrl} alt={name} className="teamlogo" />
        <p className="teamnames">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
