import {Component} from 'react'
import {Link} from 'react-router-dom'
import {Pie, PieChart, Legend, Cell, ResponsiveContainer} from 'recharts'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const {match} = this.props
    const {id} = match.params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(each => ({
        umpires: each.umpires,
        result: each.result,
        manOfTheMatch: each.man_of_the_match,
        id: each.id,
        date: each.date,
        venue: each.venue,
        competingTeamLogo: each.competing_team_logo,
        competingTeamName: each.competing_team,
        matchStatus: each.match_status,
      })),
    }

    this.setState({
      isLoading: false,
      ...updatedData,
    })
  }

  onClickBackBtn = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = this.state

    let wins = 0
    let loss = 0
    let draws = 0

    for (const each of recentMatches) {
      if (each.matchStatus === 'Won') {
        wins += 1
      } else if (each.matchStatus === 'Lost') {
        loss += 1
      } else {
        draws += 1
      }
    }

    const stats = [
      {
        name: 'WIN',
        count: wins,
      },
      {
        name: 'Lost',
        count: loss,
      },
      {
        name: 'DRAW',
        count: draws,
      },
    ]

    console.log(wins)

    return (
      <div className="team-matches-page">
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-matches-page">
            <img src={teamBannerUrl} alt="team banner" className="banner" />
            <p className="latestmatch-text">Latest Matches</p>
            <LatestMatch
              details={latestMatchDetails}
              key={latestMatchDetails.id}
            />
            <ul>
              {recentMatches.map(each => (
                <MatchCard details={each} key={each.id} />
              ))}
            </ul>
            <div className="PieChart">
              
                <PieChart width={730} height={250}>
                  <Pie
                    data={stats}
                    dataKey="count"
                    cx="600%"
                    cy="40%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#82ca9d"
                  >
                    <Cell name="wins" fill="#fecba6" />
                    <Cell name="lost" fill="#b3d23f" />
                    <Cell name="draw" fill="#a44c9e" />
                  </Pie>
                  <Legend
                    iconType="circle"
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                  />
                  <Legend
                    iconType="circle"
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                  />
                </PieChart>
              
            </div>

            <button type="button" onClick={this.onClickBackBtn}>
              Back
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
