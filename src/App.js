import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import UpdateTask from './pages/UpdateTask';
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/services'>
          <Services />
        </Route>
        <Route path='/signup'>{user ? <Home /> : <Signup />}</Route>
        <Route path='/login'>{user ? <Home /> : <Login />}</Route>
        <Route path='/profile'>{user ? <Profile /> : <Login />}</Route>
        <Route path='/edit/:id'>
          <UpdateTask />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
