import { paths } from "../routes/paths";
import { ButtonLink } from "./Button";
import { Card } from "./Card";

export function NotFound() {
  return (
    <Card>
      <div>
        <h1>Oops!</h1>
        <p>Maybe you're lost.</p>
      </div>

      <div>
        <ButtonLink to={paths.start}>Back to Home</ButtonLink>
      </div>
    </Card>
  );
}
