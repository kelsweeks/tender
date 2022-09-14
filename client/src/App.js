
import { useEffect,useState } from 'react';
import './App.css';
import SubmitForm from "./SubmitForm" 
import PlantTenderCard from './PlantTenderCard';
import { Route, Switch } from 'react-router';
import Plants from './Plants';
import Login from './login';

function App() {

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
