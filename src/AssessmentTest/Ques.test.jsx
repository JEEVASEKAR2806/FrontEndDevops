import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import InsertQuestion from '../QuestionsCompo/InsertQuestion';

describe("My Test Suite", () => {
  it("renders heading", () => {
    render(
      <BrowserRouter>
        <InsertQuestion />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading")).toHaveTextContent("Provide Answer"); 
    
  });

  it("renders Text Boxes", () => {
    render( <BrowserRouter>
        <InsertQuestion />
      </BrowserRouter>); 
      
      
    const linkElement2 = screen.getByRole("hea1");
    expect(linkElement2).toBeInTheDocument();
   
    const linkElement3 = screen.getByRole("aId");
    expect(linkElement3).toBeInTheDocument();
    expect(screen.getByPlaceholderText("assessId")).toHaveTextContent("");
     
    const linkElement4 = screen.getByRole("qId");
    expect(linkElement4).toBeInTheDocument();
    expect(screen.getByPlaceholderText("QuestionId")).toHaveTextContent("");

    const linkElement5 = screen.getByRole("qType");
    expect(linkElement5).toBeInTheDocument();
    expect(screen.getByPlaceholderText("questionType")).toHaveTextContent("");

    const linkElement6 = screen.getByRole("qMarks");
    expect(linkElement6).toBeInTheDocument();
    expect(screen.getByPlaceholderText("questionMarks")).toHaveTextContent("");

    const linkElement7 = screen.getByRole("Qdesc");
    expect(linkElement7).toBeInTheDocument();
    expect(screen.getByPlaceholderText("questionDescription")).toHaveTextContent("");

    const linkElement8 = screen.getByRole("crebtn");
    expect(linkElement8).toBeInTheDocument();

    const linkElement9 = screen.getByRole("lbtn");
    expect(linkElement9).toBeInTheDocument();



    
    const ans2 = screen.getByRole("answerI");
    expect(ans2).toBeInTheDocument();
    expect(screen.getByPlaceholderText("answerId")).toHaveTextContent("");

    const ans3 = screen.getByRole("answerTyp");
    expect(ans3).toBeInTheDocument();
    expect(screen.getByPlaceholderText("answerType")).toHaveTextContent("");
   
    const ans4 = screen.getByRole("correctOrNo");
    expect(ans4).toBeInTheDocument();
    expect(screen.getByPlaceholderText("correctOrNot")).toHaveTextContent("");

    const ans5 = screen.getByRole("sbtn");
    expect(ans5).toBeInTheDocument();
  })

 
});