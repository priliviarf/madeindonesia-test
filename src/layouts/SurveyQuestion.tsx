import { useLocation, useNavigate } from "react-router-dom";
import { paths } from "../routes/paths";
import { SyntheticEvent, useEffect, useState } from "react";
import { BarStatus } from "../components";
import { questions } from "../data/questions";
import { SurveyQuestionForm } from "./SurveyQuestionForm";

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

        {questions.map((question) =>
          question.no === currentQuestionKey ? (
            <SurveyQuestionForm
              key={question.questionKey}
              {...question}
              goNext={nextQuestion}
              isEnd={isEnd}
            />
          ) : null
        )}
      </form>
    </>
  );

  function nextQuestion() {
    if (true) {
      setCount((prevCount) => prevCount + 1);
    }
  }
}
