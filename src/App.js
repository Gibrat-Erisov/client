import React from 'react';
import './App.css';
import Diagram from './pages/Diagram'
import Auth from './pages/Auth'
import FormNetworkInput from './pages/Networks'
import { Route,Switch } from "react-router-dom"
import NavBar from './components/NavBar'
import basicChart from './components/charts/basicChart'
import brushChart from './components/charts/brushChart'
import column from './components/charts/columnChart'


function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path='/login' component= { Auth } />
        <Route exact path={['/diagram', '/']} component= { Diagram  } />
        <Route exact path='/network' component= { FormNetworkInput  } />
        <Route exact path='/chart1' component= { basicChart  } />
        <Route exact path='/chart2' component= { brushChart  } />
        <Route exact path='/column' component= { column  } />
        <Route  path='*' render = {() => <div className='ErrorText'><p>404 error</p></div>} />
      </Switch>
    </>
  );
}

export default App;
