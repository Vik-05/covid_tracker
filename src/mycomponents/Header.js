import React, { useEffect, useState } from 'react';
import './todolist.css';


function Header(){
  const[data,setdata] = useState([]);
  const[show,setshow] = useState(false);
  const[num,setnum] = useState();

  const getdata = async ()=>{
    const res = await fetch('https://data.covid19india.org/data.json');
    const actualdata = await res.json();
    setdata(actualdata.statewise);

  }
  useEffect(()=>{
getdata();
  },[])
return(
  <>
  
<div className='heading' id='heading'>
    <span className='head'><b>INDIA</b> COVID-19 DASHBOARD</span>
  </div>
  <div className='cards'>
  <select className='select'
  value={num}
  onChange ={(event)=>{
setnum(event.target.value);
  }} 
  >
  <optgroup label='select state'>
  { data.map((currelem,ind)=>{
    return(
      <>
      <option value={currelem.state}>{currelem.state}</option>
      </>
    );


  })
     }
   
    </optgroup>
  </select>
<br></br><br></br>

  <div className="card-container">
    <div className="card" id='white'>
      <div className='card-head'>confirmed cases</div>
      {data.map((currelem) => {
        if (currelem.state === num) {
          return (
            <React.Fragment key={currelem.state}>
              <p className='card-head'>{currelem.confirmed}</p>
            </React.Fragment>
          );
        }
        return null;
      })}
   
  </div>
 
</div>

  <div className="card-container" >
    <div className="card" id='green'>
      <div className='card-head'>recovered cases</div>
     
      {data.map((currelem) => {
        if (currelem.state === num) {
          return (
            <React.Fragment key={currelem.state}>
              <p className='card-head'>{currelem.recovered}</p>
            </React.Fragment>
          );
        }
        return null;
      })}
    </div>
  

</div>

  <div className="card-container" >
    <div className="card" id='red'>
      <div className='card-head'>deaths</div>
      
      {data.map((currelem) => {
        if (currelem.state === num) {
          return (
            <React.Fragment key={currelem.state}>
              <p className='card-head'>{currelem.deaths}</p>
            </React.Fragment>
          );
        }
        return null;
      })}
   
  </div>

</div>

  <div className="card-container" >
    <div className="card" id='yellow'>
      <div className='card-head'>active cases</div>
      
      {data.map((currelem) => {
        if (currelem.state === num) {
          return (
            <React.Fragment key={currelem.state}>
              <p className='card-head'>{currelem.active}</p>
            </React.Fragment>
          );
        }
        return null;
      })}

  </div>
  
</div>

  <div className="card-container" >
    <div className="card" id='red1'>
      <div className='card-head'>delta deaths</div>
      
      {data.map((currelem) => {
        if (currelem.state === num) {
          return (
            <React.Fragment key={currelem.state}>
              <p className='card-head'>{currelem.deltadeaths}</p>
            </React.Fragment>
          );
        }
        return null;
      })}
    
  </div>
 
</div>

  </div>

  
  <div className='table'>
    <table border={0}>
    <tr>
      <th>state</th>
      <th>confirmed</th>
      { show ?
      <th className='rec' >recovered</th> : ""}
      <th className='ded' onClick={()=>{
        setshow(!show);
      }}>deaths</th>
      <th className='act'>active</th>
      <th className='ded'>delta deaths</th>
      </tr>
      {
        data.map((currelem,ind)=>{
          return(
            <>
            <tr>
      <td>{currelem.state}</td>
      <td>{currelem.confirmed}</td>
    { show ?  <td className='rec'>{currelem.recovered}</td> : ""}
      <td className='ded'>{currelem.deaths}</td>
      <td className='act'>{currelem.active}</td>
      <td className='ded'>{currelem.deltadeaths}</td>
      </tr>
            </>
          );

        })
      }
   
    </table>
  </div>
  </>
 

 );
  
}


export default Header;