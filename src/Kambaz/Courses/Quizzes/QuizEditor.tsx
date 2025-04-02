import { useState } from "react";
import { Button, Dropdown, DropdownButton, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { addQuiz, updateQuiz } from "./reducer";

export default function QuizEditor() {
  const { cid, qid } = useParams();
  const dispatch = useDispatch();

  const { quizzes } = useSelector((state: any) => state.quizReducer);

  let currentQuiz = quizzes.find((quiz: any) => quiz._id === qid);

  const [quizState, setQuizState] = useState<any>(
    currentQuiz || { title: "", description: "" }
  );

  const quizTitle = quizState?.title || "";
  const description = quizState?.description || "";
  const assignTo = quizState?.assignTo || 100;
  const type = quizState?.type || "";
  const points = quizState?.points || 100;
  const assignmentGroup = quizState?.group || "";
  const shuffleAnswer = quizState?.shuffle || "";
  const timeLimit = quizState?.time || 20;
  const multipleAttempts = quizState?.attempts || "";
  const correctAnswer = quizState?.answer || "";
  const accessCode = quizState?.code || "";
  const oneQuestion = quizState?.oneQuestion || "";
  const webcamRequired = quizState?.webcam || "";
  const lockQuestions = quizState?.lock || "";
  const dueDate = quizState?.due || "";
  const availableDate = quizState?.from || "";
  const untilDate = quizState?.until || "";
  const [questionType, setQuestionType] = useState("");

  const handleSave = () => {
    if (currentQuiz) {
      // When updating a quiz, do not add _id explicitly, since it's already included in quizState
      dispatch(updateQuiz(quizState)); // Just pass the updated quiz object
    } else {
      dispatch(addQuiz({ ...quizState, course: cid })); // Add new quiz with course info
    }
  };

  // const handleQuestionTypeSelect = (type: string) => {
  //   setQuestionType(type);
  //   if (type === "Multiple choice question") {
  //     history.push(`/Kambaz/Courses/${cid}/Quizzes/MultipleChoiceEditor`);
  //   }
  // };

  const [activeTab, setActiveTab] = useState("details");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div id="wd-quiz-editor">
      {/* Quiz Buttons */}
      <div id="wd-quiz-buttons" className="d-flex justify-content-center gap-2">
        <Link to={`/Kambaz/Courses/${cid}/Quizzes/QuizDetails`}>
          <Button
            variant="light"
            size="lg"
            className="me-1"
            id="wd-add-module-btn"
            onClick={() => handleTabClick("details")}
          >
            Details
          </Button>
        </Link>

        <Link to={`/Kambaz/Courses/${cid}/Quizzes/QuizQuestions`}>
          <Button
            variant="light"
            size="lg"
            className="me-1"
            id="wd-add-module-btn"
            onClick={() => handleTabClick("questions")}
          >
            Questions
          </Button>
        </Link>
      </div>

      {/* Question Type Selection */}
      {activeTab === "questions" && questionType === "" ? (
        <div
          id="question-type-selector"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <DropdownButton
            id="question-type-dropdown"
            title="Select Question Type"
            variant="secondary"
            // onSelect={handleQuestionTypeSelect}
          >
            <Dropdown.Item eventKey="True/false question">
              True/false question
            </Dropdown.Item>
            <Dropdown.Item eventKey="Multiple choice question">
              Multiple choice question
            </Dropdown.Item>
            <Dropdown.Item eventKey="Fill in a blank question">
              Fill in a blank question
            </Dropdown.Item>
          </DropdownButton>

          {/* Buttons below dropdown */}
          <div
            id="question-actions"
            className="d-flex justify-content-center gap-2 mt-3" // Adds margin-top and changes layout to column
          >
            <Button variant="danger" onClick={handleSave}>
              Save
            </Button>
            <Button variant="secondary" onClick={() => setQuestionType("")}>
              Cancel
            </Button>
          </div>
        </div>
      ) : null}

      {/* Quiz Editing Form */}
      {activeTab === "details" && (
        <div id="wd-quiz-editing">
          <Form>
            <Form.Group className="mb-3" controlId="wd-name">
              <Form.Label>Quiz Name</Form.Label>
              <Form.Control
                type="text"
                value={quizTitle}
                onChange={(e) =>
                  setQuizState((prev: any) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
                placeholder="Enter quiz name"
              />
            </Form.Group>

            {/* Description */}
            <Form.Group className="mb-3" controlId="wd-description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) =>
                  setQuizState((prev: any) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder="Enter quiz description"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-points">
              <Form.Label>Quiz Type</Form.Label>
              <Form.Control
                as="select"
                value={quizState?.type || ""}
                onChange={(e) =>
                  setQuizState((prev: any) => ({
                    ...prev,
                    type: e.target.value,
                  }))
                }
              >
                <option value="Graded Quiz">Graded Quiz</option>
                <option value="Practice Quiz">Practice Quiz</option>
                <option value="Graded Survey">Graded Survey</option>
                <option value="Ungraded Survey">Ungraded Survey</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-points">
              <Form.Label>Points</Form.Label>
              <Form.Control
                type="number"
                value={points}
                onChange={(e) =>
                  setQuizState((prev: any) => ({
                    ...prev,
                    points: e.target.value,
                  }))
                }
                placeholder="Enter points"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-points">
              <Form.Label>Assignment Group</Form.Label>
              <Form.Control
                as="select"
                value={quizState?.group || ""}
                onChange={(e) =>
                  setQuizState((prev: any) => ({
                    ...prev,
                    group: e.target.value,
                  }))
                }
              >
                <option value="Quizzes">Quizzes</option>
                <option value="Exams">Exams</option>
                <option value="Assignments">Assignments</option>
                <option value="Project">Project</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-shuffle-answers">
              <Form.Check
                type="checkbox"
                checked={quizState.shuffle}
                onChange={(e) =>
                  setQuizState({ ...quizState, shuffle: e.target.checked })
                }
                inline
              />
              <Form.Label>Shuffle Answers</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-points">
              <Form.Label>Time Limit</Form.Label>
              <Form.Control
                type="number"
                value={timeLimit}
                onChange={(e) =>
                  setQuizState((prev: any) => ({
                    ...prev,
                    time: e.target.value,
                  }))
                }
                placeholder="Enter points"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-points">
              <Form.Check
                type="checkbox"
                checked={quizState.attempts}
                onChange={(e) =>
                  setQuizState({ ...quizState, attempts: e.target.checked })
                }
                inline
              />
              <Form.Label>Multiple Attempts</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-points">
              <Form.Check
                type="checkbox"
                checked={quizState.answers}
                onChange={(e) =>
                  setQuizState({ ...quizState, answers: e.target.checked })
                }
                inline
              />
              <Form.Label>Show Correct Answers</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-name">
              <Form.Label>Access Code</Form.Label>
              <Form.Control
                type="text"
                value={accessCode}
                onChange={(e) =>
                  setQuizState((prev: any) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
                placeholder="Enter acess code"
              />
              <br />
              <Form.Group className="mb-3" controlId="wd-points">
                <Form.Label>One Question at a Time</Form.Label>
                <Form.Control
                  as="select"
                  value={quizState?.group || ""}
                  onChange={(e) =>
                    setQuizState((prev: any) => ({
                      ...prev,
                      group: e.target.value,
                    }))
                  }
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" controlId="wd-points">
                <Form.Label>Webcam Required</Form.Label>
                <Form.Control
                  as="select"
                  value={quizState?.group || ""}
                  onChange={(e) =>
                    setQuizState((prev: any) => ({
                      ...prev,
                      group: e.target.value,
                    }))
                  }
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" controlId="wd-points">
                <Form.Label>Lock Questions After Answering</Form.Label>
                <Form.Control
                  as="select"
                  value={quizState?.group || ""}
                  onChange={(e) =>
                    setQuizState((prev: any) => ({
                      ...prev,
                      group: e.target.value,
                    }))
                  }
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </Form.Control>
              </Form.Group>
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-due">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                value={dueDate}
                onChange={(e) =>
                  setQuizState((prev: any) => ({
                    ...prev,
                    due: e.target.value,
                  }))
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-available">
              <Form.Label>Available From</Form.Label>
              <Form.Control
                type="date"
                value={availableDate}
                onChange={(e) =>
                  setQuizState((prev: any) => ({
                    ...prev,
                    from: e.target.value,
                  }))
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-available">
              <Form.Label>Available Until</Form.Label>
              <Form.Control
                type="date"
                value={untilDate}
                onChange={(e) =>
                  setQuizState((prev: any) => ({
                    ...prev,
                    until: e.target.value,
                  }))
                }
              />
            </Form.Group>

            <Link to={`/Kambaz/Courses/${cid}/Quizzes`}>
              <Button
                className="float-end"
                variant="danger"
                // onClick={handleSave}
              >
                Save
              </Button>
            </Link>

            <Link to={`/Kambaz/Courses/${cid}/Quizzes`}>
              <Button
                className="float-end"
                variant="danger"
                // onClick={handleSave}
              >
                Save and Publish
              </Button>
            </Link>

            <Link to={`/Kambaz/Courses/${cid}/Quizzes`}>
              <Button className="float-end" variant="secondary">
                Cancel
              </Button>
            </Link>
          </Form>
        </div>
      )}
    </div>
  );
}
