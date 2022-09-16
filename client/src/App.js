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
 
  return (
    <div className="App">
        <h1 className="text-3xl text-gray-700 font-bold mb-5">Tenders</h1>
        <Route path='/'>    
          {isAuthenticated ? <LoggedIn logout={logout}/> : <LoggedOut/>}
        </Route>
    </div>
  );
};

export default App;
