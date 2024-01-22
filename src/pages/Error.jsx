import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      Error 404
      <p>We cannot seem to find page you are looking for.</p>
      <Link to="/">back to homepage</Link>
    </div>
  )
}
