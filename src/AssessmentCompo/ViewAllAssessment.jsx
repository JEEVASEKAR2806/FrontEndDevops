import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import ServiceAssessment from './ServiceAssessment'
import InsertAssessment from './InsertAssessment'

const ViewAllAssessment = () => {
    const[allDeatils,setAllDeatils]=useState([])

    useEffect(()=>{
        ServiceAssessment.getAllAssessment().then((res)=>{
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
    <h3 style={{fontStyle:'italic'}}>Online Assessment Management System</h3>
   <div>
    <div style={{marginTop:'4%'}}>
   <Link role='lbttn' to='/createAssessment'className='btn' style={{backgroundColor:'#5df542',fontWeight:'bold'}} element={<InsertAssessment />}>Create Assessment</Link>
  <br></br><br></br>
   </div>    
</div>
<table className="table" >
<thead style={{fontStyle:'oblique'}} >
<tr>
 <th role='aIdd' scope="col" style={{ fontSize: '1.2rem', padding: '10px',backgroundColor:'lightcoral',color:'black'}}  >Assessment ID</th>
 <th scope="col" style={{ fontSize: '1.2rem', padding: '10px',backgroundColor:'lightcoral',color:'black'}}  >Assessment Type</th>
 <th scope="col" style={{ fontSize: '1.2rem', padding: '10px',backgroundColor:'lightcoral',color:'black'}}  >Assessment Name</th>
 <th scope="col" style={{ fontSize: '1.2rem', padding: '10px',backgroundColor:'lightcoral',color:'black'}}  >Assessment Date</th>
 <th scope="col" style={{ fontSize: '1.2rem', padding: '10px',backgroundColor:'lightcoral',color:'black'}} >Actions</th>
</tr>
</thead>
<tbody  style={{ fontSize: '1.1rem' }}>
{allDeatils.map((rest) => (
<tr key={rest.assessmentId}>
 <td style={{ fontSize: '1.1rem', padding: '10px' }} >{rest.assessmentId}</td> 
 <td >{rest.assessmentType}</td>  
 <td >{rest.assessmentName}</td> 
 <td >{rest.assessmentDate}</td>
  

 <Link to={`/createQuestion/${rest.assessmentId}`} className='btn btn-success' style={{fontWeight:'bold'}} >Build Question</Link>   

   </tr>
))}

</tbody>
</table>

</div>


</div>
 
</div>
)
}


export default ViewAllAssessment
