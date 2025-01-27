import { useNavigate } from "react-router-dom";
import { Button, Card } from "../components";
import { clearSession } from "../utils";
import { paths } from "../routes/paths";

export function SurveyStart() {
  const navigate = useNavigate();

  function start() {
    clearSession();

    const deadline = new Date(new Date().valueOf() + 180000);

    navigate(paths.survey, { state: { isStart: true, end: deadline } });
  }

  return (
    <Card>
      <div>
        <h1 className="pt-9">Your opinion in 3 minutes.</h1>
        <p className="mb-6">
          By answering this 3 minutes survey, you help use improve our service
          better for you
        </p>
      </div>
      <div>
        <Button type="button" onClick={start}>
          Start the survey
        </Button>
      </div>
    </Card>
  );
}
