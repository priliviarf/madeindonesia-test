import { ButtonLink, Card } from "../components";

export function SurveyStart() {
  return (
    <Card>
      <h1 className="pt-9">Your opinion in 3 minutes.</h1>
      <p>
        By answering this 3 minutes survey, you help use improve our service
        better for you
      </p>
      <ButtonLink to="/survey" state={{ isStart: true }}>
        Start the survey
      </ButtonLink>
    </Card>
  );
}
