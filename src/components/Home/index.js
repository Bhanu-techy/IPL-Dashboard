import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getTeamList()
  }

  getTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const filtteredData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImgUrl: each.team_image_url,
    }))

    this.setState({teamList: filtteredData, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader" className="loader-div">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="bgcontainer">
            <div className="headcontainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipllogo"
              />
              <h1 className="heading">IPL Dashboard</h1>
            </div>
            <ul className="teamlistcontainer">
              {teamList.map(each => (
                <TeamCard details={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
