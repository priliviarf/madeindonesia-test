import { ButtonLink, Card } from "../components";

export function SurveyStart() {
  return (
    <Card>
      <ButtonLink to="/survey" state={{ isStart: true }}>
        Start the survey
      </ButtonLink>
    </Card>
  );
}
