import { ButtonLink, Card } from "../components";

export function SurveyEnd() {
  return (
    <>
      <Card>
        <h1>Thank you!</h1>
        <ButtonLink to="/" replace>
          Restart the survey
        </ButtonLink>
      </Card>
    </>
  );
}
