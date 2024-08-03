import { Link, useRoutes } from "react-router-dom";
import { SurveyQuestion, SurveyStart } from "../layouts";
import { paths } from "./paths";

function SurveyRoutes() {
  const ro = useRoutes([
    {
      path: paths.start,
      element: <SurveyStart />,
    },
    {
      path: paths.survey,
      element: <SurveyQuestion />,
    },
    { path: paths.end, element: <div>Thank you survey is end</div> },
    {
      path: "*",
      element: (
        <div>
          May be you're lost. <Link to="/">go back</Link>
        </div>
      ),
    },
  ]);

  return ro;
}

export default SurveyRoutes;
