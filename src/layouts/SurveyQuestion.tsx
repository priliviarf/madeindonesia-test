import { useLocation, useNavigate } from "react-router-dom";
import { paths } from "../routes/paths";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { BarStatus } from "../components";
import { questions } from "../data/questions";
import { SurveyQuestionForm } from "./SurveyQuestionForm";
import { useSessionStorage } from "../hooks";

export function SurveyQuestion() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [currentQ, setCurrentQ] = useSessionStorage("currentQ", 0);

  const isEnd = currentQ + 1 >= questions.length;
  const currentQuestionKey = currentQ + 1;

  const timerRef = useRef(0);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    if (state === null || !state.isStart || !state.end)
      navigate(paths.start, { replace: true, state: { isStart: false } });

    const interval = setInterval(() => getTime(), 1000);
    timerRef.current = interval;

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!!stop) {
      clearInterval(timerRef.current);

      navigate(paths.end, { replace: true, state: { timeOut: true } });
    }
  }, [stop]);

  // timer
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function getTime() {
    const remaining = Date.parse(state.end) - Date.now();

    if (remaining <= 0) {
      setStop(true);
      return;
    }

    setMinutes(Math.floor((remaining / 1000 / 60) % 60));
    setSeconds(Math.floor((remaining / 1000) % 60));
  }

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
              minutes={minutes}
              seconds={seconds}
            />
          ) : null
        )}
      </form>
    </>
  );

  function nextQuestion() {
    if (true) {
      setCurrentQ(currentQ + 1);
    }
  }
}
