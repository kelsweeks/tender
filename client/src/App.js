
import { useEffect,useState } from 'react';
import './App.css';
import SubmitForm from "./SubmitForm" 
import PlantTenderCard from './PlantTenderCard';
import { Route } from 'react-router';

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
    
    <Route path={"/test"}>
        {plantTenders.map(plantTender => <PlantTenderCard key={plantTender.id} plantTender={plantTender}/>)}
     </Route>

     
    </div>
  );
}

export default App;
