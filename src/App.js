import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAllAssessment from './AssessmentCompo/ViewAllAssessment';
import InsertQuestion from './QuestionsCompo/InsertQuestion';
import InsertAssessment from './AssessmentCompo/InsertAssessment';
import ViewAllQuestions from './QuestionsCompo/ViewAllQuestions';
import ViewAllAnswers from './QuestionsCompo/ViewAllAnswers';

function App() {
  return (
    <div >
      <div>
      
    <BrowserRouter>
<Routes>

   <Route path='/' element={<ViewAllAssessment/>}></Route>  
   <Route path='/createAssessment' element={<InsertAssessment/>}></Route> 
   <Route path='/viewAllQuestions' element={<ViewAllQuestions/>}></Route> 
   <Route path='/viewAllAnswers' element={<ViewAllAnswers/>}></Route> 
 
   <Route path='/createQuestion/:assessmentId' element={<InsertQuestion/>}></Route> 
   
 
</Routes>
</BrowserRouter>   
   
  </div>
      </div>
   
  );
}

export default App;
