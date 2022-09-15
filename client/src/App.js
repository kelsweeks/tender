import { useHistory } from 'react-router';
import { useEffect,useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import NavBar from './NavBar';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

  useEffect(() => {
    fetch('/users').then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
        });
      }
    });
  }, []);

  const Logout = () => {
    setCurrentUser(null);
    fetch('/users', {method: "DELETE"})
    .then(()=> history.push('/login'))
    }


  return (
    <div className="App">
      
        <Route>    
          {isAuthenticated ? <LoggedIn Logout = {Logout}/> : <LoggedOut/>}
        </Route>
    </div>
  );
};

export default App;
