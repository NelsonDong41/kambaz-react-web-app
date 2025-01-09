import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/calculator.png" width={200} />
            <div>
              <h5> CS101 Calculator </h5>
              <p className="wd-dashboard-course-title">Calcuating </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/fish.png" width={200} />
            <div>
              <h5> CS102 Fish </h5>
              <p className="wd-dashboard-course-title">Fishing </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/coin.png" width={200} />
            <div>
              <h5> CS103 Coin </h5>
              <p className="wd-dashboard-course-title">Coining </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/dice.png" width={200} />
            <div>
              <h5> CS104 Dice </h5>
              <p className="wd-dashboard-course-title">Dicing </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/lottery.png" width={200} />
            <div>
              <h5> CS105 Lottery </h5>
              <p className="wd-dashboard-course-title">Lotting </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/stock.png" width={200} />
            <div>
              <h5> CS106 Stock </h5>
              <p className="wd-dashboard-course-title">
                Stocking
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
