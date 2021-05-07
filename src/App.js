 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import {GlobalStyles} from './GlobalStyles.style'
import Header from './components/Header'
import Home from './components/Home'


function App() {
  return (
    <div className="App">
   
    <GlobalStyles />
     <Router>
       <Header />
       <Switch>
          <Route exact path="/"><Login /></Route>
          <Route path="/home"><Home /></Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
