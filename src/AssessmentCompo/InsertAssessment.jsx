import React, { useState } from 'react'
import ServiceAssessment from './ServiceAssessment'
import { Link } from 'react-router-dom'

const InsertAssessment = () => {
    const [assessmentId, setAssessmentId] = useState("")
    const [assessmentType, setAssessmentType] = useState("")
    const [assessmentName, setAssessmentName] = useState("")
    const [assessmentDate,setAssessmentDate]=useState("")
  
    const saveAssessment=(e)=>{
        e.preventDefault();   
         
        const assessmentDetails={assessmentId,assessmentType,assessmentName,assessmentDate} 
        ServiceAssessment.createAssessment(assessmentDetails).then((response)=>{
            console.log(response.data);
            alert("Data: "+ response.data);
            
        }).catch((error)=>{
            console.log(error);
            alert("Error");
        })
        
    }
  return (
    <div>
        <div className='container ' style={{marginTop:"40px"}}>
        <center><h1>Create Assessment</h1></center>
        <div style={{height:'10px',width:'50%',marginLeft:'350px',marginTop:'50px'}}>
        
        <form onSubmit={(e)=>saveAssessment(e)}>
        
        
        <div className="form-floating mb-3">
                                <input type="text" className="form-control" 
                               // data-testid="AssessmentId"                  
                                role='assessId'
                                id="floatingPassword"  placeholder="AssessmentId" required name='AssessmentId' value={assessmentId} 
                                 onChange={(e)=> setAssessmentId(e.target.value)}/>
                                <label htmlFor="floatingPassword">Assessment Id</label>
                            </div>
        
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" 
                                data-testid="AssessmentType"
                                id="floatingPassword"  
                                role='assessType'
                                placeholder="AssessmentType" required name='AssessmentType' value={assessmentType} 
                                onChange={(e)=> setAssessmentType(e.target.value)}/>
                                <label htmlFor="floatingPassword">Assessment Type</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingPassword" 
                                 role='assessName'
                                  placeholder="Assessment Name" required name='assessmentName' value={assessmentName} 
                                onChange={(e)=> setAssessmentName(e.target.value)}/>
                                <label htmlFor="floatingPassword">Assessment Name</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingPassword" 
                                role='AssessmentDate'
                                placeholder="Assessment Date" required name='AssessmentDate' value={assessmentDate} 
                                onChange={(e)=> setAssessmentDate(e.target.value)}/>
                                <label htmlFor="floatingPassword">Assessment Date</label>
                            </div>

       
        <button data-testid="bt-insert" name='insert' className='btn btn-success'>Insert</button>
        <Link to={'/'} className='btn btn-success'  style={{fontWeight:'bold'}} >Back</Link>   



        </form>
        </div>
      </div>
    </div>
  )
}

export default InsertAssessment
