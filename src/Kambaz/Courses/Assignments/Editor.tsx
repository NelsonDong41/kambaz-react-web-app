import {
  Button,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";
import { Link, useParams } from "react-router";

export default function AssignmentEditor() {
  const { cid } = useParams();
  return (
    <div id="wd-assignments-editor">
      <FormGroup className="mb-3" controlId="wd-email">
        <FormLabel>Assignment Name</FormLabel>
        <FormControl type="text" defaultValue="A1" />
        <br />
        <FormControl
          as="textarea"
          rows={10}
          defaultValue={
            "The assignment is available online \n\n Submit a link to the landing page of your Web application running on Netlify. \n\n The Landing page should include the following:\n\n- Your full name and section \n- Links to each of the lab assignments \n- Link to the Kanbas application \n- Links to all relevant source code repositories"
          }
        />
      </FormGroup>
      <FormGroup as={Row}>
        <Col>
          <FormLabel>Points</FormLabel>
        </Col>
        <Col xs={9}>
          <FormControl type="text" defaultValue="100" />
        </Col>
      </FormGroup>
      <FormGroup as={Row}>
        <Col>
          <FormLabel>Assignments</FormLabel>
        </Col>
        <Col xs={9}>
          <FormSelect aria-label="Assignment Groups">
            <option value="ASSIGNMENT1">Assignment1</option>
            <option value="ASSIGNMENT2">Assignment2</option>
            <option value="ASSIGNMENT3">Assignment3</option>
          </FormSelect>
        </Col>
      </FormGroup>

      <FormGroup as={Row}>
        <Col>
          <FormLabel>Display Grade as</FormLabel>
        </Col>
        <Col xs={9}>
          <FormSelect aria-label="Display Grade as">
            <option value="Percentage">Percentage</option>
            <option value="four-point">Four Point</option>
            <option value="Letter">Letter</option>
          </FormSelect>
        </Col>
      </FormGroup>

      <FormGroup as={Row}>
        <Col>
          <FormLabel>Submission Type</FormLabel>
        </Col>
        <Col xs={9}>
          <div className="p-3 border-black border border-light-subtle">
            <FormSelect aria-label="Submission Type">
              <option value="Online">Online</option>
              <option value="Physical">Physical</option>
            </FormSelect>
            <form>
              <input type="checkbox" className="m-2" id="textEntry" name="textEntry" />
              <label htmlFor="textEntry">Text Entry</label>
              <br />
              <input type="checkbox" className="m-2" id="websiteUrl" name="websiteUrl" />
              <label htmlFor="websiteUrl">Website URL</label>
              <br />
              <input type="checkbox" className="m-2" id="mediaRecordings" name="mediaRecordings" />
              <label htmlFor="mediaRecordings">Media Recordings</label>
              <br />
              <input type="checkbox" className="m-2" id="studentAnnotation" name="studentAnnotation" />
              <label htmlFor="studentAnnotation">Student Annotation</label>
              <br />
              <input type="checkbox" className="m-2" id="fileUploads" name="fileUploads" />
              <label htmlFor="fileUploads">File Uploads</label>
              <br />
            </form>
          </div>
        </Col>
      </FormGroup>

      <FormGroup as={Row}>
        <Col>
          <FormLabel>Assign</FormLabel>
        </Col>
        <Col xs={9}>
          <div className="p-3 border-black border border-light-subtle">
            <FormLabel>Assign to</FormLabel>
            <FormControl type="text" />
            <FormLabel>Due</FormLabel>
            <FormControl
              type="date"
              name="duedate"
            />
            <Row>
              <Col>
                <FormLabel>Available from</FormLabel>
                <FormControl
                  type="date"
                  name="duedate"
                />
              </Col>
              <Col>
                <FormLabel>Until</FormLabel>
                <FormControl
                  type="date"
                  name="duedate"
                />
              </Col>
            </Row>
          </div>
        </Col>
        <hr />
        <Col>
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}><Button className="float-end" variant="secondary">Cancel</Button></Link>
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}><Button className="float-end" variant="danger">Save</Button></Link>
        </Col>
      </FormGroup>
    </div>
  );
}
