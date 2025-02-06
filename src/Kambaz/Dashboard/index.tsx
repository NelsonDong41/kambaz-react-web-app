import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title> CS1234 React JS </Card.Title>
                  <Card.Text className="wd-dashboard-course-title">
                    Full Stack software developer{" "}
                  </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>

              <Link
                to="/Kambaz/Courses/2345/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img src="/images/calculator.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title> CS101 Calculator </Card.Title>
                  <Card.Text className="wd-dashboard-course-title">Calcuating </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>

              <Link
                to="/Kambaz/Courses/3456/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img src="/images/fish.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title> CS102 Fish </Card.Title>
                  <Card.Text className="wd-dashboard-course-title">Fishing </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>

              <Link
                to="/Kambaz/Courses/4567/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img src="/images/coin.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title> CS103 Coin </Card.Title>
                  <Card.Text className="wd-dashboard-course-title">Coining </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>

              <Link
                to="/Kambaz/Courses/5678/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img src="/images/dice.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title> CS104 Dice </Card.Title>
                  <Card.Text className="wd-dashboard-course-title">Dicing </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>

              <Link
                to="/Kambaz/Courses/6789/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img src="/images/lottery.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title> CS105 Lottery </Card.Title>
                  <Card.Text className="wd-dashboard-course-title">Lotting </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>

              <Link
                to="/Kambaz/Courses/7890/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img src="/images/stock.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title> CS106 Stock </Card.Title>
                  <Card.Text className="wd-dashboard-course-title">
                    Button variant="primary"ing
                  </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div >
  );
}
