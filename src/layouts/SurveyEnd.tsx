import { useNavigate } from "react-router-dom";
import { Button, Card } from "../components";
import { clearSession } from "../utils";
import { paths } from "../routes/paths";

export function SurveyEnd() {
  const navigate = useNavigate();

  function restart() {
    clearSession();

    navigate(paths.start, { replace: true });
  }

  return (
    <Card>
      <div>
        <h1>Thank you!</h1>
        <p className="mb-9">We'll use your feedback to improve our service.</p>
      </div>
      <div>
        <Button type="button" onClick={restart} variant="ghost">
          Restart the survey
        </Button>
      </div>
    </Card>
  );
}
