import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <div>
        Error 404
        <p>We cannot seem to find page you are looking for.</p>
        <Link to="/">back to homepage</Link>
      </div>
    );
  }
  return (
    <div>
      <h3>Something went wrong</h3>
    </div>
  );
}
