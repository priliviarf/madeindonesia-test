import { Link, useLocation, useNavigate } from "react-router-dom";
import { paths } from "../routes/paths";
import { useEffect } from "react";

export function SurveyQuestion() {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state === null || !state.isStart)
      navigate(paths.start, { replace: true, state: { isStart: false } });
  }, []);

  return (
    <div>
      Survey
      <Link to="/end" replace>
        Submit
      </Link>
    </div>
  );
}
