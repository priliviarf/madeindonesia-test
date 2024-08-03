import { useLocation, useNavigate } from "react-router-dom";
import { paths } from "../routes/paths";
import { SyntheticEvent, useEffect, useState } from "react";
import { BarStatus, Button } from "../components";
import { questions } from "../data/questions";
import { SurveyQuestionForm } from "./SurveyQuestionForm";
// import { useSessionStorage } from "../hooks";

export function SurveyQuestion() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [count, setCount] = useState(0);
  const isEnd = count + 1 >= questions.length;
  const currentQuestionKey = count + 1;

  useEffect(() => {
    if (state === null || !state.isStart)
      navigate(paths.start, { replace: true, state: { isStart: false } });
  }, []);

  function onSubmit(e: SyntheticEvent) {
    e.preventDefault();

    navigate(paths.end, { replace: true });
  }
  return (
    <>
      <form onSubmit={(e) => onSubmit(e)} method="post">
        <div className="flex gap-1 mb-9">
          {questions.map((bar) => (
            <BarStatus
              key={bar.no}
              status={`${
                bar.no === currentQuestionKey
                  ? "active"
                  : bar.no < currentQuestionKey
                  ? "clear"
                  : "inactive"
              }`}
            />
          ))}
        </div>

        {questions.map((question) => (
          <SurveyQuestionForm
            key={question.questionKey}
            {...question}
            current={currentQuestionKey}
          />
        ))}

        <div className={`pt-3 ${isEnd ? "hidden" : ""}`}>
          <Button
            variant={true ? "default" : "disabled"}
            onClick={nextQuestion}
            type="button"
          >
            Next
          </Button>
        </div>
        <div className={`pt-3 ${isEnd ? "" : "hidden"}`}>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  );

  function nextQuestion() {
    if (true) {
      setCount((prevCount) => prevCount + 1);
    }
  }
}
