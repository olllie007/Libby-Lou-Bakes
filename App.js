import logo from './logo.svg';
import './App.css';
import Home from './componants/home';
import Plan from './componants/plan';
import Header from './componants/header1';
import Products from './componants/products';
import About from './componants/about';
import Cake from './componants/cake';
import Cookie from './componants/cookie';
import ScrollToTop from './componants/scroleToTop';
import Footer from './componants/footer';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <ScrollToTop/>
        <Header/>
        
        <Route exact path='/' component={Home}/>
        <Route exact path='/products' component={Products}/>
        <Route exact path='/about' component={About}/>
        <Route  exact path='/plan' component={Plan}/>
        <Route exact path='/cake' component={Cake}/>
        <Route exact path='/cookie' component={Cookie}/>
        <Footer/>

      
    </Router>
  );
}

export default App;
