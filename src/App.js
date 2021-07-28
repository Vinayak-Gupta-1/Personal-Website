import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import Home from './components/Home/home.jsx'
import Resume from './components/Resume/resume.jsx'
import Projects from './components/Projects/projects.jsx'
import Mobile from './components/Mobile/mobile.jsx'
import { isMobile } from 'react-device-detect';

function App() {

  const pages = (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )

  return (

    <div>
      {
        isMobile ? (
          <Mobile />
        ) : (
          pages
        )
      }
    </div>
  );
}

export default App;
