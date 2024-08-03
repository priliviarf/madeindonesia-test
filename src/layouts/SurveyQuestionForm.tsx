import { useState } from "react";
import { Card, Options } from "../components";
import { SurveyQuestionProps } from "../data/questions";

type SurveyQuestionFormProps = {
  current: number;
};
export function SurveyQuestionForm({
  current,
  questionKey,
  no,
  text,
  options,
}: SurveyQuestionProps & SurveyQuestionFormProps) {
  const [, setValue] = useState("");

  return (
    <Card className={current !== no ? "hidden" : ""}>
      <h2>Q{no}</h2>
      <p className="font-medium text-primary-hover">{text}</p>

      <fieldset>
        <div className="mt-6 space-y-6">
          {options.map((option) => (
            <Options
              key={option.value}
              {...option}
              questionKey={questionKey}
              onChange={setValue}
            />
          ))}
        </div>
      </fieldset>
    </Card>
  );
}
