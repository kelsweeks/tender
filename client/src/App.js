import { useHistory } from 'react-router';
import { useEffect,useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
        });
      } else {
        res.json().then(console.log)
      }
    });
  }, []);

  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false) 
    fetch('/users', {method: "DELETE"})
    .then(()=> history.push('/login'))
    }
 
    console.log(isAuthenticated)
  return (
    <div className="App">
      
        <Route path='/'>    
          {isAuthenticated ? <LoggedIn logout={logout}/> : <LoggedOut/>}
        </Route>
    </div>
  );
};

export default App;
