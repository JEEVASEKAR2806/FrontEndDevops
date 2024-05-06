
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ServiceQuestion from './ServiceQuestion';


const ViewAllAnswers = () => {
    const[allDeatils,setAllDeatils]=useState([])

    useEffect(()=>{
        ServiceQuestion.getAllAnswers().then((res)=>{
         console.log(res.data);
             setAllDeatils(res.data);
        }).catch((err)=>{
         console.log(err);
        })
 },[]);





  return (
    <div>
    <div>
  <div className='container mt-4 ' >
    <h3 style={{fontStyle:'italic'}}>Answers</h3>
   <div>
    <div style={{marginTop:'4%'}}>
   
   </div>    
</div>
<table className="table" >
<thead style={{fontStyle:'oblique'}} >
<tr>
 <th scope="col" style={{ fontSize: '1.2rem', padding: '10px',backgroundColor:'lightcoral',color:'black'}}  >Answer ID</th>
 <th scope="col" style={{ fontSize: '1.2rem', padding: '10px',backgroundColor:'lightcoral',color:'black'}}  >Answer Type</th>
 <th scope="col" style={{ fontSize: '1.2rem', padding: '10px',backgroundColor:'lightcoral',color:'black'}}  >Correct / Wrong</th>
 
</tr>
</thead>
<tbody  style={{ fontSize: '1.1rem' }}>
{allDeatils.map((rest) => (
<tr key={rest.answerId}>
 <td style={{ fontSize: '1.1rem', padding: '10px' }} >{rest.answerId}</td> 
 <td >{rest.answerType}</td>  
 <td >{rest.correctOrNot}</td> 
 


   </tr>
))}

</tbody>
</table>
<Link to='/'className='btn ' style={{backgroundColor:'skyblue',fontWeight:'bold'}} >Back </Link><br></br><br></br> 
         
</div>


</div>
 
</div>
)
}


export default ViewAllAnswers
