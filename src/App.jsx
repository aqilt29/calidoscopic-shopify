import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';

import Home from './Pages/Home';
import Product from './Pages/Product';
import Shop from './Pages/Shop';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/shop" component={Shop}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/product/:id" component={Product}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
