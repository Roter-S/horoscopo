import React from 'react'
import '../assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from '../components/Navbar'
import IndexHeader from '../components/header/IndexHeader';
import IndexFormulario from '../components/horoscopo/IndexFormulario';
import IndexInformacion from '../components/informacion/IndexInformacion'
import Footer from '../components/Footer'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="bg">
        <Navbar />
        <Switch>
          <Route component={IndexHeader} path="/" exact />
          <Route component={IndexFormulario} path="/horoscopo" exact />
          <Route component={IndexInformacion} path="/informacion" exact />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
