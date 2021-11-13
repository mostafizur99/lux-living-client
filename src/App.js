import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Explore from './Pages/Explore/Explore';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import Purchase from './Pages/Purchase/Purchase';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ScrollToTop from './utilities/ScrollToTop';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <ScrollToTop>
            <Switch>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/explore">
                <Explore></Explore>
              </Route>
              <PrivateRoute path="/purchageProduct/:productId">
                <Purchase></Purchase>
              </PrivateRoute>
              <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </ScrollToTop>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
