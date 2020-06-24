import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Ortografia from './components/MenuJuegos/LenguaGames/Ortografia/Ortografia';
import Login from './components/Auth/Login/Login';
import Ranking from './components/MenuJuegos/Ranking/Ranking';
import MenuJuegos from './components/MenuJuegos/MenuJuegos'
import JuegoSilabas from './components/MenuJuegos/LenguaGames/Silabas/JuegoSilabas'
import JuegoComprension from './components/MenuJuegos/LenguaGames/ComprensionLectora/JuegoComprension'
import ProtectedRoute from './ProtectedRoutes/ProtectedRoute'


function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/auth/login" component={Login} />
        <ProtectedRoute exact path="/ranking" component={Ranking}/>
        <ProtectedRoute exact path="/games" component={MenuJuegos} />
        <ProtectedRoute exact path="/syllableGame" component={JuegoSilabas}/>
        <ProtectedRoute exact path="/ortografia" component={Ortografia}/>
        <ProtectedRoute exact path="/comprensionlectora" component={JuegoComprension}/>
        <Route path="*" component={()=>"404 not Found"}/>
      </Switch>
    </div>
  );
}

export default App;
