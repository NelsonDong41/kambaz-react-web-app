import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function QuizQuestions() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleNewQuestion = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      { text: "", type: "Multiple Choice", points: 0 },
    ]);
    setEditingIndex(questions.length); // Start editing the new question
  };

  const handleSave = () => {
    // Handle save logic (e.g., dispatching to redux or API)
    console.log("Saved quiz questions:", questions);
    setEditingIndex(null); // Close edit mode after saving
  };

  const handleCancel = () => {
    setEditingIndex(null); // Close edit mode without saving
  };

  const handleEditTypeChange = (index: number, type: string) => {
    setQuestions((prev) =>
      prev.map((q, i) => (i === index ? { ...q, type: type } : q))
    );
  };

  const handleTypeChange = (type: string, index: number) => {
    if (type === "Multiple Choice") {
      // Navigate to the Multiple Choice editor screen
      navigate(`/quiz/multiple-choice-editor/${index}`);
    } else {
      handleEditTypeChange(index, type);
    }
  };

  return (
    <div id="wd-questions-editor">
      <h4>Quiz Questions</h4>
      <Button variant="primary" onClick={handleNewQuestion} className="mb-3">
        New Question
      </Button>

      <ul className="list-group">
        {questions.length === 0 && <p>No questions added yet.</p>}
        {questions.map((q, index) => (
          <li key={index} className="list-group-item">
            {editingIndex === index ? (
              <>
                <Form.Control
                  type="text"
                  value={q.text}
                  onChange={(e) =>
                    setQuestions((prev) =>
                      prev.map((q, i) =>
                        i === index ? { ...q, text: e.target.value } : q
                      )
                    )
                  }
                  placeholder="Enter question"
                />

                <Form.Select
                  value={q.type}
                  onChange={(e) => handleTypeChange(e.target.value, index)}
                >
                  <option value="Multiple Choice">Multiple Choice</option>
                  <option value="True/False">True/False</option>
                  <option value="Fill in the Blank">Fill in the Blank</option>
                </Form.Select>

                <Form.Control
                  type="number"
                  value={q.points}
                  onChange={(e) =>
                    setQuestions((prev) =>
                      prev.map((q, i) =>
                        i === index ? { ...q, points: +e.target.value } : q
                      )
                    )
                  }
                  placeholder="Enter points"
                />

                <Button variant="success" onClick={handleSave}>
                  Save
                </Button>
                <Button variant="secondary" onClick={handleCancel}>
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <strong>{q.text || "Untitled Question"}</strong>
                <p>
                  Type: {q.type} | Points: {q.points}
                </p>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => setEditingIndex(index)}
                >
                  Edit
                </Button>
              </>
            )}
          </li>
        ))}
      </ul>

      <h5>Total Points: {questions.reduce((sum, q) => sum + q.points, 0)}</h5>
    </div>
  );
}
