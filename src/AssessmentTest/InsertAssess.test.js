import { render, screen } from '@testing-library/react';
import InsertAssessment from '../AssessmentCompo/InsertAssessment';

describe("My Test Suite",()=> {
 
     it("renders heading", () => {
      render(<InsertAssessment />);
      expect(screen.getByRole("heading")).toHaveTextContent(/Create Assessment/); 
   
    });
   
    it("renders Text Boxes", () => {
      render(<InsertAssessment />);
      const linkElement1 = screen.getByRole("assessId");
      expect(linkElement1).toBeInTheDocument();
      expect(screen.getByPlaceholderText("AssessmentId")).toHaveTextContent("");

      const linkElement2 = screen.getByRole("assessType");
      expect(linkElement2).toBeInTheDocument();
      expect(screen.getByPlaceholderText("AssessmentType")).toHaveTextContent("");
       
      const linkElement3 = screen.getByRole("assessName");
      expect(linkElement3).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Assessment Name")).toHaveTextContent("");
       
      const linkElement4 = screen.getByRole("AssessmentDate");
      expect(linkElement4).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Assessment Date")).toHaveTextContent("");
      
      const linkElement = screen.getByRole("button");
      expect(linkElement).toBeInTheDocument();

           
    });

  

})














































// import { render, screen } from '@testing-library/react';

// import InsertAssessment from './AssessmentCompo/InsertAssessment';

// // test('renders learn react link1', () => {
// //   render(<Ap />);
// //   const linkElement = screen.getByText("hii hero");
// //   expect(linkElement).toBeInTheDocument();
// // });

// test('renders learn react link',()=> {

//   render(<InsertAssessment />)
//    expect(screen.getByRole("heading")).toHaveTextContent(/Create Assessment/);
//    expect(screen.getByTestId("AssessmentId")).toBeInTheDocument();
//    expect(screen.getByTestId("AssessmentType")).toBeInTheDocument();
//    expect(screen.getByTestId("bt-insert")).toBeInTheDocument();
   

// })
