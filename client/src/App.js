
import { useEffect,useState } from 'react';
import './App.css';
import SubmitForm from "./SubmitForm" 
import PlantTenderCard from './PlantTenderCard';
import { Route, Switch } from 'react-router';
import Plants from './Plants';
import Login from './login';
import NavBar from './NavBar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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


  console.log(currentUser)
  const [plantTenders, setPlantTenders] = useState([])
  const [errors, setErrors] = useState(false)


  useEffect(() => {
    fetch('/plant_tenders')
    .then(res => {
      if(res.ok){
        res.json().then(setPlantTenders)
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
  },[])

 
  
  return (
    <div className="App">
    <NavBar />
    <Switch>
      <Route strict path={"/plants"}>
      <Plants />
      </Route>

      <Route path={"/Plant_Tenders"}>
          {plantTenders.map(plantTender => <PlantTenderCard key={plantTender.id} plantTender={plantTender}/>)}
      </Route>
    <Route path={'/signup'}>  
      <SubmitForm/>
    </Route>
    
    
    <Route path={"/login"}>
      <Login />
    </Route>  

     
    </Switch>
    </div>
  );
}

export default App;
