import { useRoutes } from "react-router-dom";
import { SurveyEnd, SurveyQuestion, SurveyStart } from "../layouts";
import { paths } from "./paths";
import { NotFound } from "../components";

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
    { path: paths.end, element: <SurveyEnd /> },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return ro;
}

export default SurveyRoutes;
