
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ServiceQuestion from './ServiceQuestion';


const ViewAllQuestions = () => {
    const[allDeatils,setAllDeatils]=useState([])

    const[print,setPrint]=useState(false);
    const[qId,setQid]=useState();
    const[aId,setaid]=useState([]);
    useEffect(()=>{
        ServiceQuestion.getAllQuestions().then((res)=>{
         console.log(res.data);
             setAllDeatils(res.data);
        }).catch((err)=>{
         console.log(err);
        })
 },[]);


  
    function showAnswer(questionId){

      ServiceQuestion.getAnswersbyId(questionId).then((res)=>{
        console.log(res.data);
        setaid(res.data);
        console.log(res.data);
        setPrint(true);
      });
        
       
      // console.log('Print'+print);
      // // alert(`Question ID: ${questionId}`+print);
      // setQid(questionId);
      // // alert(`${questionId}`);
    }
  



  return (
    <div>
    <div>
  <div className='container mt-4 ' >
    <h3 style={{fontStyle:'italic'}}>Questions</h3>
   <div>
    <div style={{marginTop:'4%'}}>
   
   </div>    
</div>
<table className="table" >
<thead style={{fontStyle:'oblique'}} >
<tr>
 <th scope="col" style={{ fontSize: '1.2rem', padding: '10px',backgroundColor:'lightcoral',color:'black'}}  >Question ID</th>
 <th scope="col" style={{ fontSize: '1.2rem', padding: '10px',backgroundColor:'lightcoral',color:'black'}}  >Question Type</th>
 <th scope="col" style={{ fontSize: '1.2rem', padding: '10px',backgroundColor:'lightcoral',color:'black'}}  >Question Mark</th>
 <th scope="col" style={{ fontSize: '1.2rem', padding: '10px',backgroundColor:'lightcoral',color:'black'}}  >Description </th>
 <th scope="col" style={{ fontSize: '1.2rem', padding: '10px',backgroundColor:'lightcoral',color:'black'}}  >Anwers </th>
 
</tr>
</thead>
<tbody  style={{ fontSize: '1.1rem' }}>
{allDeatils.map((rest) => (
<tr key={rest.questionId}>
 <td style={{ fontSize: '1.1rem', padding: '10px' }} >{rest.questionId}</td> 
 <td >{rest.questionType}</td>  
 <td >{rest.questionMarks}</td> 
 <td >{rest.questionDescription}</td>
 <td ><button name='answer' onClick={() => showAnswer(rest.questionId)}>Answer</button></td>
   </tr>
))}

</tbody>
</table>

{print &&
       
<tbody  style={{ fontSize: '1.1rem' }}>
  <tr>
  <th style={{backgroundColor:'lightcoral'}}>AnswerId</th>
  <th></th>
  <th style={{backgroundColor:'lightcoral'}}>AnswerType</th>
  <th></th>
  <th></th>
  <th style={{backgroundColor:'lightcoral'}}>CorrectOrNot</th>
  </tr>
 
{
<tr>
 <td style={{ fontSize: '1.1rem', padding: '10px' }} >{aId.answerId}</td> 
 <td style={{ fontSize: '1.1rem', padding: '10px' }} >{}</td>  
 <td style={{ fontSize: '1.1rem', padding: '10px' }} >{aId.answerType}</td>
 <td style={{ fontSize: '1.1rem', padding: '10px' }} >{}</td>  
 <td style={{ fontSize: '1.1rem', padding: '10px' }} >{}</td>   
 <td style={{ fontSize: '1.1rem', padding: '10px' }} >{aId.correctOrNot}</td> 
 </tr>
}

</tbody>
      }




<Link to='/'className='btn ' style={{backgroundColor:'skyblue',fontWeight:'bold'}} >Back</Link><br></br><br></br> 
         
</div>


</div>
 
</div>
)
}


export default ViewAllQuestions
