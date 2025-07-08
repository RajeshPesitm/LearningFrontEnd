import { useState } from "react";

export default function AddStudentForm() {
  const [showMsg, setShowMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy: Show success, reset form
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 1500);
    // TODO: Wire to backend POST /student
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Student</h3>
      <input placeholder="USN" required />
      <input placeholder="Name" required />
      <input placeholder="Semester" required />
      <button type="submit">Add Student</button>
      {showMsg && <div style={{ color: "green" }}>Student added!</div>}
    </form>
  );
}