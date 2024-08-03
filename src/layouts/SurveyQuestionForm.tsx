import { Button, Card, Options } from "../components";
import { SurveyQuestionProps } from "../data/questions";
import { useSessionStorage } from "../hooks";

type SurveyQuestionFormProps = {
  goNext: () => void;
  isEnd: boolean;
  minutes: number;
  seconds: number;
};
export function SurveyQuestionForm({
  questionKey,
  no,
  isEnd,
  text,
  options,
  goNext,
  minutes,
  seconds,
}: SurveyQuestionProps & SurveyQuestionFormProps) {
  const [answer, setAnswer] = useSessionStorage(questionKey, "");

  return (
    <>
      <Card isQuestionList className="flex flex-col">
        <div className="flex-grow-0 flex-shrink-0 flex justify-between align-middle">
          <h2>Q{no}</h2>{" "}
          <p>
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </p>
        </div>
        <div className="flex-1 md:block flex flex-col justify-center pb-9">
          <p className="font-medium text-primary-hover pt-3">{text}</p>

          <fieldset>
            <div className="mt-6 space-y-6">
              {options.map((option) => (
                <Options
                  checked={answer === option.value}
                  key={option.value}
                  {...option}
                  questionKey={questionKey}
                  onChange={setAnswer}
                />
              ))}
            </div>
          </fieldset>
        </div>
      </Card>

      <div className={`pt-3 ${isEnd ? "hidden" : ""}`}>
        <Button
          variant={!!answer ? "default" : "disabled"}
          onClick={nextQuestion}
          type="button"
        >
          Next
        </Button>
      </div>

      <div className={`pt-3 ${isEnd ? "" : "hidden"}`}>
        <Button
          variant={!!answer ? "default" : "disabled"}
          type={!!answer ? "submit" : "button"}
        >
          Submit
        </Button>
      </div>
    </>
  );

  function nextQuestion() {
    if (!!answer) goNext();
  }
}
