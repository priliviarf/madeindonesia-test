import { useLocation, useNavigate } from "react-router-dom";
import { paths } from "../routes/paths";
import { SyntheticEvent, useEffect, useState } from "react";
import { BarStatus, Button, Card } from "../components";
import { surveyQuestions } from "../data/surveyQuestions";

export function SurveyQuestion() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [count, setCount] = useState(0);
  const isEnd = count + 1 >= surveyQuestions.length;
  const currentQuestionKey = count + 1;

  useEffect(() => {
    if (state === null || !state.isStart)
      navigate(paths.start, { replace: true, state: { isStart: false } });
  }, []);

  function onSubmit(e: SyntheticEvent) {
    e.preventDefault();

    console.log(e.target);

    navigate(paths.end, { replace: true });
  }
  return (
    <>
      <form onSubmit={(e) => onSubmit(e)} method="post">
        <fieldset>
          <div className="flex gap-1 mb-9">
            {surveyQuestions.map((bar) => (
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

          <Card>
            <h2>Q{surveyQuestions[count].no}</h2>
            <p className="font-medium text-primary-hover">
              {surveyQuestions[count].text}
            </p>

            <div className="mt-6 space-y-6">
              {surveyQuestions[count].options.map((option) => (
                <div
                  key={`${surveyQuestions[count].key}${option.value}`}
                  className="flex items-center gap-x-3"
                >
                  <input
                    id={`${surveyQuestions[count].key}${option.value}`}
                    name={`${surveyQuestions[count].key}`}
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-primary focus:ring-primary-hover"
                  />
                  <label
                    htmlFor={`${surveyQuestions[count].key}${option.value}`}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    {option.text}
                  </label>
                </div>
              ))}
            </div>
          </Card>
        </fieldset>
        <div className={`pt-3 ${isEnd ? "hidden" : ""}`}>
          <Button
            onClick={() => setCount((prevCount) => prevCount + 1)}
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
}
