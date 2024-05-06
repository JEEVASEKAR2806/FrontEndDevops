import React, { useState } from 'react'
import {  Link, useParams } from 'react-router-dom'
import ServiceQuestion from './ServiceQuestion'

const InsertQuestion = () => {
    const [questionId, setQuestionId] = useState("")
    const [questionType, setQuestionType] = useState("")
    const [questionMarks, setQuestionMarks] = useState("")
    const [questionDescription,setQuestionDescription]=useState("")
  
    const {assessmentId}=useParams();

    console.log(assessmentId);
    const saveQuestion=(e)=>{
        e.preventDefault();   
         
            const questionDetails={questionId,questionType,questionMarks,questionDescription,
            assessment:{
                assessmentId
            }        
        
        } 
        ServiceQuestion.createQuestions(questionDetails).then((response)=>{
            console.log(response.data);
            alert("Data: "+ response.data);
            
        }).catch((error)=>{
            console.log(error);
            alert("Error");
        })
        
    }

    const [answerId, setAnswerId] = useState("")
    const [answerType, setAnsweType] = useState("")
    const [correctOrNot, setCorrectOrNot] = useState("")
    
    const saveAnswer=(e)=>{
        e.preventDefault();   
         
        const answerDetails={answerId,answerType,correctOrNot,
            questionss:{
                questionId
            }
        
        } 
        ServiceQuestion.createAnswers(answerDetails).then((response)=>{
            console.log(response.data);
            alert("Data: "+ response.data);
            
        }).catch((error)=>{
            console.log(error);
            alert("Error");
        })
        
    }

  return (
    <div style={{backgroundColor:'lightcoral'}}>
        <table >
            <tr>
                <td>
        <div style={{marginTop:"40px"}}>
        <center><h1 style={{marginLeft:'30%'}} role='hea1'>Create Question</h1></center>
        <div style={{height:'10px',width:'50%',marginLeft:'350px',marginTop:'50px'}}>
        
        <form onSubmit={(e)=>saveQuestion(e)}>
     
        <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingPassword" role='aId' placeholder="assessId" required name='AssessmentId' value={assessmentId} 
                                />
                                <label htmlFor="floatingPassword">Assessment Id</label>
                            </div>
        <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingPassword" role='qId' placeholder="QuestionId" required name='QuestionId' value={questionId} 
                                 onChange={(e)=> setQuestionId(e.target.value)}/>
                                <label htmlFor="floatingPassword">Question Id</label>
                            </div>
        
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingPassword" role='qType' placeholder="questionType" required name='QuestionType' value={questionType} 
                                onChange={(e)=> setQuestionType(e.target.value)}/>
                                <label htmlFor="floatingPassword">Question Type</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingPassword" role='qMarks' placeholder="questionMarks" required name='QuestionMarks' value={questionMarks} 
                                onChange={(e)=> setQuestionMarks(e.target.value)}/>
                                <label htmlFor="floatingPassword">Question Marks</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingPassword" role='Qdesc' placeholder="questionDescription" required name='QuestionDescription' value={questionDescription} 
                                onChange={(e)=> setQuestionDescription(e.target.value)}/>
                                <label htmlFor="floatingPassword">Question Description</label>
                            </div>

       
        <button role='crebtn' name='create' className='btn btn-success'>Create</button>

        <Link role='lbtn' to='/viewAllQuestions'className='btn ' style={{backgroundColor:'skyblue',fontWeight:'bold',marginLeft:'10%'}} >View All</Link><br></br><br></br> 
         




        </form>
        </div>
      </div>
      </td>
      <td>
      <div style={{marginTop:"40px"}}>
        <center><h1 style={{marginLeft:'30%'}}>Provide Answer</h1></center>
        <div style={{height:'10px',width:'50%',marginLeft:'350px',marginTop:'50px'}}>
        
        <form onSubmit={(e)=>saveAnswer(e)} >
        
        <div className="form-floating mb-4">
                                <input type="text" className="form-control" id="floatingPassword" role='Question' placeholder="Question Id" required name='QuestionId' value={questionId} 
                                 />
                                <label htmlFor="floatingPassword">Question Id</label>
                            </div>
        
        <div className="form-floating mb-4">
                                <input type="text" className="form-control" id="floatingPassword" role='answerI' placeholder="answerId" required name='AnswerId' value={answerId} 
                                 onChange={(e)=> setAnswerId(e.target.value)}/>
                                <label htmlFor="floatingPassword">Answer Id</label>
                            </div>
        
                           
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingPassword" role='answerTyp' placeholder="answerType" required name='AnswerType' value={answerType} 
                                onChange={(e)=> setAnsweType(e.target.value)}/>
                                <label htmlFor="floatingPassword">Answer Type</label>
                            </div>

                            <div className="form-floating mb-4">
                                <input type="text" className="form-control" id="floatingPassword" role='correctOrNo' placeholder="correctOrNot" required name='CorrectOrNot' value={correctOrNot} 
                                onChange={(e)=> setCorrectOrNot(e.target.value)}/>
                                <label htmlFor="floatingPassword">Correct Or Not </label>
                            </div>

       
        <button role='sbtn' name='submi'className='btn btn-success'>Submit</button>
       
        
        <Link role='lbtn' to='/viewAllAnswers'className='btn ' style={{backgroundColor:'skyblue',fontWeight:'bold',marginLeft:'10%'}} >View Answers</Link><br></br><br></br> 



        </form>
        </div>
      </div> 
      </td>
      </tr>
      </table>
    </div>
  )
}

export default InsertQuestion
