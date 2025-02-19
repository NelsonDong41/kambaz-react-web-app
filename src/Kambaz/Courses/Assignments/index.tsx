import { Button, InputGroup, ListGroup } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
import { Form, Row, Col } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { LuNotebookPen } from "react-icons/lu";
import { IoEllipsisVertical } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { assignments } from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  console.log(cid)
  return (
    <div id="wd-assignments">
      <div className="d-flex col justify-content-between align-items-center mb-5">
        <Row>
          <Form.Group as={Col}>
            <InputGroup>
              <InputGroup.Text>
                <IoIosSearch />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search here.." />
            </InputGroup>
          </Form.Group>
        </Row>
        <div>
          <Button
            variant="secondary"
            size="lg"
            className="me-1 align-self-end"
            id="wd-view-progress"
          >
            + Group
          </Button>
          <Button
            variant="danger"
            size="lg"
            className="me-1 justify-content-end"
            id="wd-view-progress"
          >
            + Assignment
          </Button>
        </div>
      </div>
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-4 ps-2 bg-secondary">
            <BsGripVertical className="fs-3 mx-2" />
            ASSIGNMENTS
            <div className="float-end">
              <span className="me-1 p-2 position-relative border rounded-5 border-black">
                40% of Total
              </span>
              <BsPlus />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          <ListGroup className="wd-lessons rounded-0">
            {assignments
              .filter((assignment) => assignment.course === cid)
              .map((assignment) => (
                <ListGroup.Item
                  key={assignment._id}
                  className="wd-lesson p-3 ps-1 d-flex flex-row align-items-center"
                >
                  <BsGripVertical className="me-2 fs-3 flex-shrink-0 mx-2" />
                  <LuNotebookPen className="flex-shrink-0 mx-2" />
                  <span className="d-flex flex-column flex-grow-1 flex-shrink-1 mx-2">
                    <a
                      href={`#/Kambaz/Courses/${cid}/Assignments/${assignment.course}`}
                      className="wd-assignment-link  text-decoration-none text-black"
                    >
                      <strong>{assignment.title}</strong>
                    </a>
                    <div>
                      <span>Multiple Modules | </span>
                      <strong>Not available until | </strong>
                      <span>May 6 at 12:00am | </span>
                      <strong>Due </strong>
                      <span>May 13 at 11:59pm | </span>
                      <span>100 pts</span>
                    </div>
                  </span>
                  <LessonControlButtons />
                </ListGroup.Item>
              ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup >
    </div >
  );
}
