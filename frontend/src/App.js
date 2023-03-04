import React, { useEffect, useState } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const API_URL =
  "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails";

function App() {
  const [question, setQuestion] = useState(null);
  const [questionId, setQuestionId] = useState("AreaUnderTheCurve_901");

  useEffect(() => {
    async function fetchQuestion() {
      const response = await fetch(`${API_URL}?QuestionID=${questionId}`);
      const data = await response.json();
      console.log(data.question);
      setQuestion(data.question);
    }

    fetchQuestion();
  }, [questionId]);

  function handleNextQuestion() {
    if (questionId === "AreaUnderTheCurve_901") {
      setQuestionId("BinomialTheorem_901");
    } else if (questionId === "BinomialTheorem_901") {
      setQuestionId("DifferentialCalculus2_901");
    }
  }

  function handlePrevQuestion() {
    if (questionId === "DifferentialCalculus2_901") {
      setQuestionId("BinomialTheorem_901");
    } else if (questionId === "BinomialTheorem_901") {
      setQuestionId("AreaUnderTheCurve_901");
    }
  }

  return (
    <div>
      <MathJaxContext>
        <MathJax>{question}</MathJax>
        <h2>Assignment- 5 </h2>
        <h3>Front-end Software Engineer Interview Task</h3>
        <MathJax>
          <div>
            <h4>+++++++++++++++</h4>
            <span>
              {question && question}
              {
                "Let \\( F(x) = \\int_{h(x)}^{g(x)}f(t)dt \\) such that function g(x) and h(x) are defined on \\( [a,b] \\) and differentiable at all points \\( x\\in[a,b] \\), then \\( \\frac{d}{dx}F(x) = ? \\)"
              }
            </span>
          </div>
        </MathJax>
        <p>
          This is text which involves math <MathJax>{questionId}</MathJax>{" "}
          inside the paragraph.
        </p>
        <button onClick={handlePrevQuestion}>Prev</button>
        <button onClick={handleNextQuestion}>Next</button>
      </MathJaxContext>
    </div>
  );
}

export default App;
