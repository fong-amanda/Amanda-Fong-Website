import { Link } from 'react-router-dom';
function FixLeak() {
  return (
    <div className="Fix-A-Leak">
      <Link to="/fix-a-leak">
        <img src="fixALeak Images/Cover Page.jpg" alt="Fix A Leak Cover Page" />
      </Link>
      <Link to="/fix-a-leak">
        <h1>Fix-A-Leak</h1>
      </Link>
      <p>
        Designed an app that would allow residents to easily report any mechanical issues they encountered in a
        building.
      </p>
    </div>
  )
}
export default FixLeak;