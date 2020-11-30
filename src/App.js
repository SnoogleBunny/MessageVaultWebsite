import './App.css';
import Questions from './Screens/Faq/Questions';
import Navbar from './Screens/shared-components/Navbar/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Screens/Index/Home';
import Services from './Screens/Services/Services';
import Products from './Screens/Products/Products';
import SignUp from './Screens/SignUp/SignUp';
import Pricing from './Screens/Pricing/Pricing';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/faq" component={Questions} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
