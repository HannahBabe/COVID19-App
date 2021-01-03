import './App.css';
import React, {useState, useEffect} from "react";

function App() {
    const [data, setData] = useState([]) // declares state variable array, data
    
    useEffect(() => {
        fetch("https://api.covidtracking.com/v1/states/current.json")
            .then((response) => response.json()) //fetches data and transforms into javascript object
        .then((data) => { setData(data)}) //store data from json file in data
    }, [])
    
    var newData = [...data] //creates new array and copies data
    
    newData.sort(function(a,b){return b.positive-a.positive}) //sorts from greatest to least by positive cases
    
    var listItems = [newData.map((element) => (
            <h2>{element.state}: {element.positive}</h2>
    ))]; //stores new array after reformatting in listItems to be displayed in return

   
    
  return (
          <div>
            <h1>U.S. State COVID-19 Total Cases</h1>
                <ul>{listItems}</ul>
          </div>
          );
}

export default App;

