import React, {useEffect,useState} from 'react';
import axios from 'axios';

function App() {

  let [backendData,setBackendData] = useState([]);

  let [clinetcounter, counterupdate] = useState(0);

  


  async function retrieve(){
    try{
      let data = await axios.get('http://localhost:3001/api',{params:{counter:clinetcounter}});
      console.log(data);
      setBackendData([...data.data.users,data.data.counter]);

    }
    catch{

    }
    counterupdate(clinetcounter+1);
  }

  function timerout(){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve("timeout")
      }, 1500);
    })
  }

  function calldiv(a){


    return (<div>{a}</div>)
  }


  return (
    <div>
      <button onClick={retrieve} className='DataPress'> Press for Info</button>

      <ul className='UlElement'>
      {backendData.map((elem)=>(<li>{calldiv(elem)}</li>))}
      </ul>

      {backendData.forEach(() => { return <div>hello</div> })}



    </div>
  )
}

export default App
