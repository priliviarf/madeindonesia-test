import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card } from "../components";
import { clearSession } from "../utils";
import { paths } from "../routes/paths";

export function SurveyEnd() {
  const navigate = useNavigate();
  const { state } = useLocation();

  function restart() {
    clearSession();

    navigate(paths.start, { replace: true });
  }

  return (
    <Card>
      <div>
        {state?.timeOut ? (
          <>
            <h1>Sorry, you're running out of time!</h1>
            <p className="mb-9">
              Don't worry, we can still try it again once you're ready!
            </p>
          </>
        ) : (
          <>
            <h1>Thank you!</h1>
            <p className="mb-9">
              We'll use your feedback to improve our service.
            </p>
          </>
        )}
      </div>
      <div>
        <Button type="button" onClick={restart} variant="ghost">
          Restart the survey
        </Button>
      </div>
    </Card>
  );
}
