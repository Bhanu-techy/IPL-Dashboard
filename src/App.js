import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <Route path="/bad-found" component={NotFound} />
      <Redirect to="bad-found" />
    </Switch>
  </BrowserRouter>
)

export default App
