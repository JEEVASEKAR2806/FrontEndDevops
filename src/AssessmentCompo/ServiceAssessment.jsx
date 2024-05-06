
import { Component } from "react";
 import axios from "axios";   


const addAssess="http://localhost:1234/addAssessmentDetails";

const AllAssess="http://localhost:1234/getAllAssessmentDetails";
class ServiceAssessment extends Component {
    
    createAssessment=(create)=>{
        return axios.post(addAssess,create);
    }

    getAllAssessment=()=>{
        return axios.get(AllAssess);
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new ServiceAssessment();