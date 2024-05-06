
import { Component } from "react";
import axios from "axios";   


const addQuestions="http://localhost:1234/addQuestionDetails";

const AllQues="http://localhost:1234/getAllQuestionDetails";

const addAnswer="http://localhost:1234/addAnswerDetails";

const Allanswers="http://localhost:1234/getAllAnswerDetails";

const getAnswer="http://localhost:1234/findAnsbyAnswerId";
class ServiceQuestion extends Component {
    
    createQuestions=(create)=>{
        return axios.post(addQuestions,create);
    }

    getAllQuestions=()=>{
        return axios.get(AllQues);
    }

    getAllAnswers=()=>{
        return axios.get(Allanswers);
    }

    getAnswersbyId=(answerId)=>{
        return axios.get(getAnswer+'/'+answerId);
    }


    createAnswers=(createAnswer)=>{
        return axios.post(addAnswer,createAnswer);
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new ServiceQuestion();