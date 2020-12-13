import { Container } from 'atomize';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './Components/Navbar';

import Home from './Pages/Home';
import Product from './Pages/Product';

function App() {
  return (
    <Container className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/product" component={Product}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
