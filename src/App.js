import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
 
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <Route path="/bad-path" component={NotFound} />
      <Redirect to="bad-path" />
    </Switch>
  
)

export default App
