import Navbar from './components/Navbar';
import Home from './components/Home';
import Addfood from './components/Addfood';
import Fooddetails from './components/Fooddetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Orderfood from './components/Orders';
import Searchfood from './components/Searchfood';
import Updatefood from './components/Updatefood';
import Orders from './components/Orders';

function App() {
  return (
    <Router>
      <>
        <Navbar />

        <Switch>
          <Route exact path="/"> <Home /></Route>
          <Route path="/addfood"><Addfood /></Route>
          <Route path="/fooddetails:id" ><Fooddetails /></Route>
          <Route path="/search:searchKey"> <Searchfood /> </Route>
          <Route path="/update:id" > <Updatefood></Updatefood> </Route>
          <Route path="/orders" ><Orders></Orders> </Route>
        </Switch>
      </>
    </Router>


  );
}

export default App;
